import { logo } from "@/data/images";
import Image from "next/image";

export function Logo () {
  return <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
}