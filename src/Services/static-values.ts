// ------Interfaces for the static values-------- 
interface SideMenus {
  title: string,
  subMenu: SubMenus[]
}

interface SubMenus {
  title: string,
  icon: string
}

export let listItems: SideMenus[] = [
  {
    title: 'MENU',
    subMenu: [
      {
        title: 'Overview',
        icon: 'fas fa-th-large'
      },
      {
        title: 'Transactions',
        icon: 'fas fa-list-ul'
      },
      {
        title: 'Analytics',
        icon: 'fas fa-chart-bar'
      },
      {
        title: 'Cards',
        icon: 'far fa-credit-card'
      },
    ]
  },
  {
    title: 'GENERAL',
    subMenu: [
      {
        title: 'Settings',
        icon: 'fas fa-cog'
      },
      {
        title: 'Help/Support',
        icon: 'far fa-comment-alt'
      },
      {
        title: 'Dark Mode',
        icon: 'far fa-moon'
      },
    ]
  }
];