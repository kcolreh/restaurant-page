import { createDiv, createImage, createParagraph, createTitle } from "./elements";

const cardFactory = (image, title, paragraph) => {
    let idCounter = 1;
    let newId = true;
    const card = createDiv(idCounter);

    const newImage = createImage(idCounter, image);
    const newTitle = createTitle(idCounter, idCounter, title);
    const newParagraph = createParagraph(idCounter, paragraph);

    if (newId === true) {
        idCounter += 1;
    }

    newImage.classList.add('card-image');
    newTitle.classList.add('card-title');
    card.classList.add('menu-items');
    card.appendChild(newImage);
    card.appendChild(newTitle);
    card.appendChild(newParagraph);
    return card;
}

export function createSection() {
    const content = document.getElementById('content');
    const section = document.createElement('section');
    const cake = cardFactory('./img/cake1.jpg', `Kiki's cake`, 'Chocolate cake flavored with melted chocolate.');
    const cake1 = cardFactory('./img/cake5.jpg', `Kiki's cupcake`, 'Small and tasty snack cakes of various flavors.');
    const cake2 = cardFactory('./img/cake6.jpg', `Kiki's pie`, 'A tasty dessert consisting of two chocolate layers.');
    const cake3 = cardFactory('./img/cake2.jpg', 'Gibbery cake', 'Cream covered strawberry short cake.');
    const cake4 = cardFactory('./img/cake3.jpg', `Gigu's famous pie`, 'Light pastry fruit cake filled with various jams.');
    const cake5 = cardFactory('./img/cake4.jpg', `Gigu's ice-cream`, 'Sprinkle cone filled with ice-cream.');
    const cake6 = cardFactory('./img/cake7.jpg', `Kiku's delight`, 'A special birthday cake filled with suprise flavors.');
    const cake7 = cardFactory('./img/cake8.jpg', `Brother Cake`, 'Traditional cake topped with macarons.');
    const cake8 = cardFactory('./img/cake9.jpg', 'Pink delight', 'A pink theme birthday ice-cream cake.');

    content.appendChild(section);
    section.appendChild(cake);
    section.appendChild(cake1);
    section.appendChild(cake2);
    section.appendChild(cake3);
    section.appendChild(cake4);
    section.appendChild(cake5);
    section.appendChild(cake6);
    section.appendChild(cake7);
    section.appendChild(cake8);
    section.classList.add('menu-grid')


}