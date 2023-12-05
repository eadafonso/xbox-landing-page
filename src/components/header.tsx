import { link_menu } from "@/utils/menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#070707] flex items-center w-full  text-white justify-between py-[24px]">
      <Image src="/logo.svg" alt="XBox" width={144} height={44} />

      <div className="flex gap-[48px] uppercase font-bold">
        {link_menu.map((menu) => (
          <a key={menu.name} href={menu.link} className="hover:text-[#9bf00b]">
            {menu.name}
          </a>
        ))}
      </div>

      <button className="bg-[#9bf00b] text-[#0a0a0a] py-[18px] px-[30px] uppercase font-bold text-base hover:opacity-80">
        Order console
      </button>
    </header>
  );
}
