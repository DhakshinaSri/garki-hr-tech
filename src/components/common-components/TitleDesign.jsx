import React from "react";

function TitleDesign({ text, variant = "background", className = "" }) {
  if (variant === "background") {
    return (
      <div className={`relative w-full max-w-100 ${className}`}>
        <div className="bg-[#e4983a] h-14 w-full rounded-md" />
        <p className="absolute inset-0 flex items-left justify-left font-extrabold text-[clamp(24px,5vw,36px)] text-center text-white tracking-[0.02em] px-4">
          {text}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-100 ${className}`}>
      <p className="font-extrabold text-[clamp(24px,5vw,36px)] text-black text-left tracking-[0.02em]">
        {text}
      </p>
      <div className="mt-1 mb-4 flex items-left gap-1">
        <div className="bg-[#e4983a] h-2.5 rounded-[10px] flex-1" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#e4983a] shrink-0" />
      </div>
    </div>
  );
}

export default TitleDesign;
