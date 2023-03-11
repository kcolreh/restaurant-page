import { createButton } from "../../utilities/elements";
import { createTitle } from "../../utilities/elements";

export function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const title = createTitle(2, 'header-title', 'Kiku el restorano');
    const buttonContent = ['Home', 'About', 'Menu', 'Content'];

    title.classList.add('header-title');
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