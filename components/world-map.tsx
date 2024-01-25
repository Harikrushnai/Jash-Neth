import Image from "next/image"

export default function Map() {
    return (
        <div className="mx-auto">
            <Image 
                src="/images/vector-map.svg"
                alt="Map vector"
                width={1024}
                height={483}
            />

            <p className="hidden">This should be an interactive map</p>
        </div>
    )
}