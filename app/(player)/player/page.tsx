"use client";
import Table from "@/components/ui/Table";
import Image from "next/image";
import React from "react";
import useZustand from "@/hooks/useZustand";

function page() {
  const { activeSongIndex } = useZustand();
  
  return (
    <div className="min-h-screen">

      <section className={`relative z-10 w-full ${activeSongIndex !== null ? "pb-20" : ""} h-full overflow-y-auto pb-28 text-white px-0 sm:px-3 pt-2`}>
        
        {/* Hero Section */}
        <div className="w-full mb-8">
          <div className="flex sm:flex-row items-center flex-col items-start sm:items-end sm:gap-8 gap-6">
            
            {/* Album Art */}
            <div className="relative group">
              <div className="sm:w-64 sm:h-64 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/25 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10">
                <Image
                  src="https://i.pinimg.com/564x/b4/6f/f3/b46ff36163ac1762a600e979ad97c3b4.jpg"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Playlist Cover"
                />
              </div>
              
              {/* Floating Play Button */}
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group-hover:opacity-100 opacity-0">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            {/* Playlist Info */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">
                  Playlist
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                My Top
                <br />
                <span className="bg-primary bg-clip-text text-transparent">
                  Favorites
                </span>
              </h1>
              
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                A curated collection of my most beloved tracks. From 
                <span className="text-primary font-semibold"> TWICE </span>
                to 
                <span className="text-primary font-semibold"> Avenged Sevenfold</span>
                , discover the soundtrack of my soul.
              </p>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-white font-semibold">Mukti</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">50 songs</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">3h 25m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:bg-green-400 transition-all duration-300">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          
          <button className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          
          <button className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>

        {/* Music Table */}
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
          <Table />
        </div>
      </section>
    </div>
  );
}

export default page;