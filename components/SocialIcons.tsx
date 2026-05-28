import { Instagram, Facebook, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/site.config";

const items = [
  { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
  { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
  { href: siteConfig.social.whatsapp, label: "WhatsApp", Icon: MessageCircle },
  { href: siteConfig.social.phone, label: "Phone", Icon: Phone },
];

export function SocialIcons() {
  return (
    <ul className="flex items-center gap-2">
      {items.map(({ href, label, Icon }) => {
        const isPhone = href.startsWith("tel:");
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={isPhone ? undefined : "_blank"}
              rel={isPhone ? undefined : "noopener noreferrer"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cardBorder bg-card text-white/90 transition-colors duration-200 hover:border-accent/60 hover:text-white"
            >
              <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
