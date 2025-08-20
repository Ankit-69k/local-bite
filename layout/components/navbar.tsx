"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Navbar() {
    const [solid, setSolid] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Get the welcome section element
            const welcomeSection =
                document.querySelector(".welcome-section") ||
                document.getElementById("welcome-section") ||
                document.querySelector('[data-section="welcome"]');

            if (welcomeSection) {
                const welcomeSectionBottom = welcomeSection.getBoundingClientRect().bottom;
                const navHeight = navRef.current?.offsetHeight || 0;

                // Set solid to true when we've scrolled past the welcome section
                setSolid(welcomeSectionBottom <= navHeight);
            } else {
                // Fallback: use scroll position if welcome section can't be found
                const scrollY = window.scrollY;
                setSolid(scrollY > 600); // Adjust this value based on your welcome section height
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Call once to set initial state
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={navRef}
            className={cn(
                `w-full fixed top-0 z-50 flex justify-between items-center text-[var(--color-primary)] text-lg py-5 px-10 transition-all duration-300`,
                solid
                    ? "bg-white shadow-md border-b border-[var(--color-secondary)]"
                    : "bg-transparent shadow-none border-b border-transparent"
            )}
        >
            <div className="flex w-[15%] justify-between space-x-10">
                <a href="">
                    <div className="hover:text-[var(--color-secondary)]">Home</div>
                </a>
                <a href="">
                    <div className="hover:text-[var(--color-secondary)]">Reviews</div>
                </a>
                <a href="#item-selection">
                    <div className="hover:text-[var(--color-secondary)]">Menu</div>
                </a>
            </div>
            {/* <div className="text-[var(--color-primary-dark)] text-3xl font-agbalumo font-bold">Mood</div> */}
            <div>
                <Image
                    src="/pakwanlogobrown.png"
                    alt="Pakwan Logo"
                    width={120}   // adjust size
                    height={45}   // adjust size
                    className="h-[50px] w-[190px] object-cover"
                    priority      // ensures logo loads fast
                />
            </div>
            <div>
                <Button
                    variant="outline"
                    className={cn(
                        "rounded-full bg-[var(--color-background)] font-normal border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] p-6 text-base cursor-pointer",
                        solid ? "bg-background" : "bg-transparent"
                    )}
                >
                    Online Registration
                </Button>
            </div>
        </div>
    );
}

export default Navbar;
