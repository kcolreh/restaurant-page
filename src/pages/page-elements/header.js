import { createButton } from "../../utilities/elements";
import { createTitle } from "../../utilities/elements";

export function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const title = createTitle(2, 'header-title', 'Kiku el restorano');
    const buttonContent = ['Home', 'About', 'Menu', 'Content'];

    content.appendChild(header);

    buttonContent.forEach(index => {
        const button = createButton(`header-${index.toLowerCase()}`, index);
        header.appendChild(button);
        if (index === 'About') {
            header.appendChild(title)
        }
    });

    header.classList.add('header');
}