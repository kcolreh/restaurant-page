import { createTitle } from "../../utilities/elements";

export function createSection1() {
    const content = document.getElementById('content');
    const section = document.createElement('section');
    const title = createTitle(1, 'section-1-title', 'snacks');
    title.classList.add('title');
    section.classList.add('snacks');

    content.appendChild(section);
    section.appendChild(title);
}
