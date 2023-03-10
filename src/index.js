function createButton(id, content) {
    const button = document.createElement('button');
    button.innerHTML = content;
    button.id = id;
    return button
};

function createTitle(h, id, content) {
    const title = document.createElement(`h${h}`)
    title.id = id;
    title.innerHTML = content;
    return title
};


function createDiv(id) {
    const div = document.createElement('div');
    div.id = id;
    return div;
};

function createImage(id, link) {
    const image = document.createElement('img');
    image.classList.add('card-image');
    image.id = id;
    image.src = link;
    return image;
};

function createParagraph(id, content) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('card-paragraph');
    paragraph.id = id;
    paragraph.innerHTML = content;
    return paragraph;
};

function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const title = createTitle(2, 'header-title', 'Kiku el restorano');
    const buttonContent = ['Home', 'About', 'Menu', 'Content'];

    content.appendChild(header);

    buttonContent.forEach(index => {
        const button = createButton(`header-${index}`, index);
        header.appendChild(button);
        if (index === 'About') {
            header.appendChild(title)
        }
    });

    header.classList.add('header');
}

function createSection1() {
    const content = document.getElementById('content');
    const section = document.createElement('section');
    const title = createTitle(1, 'section-1-title', 'snacks');
    title.classList.add('title');
    section.classList.add('snacks');

    content.appendChild(section);
    section.appendChild(title);
}


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

function createSection() {
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

function socialMediaContainer(id) {
    const mediaContainer = createDiv(id);
    const buttonContent = ['Instagram', 'Facebook', 'Twitter'];

    buttonContent.forEach(index => {
        const button = createButton(`header-${index}`, index);
        button.classList.add('social-media-button');
        mediaContainer.appendChild(button);

    });
    return mediaContainer;
}

function createFooterContainer(id) {
    const footerContainer = createDiv(id);
    const buttonContent = ['Contact Us', 'Privacy Policy', 'Accesability', 'Legal Terms and Conditions'];

    buttonContent.forEach(index => {
        const button = createButton(`header-${index}`, index);
        button.classList.add('footer-button');
        footerContainer.appendChild(button);

    });
    return footerContainer;
}

function createFooter() {
    const content = document.getElementById('content');
    const mediaContainer = socialMediaContainer(`social-media-container`);
    const footerMenuContainer = createFooterContainer(`footer-menu-container`);

    mediaContainer.classList.add('social-media-container');
    footerMenuContainer.classList.add('footer-menu-container');
    content.appendChild(mediaContainer);
    content.appendChild(footerMenuContainer);
}

createHeader();
createSection1();
createSection();
createFooter();