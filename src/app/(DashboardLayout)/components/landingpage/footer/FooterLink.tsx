'use client';
import Link from "next/link";

type Props = {
  title: string
}

export default function FooterLink({ title }: Props) {
  return (
    <>
      <Link href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-s2pro-primary0 focus:text-s2pro-primary0 focus:bg-slate-200 focus:outline-none dark:focus:bg-trueGray-700"
        onClick={e => {
          e.preventDefault();
          let linkItem = document.getElementById(title);
          linkItem && linkItem.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("linkItem", "linkItem", "#" + title);
        }}
      >
        {title}
      </Link>
    </>
  );
};