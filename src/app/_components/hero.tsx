import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col gap-[102px] mb-[80px]">
      <div>
        <Image
          src="/xboxx.png"
          alt="Xbox X"
          width="1560"
          height="1230"
          className="w-[1560px] h-[1230px] absolute right-0 z-10"
        />

        <div className="flex flex-col justify-center gap-[48px] min-h-[1010px] z-50 relative">
          <p className="text-[#9bf00b] font-bold uppercase text-[22px]">
            completely new
          </p>
          <h1 className="mt-[8px] text-white text-[172px] font-bold">
            Xbox Series X
          </h1>

          <p className="text-[#D4D4D4] text-[22px] w-[530px]">
            Experience 12 teraflops of graphics processing power and 4K
            resolution at up to 120 fps second with Xbox Series X.
          </p>
        </div>
      </div>

      <div>Vantagens</div>
    </div>
  );
}
