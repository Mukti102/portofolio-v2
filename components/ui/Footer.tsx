import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import TogleTheme from "./TogleTheme";
function Footer() {
  return (
    <footer className="w-full h-full relative dark:text-slate-300  text-slate-700 dark:bg-secondary sm:pt-16 py-5">
      <div className="absolute sm:top-32 sm:right-14  top-7 right-2">
        <TogleTheme />
      </div>
      <div className="sm:w-[90%] w-full  mx-auto dark:bg-secondary sm:pt-10 pt-5 border-t-[1.4px] sm:px-5 px-3 border-slate-400 flex justify-center flex-col items-center">
        <div>
          <h1 className="font-semibold sm:text-sm text-xs ">Reach me out</h1>
        </div>
        <div className="flex gap-4 dark:text-slate-300 text-slate-600 sm:my-3 my-2">
          <Link
            href={""}
            className="sm:text-2xl text-xl hover:dark:text-white hover:text-slate-700 cursor-pointer"
          >
            <MdEmail />
          </Link>
          <Link
            href={"https://github.com/Mukti102"}
            className="sm:text-2xl text-xl hover:dark:text-white hover:text-slate-700 cursor-pointer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/abdul-mukti-41b876264"
            className="sm:text-2xl text-xl hover:dark:text-white hover:text-slate-700 cursor-pointer"
          >
            <FaLinkedin />
          </Link>
        </div>
        <div className="mt-5 ">
          <h2 className="sm:text-sm text-xs font-[400] ">
            ©2024 Abdul Mukti created
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
