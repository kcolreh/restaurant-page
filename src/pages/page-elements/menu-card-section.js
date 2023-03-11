import { createTitle } from "../../utilities/elements";
import { createDiv } from "../../utilities/elements";
import { createImage } from "../../utilities/elements";
import { createParagraph } from "../../utilities/elements";

const cardFactory = (image, title, paragraph) => {
    let idCounter = 1;
    const card = createDiv(idCounter);

    const newImage = createImage(idCounter, image);
    const newTitle = createTitle(idCounter, title);
    const newParagraph = createParagraph(idCounter, paragraph);

    idCounter += 1;

    card.classList.add('menu-items');
    card.appendChild(newImage);
    card.appendChild(newTitle);
    card.appendChild(newParagraph);
    return card;
}

function createCard(id) {
    const card = createDiv(`card-id-${id}`);
    const img = createImage(`card-img-id-${id}`);
    const title = createTitle(2, `card-title-id-${id}`);
    const para = createParagraph(`card-p-id-${id}`);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(para);
    return card
}

export function createSection() {
    const content = document.getElementById('content');
    const section = document.createElement('section');
    const cake = cardFactory('https://dummyimage.com/335x335/000/fff', 'item title', 'asd');
    const cake1 = cardFactory('https://dummyimage.com/335x335/000/fff', 'item title', 'asd');
    const cake2 = cardFactory('https://dummyimage.com/335x335/000/fff', 'item title', 'asd');
    const cake3 = cardFactory('https://dummyimage.com/335x335/000/fff', 'item title', 'asd');
    const cake4 = cardFactory('https://dummyimage.com/335x335/000/fff', 'item title', 'asd');
    const cake5 = cardFactory('https://dummyimage.com/335x335/000/fff', 'item title', 'asd');
    const cake6 = cardFactory('https://dummyimage.com/335x335/000/fff', 'item title', 'asd');
    const cake7 = cardFactory('https://dummyimage.com/335x335/000/fff', 'item title', 'asd');
    const cake8 = cardFactory('https://dummyimage.com/335x335/000/fff', 'item title', 'asd');

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