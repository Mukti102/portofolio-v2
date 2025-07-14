"use client";
import { Carousel } from "flowbite-react";
import React from "react";
import { IProjects } from "@/types/types";
import Image from "next/image";
import { BASE_URL_IMAGE } from "@/lib/api";
function Caraosel({ slider }: { slider: any }) {
  return (
    <div className="w-full  h-52 md:h-[400px]">
      <Carousel>
        {slider?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <Image
                src={`${BASE_URL_IMAGE}${item?.image}`}
                alt="High resolution image"
                quality={100}
                className="w-full brightness-90 h-full object-cover"
                width={1920} // Set desired width
                height={1080} // Set desired height
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Caraosel;
