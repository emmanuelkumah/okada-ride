const data = [
  {
    id: 1,
    img: "https://images.carandbike.com/bike-images/colors/yamaha/mt-15-v20/yamaha-mt-15-v20-racing-blue.webp?v=5",
    name: "Yamaha mt 15",
    price: 23,
    rating: 4.5,
    specification: {
      engineCapacity: "23.4 CC",
      fuelTank: "12.0 L",
      wheelType: "Alloy Wheels",
      mileage: "34 km/l",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "6 Speed",
    },
    brand: "Yamaha",
    pickupLocation: "Accra Central",
    dropoffLocation: "Accra Central",
    overview:
      "The Yamaha mt 15 has several contemporary feature additions including a round and off-set instrument console with the digital odometer readout in place along with a radiator that has liquid cooling technologies too. There is fuel injection along with the futuristic catalytic converter too.",
  },
  {
    id: 2,
    name: "Jubliant Y-012",
    price: 44,
    rating: 3.4,
    pickupLocation: "Lapaz",
    dropoffLocation: "Accra Central",
    img: "https://images.carandbike.com/bike-images/colors/hero/pleasure-plus-110/hero-pleasure-plus-110-jubilant-yellow.webp?v=1640325519",
    specification: {
      engineCapacity: "292.0 CC",
      fuelTank: "14.0 L",
      wheelType: "Alloy Wheels",
      mileage: "29 km/l",
      brakes: "Disc with floating caliper and ABS",
      gears: "6 Speed",
    },
    brand: "Harley Davidson",
    overview:
      "Our standard Africa Twin is a great choice for serious off-road enthusiasts, with either a six-speed manual transmission or our optional DCT. For long-distance adventure touring, check out our two Africa Twin Adventure Sports ES models",
  },
  {
    id: 3,
    name: "Jawa Forty-two ",
    price: 32,
    rating: 4.3,
    img: "https://images.carandbike.com/bike-images/colors/jawa/forty-two/jawa-forty-two-lumos-lime.webp?v=20",
    specification: {
      engineCapacity: "323.4 CC",
      fuelTank: "25.0 L",
      wheelType: "Alloy Wheels",
      mileage: "25 km/l",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "6 Speed",
    },
    brand: "Kawasaki",
    pickupLocation: "Tema",
    dropoffLocation: "Accra Central",
    overview:
      "The 2017 Jawa Forty two Evo 300 SS is the pure-bred of the Evo range, and comes with new crankcase derived directly from the 250/300cc engine (and no longer from the 125cc one, as in the past).",
  },
  {
    id: 4,
    name: "Bgauss YZF R1",
    price: 41,
    rating: 4.1,
    pickupLocation: "East Legon",
    dropoffLocation: "East Legon",
    img: "https://images.carandbike.com/bike-images/large/bgauss/d15/bgauss-d15.webp?v=1",
    specification: {
      engineCapacity: "67 CC",
      fuelTank: "34.4 L",
      wheelType: "Alumium Alloy",
      mileage: "78 km/l",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "4 Speed",
    },
    brand: "Ducati",
    overview:
      "BGauss unveiled its third electric scooter, BG D15 in two variants- D15i and D15 Pro, priced at Rs. 99,999 and Rs. 1.15 lakh (ex-showroom) respectively. While deliveries for the BGauss D15 electric scooter would commence from June, customers can pre-book the BG D15 electric scooter for a refundable amount of Rs. 499.",
  },
  {
    id: 5,
    name: "Panigale V4 SP2 ",
    brand: "Ducati",
    rating: 2.5,
    price: 39,
    pickupLocation: "Lapaz",
    dropoffLocation: "East Legon",
    img: "https://images.ctfassets.net/x7j9qwvpvr5s/1nCKIizDwNLjwFjSPoBBaD/6ed565659a7984c89f00ef4454a75e79/MY-22-Panigale-V4-SP2-Model-Blocks-630x390-v02.png",
    specification: {
      engineCapacity: "452.9 CC",
      fuelTank: "25.0 L",
      wheelType: "Alloy Wheels",
      mileage: "29.1 km/l",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "6 Speed",
    },
    overview:
      "The Panigale V4 SP2 is the top-of-the-range model for Ducati super sports bikes: a special, exciting numbered-version for track riding, even more intuitive and less strenuous for non-professional riders.",
  },
  {
    id: 6,
    name: "Diavel 1260",
    price: 41,
    rating: 4.9,
    pickupLocation: "Lapaz",
    dropoffLocation: "Tema",
    img: "https://images.ctfassets.net/x7j9qwvpvr5s/1RvUevmAcjNVCMTA98vJVO/eee98a808ce8027797b0337e1c351eeb/MY-22-Diavel-1260-S-BYG-01-Model-Blocks-630x390-v02.png",
    brand: "Ducati",
    overview:
      "The Diavel 1260 combines the performance of a maxi-naked with the ergonomics of a muscle cruiser. Its design reinterprets the Diavel style with a contemporary look and integrates perfectly the 162 HP Testastretta DVT 1262 engine, beating heart of this new Diavel 1260, now compliant with Euro 5 regulation standards (where applied).",
    specification: {
      engineCapacity: "234.2 CC",
      mileage: "34 km/l",
      wheelType: "Alloy Wheels",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "6 Speed",
      fuelTank: "34.4 L",
    },
  },
  {
    id: 7,
    name: "Super Sport 950",
    brand: "BMW",
    price: 37,
    rating: 4.5,
    pickupLocation: "Tema",
    dropoffLocation: "Lapaz",
    img: "https://images.ctfassets.net/x7j9qwvpvr5s/2CFTgGi3ShHXSmBVHr5wHR/820cf3e96041dfb9967fd9978a47f9b3/SuperSport-S-950-MY21-White-01-Book-testride_630x390_mod.png",
    overview:
      "The side view of the SuperSport 950 is marked by air vents reminiscent of the double extractor of the Panigale V4 models. The lower fairing now extends to the side silencer, hiding the mechanical components and visually recalling the track bikes.",
    specification: {
      engineCapacity: "892.0 CC",
      fuelTank: "25.0 L",
      wheelType: "Alloy Wheels",
      mileage: "32 km/l",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "6 Speed",
    },
  },
  {
    id: 8,
    name: "X Diavel Nera",
    brand: "Yamaha",
    price: 29,
    rating: 4.6,
    pickupLocation: "Tema",
    dropoffLocation: "Tema",
    img: "https://images.ctfassets.net/x7j9qwvpvr5s/6zHZhPjMUdm0W86FGUWeuP/b3d1c59dadec04599fb7751051432c8a/MY-22-XDVL-Nera-Model-Blocks-630x390.png",
    overview:
      "XDiavel Nera: made in Italy design and craftsmanship combine with technology and innovation in a motorcycle made by Ducati in partnership with Poltrona Frau's Interiors.",
    specification: {
      engineCapacity: "1294.0 CC",
      fuelTank: "19.0 L",
      wheelType: "Alloy Wheels",
      mileage: "21 km/l",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "6 Speed",
    },
  },
  {
    id: 9,
    name: "Smokey Dong-X",
    rating: 3.0,
    price: 29,
    img: "https://www.thesmokeydogs.com/wp-content/uploads/2020/07/Panigale-959-thesmokeydogs-1024x634.png",
    brand: "BMW",
    pickupLocation: "East Legon",
    dropoffLocation: "East Legon",
    overview:
      "Enjoy the breeze and the speed with Smokey Dong-x craftsmanship combine with technology and innovation in a motorcycle made by Ducati in partnership with Poltrona Frau's Interiors.",
    specification: {
      engineCapacity: "1443.0 CC",
      fuelTank: "22.0 L",
      wheelType: "Alloy Wheels",
      mileage: "21 km/l",
      brakes: "Dual Disc",
      gears: "6 Speed",
    },
  },
  {
    id: 10,
    name: "Pangale JK 14",
    img: "https://www.thesmokeydogs.com/wp-content/uploads/2019/11/Panigale-959-MY18-White-01-Model-Preview-1050x650.png",
    brand: "Harley Davidson",
    rating: 4.3,
    price: 53,
    pickupLocation: "Accra Central",
    dropoffLocation: "Tema",
    overview:
      "XDiavel Nera: made in Italy design and craftsmanship combine with technology and innovation in a motorcycle made by Ducati in partnership with Poltrona Frau's Interiors.",
    specification: {
      engineCapacity: "598.0 CC",
      fuelTank: "19.0 L",
      wheelType: "Alloy Wheels",
      mileage: "31 km/l",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "6 Speed",
    },
  },
  {
    id: 11,
    name: "Fat Boy 19",
    rating: 3.9,
    price: 39,
    img: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-fat-bob-114/2022-fat-bob-114-f57/360/2022-fat-bob-114-f57-motorcycle-01.jpg",
    brand: "Harley Davidson",
    pickupLocation: "East Legon",
    dropoffLocation: "Lapaz",
    overview:
      "Fat Boy 19 XDiavel Nera is made in Italy design and craftsmanship combine with technology and innovation in a motorcycle made by Ducati in partnership with Poltrona Frau's Interiors.",
    specification: {
      engineCapacity: "323.0 CC",
      fuelTank: "15.0 L",
      wheelType: "Alloy Wheels",
      mileage: "32 km/l",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "6 Speed",
    },
  },
  {
    id: 12,
    name: "TVS XL100",
    img: "https://images.carandbike.com/bike-images/colors/tvs/xl-100/tvs-xl-100-luser-gold.webp?v=13",
    brand: "Kawasaki",
    price: 31,
    rating: 3.3,
    pickupLocation: "Lapaz",
    dropoffLocation: "Tema",
    overview:
      " The XL 100 gets the 99.7 cc engine that churns out 4.3 BHP and 6.5 Nm of maximum power and torque respectively. There is good fuel economy of 67 kilometres per hour offered by the TVS XL 100",
    specification: {
      engineCapacity: "623 CC",
      fuelTank: "13 LL",
      wheelType: "Alloy Wheels",
      mileage: "21 km/l",
      brakes: "Dual Semi-floating Petals Discs",
      gears: "4 Speed",
    },
  },
];
export default data;
