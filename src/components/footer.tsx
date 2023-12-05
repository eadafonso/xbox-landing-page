import { link_menu } from "@/utils/menu";
import Image from "next/image";

import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#070707] flex items-center w-full  text-white justify-between py-[120px]">
      <Image src="/logo.svg" alt="XBox" width={144} height={44} />

      <div className="flex gap-[48px] uppercase font-bold">
        {link_menu.map((menu) => (
          <a
            key={menu.name}
            href={menu.link}
            className="text-[#a0a0a0] hover:text-[#fff]"
          >
            {menu.name}
          </a>
        ))}
      </div>

      <div className="flex flex-row items-center justify-between pl-[44px] gap-4">
        <a href="">
          <FiInstagram size={40} color="#a0a0a0" />
        </a>
        <a href="">
          <FiTwitter size={40} color="#a0a0a0" />
        </a>
        <a href="">
          <FiYoutube size={40} color="#a0a0a0" />
        </a>
      </div>
    </footer>
  );
}
