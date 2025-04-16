import { content } from "./index.js";

function createAboutSection() {
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-section');

    const heading = document.createElement('h2');
    heading.textContent = "About Us";

    const paragraph = document.createElement('p');
    paragraph.textContent = "At FlavorFiesta, we believe food is more than a meal—it's an experience. Our chefs combine tradition with creativity to bring you dishes that warm the soul and excite the palate.";

    aboutSection.appendChild(heading);
    aboutSection.appendChild(paragraph);

    return aboutSection;
}

export default function loadAboutPage() {
    content.innerHTML = '';
    content.appendChild(createAboutSection());
}
