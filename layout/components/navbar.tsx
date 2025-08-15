'use client'
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

function Navbar() {
    // const [scrolled, setScrolled] = useState(false)

    // useEffect(() => {
    //     const target = document.getElementById('item-selection') // ID of your ItemSelection bar
    //     if (!target) return

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             // If it's NOT intersecting with the viewport top, add bg
    //             setScrolled(!entry.isIntersecting)
    //         },
    //         { rootMargin: '-160px 0px 0px 0px', threshold: 0 }
    //     )

    //     observer.observe(target)
    //     return () => observer.disconnect()
    // }, [])

    return (
        // <div className={`w-full fixed top-0 z-50 flex justify-between items-center border-b border-[var(--color-secondary)] text-[var(--color-primary)] text-lg p-4 transition-colors duration-300 
        // ${scrolled
        //         ? 'bg-[var(--color-background)]' // solid background after scroll
        //         : 'bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-background)] bg-opacity-80'
        //     }`}>
        <div className="w-full fixed top-0 z-50 flex justify-between items-center border-b border-[var(--color-secondary)] text-[var(--color-primary)] text-lg py-5 px-10 bg-foreground shadow-md ">
            <div className='flex w-[15%] justify-between space-x-10'>
                <a href=""><div className='hover:text-[var(--color-secondary)]'>Home</div></a>
                <a href=""><div className='hover:text-[var(--color-secondary)]'>Reviews</div></a>
                <a href="#item-selection"><div className='hover:text-[var(--color-secondary)]'>Menu</div></a>
            </div>
            <div className='text-[var(--color-primary-dark)] text-3xl font-agbalumo font-bold'>Mood</div>
            <div>
                {/* <Button className='rounded-full bg-[var(--color-background)] text-[var(--color-primary)] border border-[var(--color-primary)] '>Online Registration</Button> */}
                <Button variant="outline" className='rounded-full bg-[var(--color-background)] font-normal border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] p-6 text-base cursor-pointer'>Online Registration</Button>
            </div>

        </div>
    )
}

export default Navbar