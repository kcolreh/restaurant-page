import { createDiv, createParagraph, createList, createImage } from "../../utilities/elements";
import { createSection1 } from "./title-section";

export function createContact() {
    const content = document.getElementById('content');

    const image = createImage('contact-image', '../src/utilities/img/title-cat.png')
    image.classList.add('contact-image');

    const contactContainer = createDiv('contact-container');
    contactContainer.classList.add('contact-container');

    const location1 = createLocation1();
    const location2 = createLocation2();

    content.appendChild(contactContainer);
    contactContainer.appendChild(location1);
    contactContainer.appendChild(image);
    contactContainer.appendChild(location2);

}

function createLocation1() {

    const locationContainer = createDiv('location-container');
    locationContainer.classList.add('location-container');

    const paragraph1 = createParagraph('contacts-paragraph-1', 'Hoogstraat - Rotterdam  First-Location')
    paragraph1.classList.add('contact-paragraph-1');

    const paragraph2 = createParagraph('contacts-paragraph-2', '30A - 3011PR');
    paragraph2.classList.add('contact-paragraph');

    const paragraph3 = createParagraph('contacts-paragraph-3', '+3106951192');
    paragraph3.classList.add('contact-paragraph');

    const timeList = createList('contact-list',
        'Monday: 4pm - 11pm,Tuesday: 10:00am - 9pm,Wednesday: 10:00am - 9pm,Thursday: 10:00am - 9pm,Friday: 10:00am - 9pm,Saturday: 10:00am - 7pm,Sunday: 10:00am - 7pm');

    locationContainer.appendChild(paragraph1);
    locationContainer.appendChild(paragraph2);
    locationContainer.appendChild(paragraph3);
    locationContainer.appendChild(timeList);

    return locationContainer
}

function createLocation2() {

    const locationContainer = createDiv('location-container-2');
    locationContainer.classList.add('location-container');

    const paragraph1 = createParagraph('contacts-paragraph-1', ' Jacob Catsstraat - Rotterdam')
    paragraph1.classList.add('contact-paragraph-1');

    const paragraph2 = createParagraph('contacts-paragraph-2', '68 - 3035PP');
    paragraph2.classList.add('contact-paragraph');

    const paragraph3 = createParagraph('contacts-paragraph-3', '+3106234566');
    paragraph3.classList.add('contact-paragraph');

    const timeList = createList('contact-list',
        'Monday: 4pm - 11pm,Tuesday: 10:00am - 9pm,Wednesday: 10:00am - 9pm,Thursday: 10:00am - 9pm,Friday: 10:00am - 9pm,Saturday: 10:00am - 7pm,Sunday: 10:00am - 7pm');

    locationContainer.appendChild(paragraph1);
    locationContainer.appendChild(paragraph2);
    locationContainer.appendChild(paragraph3);
    locationContainer.appendChild(timeList);

    return locationContainer
}