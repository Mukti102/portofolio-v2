import blog from "@/public/assets/Projects/Screenshot 2024-05-26 211712.png";
import movie from "@/public/assets/Projects/web movie .png";
import store from "@/public/assets/Projects/web store.png";
import imsak from "@/public/imsak-app.png";
import web_school from "@/public/assets/Projects/slider/webschool/1.png";
import absensi from "@/public/assets/Projects/1.png";
import RFID from "@/public/assets/Projects/rfid.png";
import surat from "@/public/assets/Projects/surat.png";
import Siakad from "@/public/assets/Projects/Siakad.png";
import Bamala from "@/public/assets/Projects/Bamala.png";
import {
  blogSlider,
  eccomersSlider,
  imsakSlider,
  bamala,
  webschool,
  siakad,
  pengajuanSurat,
  movieSlider,
  absensiSLider,
  rfid,
} from "./slider-asset";

export type teachStack = {
  name: string;
  color: string;
};

export interface IProjects {
  id: number;
  image: any;
  title: string;
  description: string;
  techStack: teachStack[];
  slider: any[];
  github: string;
  link: string;
}

export const Projects: IProjects[] = [
  {
    id: 1,
    title: "Web Movie ",
    description: "Movie",
    github: "https://github.com/Mukti102/movie-web-app",
    // techStack: ["React Js", "Taiwindcss"],
    techStack: [
      {
        name: "React Js",
        color: "green",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: movie,
    slider: movieSlider,
    link: "https://movie-web-app-five.vercel.app/",
  },
  {
    id: 2,
    title: "Web Store Eccomerse",
    description: "Eccomerse",
    github: "https://github.com/Mukti102/web-store-app",
    // techStack: ["React Js", "Taiwindcss"],
    techStack: [
      {
        name: "React Js",
        color: "green",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: store,
    slider: eccomersSlider,
    link: "https://web-store-app-906e0.firebaseapp.com/",
  },
  {
    id: 3,
    title: "Awas Imsak",
    description: "ImsakApp",
    github: "https://github.com/Mukti102/Awas-Imsak",
    // techStack: ["Next Js", "Taiwindcss", "Typescript"],
    techStack: [
      {
        name: "Next Js",
        color: "slate",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
      {
        name: "Typescript",
        color: "yellow",
      },
    ],
    image: imsak,
    slider: imsakSlider,
    link: "https://awas-imsak.vercel.app/",
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "Mblogs",
    github: "#",
    // techStack: ["Laravel", "PHP", "Tailwindcss"],
    techStack: [
      {
        name: "Laravel",
        color: "red",
      },
      {
        name: "PHP",
        color: "purple",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: blog,
    slider: blogSlider,
    link: "#",
  },
  {
    id: 5,
    title: "APLIKASI ABSENSI PEMBELAJARAN SISWA",
    description: "AbsensiApp",
    github: "#",
    // techStack: ["Laravel", "PHP", "Tailwindcss"],
    techStack: [
      {
        name: "Laravel",
        color: "red",
      },
      {
        name: "PHP",
        color: "purple",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: absensi,
    slider: absensiSLider,
    link: "#",
  },
  {
    id: 6,
    title: "RFID NUSANTARA, SOLUTION SYSTEM RFID",
    description: "Rfid",
    github: "#",
    // techStack: ["Laravel", "PHP", "Tailwindcss"],
    techStack: [
      {
        name: "React JS",
        color: "red",
      },
      {
        name: "GSAP",
        color: "purple",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: RFID,
    slider: rfid,
    link: "https://rfidnusantara.com",
  },
  {
    id: 7,
    title: "WEB SEKOLAH DAN PPDB",
    description: "webschool",
    github: "#",
    techStack: [
      {
        name: "React JS",
        color: "teal",
      },
      {
        name: "Laravel",
        color: "red",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: web_school,
    slider: webschool,
    link: "https://web-school-eta.vercel.app/",
  },
  {
    id: 8,
    title: "WEB PENGAJUAN SURAT",
    description: "pengajuanSurat",
    github: "#",
    techStack: [
      {
        name: "Laravel",
        color: "red",
      },
      {
        name: "Blade",
        color: "red",
      },
      {
        name: "Bootsrap",
        color: "blue",
      },
    ],
    image: surat,
    slider: pengajuanSurat,
    link: "https://desa.notif.co.id/login",
  },
  {
    id: 9,
    title: "SIAKAD (Sistem Akademik)",
    description: "Siakad",
    github: "#",
    techStack: [
      {
        name: "Laravel",
        color: "red",
      },
      {
        name: "Blade",
        color: "red",
      },
      {
        name: "Bootsrap",
        color: "blue",
      },
    ],
    image: Siakad,
    slider: siakad,
    link: "https://siakad.genera.my.id/",
  },
  {
    id: 10,
    title: "Web Company Bamala",
    description: "bamala",
    github: "#",
    techStack: [
      {
        name: "Laravel",
        color: "red",
      },
      {
        name: "fillament",
        color: "yellow",
      },
      {
        name: "Taiwlindcss",
        color: "blue",
      },
      {
        name: "React Js",
        color: "blue",
      },
    ],
    image: Bamala,
    slider: bamala,
    link: "https://bamala.org/",
  },
];
