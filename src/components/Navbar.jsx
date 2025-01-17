import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-20 mt-5 text-2xl font-bold">
      <Link href={"/"}>Home</Link>
      <Link href={"#"}>Gallery</Link>
      <Link href={"#"}>About</Link>
    </div>
  );
}
