import { createSection } from "./page-elements/menu-card-section";
import { createSection1 } from "./page-elements/title-section";
import { createFooter } from "./page-elements/footer";

export function menuPage() {
    createSection1();
    createSection();
    createFooter();
}