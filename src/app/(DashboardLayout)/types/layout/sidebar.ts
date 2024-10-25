export interface NavItemProps {
  item: {
    icon: string;
    href?: string;
    disabled?: boolean;
    title?: string;
    subtitle?: string;
    chip?: string;
    chipColor?: string;
    variant?: string;
    external?: boolean;
    id: number;
  };
}

export interface ListItemType {
  component: any;
  href?: string;
  target?: any;
  to?: any;
}
