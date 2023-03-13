import { createContact } from "./page-elements/contacts";
import { createFooter } from "./page-elements/footer";
import { createSection1 } from "./page-elements/title-section";

export function contactPage() {
    createSection1();
    createContact();
    createFooter();
}