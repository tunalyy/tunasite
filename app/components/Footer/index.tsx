import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto w-11/12 sm:w-9/12 justify-between flex text-[#858585] selection:text-[#ccc] pb-2 select-text">
      <span>Copyright © 2024-2025 tunaxz</span>
      <span>Made with love by <Link href={"https://discord.gg/QzbWSspE"} className="hover:underline hover:text-[#ccc] transition-all duration-200">@tunaxz</Link> </span>
    </footer>
  );
}
