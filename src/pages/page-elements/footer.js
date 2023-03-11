import { createButton } from "../../utilities/elements";
import { createDiv } from "../../utilities/elements";

function socialMediaContainer(id) {
    const mediaContainer = createDiv(id);
    const buttonContent = ['Instagram', 'Facebook', 'Twitter'];

    buttonContent.forEach(index => {
        const button = createButton(`header-${index.toLowerCase()}`, index);
        button.classList.add('social-media-button');
        mediaContainer.appendChild(button);

    });
    return mediaContainer;
}

function createFooterContainer(id) {
    const footerContainer = createDiv(id);
    const buttonContent = ['Contact Us', 'Privacy Policy', 'Accesability', 'Legal Terms and Conditions'];

    buttonContent.forEach(index => {
        const button = createButton(`header-${index.toLowerCase()}`, index);
        button.classList.add('footer-button');
        footerContainer.appendChild(button);

    });
    return footerContainer;
}

export function createFooter() {
    const content = document.getElementById('content');
    const mediaContainer = socialMediaContainer(`social-media-container`);
    const footerMenuContainer = createFooterContainer(`footer-menu-container`);

    mediaContainer.classList.add('social-media-container');
    footerMenuContainer.classList.add('footer-menu-container');
    content.appendChild(mediaContainer);
    content.appendChild(footerMenuContainer);
}