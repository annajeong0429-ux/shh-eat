const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * public/ 폴더의 자산 경로 앞에 basePath를 붙인다.
 *
 * GitHub Pages처럼 하위 경로에 배포할 때 next.config의 assetPrefix는
 * _next 번들에만 적용되고 public/ 자산에는 붙지 않아 404가 난다.
 */
export function assetPath(path: string) {
  return `${basePath}${path}`;
}
