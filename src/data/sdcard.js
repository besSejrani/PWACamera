const products = [
  {
    id: 1,
    image: require("../images/camera/webp/sdCard1.webp"),
    alt: "sdCard one webp",
    lazyImage: require("../images/camera/webp/sdCard1xlow.webp"),
    lazyAlt: "sdCard one lazy webp",
    fallbackImage: require("../images/camera/webp/sdCard1.png"),
    fallbackAlt: "sdCard one fallback png",
    title: "sdCard One",
    description:
      "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    infos: [
      {
        icon: "wifi",
        description: "wifi"
      },
      {
        icon: "bluetooth",
        description: "bluetooth"
      },
      {
        icon: "airplay",
        description: "airplay"
      }
    ],
    price: "1",
    buyIcon: "shopping_cart",
    section: "sdCard"
  },
  {
    id: 2,
    image: require("../images/camera/webp/sdCard2.webp"),
    alt: "sdCard two webp",
    lazyImage: require("../images/camera/webp/sdCard2xlow.webp"),
    lazyAlt: "sdCard two lazy webp",
    fallbackImage: require("../images/camera/webp/sdCard2.png"),
    fallbackAlt: "sdCard two fallback png",
    title: "sdCard Two",
    description:
      "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    infos: [
      {
        icon: "wifi",
        description: "wifi"
      },
      {
        icon: "bluetooth",
        description: "bluetooth"
      },
      {
        icon: "airplay",
        description: "airplay"
      }
    ],
    price: "2",
    buyIcon: "shopping_cart",
    section: "sdCard"
  },
  {
    id: 3,
    image: require("../images/camera/webp/sdCard3.webp"),
    alt: "sdCard three webp",
    lazyImage: require("../images/camera/webp/sdCard3xlow.webp"),
    lazyAlt: "sdCard three lazy webp",
    fallbackImage: require("../images/camera/webp/sdCard3.png"),
    fallbackAlt: "sdCard three fallback png",
    title: "sdCard Three",
    description:
      "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    infos: [
      {
        icon: "wifi",
        description: "wifi"
      },
      {
        icon: "bluetooth",
        description: "bluetooth"
      },
      {
        icon: "airplay",
        description: "airplay"
      }
    ],
    price: "3",
    buyIcon: "shopping_cart",
    section: "sdCard"
  }
];

export default products;
