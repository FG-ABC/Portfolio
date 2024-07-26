import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../public/icons/arrow-right-up-line.svg";

export const StartButton = ({ className }: { className: string }) => {
  return (
    <Link href={"/"}>
      <div
        className={`btn btn-primary flex w-max items-center justify-center ${className}`}
      >
        Download Resume{" "}
        <Image src={Arrow} width={25} height={5} alt="clickme" />
      </div>
    </Link>
  );
};
