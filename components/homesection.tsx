import { Button } from "./ui/button"

export const HomeSection = () => {
    return (
        <div className=" flex flex-col items-center w-full py-48 gap-8 bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-background)]">
            <div className="w-[50%] text-[var(--color-primary-dark)] text-center font-[agbalumo] font-medium text-7xl">Moments Made Fresh</div>
            <div className="w-[30%] text-[var(--color-primary)] text-center text-xl">Discover freshly brewed coffee and handpicked flavors, crafted to brighten your day.</div>
            <a href="#item-selection">
                <Button variant="outline" className='rounded-full text-base border border-[var(--color-primary-dark)] outline bg-[var(--color-primary-dark)] text-[var(--color-background)] hover:bg-[var(--color-primary)] hover:text-white p-7'>Explore Menu</Button>
            </a>
            
        </div>
    )
}