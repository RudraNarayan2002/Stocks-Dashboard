import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/dashboard">
        <h3 className="bg-black text-white w-fit">Get Started</h3>
      </Link>
    </>
  );
}
