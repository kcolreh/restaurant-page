import { createHeader } from '../pages/page-elements/header';
import { createSection1 } from '../pages/page-elements/title-section';
import { createSection } from '../pages/page-elements/menu-card-section';
import { createFooter } from '../pages/page-elements/footer';

export function firstLoad() {
    createHeader();
    createSection1();
    createSection();
    createFooter();
}


