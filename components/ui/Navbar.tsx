import { useState } from "react";
import {
  Home,
  User,
  FolderOpen,
  BookOpen,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSpotify } from "react-icons/fa6";
import Image from "next/image";
import profile from "@/public/assets/profile.jpeg";
import GlassSurface from "./Glass/GlassSurface";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  const menuItems = [
    { href: "/", name: "Home", icon: <Home size={20} /> },
    { href: "/About", name: "About", icon: <User size={20} /> },
    { href: "/Projects", name: "Project", icon: <FolderOpen size={20} /> },
    { href: "/Skills", name: "Certificates", icon: <BookOpen size={20} /> },
    { href: "/Contact", name: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <div
      className={` h-screen transition-colors duration-300 z-[1000000000000000]`}
    >
      {/* Mobile Menu Button */}
      <button className="lg:hidden" onClick={handleToggle}>
        <div
          className=" fixed top-4 left-4 z-50 p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed left-0 top-0 h-full w-72 z-[1000000000000] transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:z-auto
        bg-gradient-to-br from-blue-500 via-cyan-500 to-cyan-600
        shadow-2xl
      `}
      >
        <div className="relative h-full overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Header */}
            <div className="p-8 text-center">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">Welcome</h1>
                <div className="flex justify-between items-center mb-4">
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Hire Me!
                  </button>
                  <Link
                    href="/player"
                    onClick={() => setIsOpen(false)} // ✅ tutup sidebar
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 text-xl transition-all duration-300"
                  >
                    <FaSpotify />
                  </Link>
                </div>
              </div>

              {/* Profile */}
              <div className="mb-0">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center overflow-hidden">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                    {!profile ? (
                      <Image
                        src={profile}
                        className="w-full rounded-full h-full object-cover"
                        alt="profile"
                        height={100}
                        width={100}
                      />
                    ) : (
                      <User size={32} className="text-gray-600" />
                    )}
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
                  Abdul Mukti
                  <CheckCircle size={20} className="text-blue-300" />
                </h2>
                <p className="text-white/80 text-sm">@jinjja_code_</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6">
              <ul className="space-y-2">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)} // ✅ tutup sidebar
                        className={`
                        flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                        ${
                          isActive
                            ? "bg-white/20 backdrop-blur-sm text-white shadow-lg"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }
                      `}
                      >
                        <span
                          className={`transition-transform duration-300 ${
                            isActive ? "scale-110" : "group-hover:scale-110"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            {/* <div className="p-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">vinnbayo@gmail</p>
                    <p className="text-white/70 text-xs">Gmail</p>
                  </div>
                  <ExternalLink size={16} className="text-white/70" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
