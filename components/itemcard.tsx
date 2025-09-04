// import { Items } from "./itemgallery"

// export type ItemCardProps = {
//     src: string;
//     alt?: string;
//     title: string;
//     price: number;
//     description: string;
// }




// const ItemCard = ({ src, alt = "image", title, price, description }: ItemCardProps) => {
//     return (
//         <div className="rounded-3xl border border-[var(--color-secondary)] flex flex-col p-8">
//             <div className="font-semibold text-[var(--color-primary-dark)] text-lg">
//                 <img src={src} alt="" className="aspect-[3/3] object-contain rounded-t-3xl" />
//                 <div className="flex justify-between mt-2">
//                     <div>{title}</div>
//                     <div>₹{price}</div>
//                 </div>
//             </div>
//             <div className="border-t-2 border-dotted border-[var(--color-secondary)] flex justify-center items-center pt-4 mt-4">
//                 <div className=" max-w-40 text-center text-[var(--color-primary)] ">{description}</div>
//             </div>

//         </div>
//     )
// }

// export default ItemCard


'use client'
import { useState } from "react";



export type ItemCardProps = {
    src: string[]; // Now an array of image URLs (2 images expected)
    alt?: string;
    title: string;
    price: number;
    description: string;
}

const ItemCard = ({ src, alt = "image", title, price, description }: ItemCardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="rounded-3xl border border-[var(--color-secondary)] flex flex-col p-8">
            <div className="font-semibold text-[var(--color-primary-dark)] text-lg">
                {/* Image */}
                <img
                    src={src[currentIndex]}
                    alt={alt}
                    className="aspect-[5/6] object-contain scale-100 rounded-t-3xl transition-all duration-300"
                />

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-2">
                    {src.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                currentIndex === index
                                    ? "bg-[var(--color-primary)]"
                                    : "bg-[var(--color-secondary)]"
                            }`}
                        />
                    ))}
                </div>

                {/* Title + Price */}
                <div className="flex justify-between mt-2">
                    <div>{title}</div>
                    <div>₹{price}</div>
                </div>
            </div>

            {/* Description */}
            <div className="border-t-2 border-dotted border-[var(--color-secondary)] flex justify-center items-center pt-4 mt-4">
                <div className="max-w-40 text-center text-[var(--color-primary)] ">{description}</div>
            </div>
        </div>
    );
};

export default ItemCard;
