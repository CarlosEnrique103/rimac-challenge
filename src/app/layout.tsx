import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/sass/main.scss";

const brsonomaFont = localFont({
  src: [
    { path: "../../public/fonts/BRSonoma-Regular.otf", weight: "400" },
    { path: "../../public/fonts/BRSonoma-SemiBold.otf", weight: "600" },
    { path: "../../public/fonts/BRSonoma-Bold.otf", weight: "700" },
  ],
  variable: "--font-brsonoma",
});

const latoFont = localFont({
  src: [
    { path: "../../public/fonts/Lato-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Lato-Bold.ttf", weight: "700" },
    { path: "../../public/fonts/lato-Black.ttf", weight: "900" },
  ],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Rimac Challenge",
  description: "Frontend Technical Challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${brsonomaFont.variable} ${latoFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
