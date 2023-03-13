export function renderPage() {
    const content = document.getElementById('content');
    const header = document.getElementById('header');
    content.replaceChildren(header);
}