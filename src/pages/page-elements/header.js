import { createButton, createTitle } from "./elements";

export function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const title = createTitle(2, 'header-title', 'Kiku el restorano');
    const buttonContent = ['Home', 'About', 'Menu', 'Contacts'];

    title.classList.add('header-title');
    header.id = ('header');
    content.appendChild(header);

    buttonContent.forEach(index => {
        const button = createButton(`header-${index.toLowerCase()}`, index);
        button.classList.add('header-button');
        header.appendChild(button);
        if (index === 'About') {
            header.appendChild(title)
        }
    });

    header.classList.add('header');
}