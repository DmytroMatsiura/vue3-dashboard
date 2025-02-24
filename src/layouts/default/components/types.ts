export interface NavItem {
  title: string
  icon?: string
  to?: string
  children?: NavItem[]
}

export interface SidebarSection {
  title: string
  items: NavItem[]
}
