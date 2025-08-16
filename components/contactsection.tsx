import { Button } from "./ui/button"

export const ContactSection = () => {
    return (
        <div className="bg-[var(--color-foreground)] rounded-t-lg p-10">
            <div className="flex gap-8 items-stretch">
                <div id="left " className="w-1/2 space-y-7">
                    <div className="space-y-7">
                        <div className='text-4xl italic   font-semibold font-agbalumo text-[var(--color-primary-dark)]'>Reserve your spot!</div>
                        <div className='text-xl italic text-[var(--color-primary)]'>Walk-ins are always welcome, but we recommend <br />reserving a table in advance during peak hours.</div>
                    </div>
                    <div className="text-[var(--color-primary)]  space-y-5">
                        <div className="flex gap-4">
                            <div className="w-1/2 flex flex-col gap-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    placeholder="James Smith"
                                    className="bg-[var(--color-background)] w-full text-[var(--color-secondary-dark)] border border-[var(--color-secondary-dark)] rounded-lg p-3.5"
                                />
                            </div>

                            <div className="w-1/2 flex flex-col gap-3">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    placeholder="123 4567 890"
                                    className="bg-[var(--color-background)] w-full text-[var(--color-secondary-dark)] border border-[var(--color-secondary-dark)] rounded-lg p-3.5"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2 flex flex-col gap-3">
                                <label>Reservation Date</label>
                                <input
                                    type="date"
                                    placeholder="dd-mm-yyyy"
                                    className="bg-[var(--color-background)] w-full text-[var(--color-secondary-dark)] border border-[var(--color-secondary-dark)] rounded-lg p-3.5"
                                />
                            </div>

                            <div className="w-1/2 flex flex-col gap-3">
                                <label>Reservation Time</label>
                                <input
                                    type="time"
                                    placeholder="00:00"
                                    className="bg-[var(--color-background)] w-full text-[var(--color-secondary-dark)] border border-[var(--color-secondary-dark)] rounded-lg p-3.5"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2 flex flex-col gap-3">
                                <label>Number of Guests</label>
                                <input
                                    type="number"
                                    placeholder="Number"
                                    className="bg-[var(--color-background)] w-full text-[var(--color-secondary-dark)] border border-[var(--color-secondary-dark)] rounded-lg p-3.5"
                                />
                            </div>

                            <div className="w-1/2 flex flex-col gap-3">
                                <label>Location</label>
                                <input
                                    type="text"
                                    placeholder="Guwahati"
                                    className="bg-[var(--color-background)] w-full text-[var(--color-secondary-dark)] border border-[var(--color-secondary-dark)] rounded-lg p-3.5"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 justify-end">
                            <label>Notes</label>
                            <textarea
                                placeholder="Any special request?"
                                className="bg-[var(--color-background)] w-full text-[var(--color-secondary-dark)] border border-[var(--color-secondary-dark)] rounded-lg p-3.5 h-32 resize-none"
                            />
                        </div>
                        <Button variant="outline" className='h-[3.8rem] rounded-full text-base w-full border border-[var(--color-primary-dark)] outline bg-[var(--color-primary-dark)] text-[var(--color-background)] hover:bg-[var(--color-primary)] hover:text-white'>Reserve Now</Button>
                    </div>
                </div>
                <div id="right" className="w-1/2 flex h-[720px]">
                    <img src="https://images.pexels.com/photos/28962844/pexels-photo-28962844.jpeg"
                        alt="Cozy café interior"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>
            </div>
             <div className="text-xl flex justify-between w-full p-12 mb-16 mt-11 border-t border-[var(--color-secondary)]">
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className='text-[var(--color-primary)]'>London</div>
                    <div className='text-[var(--color-primary-dark)] font-semibold'>12 Brew Lane, Camden, London, NW1 8TG</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className='text-[var(--color-primary)]'>Birmingham</div>
                    <div className='text-[var(--color-primary-dark)] font-semibold'>45 Roast Street, Digbeth, Birmingham, B5 6QL</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className='text-[var(--color-primary)]'>Manchester</div>
                    <div className='text-[var(--color-primary-dark)] font-semibold'>52 Espresso Ave, Northern, Manchester, M4 3HR</div>
                </div>
            </div>
            



        </div>
    )
}