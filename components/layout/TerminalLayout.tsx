import Ball from "../ball/Ball";
import { ReactNode } from "react";
import { motion } from "framer-motion"
interface ITerminal {
    children: ReactNode,
    isClose?: boolean,
}

export default function TerminalLayout({ children, isClose = false }: ITerminal) {

    return (
        <>
            <motion.div initial={{ scaleX: isClose ? 1 : 0 }} animate={{ scaleX: isClose ? 0 : 1 }} transition={{
                type: "spring",
                restDelta: 0.5
            }} className={`bg-[#3B3B3B] shadow-black shadow-2xl z-10 w-[400px] md:w-[700px] h-[400px]`} >
                <div className='pl-2 space-x-1 bg-slate-50 z-40' >
                    <Ball color="red" />
                    <Ball color="yellow" />
                    <Ball color="green" />
                </div>
                <div className='flex flex-col justify-center items-center text-3xl  text-white h-full'>
                    {children}
                </div>
            </motion.div>
        </>);
}

