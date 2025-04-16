import { content } from "./index.js";

function createContactSection() {
    const contactSection = document.createElement("section");
    contactSection.classList.add("contact-section");

    const heading = document.createElement("h2");
    heading.textContent = "Contact Us";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Got questions or feedback? We'd love to hear from you! Reach out using the form below or visit us in person.";

    const contactInfo = document.createElement("div");
    contactInfo.classList.add('contact-info');

    const address = document.createElement("p");
    address.innerHTML = "<strong>Address:</strong> 123 Flavor Street, Tasty Town, Yummyland";

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Phone:</strong> +123-456-7890";

    const email = document.createElement("p");
    email.innerHTML = "<strong>Email:</strong> hello@flavorfiesta.com";

    contactInfo.appendChild(address);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);

    contactSection.appendChild(heading);
    contactSection.appendChild(paragraph);
    contactSection.appendChild(contactInfo);

    return contactSection;
}

export default function loadContactPage() {
    content.innerHTML = "";
    content.appendChild(createContactSection());
}
