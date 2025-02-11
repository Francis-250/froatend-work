let desktopLinks = document.querySelector(".menu-link");
let mobileLinks = document.querySelector(".mobile-links");
let closeMenu = document.querySelector(".close");
let openMenu = document.querySelector(".open");
let mobileContainer = document.querySelector(".mobile-container");

let leftHero = document.querySelector(".left-hero");
let meal1 = document.querySelector(".meal-1");
let dishes1 = document.querySelector(".dishes-1");
let allMeal = document.querySelector(".all-meal");

let desktopMenu = "";
let mobileMenu = "";
let left = "";
let mea1 = "";
let dshes = "";
let allmea = "";

const menu = [
  { label: "Home", link: "index.html" },
  { label: "Menu", link: "menu.html" },
  { label: "Testimonial", link: "#testimonial" },
  { label: "about", link: "about.html" },
  { label: "Contact", link: "contact.html" },
];

const homeContent = [
  {
    title: `The Fastest Delivery In Your <span class="text-[#D32F21]">City</span>`,
    subTitle: "Fresh ingredients, Fast delivery, Affordable prices.",
  },
];
const dishes = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Tacos",
  "Salad",
  "Steak",
  "Sandwich",
  "Fried Rice",
  "Burrito",
];

const meals = [
  {
    image: "../asset/images/food_1.png",
    name: "Spicy Tuna Roll",
    price: "$10",
  },
  {
    image: "../asset/images/food_2.png",
    name: "Dragon Roll",
    price: "$14",
  },
  {
    image: "../asset/images/food_3.png",
    name: "Salmon Sashimi",
    price: "$24",
  },
  {
    image: "../asset/images/food_4.png",
    name: "Chocolate Cake",
    price: "$20",
  },
  {
    image: "../asset/images/food_5.png",
    name: "California Roll",
    price: "$8",
  },
  {
    image: "../asset/images/food_6.png",
    name: "Maki Sushi",
    price: "$12",
  },
  {
    image: "../asset/images/food_7.png",
    name: "Tempura Shrimp",
    price: "$18",
  },
  {
    image: "../asset/images/food_8.png",
    name: "Tuna Sashimi",
    price: "$22",
  },
  {
    image: "../asset/images/food_9.png",
    name: "Rainbow Roll",
    price: "$16",
  },
  {
    image: "../asset/images/food_10.png",
    name: "Vegetarian Roll",
    price: "$9",
  },
  {
    image: "../asset/images/food_11.png",
    name: "Avocado Roll",
    price: "$7",
  },
  {
    image: "../asset/images/food_12.png",
    name: "Unagi Don",
    price: "$15",
  },
  {
    image: "../asset/images/food_13.png",
    name: "Grilled Salmon",
    price: "$25",
  },
  {
    image: "../asset/images/food_14.png",
    name: "Chicken Teriyaki",
    price: "$18",
  },
  {
    image: "../asset/images/food_15.png",
    name: "Prawn Tempura",
    price: "$16",
  },
  {
    image: "../asset/images/food_16.png",
    name: "Seaweed Salad",
    price: "$5",
  },
  {
    image: "../asset/images/food_17.png",
    name: "Spicy Crab Roll",
    price: "$12",
  },
  {
    image: "../asset/images/food_18.png",
    name: "Egg Sushi",
    price: "$6",
  },
  {
    image: "../asset/images/food_19.png",
    name: "Shrimp Sushi",
    price: "$11",
  },
  {
    image: "../asset/images/food_20.png",
    name: "Fried Rice",
    price: "$9",
  },
];

const testimonial = [
  {
    image: `<img src="../asset/images/person-1.jfif" />`,
    name: "Jake",
    description: `"The food delivery service made my life so much easier! The app is super easy to use, and the delivery was always on time. "`,
  },
  {
    image: `<img src="../asset/images/person-2.jfif" />`,
    name: "Jeanne",
    description: `I’ve tried many food delivery services, but this one stands out. The variety of restaurants, prompt delivery, and seamless experience make it my go-to choice every time.`,
  },
  {
    image: `<img src="../asset/images/person-3.jfif" />`,
    name: "Eric",
    description: `Ordering from this food delivery website is a game-changer! From user-friendly navigation to fast, reliable delivery, I’ve had nothing but positive experiences.`,
  },
];

menu.map((menu) => {
  let content = `<a href=${menu.link}>${menu.label}</a>`;
  mobileMenu += content;
});
mobileLinks.innerHTML = mobileMenu;

menu.map((menu) => {
  let content = `<a href=${menu.link}>${menu.label}</a>`;
  desktopMenu += content;
});
desktopLinks.innerHTML = desktopMenu;

closeMenu.onclick = () => {
  mobileContainer.style.display = "none";
};
openMenu.onclick = () => {
  mobileContainer.style.display = "flex";
};

homeContent.map((hero) => {
  let leftContent = `<h1 class="md:text-5xl text-2xl font-bold mb-3">${hero.title}</h1>
          <p class="text-lg">${hero.subTitle}</p>`;
  left += leftContent;
});
leftHero.innerHTML = left;

meals.slice(0, 6).map((meal) => {
  let mealContent = `<div class="p-3 flex flex-col shadow-md rounded border-t">
            <img src=${meal.image} alt="" />
            <div class="flex flex-col gap-2">
              <header class="text-xl mb-2 text-[#D32F21]">${meal.name}</header>
              <p class="text-lg">Price : ${meal.price}</p>
            </div>
            <div class="flex justify-end">
              <div
                class="flex items-center justify-center border rounded-full cursor-pointer transition-all duration-500"
              >
                <box-icon name="plus" color="black"></box-icon>
              </div>
            </div>
          </div>`;
  mea1 += mealContent;
});
meal1.innerHTML = mea1;

dishes.map((dish) => {
  let dishs = `<div class="border flex items-center justify-center p-2 rounded  bg-[#000]/50 text-white">${dish}</div>
`;
  dshes += dishs;
});
dishes1.innerHTML = dshes;

meals.map((meal) => {
  let mealContet = `<div class="p-3 flex flex-col shadow-md rounded border-t">
            <img src=${meal.image} alt="" />
            <div class="flex flex-col gap-2">
              <header class="text-xl mb-2 text-[#D32F21]">${meal.name}</header>
              <p class="text-lg">Price : ${meal.price}</p>
            </div>
            <div class="flex justify-end">
              <div
                class="flex items-center justify-center border rounded-full cursor-pointer transition-all duration-500"
              >
                <box-icon name="plus" color="black"></box-icon>
              </div>
            </div>
          </div>`;
  allmea += mealContet;
});
allMeal.innerHTML = allmea;
