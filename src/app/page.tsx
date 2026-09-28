import Image from "next/image";
import {
  ArrowDown,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Coffee,
  Hand,
  Keyboard,
  Leaf,
  MessageSquareText,
  MousePointer2,
  PackageCheck,
  Sparkles,
  Volume1,
} from "lucide-react";

const painPoints = [
  {
    title: "오전 회의가 길어질 때",
    text: "말할 타이밍을 방해하지 않도록 한입 포션으로 가볍게 챙깁니다.",
    icon: Clock3,
  },
  {
    title: "점심을 놓치고 바로 콜이 있을 때",
    text: "책상 위에서 꺼내도 산만해 보이지 않는 단정한 스낵 경험을 지향합니다.",
    icon: MessageSquareText,
  },
  {
    title: "오후 4시 집중력이 떨어질 때",
    text: "키보드와 노트 주변에 부스러기 부담이 덜한 부드러운 식감을 우선합니다.",
    icon: Keyboard,
  },
  {
    title: "공유오피스에서 시선이 신경 쓰일 때",
    text: "향, 소리, 손 오염을 모두 낮추는 오피스 매너 기준으로 설계합니다.",
    icon: BriefcaseBusiness,
  },
];

const reducedPoints = [
  {
    label: "Sound",
    title: "씹는 소리 부담",
    text: "바삭한 칩보다 부드럽고 쫀득한 제형을 우선합니다.",
    icon: Volume1,
  },
  {
    label: "Crumb",
    title: "책상 위 부스러기",
    text: "키보드와 노트 위에 덜 남는 한입형 밀도를 목표로 합니다.",
    icon: Sparkles,
  },
  {
    label: "Smell",
    title: "작은 공간의 냄새",
    text: "강한 시즈닝보다 곡물, 견과, 코코아 계열의 은은한 맛을 제안합니다.",
    icon: Leaf,
  },
  {
    label: "Finger",
    title: "손에 묻는 불편",
    text: "가루와 기름이 덜 묻는 표면, 원핸드 섭취 포장을 함께 봅니다.",
    icon: Hand,
  },
];

const products = [
  {
    name: "Soft Protein Cube",
    tag: "회의 전후 단백질 큐브",
    text: "크고 질긴 바 대신, 작고 부드러운 큐브로 업무 사이 빈속을 조용히 채웁니다.",
    accent: "mint",
  },
  {
    name: "Chewy Rice Bite",
    tag: "오후 에너지 라이스 바이트",
    text: "쫀득한 라이스 베이스로 부스러기 부담을 낮추고 차분한 단맛을 더합니다.",
    accent: "coral",
  },
  {
    name: "Soft Nut Bite",
    tag: "견과의 고소함을 부드럽게",
    text: "통견과의 딱딱한 식감 대신, 견과와 곡물을 부드럽게 뭉친 한입입니다.",
    accent: "cocoa",
  },
];

const fitMetrics = [
  {
    title: "Quiet Level",
    text: "씹는 소리와 포장 소리 부담을 낮추는 기준",
    icon: Volume1,
  },
  {
    title: "Crumb Level",
    text: "책상, 키보드, 노트 주변 잔여물을 줄이는 기준",
    icon: Sparkles,
  },
  {
    title: "Smell Level",
    text: "회의실과 공유오피스에서 향 부담이 적은지 보는 기준",
    icon: Coffee,
  },
  {
    title: "Finger Clean",
    text: "손끝에 가루나 기름이 덜 남도록 살피는 기준",
    icon: Hand,
  },
];

const packs = [
  "Desk Drawer Starter Kit",
  "Meeting Survival Pack",
  "Camera-on Call Pack",
  "Shared Office Pack",
];

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          src="/images/shh-eat/package-mockup-premium-box.png"
          alt="노트북과 컵 옆에 놓인 Shh-eat 패키지와 한입 스낵"
          fill
          priority
          className="hero__image"
          sizes="100vw"
        />
        <div className="hero__scrim" />
        <header className="site-header" aria-label="Shh-eat navigation">
          <a href="#top" className="brand-mark" aria-label="Shh-eat home">
            Shh-eat
          </a>
          <nav className="nav-links">
            <a href="#why">필요한 순간</a>
            <a href="#lineup">라인업</a>
            <a href="#fit">오피스 핏</a>
          </nav>
        </header>
        <div id="top" className="hero__content">
          <p className="eyebrow">Office Etiquette Snack</p>
          <h1 id="hero-title">회의 중에도 조용히 먹는 한입</h1>
          <p className="hero__lead">
            씹는 소리, 부스러기, 손에 묻는 불편을 줄인 오피스 스낵.
            책상에서도, 화상회의 전에도, 공유오피스에서도 부담 없이 챙기세요.
          </p>
          <div className="hero__actions" aria-label="주요 이동">
            <a className="button button--primary" href="#lineup">
              라인업 보기
              <ArrowDown size={18} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#fit">
              오피스 핏 확인
              <CheckCircle2 size={18} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__signals" aria-label="핵심 가치">
            <span>Quiet Bite</span>
            <span>Low Crumb</span>
            <span>One-hand Portion</span>
          </div>
        </div>
      </section>

      <section id="why" className="section section--paper">
        <div className="section__inner">
          <div className="section-heading">
            <p className="eyebrow">When Shh-eat helps</p>
            <h2>먹고 싶지만 티 내고 싶지 않은 업무 순간에</h2>
            <p>
              Shh-eat은 간식을 참는 사람보다, 업무 흐름과 주변을 함께 배려하고
              싶은 사람을 위해 출발합니다.
            </p>
          </div>
          <div className="moment-grid">
            {painPoints.map((item) => (
              <article className="moment-card" key={item.title}>
                <item.icon size={24} strokeWidth={1.7} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="split-layout">
          <div className="image-panel">
            <Image
              src="/images/shh-eat/sns-launch-lifestyle.png"
              alt="화상회의 중인 책상 위에 놓인 Shh-eat 소포장과 한입 스낵"
              width={1254}
              height={1254}
              sizes="(min-width: 960px) 45vw, 100vw"
            />
          </div>
          <div className="split-copy">
            <p className="eyebrow">Designed around office manners</p>
            <h2>맛보다 먼저, 먹는 상황을 설계합니다</h2>
            <p>
              회의실, 책상, 공유오피스에서는 간식의 맛만큼 소리와 흔적이 중요합니다.
              Shh-eat은 조용함, 깔끔함, 적은 냄새, 한입 포션을 제품 기준으로 삼습니다.
            </p>
            <div className="reduced-list">
              {reducedPoints.map((item) => (
                <article className="reduced-item" key={item.title}>
                  <span className="metric-label">{item.label}</span>
                  <item.icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lineup" className="section section--paper">
        <div className="section__inner">
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">First lineup</p>
              <h2>부드럽고 작은 세 가지 한입</h2>
            </div>
            <p>
              제품명은 맛보다 먼저 어떤 업무 상황에 어울리는지 보여주도록 구성합니다.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className={`product-card product-card--${product.accent}`} key={product.name}>
                <div className="product-card__visual" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <p>{product.tag}</p>
                <h3>{product.name}</h3>
                <span className="product-card__line" />
                <p>{product.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fit" className="section section--ink">
        <div className="section__inner">
          <div className="section-heading section-heading--dark">
            <p className="eyebrow">Office fit check</p>
            <h2>오피스에 맞는 간식인지 먼저 확인합니다</h2>
            <p>
              아래 지표는 출시 전 자체 테스트로 더 세밀하게 다듬을 기준입니다.
              지금은 수치보다 “부담을 낮춘다”는 방향을 명확히 보여줍니다.
            </p>
          </div>
          <div className="fit-grid">
            {fitMetrics.map((metric) => (
              <article className="fit-card" key={metric.title}>
                <div className="fit-card__icon">
                  <metric.icon size={24} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3>{metric.title}</h3>
                <p>{metric.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--coral">
        <div className="pack-layout">
          <div>
            <p className="eyebrow">Pack ideas</p>
            <h2>책상 서랍부터 화상회의 전까지</h2>
            <p>
              초기 B2C 키트로 시작하되, 회의실 다과와 기업용 복지 상품으로 확장하기 쉬운
              상황별 팩을 함께 준비합니다.
            </p>
          </div>
          <div className="pack-list">
            {packs.map((pack) => (
              <article className="pack-item" key={pack}>
                <PackageCheck size={22} strokeWidth={1.7} aria-hidden="true" />
                <span>{pack}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <Image
          src="/images/shh-eat/package-mockup.png"
          alt="책상 위 Shh-eat 파우치와 스틱 포장, 한입 스낵"
          width={1672}
          height={941}
          sizes="(min-width: 960px) 42vw, 100vw"
        />
        <div>
          <p className="eyebrow">Quiet bite, cleaner workday</p>
          <h2>업무 흐름을 방해하지 않는 간식 경험</h2>
          <p>
            Shh-eat은 더 크게 튀는 스낵이 아니라, 책상 위에 조용히 놓여도 제 역할을
            또렷하게 말하는 오피스 스낵으로 시작합니다.
          </p>
          <a className="button button--primary" href="#lineup">
            첫 라인업 다시 보기
            <MousePointer2 size={18} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
