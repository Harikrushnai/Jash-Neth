import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  dark?: boolean;
};
export default function Logo({ dark }: LogoProps) {
  // figma-dimension: 131x50
  let img = (
    <Link href="/" className="md:flex-[1_0_auto]">
      <Image src="/images/logo-white.svg" alt="" width={111} height={40} />
    </Link>
  );

  if (dark) {
    img = (
      <Link href="/">
        <Image src="/images/logo-dark.png" alt="" width={111} height={40} />
      </Link>
    );
  }

  return img;
}
