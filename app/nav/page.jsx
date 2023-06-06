import React from "react";
import Link from "next/link";
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/all">All</Link>
        </li>
        <li>
          <Link href="/hot">Hot</Link>
        </li>
      </ul>
    </nav>
  );
}
