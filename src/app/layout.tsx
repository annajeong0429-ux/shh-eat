import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Shh-eat | 회의 중에도 조용히 먹는 한입",
  description:
    "씹는 소리, 부스러기, 손에 묻는 불편을 줄인 오피스 스낵 Shh-eat 랜딩 페이지입니다.",
  openGraph: {
    title: "Shh-eat | 회의 중에도 조용히 먹는 한입",
    description:
      "책상에서도, 화상회의 전에도, 공유오피스에서도 부담을 낮춘 한입형 오피스 스낵.",
    images: ["/images/shh-eat/package-mockup-premium-box.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
