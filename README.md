# a2sysml.github.io
promo website for a2 sys ml meetup


## Brand Guidelines (eventually relocate this):

### Typography:

Typography should be simple and not take away from other visuals.

We use Lato, Helvetica, Arial.

For now, we use whatever size/weight, though this will change shortly.

City of Ann Arbor's font size: p: 1rem, minor interactible text (footer, nav): .875rem, major interactible text (buttons, main content): 1.125rem, h1: 3.5rem, h2: 2.5rem, h3: 2rem, 

### Colors:

We have several choices we could go for with colors:

- Steal the University of Michigan's colors

We won't do this so we don't associate too closely to the college.

- Steal Ann Arbor's colors (primary: 0b9a6d, secondary: 18453b, tertiary: ceebe2, grey1: 222, grey2: 333, button-primary: 0787ad, button-secondary: 0b9a6d) 

This would more closely associate us with Ann Arbor and the area.

- Create our own palette

We could branch off of Ann Arbor's palette to better brand ourselves.

### Spacing:

Nothing too defined for now. Keep the page open by minimizing text. Replace text with simple icons where possible. Prefer shadowing to outlines or contrasts to give a better look and feel.

## Development:

We use Zola and Markdown to generate/dev serve (w/ hot reloading) the website. We use Tailwind for styling.

Ensure you have Docker installed to be able to generate/dev serve.

On every push to main, GA will run and build the website and deploy to GitHub Pages.

To get started, run: `npm i && npm run watch`.

If you are updating a lot of styles, you can run tailwind in watch mode.

## Broken Links:

I'd like to track if any links are broken. GitHub Pages allows me to specify a 404 page. If I can specifically tag analytics to that page and extract the url, I should be able to tell what links are broken and what pages should exist (according to the users typing those links in).

## Accessibility:

Accessibility needs to be addressed eventually.


## Todo:

- finish main page content (add card for next meetup time)
- finish contact page (just add email, google form for feedback)
- finish updates page (just make links clickable)
- conform styles to brand guidelines