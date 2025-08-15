import ItemCard from "./itemcard"
import { Items } from "./itemgallery"

export const ItemSection = () => {
    return (
        <div className="w-screen bg-[var(--color-background)] pt-32">
            <div id="Coffee Selection" className="p-10 scroll-mt-[9rem]">
                <div className="text-4xl text-[var(--color-primary-dark)] italic font-semibold font-agbalumo">Coffee Selection</div>
                <div className="rounded-lg grid grid-cols-4 gap-8 border-t-2 border-dashed border-[var(--color-secondary)] pt-8 mt-9">
                    {Items.map((item, index) => (
                        <ItemCard key={index} {...item} />
                    ))}

                </div>
            </div>
            <div id="Pastries & Bites" className="p-10 scroll-mt-[9rem]">
                <div className="text-4xl text-[var(--color-primary-dark)] italic font-semibold font-agbalumo">Pastries & Bites</div>
                <div className="rounded-lg grid grid-cols-4 gap-8 border-t-2 border-dashed border-[var(--color-secondary)] pt-8 mt-9">
                    {Items.map((item, index) => (
                        <ItemCard key={index} {...item} />
                    ))}

                </div>
            </div>
            <div id="Special Items" className="p-10 scroll-mt-[9rem]">
                <div className="text-4xl text-[var(--color-primary-dark)] italic font-semibold font-agbalumo">Special Items</div>
                <div className="rounded-lg grid grid-cols-4 gap-8 border-t-2 border-dashed border-[var(--color-secondary)] pt-8 mt-9">
                    {Items.map((item, index) => (
                        <ItemCard key={index} {...item} />
                    ))}
                </div>
            </div>
            
        </div>
    )
}