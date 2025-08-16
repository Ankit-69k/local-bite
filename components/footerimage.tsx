export type FooterImageProps = {
    src: string;
    alt?: string;
}

const FooterImage = ({ src, alt = "image" }: FooterImageProps) => {
    return (
        <div className="flex-shrink-0 w-[22rem]">
            <img src={src}
                alt={alt}
                className="w-full h-80 rounded-lg object-cover"
                loading="lazy" />
        </div>
    )

};


export default FooterImage

// type FooterImageProps = {
//     a: string;
//     b?: string;
// }

// const FooterImage = ({a, b="alt"} : FooterImageProps) => {
//     return <div>{b} is alt for {a}</div>;
// };

// export default FooterImage