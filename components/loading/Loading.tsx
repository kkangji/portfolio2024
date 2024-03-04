import { MagnifyIcon } from "@/icons/icons";
import Layout from "../layout/Layout";


export default function Loading() {
    return (
        <Layout>
            <div className="flex flex-col justify-center items-center min-h-screen text-white ">
                <div className="animate-bounce w-20">
                    <MagnifyIcon />
                </div>
                <div className="font-press-start">Loading...</div>
            </div>
        </Layout>
    );
}

