import { createSection1 } from '../pages/page-elements/title-section';
import { createSection } from '../pages/page-elements/menu-card-section';
import { createFooter } from '../pages/page-elements/footer';

export function menuPage() {
    createSection1();
    createSection();
    createFooter();
}