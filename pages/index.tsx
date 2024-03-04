import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import Layout from "@/components/layout/Layout";
import TerminalLayout from "@/components/layout/TerminalLayout";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isClose, setIsClose] = useState(false);
  const onProject = () => {
    setIsClose(true);
    setTimeout(() => router.push("/about"), 1000);
  };
  return (
    <Layout>
      <main className="flex items-center justify-center min-h-screen">
        <TerminalLayout isClose={isClose}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Hello, I'm <span style="color: #74b9ff">Mook Thanida</span>, Software Developer!`
                )
                .pauseFor(1000)
                .start();
            }}
          />
          <button
            onClick={onProject}
            className="px-5 py-1 mt-10 text-sm font-semibold bg-red-200 rounded-lg md:text-lg text-slate-700"
          >
            My projects
          </button>
        </TerminalLayout>
      </main>
    </Layout>
  );
}
