interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Trang chủ',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Cầm đồ'
  },
  {
    name: 'Cầm đồ',
    url: '/pawn/order',
    icon: 'icon-drop'
  },
  {
    title: true,
    name: 'Quản lý'
  },
  {
    name: 'Quản lý khách hàng',
    url: '/customer',
    icon: 'icon-puzzle',
  },
  {
    name: 'Quản lý nhân viên',
    url: '/staff',
    icon: 'icon-cursor',
  },
  {
    name: 'Quản lý tài sản',
    url: '/products',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Quản lý nguồn vốn',
    url: '/capital',
    icon: 'icon-star',
  },
  {
    name: 'Quản lý thu chi',
    url: '/revenue-expenditure',
    icon: 'icon-bell',
  },
  {
    title: true,
    name: 'Thống kê',
  },
  {
    name: 'Thống kê',
    url: '/pages',
    icon: 'icon-star',
  },
  {
    name: 'Báo cáo',
    url: '/pages',
    icon: 'icon-bell',
  },
  {
    title: true,
    name: 'Quản lý hệ thống',
  },
  {
    name: 'Quản lý tin nhắn',
    url: '/messenger',
    icon: 'icon-star',
  },
  {
    name: 'Quản lý hợp đồng',
    url: '/contract',
    icon: 'icon-star',
  },

];
