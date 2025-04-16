import ambienceImg from "./images/ambience.jpg";
import flavorImg from "./images/flavor.jpg";
import { content } from "./index.js";

// Creating the About section
function createAboutSection() {
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("about-image");

    const imgOne = document.createElement("img");
    imgOne.src = ambienceImg;
    imgOne.alt = "Inside Spice Symphony restaurant";

    imgDiv.appendChild(imgOne);

    const aboutText= document.createElement("div");
    aboutText.classList.add("about-text");

    const aboutHeading = document.createElement("h2");
    aboutHeading.textContent = "Where Flavor Meets Rhythm";

    aboutText.appendChild(aboutHeading);

    const paragraphs = [
        "Nestled in the heart of the city, Spice Symphony isn't just a restaurant — it’s a multisensory journey through the world’s most vibrant cuisines. Our carefully curated menu brings together bold spices from South Asia, the Middle East, and North Africa, blended into mouthwatering dishes that celebrate tradition and creativity.",
        "At the heart of our restaurant is live music — soul jazz, tabla rhythms, soft acoustic blends — playing every evening to set the mood. Whether you're out for an intimate dinner or a casual group night, the harmony of sound and taste brings the experience alive.",
        "Our story began with a dream: to create a space where culture, music, and cuisine merge. The founders, musicians-turned-chefs, envisioned more than meals — they wanted storytelling on every plate. And so, Spice Symphony was born."
    ];

    paragraphs.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        aboutText.appendChild(p);
    });

    aboutSection.appendChild(imgDiv);
    aboutSection.appendChild(aboutText);

    return aboutSection;
}

// Creating the Features section
function createFeaturesSection() {
    const features = document.createElement("section");
    features.classList.add("features");

    const featuresHeading = document.createElement("h2");
    featuresHeading.textContent = "Why Spice Symphony?";

    const featureList = document.createElement("div");
    featureList.classList.add("feature-list");

    // Feature Card One
    const featureCardOne = document.createElement("div");
    featureCardOne.classList.add("feature-card");

    featureCardOne.insertAdjacentHTML("beforeend", `
        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#a84444">
            <path d="M390-120v-130H80v-60h310q24.75 0 42.38 17.62Q450-274.75 450-250v130h-60Zm120 0v-130q0-24.75 17.63-42.38Q545.25-310 570-310h310v60H570v130h-60ZM230-370q-45.83 0-77.92-32.08Q120-434.17 120-480v-180h720v180q0 45.83-32.08 77.92Q775.83-370 730-370H230Zm0-60h500q21.25 0 35.63-14.38Q780-458.75 780-480v-120H180v120q0 21.25 14.38 35.62Q208.75-430 230-430ZM120-700v-60h250v-50q0-12.75 8.63-21.38Q387.25-840 400-840h160q12.75 0 21.38 8.62Q590-822.75 590-810v50h250v60H120Zm60 270v-170 170Z"/>
        </svg>
    `);
    
    const featureCardOneHeading = document.createElement("h3");
    featureCardOneHeading.textContent = "Bold, Global Flavors";
    
    const featureCardOneText = document.createElement("p");
    featureCardOneText.textContent = "Every dish is a symphony of spices, inspired by cultures around the world — from the sizzling streets of Bangkok to the rich kitchens of Marrakech.";

    featureCardOne.appendChild(featureCardOneHeading);
    featureCardOne.appendChild(featureCardOneText);

    // Feature Card Twoo
    const featureCardTwo = document.createElement("div");
    featureCardTwo.classList.add("feature-card");

    featureCardTwo.insertAdjacentHTML("beforeend", `
        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#a84444">
            <path d="M370-409h60v-183h-60v183Zm-160-50q-49-24-79.5-69T100-627q0-72.49 50.5-122.74Q201-800 273.41-800q11.59 0 23.08 1.71 11.48 1.72 22.51 4.29l8 2 4-7q23-40 63-60.5t86-20.5q46 0 86 20.5t63 60.5l4 7 8-2q11-3 22.46-4.5 11.47-1.5 23.89-1.5 71.65 0 122.15 50.26Q860-699.49 860-627q0 54-30.5 99T750-459v215H210v-215Zm320 50h60v-183h-60v183ZM270-305h420v-191l40-20q32-16 52-45.5t20-64.5q0-48-36-80t-85-32q-9 0-18 1.5t-18 3.5l-39 11-28-46q-16-26-41.98-39-25.98-13-56-13T424-807q-26 13-42 39l-28 46-40-11q-9-2-17.84-3.5-8.85-1.5-18.16-1.5-49 0-84.5 32.5T158-625q0 35 20 65t52 45l40 19v191Zm-60 61h60v104h420v-104h60v164H210v-164Zm270-61Z"/>
        </svg>
    `);

    const featureCardTwoHeading = document.createElement("h3");
    featureCardTwoHeading.textContent = "Master Chefs at Work";
    
    const featureCardTwoText = document.createElement("p");
    featureCardTwoText.textContent = "Our chefs are artists, not just cooks. Each plate is a crafted experience, blending tradition with innovation.";

    featureCardTwo.appendChild(featureCardTwoHeading);
    featureCardTwo.appendChild(featureCardTwoText);

    // Feature Card Three
    const featureCardThree = document.createElement("div");
    featureCardThree.classList.add("feature-card");

    featureCardThree.insertAdjacentHTML("beforeend", `
        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#a84444">
            <path d="M480-80q-72-8-143.5-41.5t-128.5-93q-57-59.5-92.5-147T80-564.98V-603h38q53 0 113 20.5T337-530q8-90 48-185.5T480-879q55 68 95 163.5T623-530q46-30 106-51.5T842-603h38v38.02Q880-449 844.5-361.5 809-274 752-214.5t-128.5 93Q552-88 480-80Zm8-61q-11-186-107.39-282.18Q284.21-519.37 141-542q13 193 112.5 288T488-141Zm-9-245q14-26 38.5-56t47.5-50q5-68-20-138t-65-145q-40 75-65 145t-20 138q23 20 46.5 50t37.5 56Zm69 228q47-17 93.5-45t84-73q37.5-45 63-110.5T819-542q-106 17-187 75.5T513-322q12 38 21 76.5t14 87.5Zm-69-228Zm69 228Zm-60 17Zm25-181ZM480-80Z"/>
        </svg>
    `);

    const featureCardThreeHeading = document.createElement("h3");
    featureCardThreeHeading.textContent = "Unforgettable Ambience";
    
    const featureCardThreeText = document.createElement("p");
    featureCardThreeText.textContent = "Rustic warmth meets contemporary design — perfect for romantic evenings, casual bites, or celebrations.";

    featureCardThree.appendChild(featureCardThreeHeading);
    featureCardThree.appendChild(featureCardThreeText);


    // Features Card Four
    const featureCardFour = document.createElement("div");
    featureCardFour.classList.add("feature-card");

    featureCardFour.insertAdjacentHTML("beforeend", `
        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#a84444">
            <path d="M646-80q-100 0-167-67t-67-167q0-100 67-167t167-67q100 0 167 67t67 167q0 100-67 167T646-80Zm0-60q72 0 123-51t51-123q0-72-51-123t-123-51q-72 0-123 51t-51 123q0 72 51 123t123 51Zm-506-20q-24 0-42-18t-18-42v-330q0-13 1.5-21t6.5-19l92-200h-22q-15 0-24.5-9.5T124-824v-22q0-15 9.5-24.5T158-880h261q15 0 24.5 9.5T453-846v22q0 15-9.5 24.5T419-790h-22l96 222q-12 6-25 15t-24 18L329-790h-82L140-559v339h224q3 15 10 31t15 29H140Zm506-438q-36 0-60-24t-24-60q0-36 24-60t60-24v168q0-36 24-60t60-24q36 0 60 24t24 60H646Z"/>
        </svg>
    `);

    const featureCardFourHeading = document.createElement("h3");
    featureCardFourHeading.textContent = "Fresh, Local Ingredients";
    
    const featureCardFourText = document.createElement("p");
    featureCardFourText.textContent = "We partner with local farmers and producers to bring you the freshest ingredients — every season, every bite.";

    featureCardFour.appendChild(featureCardFourHeading);
    featureCardFour.appendChild(featureCardFourText);

    featureList.append(featureCardOne, featureCardTwo, featureCardThree, featureCardFour);
    features.appendChild(featureList);
    return features;
}


// Chefs Picks Section
function createChefsPicksSection() {
    const chefsPicks = document.createElement("section");
    chefsPicks.classList.add("chefs-picks");

    const chefsPicksHeading = document.createElement("h2");
    chefsPicksHeading.textContent = "Chef’s Picks";

    const ChefsPicksSubTitle = document.createElement("p");
    ChefsPicksSubTitle.classList.add("subtitle");
    ChefsPicksSubTitle.textContent = "Handpicked dishes our guests can’t stop raving about";

    const dishes = document.createElement("div");
    dishes.classList.add("dishes");

    // Dish Card One
    const dishCardOne = document.createElement("div");
    dishCardOne.classList.add("dish-card");

    const imgTwo = document.createElement("img");
    imgTwo.src = flavorImg;
    imgTwo.alt = "Tandoori Lamb";

    const dishCardOneHeading = document.createElement("h3");
    dishCardOneHeading.textContent = "Smoked Tandoori Lamb";

    const dishCardOneText = document.createElement("p");
    dishCardOneText.textContent = "Marinated in a secret spice blend, char-grilled to perfection. Served with saffron rice and mint chutney.";

    dishCardOne.appendChild(imgTwo);
    dishCardOne.appendChild(dishCardOneHeading);
    dishCardOne.appendChild(dishCardOneText);

    // Dish Card Two
    const dishCardTwo = document.createElement("div");
    dishCardTwo.classList.add("dish-card");

    const imgThree = document.createElement("img");
    imgThree.src = flavorImg;
    imgThree.alt = "Chicken Kebab";

    const dishCardTwoHeading = document.createElement("h3");
    dishCardTwoHeading.textContent = "Thai Green Curry";

    const dishCardTwoText = document.createElement("p");
    dishCardTwoText.textContent = "Authentic and creamy, packed with fresh herbs, bamboo shoots, and your choice of protein.";

    dishCardTwo.appendChild(imgThree);
    dishCardTwo.appendChild(dishCardTwoHeading);
    dishCardTwo.appendChild(dishCardTwoText);

    // Dish Card Three
    const dishCardThree = document.createElement("div");
    dishCardThree.classList.add("dish-card");
    
    const imgFour = document.createElement("img");
    imgFour.src = flavorImg;
    imgFour.alt = "Nice Flavor";

    const dishCardThreeHeading = document.createElement("h3");
    dishCardThreeHeading.textContent = "Smoked Tandoori Lamb";

    const dishCardThreeText = document.createElement("p");
    dishCardThreeText.textContent = "A vibrant mix of roasted veggies, grains, and globally-inspired sauces. Vegan-friendly and bursting with flavor.";

    dishCardThree.appendChild(imgFour);
    dishCardThree.appendChild(dishCardThreeHeading);
    dishCardThree.appendChild(dishCardThreeText);

    dishes.appendChild(dishCardOne);
    dishes.appendChild(dishCardTwo);
    dishes.appendChild(dishCardThree);

    chefsPicks.appendChild(chefsPicksHeading);
    chefsPicks.appendChild(ChefsPicksSubTitle);
    chefsPicks.appendChild(dishes);
    
    return chefsPicks;
}


export default function loadHomePage() {
    content.innerHTML = "";
    content.appendChild(createAboutSection());
    content.appendChild(createFeaturesSection());
    content.appendChild(createChefsPicksSection());
}