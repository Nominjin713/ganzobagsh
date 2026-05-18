import { ImageSourcePropType } from "react-native";

export type BabyItem = {
  iid: number;
  iname: string;
  icon: string;
  image?: ImageSourcePropType;
};

export type BabySubCategory = {
  sid: number;
  cid: number;
  sname: string;
  icon: string;
  image?: ImageSourcePropType;
  item: BabyItem[];
};

export type BabyCategory = {
  cid: number;
  cname: string;
  cicon: string;
  accent: string;
  subcat: BabySubCategory[];
};

export const babydata: BabyCategory[] = [
  {
    cid: 1,
    cname: "Амьтан",
    cicon: "paw",
    accent: "#2f80ed",
    subcat: [
      {
        sid: 1,
        cid: 1,
        sname: "Амьтан",
        icon: "🦁",
        image: require("../../assets/animals/lion.png"),
        item: [
          { iid: 1, iname: "Арслан", icon: "🦁" },
          { iid: 2, iname: "Бар", icon: "🐯" },
          { iid: 3, iname: "Баавгай", icon: "🐻" },
          { iid: 4, iname: "Үнэг", icon: "🦊" },
        ],
      },
      {
        sid: 2,
        cid: 1,
        sname: "Амьтны үр төл",
        icon: "🐣",
        image: require("../../assets/animals/baby.png"),
        item: [
          { iid: 5, iname: "Унага", icon: "🐴" },
          { iid: 6, iname: "Тугал", icon: "🐮" },
          { iid: 7, iname: "Хурга", icon: "🐑" },
          { iid: 8, iname: "Ишиг", icon: "🐐" },
        ],
      },
      {
        sid: 3,
        cid: 1,
        sname: "Шувуу",
        icon: "🦅",
        image: require("../../assets/animals/bird.png"),
        item: [
          { iid: 9, iname: "Бүргэд", icon: "🦅" },
          { iid: 10, iname: "Тагтаа", icon: "🕊️" },
          { iid: 11, iname: "Тахиа", icon: "🐔" },
          { iid: 12, iname: "Нугас", icon: "🦆" },
        ],
      },
      {
        sid: 4,
        cid: 1,
        sname: "Далайн амьтад",
        icon: "🐟",
        image: require("../../assets/animals/fish.png"),
        item: [
          { iid: 13, iname: "Загас", icon: "🐟" },
          { iid: 14, iname: "Далайн морь", icon: "🦭" },
          { iid: 15, iname: "Наймаалж", icon: "🐙" },
          { iid: 16, iname: "Халим", icon: "🐋" },
        ],
      },
      {
        sid: 5,
        cid: 1,
        sname: "Шавж",
        icon: "🐜",
        image: require("../../assets/animals/insect.png"),
        item: [
          { iid: 17, iname: "Шоргоолж", icon: "🐜" },
          { iid: 18, iname: "Зөгий", icon: "🐝" },
          { iid: 19, iname: "Эрвээхэй", icon: "🦋" },
          { iid: 20, iname: "Цох", icon: "🐞" },
        ],
      },
      {
        sid: 6,
        cid: 1,
        sname: "Үлэг гүрвэл",
        icon: "🦖",
        image: require("../../assets/animals/dino.png"),
        item: [
          { iid: 21, iname: "Тираннозавр", icon: "🦖" },
          { iid: 22, iname: "Бронтозавр", icon: "🦕" },
          { iid: 23, iname: "Трицератопс", icon: "🦖" },
          { iid: 24, iname: "Птерозавр", icon: "🦕" },
        ],
      },
    ],
  },
  {
    cid: 2,
    cname: "Аяга хэрэгсэл",
    cicon: "coffee",
    accent: "#45aaf2",
    subcat: [
      {
        sid: 7,
        cid: 2,
        sname: "Гал тогоо",
        icon: "☕",
        item: [
          { iid: 25, iname: "Аяга", icon: "☕" },
          { iid: 26, iname: "Таваг", icon: "🍽️" },
          { iid: 27, iname: "Халбага", icon: "🥄" },
          { iid: 28, iname: "Сав", icon: "🥣" },
        ],
      },
    ],
  },
  {
    cid: 3,
    cname: "Хүн",
    cicon: "child",
    accent: "#7b61ff",
    subcat: [
      {
        sid: 8,
        cid: 3,
        sname: "Биеийн хэсэг",
        icon: "🙋",
        item: [
          { iid: 29, iname: "Гар", icon: "✋" },
          { iid: 30, iname: "Хөл", icon: "🦶" },
          { iid: 31, iname: "Нүд", icon: "👁️" },
          { iid: 32, iname: "Чих", icon: "👂" },
        ],
      },
    ],
  },
  {
    cid: 4,
    cname: "Гэр",
    cicon: "home",
    accent: "#5f8d4e",
    subcat: [
      {
        sid: 9,
        cid: 4,
        sname: "Гэр ахуй",
        icon: "🏠",
        item: [
          { iid: 33, iname: "Ор", icon: "🛏️" },
          { iid: 34, iname: "Сандал", icon: "🪑" },
          { iid: 35, iname: "Хаалга", icon: "🚪" },
          { iid: 36, iname: "Цонх", icon: "🪟" },
        ],
      },
    ],
  },
  {
    cid: 5,
    cname: "Тээвэр",
    cicon: "car",
    accent: "#2d98da",
    subcat: [
      {
        sid: 10,
        cid: 5,
        sname: "Тээврийн хэрэгсэл",
        icon: "🚙",
        item: [
          { iid: 37, iname: "Машин", icon: "🚗" },
          { iid: 38, iname: "Автобус", icon: "🚌" },
          { iid: 39, iname: "Галт тэрэг", icon: "🚆" },
          { iid: 40, iname: "Онгоц", icon: "✈️" },
        ],
      },
    ],
  },
];
