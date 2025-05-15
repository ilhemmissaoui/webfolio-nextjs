"use client";
import React from "react";

function Header() {
  return (
    <div>
      <video
        src="/assets/videos/Final Comp.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100vw", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
}

export default Header;
