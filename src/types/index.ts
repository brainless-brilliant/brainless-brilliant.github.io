export interface NavigationItem {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  color: string;
  action: () => void;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  photo: string;
}
