import FooterImage from '@/components/footerimage'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Images } from './footergallery'

function Footer() {
    return (
        <div className='bg-[var(--color-primary-dark)] p-10'>
            <div className='flex w-full px-4 pt-14 text-[var(--color-background)]'>
                <div className='w-[65%] space-y-3'>
                    <div className='text-3xl italic   font-semibold font-agbalumo'>Mood</div>
                    <div className='text-xl italic text-[var(--color-secondary)]'>We prioritize ethically sourced <br />beans and eco-friendly practices.</div>
                    <div className='flex gap-12 pt-3'>
                        <div>Coffee via DoorDash</div>
                        <div>See Our Reviews on Google</div>
                        <div>Follow Us on Instagram</div>
                    </div>
                </div>
                <div className='w-[35%] space-y-3'>
                    <div className='text-xl font-base'>Join Our Coffee Club</div>
                    <div className='text-lg text-[var(--color-secondary)]'>Get exlusive offers, early access to new <br /> brews, and behind-the-scenes stories!</div>
                    <div className='w-full flex flex-col gap-2 pt-2'>
                        <input
                            type="text"
                            placeholder="Email Address"
                            className='bg-[var(--color-background)] w-full block p-3.5 rounded-lg text-base text-[var(--color-secondary-dark)]'
                        />
                        <Button variant="outline" className='text-lg h-[3.8rem] rounded-full w-full border border-[var(--color-primary-dark)] outline bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'>Subscribe</Button>
                    </div>
                </div>
                {/* <FooterImage src="" /> */}
            </div>
            <div className='overflow-hidden w-full'>
                <div className='flex overflow-x-auto justify-evenly p-4 scrollbar-hidden mt-16'>
                    {Images.map((item) => <FooterImage src={item.src} alt={item.alt} key={item.src} />)}
                    {/* Duplicate the items to make looping seamless */}
                    {Images.map((item, index) => (
                        <FooterImage src={item.src} alt={item.alt} key={`duplicate-${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer