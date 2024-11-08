import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";

export const username = "hmziqrs";

export const links = [
  {
    name: "github",
    url: `https://github.com/${username}`,
    Icon: SiGithub,
  },
  {
    name: "x (twitter)",
    url: `https://x.com/${username}`,
    Icon: SiX,
  },
  {
    name: "linkedin",
    url: `https://linkedin.com/in/${username}`,
    Icon: SiLinkedin,
  },
  {
    name: "Resume",
    url: `https://cv.hmziq.rs`,
    Icon: Globe,
  },
];
