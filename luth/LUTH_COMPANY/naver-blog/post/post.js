/* 게시물 템플릿을 서식(HTML)째 클립보드에 복사한다.
 *
 * 스마트에디터 ONE은 HTML 입력 모드가 없어서, text/html 플레이버로 복사한 뒤
 * 붙여넣는 방식이 사실상 유일한 자동화 경로다. Clipboard API를 쓸 수 없는
 * 환경에서는 선택 영역 기반 execCommand로 물러난다.
 */
(function () {
  "use strict";

  function showFeedback(key, message, tone) {
    var el = document.querySelector('[data-feedback="' + key + '"]');
    if (!el) return;

    el.textContent = message;
    if (tone) {
      el.setAttribute("data-tone", tone);
    } else {
      el.removeAttribute("data-tone");
    }

    window.clearTimeout(el._timer);
    el._timer = window.setTimeout(function () {
      el.textContent = "";
      el.removeAttribute("data-tone");
    }, 4000);
  }

  /* Clipboard API가 막힌 경우: 노드를 선택해서 실행 명령으로 복사한다. */
  function copyBySelection(node) {
    var selection = window.getSelection();
    var range = document.createRange();

    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);

    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (error) {
      ok = false;
    }

    selection.removeAllRanges();
    return ok;
  }

  function copyRichText(node, key) {
    var html = node.outerHTML;
    var plain = node.innerText;

    if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
      var item = new window.ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([plain], { type: "text/plain" }),
      });

      navigator.clipboard
        .write([item])
        .then(function () {
          showFeedback(key, "복사했습니다. 글쓰기 화면에 붙여넣으세요.");
        })
        .catch(function () {
          if (copyBySelection(node)) {
            showFeedback(key, "복사했습니다. 글쓰기 화면에 붙여넣으세요.");
          } else {
            showFeedback(key, "복사에 실패했습니다. 본문을 직접 선택해 복사해 주세요.", "error");
          }
        });
      return;
    }

    if (copyBySelection(node)) {
      showFeedback(key, "복사했습니다. 글쓰기 화면에 붙여넣으세요.");
    } else {
      showFeedback(key, "복사에 실패했습니다. 본문을 직접 선택해 복사해 주세요.", "error");
    }
  }

  var buttons = document.querySelectorAll("[data-copy]");
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
      var key = button.getAttribute("data-copy");
      var node = document.getElementById(key);
      if (!node) {
        showFeedback(key, "템플릿을 찾지 못했습니다.", "error");
        return;
      }
      copyRichText(node, key);
    });
  });
})();
