import {
  LucideIcon,
} from "lucide-react";
import { Subjects } from "@/configs/acl";

export interface NavigationItem {
  name: string;
  href?: string;
  icon: LucideIcon;
  children?: { name: string; href: string }[];
  subject: Subjects;
}

export const navigation: NavigationItem[] = [
  // Add your navigation items here
];
