import { MenuItem } from "../app/services/menu.service";

export const AppMenuItems: Array<MenuItem> = [
  {
    text: "Cars",
    icon: "directions_car",
    route: "/cars",
    submenu: [
      {
        text: "Select",
        icon: "mouse",
        route: "/cars",
        submenu: [
          {
            text: "Ferrari",
            icon: "360",
            route: "/car-detail/ferrari",
            submenu: null
          },
          {
            text: "Bugatti",
            icon: "360",
            route: "/car-detail/bugatti",
            submenu: null
          },
          {
            text: "Lamburghini",
            icon: "360",
            route: "/car-detail/lamburghini",
            submenu: null
          },
          {
            text: "Maseratti",
            icon: "360",
            route: "/car-detail/maseratti",
            submenu: null
          }
        ]
      },
      {
        text: "Best one",
        icon: "directions_car",
        route: "/car-list/1",
        submenu: null
      },
      {
        text: "Top 3",
        icon: "directions_car",
        route: "/car-list/3",
        submenu: null
      },
      {
        text: "Top 5",
        icon: "directions_car",
        route: "/car-list/5",
        submenu: null
      }
    ]
  },
  {
    text: "Maintenance",
    icon: "settings_applications",
    route: null,
    submenu: [
      {
        text: "Car maint",
        icon: "local_car_wash",
        route: "/car-maint",
        submenu: null
      },
      {
        text: "Settings",
        icon: "settings",
        route: "/settings",
        submenu: null
      }
    ]
  },
  {
    text: "Home",
    icon: "home",
    route: "/home",
    submenu: null
  }
];
