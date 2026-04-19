import { Icon } from "@/components/Icon";

const footerLinks = ["Privacy", "Terms", "Shipping", "Support"];

const socialLinks = [
  { icon: "public", label: "Website" },
  { icon: "alternate_email", label: "Email" },
  { icon: "share", label: "Share" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 w-full pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="text-lg font-black text-white font-headline tracking-[0.2em] uppercase select-none">
          ZAZAPAS
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-12 text-zinc-600 font-label text-xs tracking-widest uppercase">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div className="flex gap-6">
          {socialLinks.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              aria-label={label}
            >
              <Icon name={icon} size={18} />
            </a>
          ))}
        </div>

        {/* Legal */}
        <p className="text-[10px] text-zinc-700 tracking-[0.3em] font-headline uppercase mt-8 text-center">
          &copy; 2025 Zazapas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
