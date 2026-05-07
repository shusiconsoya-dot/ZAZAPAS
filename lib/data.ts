export type BadgeColor = "primary" | "secondary" | "tertiary";
export type GlowColor = "primary" | "secondary" | "tertiary";

export interface SizeOption {
  label: string;
  inStock: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  series: string;
  image: string;
  imageAlt: string;
  rotateOnHover: "cw" | "ccw";
  glowColor: GlowColor;
  badge?: { text: string; color: BadgeColor };
  sizes: SizeOption[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  offsetX: string;
  offsetY: string;
}

const TEAM_IMG = "/team.png.png";

export const teamMembers: TeamMember[] = [
  {
    name: "Yasser",
    role: "Lead Synthesizer",
    image: TEAM_IMG,
    imageAlt: "Yasser - Lead Synthesizer",
    offsetX: "28%",
    offsetY: "-17%",
  },
  {
    name: "Maryem",
    role: "Motion Architect",
    image: TEAM_IMG,
    imageAlt: "Maryem - Motion Architect",
    offsetX: "-122%",
    offsetY: "-3%",
  },
  {
    name: "Mehdi",
    role: "System Dev",
    image: TEAM_IMG,
    imageAlt: "Mehdi - System Dev",
    offsetX: "-278%",
    offsetY: "-17%",
  },
  {
    name: "Jennifer",
    role: "Color Strategist",
    image: TEAM_IMG,
    imageAlt: "Jennifer - Color Strategist",
    offsetX: "-37%",
    offsetY: "-160%",
  },
  {
    name: "Sara",
    role: "Head of Labs",
    image: TEAM_IMG,
    imageAlt: "Sara - Head of Labs",
    offsetX: "-203%",
    offsetY: "-158%",
  },
];
