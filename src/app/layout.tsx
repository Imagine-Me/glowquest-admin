import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import { ThemeProvider } from "@mui/material";

import { Imprima } from "next/font/google";
import theme from "../../theme/styles";

const getImprima = Imprima({
  weight: ["400"],
  variable: "--font-imprima",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={getImprima.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
