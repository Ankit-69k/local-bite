import { Items } from "./itemgallery"

export type ItemCardProps = {
    src: string;
    alt?: string;
    title: string;
    price: number;
    description: string;
}




const ItemCard = ({ src, alt = "image", title, price, description }: ItemCardProps) => {
    return (
        <div className="rounded-3xl border border-[var(--color-secondary)] flex flex-col p-8 ">
            <div className="font-semibold text-[var(--color-primary-dark)] text-lg">
                <img src={src} alt="" className="aspect-[6/3] object-cover rounded-t-3xl" />
                <div className="flex justify-between mt-2">
                    <div>{title}</div>
                    <div>₹{price}</div>
                </div>
            </div>
            <div className="border-t-2 border-dotted border-[var(--color-secondary)] flex justify-center items-center pt-4 mt-4">
                <div className=" max-w-40 text-center text-[var(--color-primary)] ">{description}</div>
            </div>

        </div>
    )
}

export default ItemCard