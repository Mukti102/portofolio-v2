"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        {/* Main Loading Animation */}
        <div className="relative mb-8">
          {/* Outer spinning ring */}
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 mx-auto"></div>

          {/* Inner pulsing dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>

          {/* Surrounding dots */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "3s", animationDirection: "reverse" }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-1 h-1 bg-blue-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-1 h-1 bg-blue-400 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"></div>
            <div className="w-1 h-1 bg-blue-400 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-200 animate-pulse">
            Loading
          </h2>

          {/* Animated dots */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        {/* Subtle message */}
        <p className="mt-4 text-sm text-slate-200 animate-pulse">
          Please wait while we prepare everything for you...
        </p>
      </div>

      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-20"></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-30"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-25"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
