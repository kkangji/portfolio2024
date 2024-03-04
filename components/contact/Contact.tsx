import Image from "next/image";
import contactMe from "../../public/assets/contact.png";

export default function Contact() {
  return (
    <div className="bg-transparent w-96 h-96  absolute bottom-16 left-[10%] md:left-[25%] lg:w-40 lg:h-40 lg:top-[-140px] lg:left-[100px]">
      <Image src={contactMe} layout="fill" alt="contact" />
    </div>
  );
}
