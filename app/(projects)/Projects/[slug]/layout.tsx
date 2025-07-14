import { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return <div className={inter.className}>{children}</div>;
}
