import Image, { StaticImageData } from "next/image";
import TerminalLayout from "../layout/TerminalLayout";


type SmallTerminalType = { url: string, src: StaticImageData, alt: string, introduction: string }

export default function SmallTerminal({ url, src, alt, introduction }: SmallTerminalType) {
    const onPageMove = (url: string) => {
        window.open(`${url}`, '_blank');
    }

    return (

        <div className="flex justify-center items-center relative w-[500px]">
            <button onClick={() => onPageMove(url)}>
                <Image src={src} alt={alt} width={500} height={700} />
                <div className="text-sm absolute top-0 w-full flex items-center justify-center h-full opacity-0  duration-300 bg-opacity-30 bg-slate-700  hover:opacity-100 z-20 hover:transition-all">
                    <span className="drop-shadow-2xl font-semibold">
                        {introduction}
                    </span>
                </div>
            </button>
        </div>

    );
}

