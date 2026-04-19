export type BadgeColor = "primary" | "secondary" | "tertiary";
export type GlowColor = "primary" | "secondary" | "tertiary";

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
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  offsetX: string;
  offsetY: string;
}

const TEAM_IMG =
  "https://lh3.googleusercontent.com/aida/ADBb0ugyTqY_ISY2ioMOAiwuS4v3vtUQH9kVADHyL6W5dlTIqE84jljXEjyt3SQD6h7sCRFhuHKaxNPmdYpupfulbnWtn5yuTFtx14pl-Al7vM0GKBQFIbrYe1PevqLMYNNFnK3CuEboy6OCXPRNcIVpfRvujczxKOz-TEaNRVFui127dZuz7hhYc0nBT05sabHTGoNbENy-joLhnggyVW2d_alPv3PbbvHaSMb3b5u5XDALbN7LHNK7OWEnfmk";

export const teamMembers: TeamMember[] = [
  {
    name: "Yasser",
    role: "Lead Synthesizer",
    image: TEAM_IMG,
    imageAlt: "Yasser - Lead Synthesizer",
    offsetX: "-20%",
    offsetY: "-28%",
  },
  {
    name: "Maryem",
    role: "Motion Architect",
    image: TEAM_IMG,
    imageAlt: "Maryem - Motion Architect",
    offsetX: "-90%",
    offsetY: "-28%",
  },
  {
    name: "Mehdi",
    role: "System Dev",
    image: TEAM_IMG,
    imageAlt: "Mehdi - System Dev",
    offsetX: "-165%",
    offsetY: "-28%",
  },
  {
    name: "Jennifer",
    role: "Color Strategist",
    image: TEAM_IMG,
    imageAlt: "Jennifer - Color Strategist",
    offsetX: "-40%",
    offsetY: "-110%",
  },
  {
    name: "Sara",
    role: "Head of Labs",
    image: TEAM_IMG,
    imageAlt: "Sara - Head of Labs",
    offsetX: "-140%",
    offsetY: "-110%",
  },
];
