import type { Metadata } from "next";
import { Inter, Montserrat, Poppins} from "next/font/google";
import "./globals.css";
import ProviderTheme from "@/components/provider/ThemeProvider";
import NavbarProvider from "@/components/provider/NavbarProvider";
import MusicPlayer from "@/components/ui/musicPlayer";

const inter = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mukti portofolio",
  description: "this is my website portofolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} h-screen bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 bg w-screen overflow-hidden`}>
        {/* <ProviderTheme> */}
        <NavbarProvider>
          <div className="relative flex  h-screen w-full">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>

            {/* Konten scrollable */}
            <div className="flex-1 overflow-y-auto  overflow-x-hidden p-3 md:pt-5 pt-20 md:p-5">{children}</div>
          </div>
          <MusicPlayer />
        </NavbarProvider>
        {/* </ProviderTheme> */}
      </body>
    </html>
  )
}
