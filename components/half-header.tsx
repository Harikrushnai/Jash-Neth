type HeaderProps = {
    tagline?: string
    title: string
    description: string
}

export default function HalfHeader({ tagline, title, description }: HeaderProps) {
    return (
        <header className="h-screen flex flex-col">
            <div className="h-1/5"></div>
            <div className="text-center bg-[#F9FAFB] h-3/5 flex flex-col justify-center">
                {tagline && <p className="font-medium text-dgpurple text-[16px]">{tagline}</p>}
                
                <h2 className="font-semibold text-[48px]">{title}</h2>
                <p className="text-[20px] text-[#667085] max-w-[768px] mx-auto mt-6">{description}</p>
            </div>
            <div className=""></div>
        </header>
    )
}