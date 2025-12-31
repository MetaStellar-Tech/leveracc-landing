"use client";

import React, { useEffect, useRef } from "react";

const MouseFollower: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        if (!cursor || !cursorDot) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let dotX = 0;
        let dotY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            // 平滑跟随
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            dotX += (mouseX - dotX) * 0.15;
            dotY += (mouseY - dotY) * 0.15;

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed w-8 h-8 border-2 border-blue-500/50 rounded-full pointer-events-none z-9999 mix-blend-difference transition-transform duration-300 ease-out"
                style={{ left: "-16px", top: "-16px" }}
            />
            <div
                ref={cursorDotRef}
                className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-9999 mix-blend-difference transition-transform duration-200 ease-out"
                style={{ left: "-4px", top: "-4px" }}
            />
        </>
    );
};

export default MouseFollower;
