import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";

export const username = "hmziqrs";

export const links = [
  {
    name: `@${username}`,
    url: `https://github.com/${username}`,
    Icon: SiGithub,
  },
  {
    name: `@${username}`,
    url: `https://x.com/${username}`,
    Icon: SiX,
  },
  {
    name: `/in/${username}`,
    url: `https://linkedin.com/in/${username}`,
    Icon: SiLinkedin,
  },
  {
    name: "Resume",
    url: `https://cv.hmziq.rs`,
    Icon: Globe,
  },
];
