"use client";
import Image from "next/image";
import { playlists } from "@/data/songs";
import useZustand from "@/hooks/useZustand";

function Table() {
  const { setActiveSongIndex, songs, activeSongIndex } = useZustand();
  const songIndex = activeSongIndex !== null ? activeSongIndex : 0;
  
  return (
    <div className="overflow-hidden">
      {/* Table Header */}
      <div className=" px-4 md:px-6 py-4 border-b border-white/10">
        <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-gray-400 uppercase tracking-wider">
          <div className="col-span-1 hidden sm:block text-center">#</div>
          <div className="col-span-6 sm:col-span-5">Title</div>
          <div className="col-span-3 hidden sm:block text-center">Album</div>
          <div className="col-span-2 sm:col-span-2 text-right">
            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="col-span-3 sm:col-span-1"></div>
        </div>
      </div>
      
      {/* Table Body */}
      <div className="max-h-96 overflow-y-auto custom-scrollbar">
        {playlists.map((item, idx) => {
          const isActive = item.title === songs[songIndex]?.title;
          return (
            <div
              key={idx}
              onClick={() => setActiveSongIndex(idx)}
              className={`group  px-4 md:px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                isActive ? 'bg-white/20' : ''
              }`}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                
                {/* Track Number / Play Button */}
                <div className="col-span-1 hidden sm:block text-center">
                  <span className={`text-sm font-medium group-hover:hidden ${
                    isActive ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    {isActive ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <div className="flex gap-1">
                            <div className="w-1 h-4 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="w-1 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-1 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      idx + 1
                    )}
                  </span>
                  <div className="hidden group-hover:block">
                    <svg className="w-4 h-4 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Song Info */}
                <div className="col-span-6 sm:col-span-5 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="flex gap-1">
                          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
                          <div className="w-1 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className={`font-semibold text-sm sm:text-base truncate ${
                      isActive ? 'text-green-400' : 'text-white'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">
                      {item.artis}
                    </p>
                  </div>
                </div>

                {/* Album */}
                <div className="col-span-3 hidden sm:block text-center">
                  <span className="text-gray-400 text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                    {item.artis}
                  </span>
                </div>

                {/* Duration */}
                <div className="col-span-2 sm:col-span-2 text-right">
                  <span className={`text-sm ${
                    isActive ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    {item.duration}
                  </span>
                </div>

                {/* Actions */}
                <div className="col-span-3 sm:col-span-1 flex items-center justify-end gap-2">
                  <button className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  
                  <button className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Table;