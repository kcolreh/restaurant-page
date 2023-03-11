export function createButton(id, content) {
    const button = document.createElement('button');
    button.innerHTML = content;
    button.id = id;
    return button
};

export function createTitle(h, id, content) {
    const title = document.createElement(`h${h}`)
    title.id = id;
    title.innerHTML = content;
    return title
};


export function createDiv(id) {
    const div = document.createElement('div');
    div.id = id;
    return div;
};

export function createImage(id, link) {
    const image = document.createElement('img');
    image.classList.add('card-image');
    image.id = id;
    image.src = link;
    return image;
};

export function createParagraph(id, content) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('card-paragraph');
    paragraph.id = id;
    paragraph.innerHTML = content;
    return paragraph;
};