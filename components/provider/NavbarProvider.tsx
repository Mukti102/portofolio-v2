"use client";
import NavbarMobile from "../ui/MobileNavbar";
import Navbar from "../ui/Navbar";
function NavbarProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex z-[10000]">
      {/* <NavbarMobile /> */}
      <Navbar />
      {children}
    </div>
  );
}

export default NavbarProvider;
