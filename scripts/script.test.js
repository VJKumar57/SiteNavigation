const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom;
let container;

beforeEach(() => {
    // Construct a new JSDOM instance with the HTML
    dom = new JSDOM(html);
    // Get the document object
    container = dom.window.document;
});

test('it has a title', () => {
    expect(container.title).toBe("Let's Learn Accessibility");
});

test('it has a navigation menu', () => {
    const navLinks = container.querySelectorAll('nav a');
    expect(navLinks.length).toBe(5);
    expect(navLinks[0].textContent).toBe('Home');
    expect(navLinks[0].getAttribute('onclick')).toBe("loadPage('home')");
});

test('it has a search bar', () => {
    const searchBar = container.querySelector('#search-bar');
    expect(searchBar).not.toBeNull();
    expect(searchBar.getAttribute('oninput')).toBe('handleSearch()');
});

test('it has a profile dropdown menu', () => {
    const dropdownMenu = container.querySelector('#dropdown-menu');
    expect(dropdownMenu).not.toBeNull();
    const dropdownLinks = dropdownMenu.querySelectorAll('.dropdown-link');
    expect(dropdownLinks.length).toBe(2);
    expect(dropdownLinks[0].textContent).toBe('Sign Up');
    expect(dropdownLinks[1].textContent).toBe('Sign In');
});

test('it has main content', () => {
    const mainContent = container.querySelector('#main-content');
    expect(mainContent).not.toBeNull();
    const image = mainContent.querySelector('img');
    expect(image).not.toBeNull();
    expect(image.getAttribute('alt')).toBe('Automated Accessibility Testing');
});

test('it includes the script file', () => {
    const script = container.querySelector('script[src="scripts/script.js"]');
    expect(script).not.toBeNull();
});