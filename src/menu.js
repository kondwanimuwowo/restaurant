import { content } from "./index.js";

function createMenuSection() {
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');

    const heading = document.createElement('h2');
    heading.textContent = "Our Menu";
    menuSection.appendChild(heading);

    const menuItems = [
        { name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella, and basil." },
        { name: "Spaghetti Carbonara", description: "Pasta with creamy sauce, bacon, and parmesan." },
        { name: "Tiramisu", description: "Layered Italian dessert with mascarpone and espresso." },
    ];

    const list = document.createElement("ul");

    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${item.name}</strong> ${item.description}`;
        list.appendChild(li);
    });

    menuSection.appendChild(list);

    return menuSection;
}

export default function loadMenuPage() {
    content.innerHTML = "";
    content.appendChild(createMenuSection());
}
