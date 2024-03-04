import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import Loading from "@/components/loading/Loading";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import LandingPart from "@/components/landing/Landing";
import Project from "@/components/project/Project";
import Overlay from "@/components/overlay/Overlay";
import ProjectTitle from "@/components/projectTitle/ProjectTitle";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  const onNavigate = (url: string) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navigation />
          <LandingPart />
          <Overlay color="blue" />
          <ProjectTitle />
          <Project />
          <Footer onNavigate={onNavigate} />
        </>
      )}
    </Layout>
  );
}
