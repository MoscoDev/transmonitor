interface SideBarItem {
  title: string; 
  navItems: NavItem[] 
}

interface NavItem {
  img: string;
  name: string;
  url: string;
  isActive: boolean
}

declare global {
  interface Window {
    SideBarItem: SideBarItem;
  }
}
