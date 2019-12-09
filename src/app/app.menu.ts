import { MenuItem } from "../app/services/menu.service";

export const AppMenuItems: Array<MenuItem> = [
  {
    text: "Cars",
    icon: "../assets/svg/car.png",
    route: "/cars",
    submenu: null
  },
  {
    text: "Maintenance",
    icon: "../assets/svg/setting.png",
    route: "/settings",
    submenu: null
  },
  {
    text: "Home",
    icon: "../assets/svg/home.png",
    route: "/home",
    submenu: null
  }
];
