import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.6fr_0.6fr] lg:px-8">
        <div>
          <Image src="/images/logo-symbol.png" alt="Mellow symbol" width={79} height={50} />
          <div className="mt-6 space-y-2 text-[#a3a3a3]">
            <p>© 2026. Mellow</p>
            <p>HTML Template by Tansh</p>
          </div>
        </div>
        <div>
          <h6 className="mb-4 text-sm uppercase tracking-[0.35em] text-white">Navigation</h6>
          <ul className="space-y-3 text-[#a3a3a3]">
            <li><Link href="#services" className="transition hover:text-white">Services</Link></li>
            <li><Link href="#works" className="transition hover:text-white">Works</Link></li>
            <li><Link href="#about" className="transition hover:text-white">About me</Link></li>
            <li><Link href="#blog" className="transition hover:text-white">Articles</Link></li>
            <li><Link href="#contact" className="transition hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="mb-4 text-sm uppercase tracking-[0.35em] text-white">Connect</h6>
          <div className="flex flex-col gap-3 text-[#a3a3a3]">
            <Link href="#" className="transition hover:text-white">Twitter / X</Link>
            <Link href="#" className="transition hover:text-white">WhatsApp</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
