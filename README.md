## Kink.com Coding Challenge - Frontend SASS

A single page with a navbar and two content sections.
The upper and lower sections are one column wide in mobile and two columns from tablet (768px) and above.

Uses css grid layout.

### Navbar

The navbar displays the included `./assets/images/logo.png`.

### Upper Section

The upper section displays an area that includes some text on the left-hand side and an image on the right-hand
side. Uses the included `./assets/images/placeholder.png` image.

### Lower Section

The lower section displays a form on the left-hand side with a username field and a comment field.
The right-hand side displays some comments in a list-like fashion.

Comments read/written to local JSON server file `db.json`.

## Usage

Please run the following command to use the JSON dev server `http://localhost:3001/comments`

```bash
npm run server
```

### Roadmap

- Utilize features of Nunjucks by breaking block content in `home.njk` into smaller templates.
- Mobile nav is a hamburger nav that opens and closes.
- Webpack could be used to bundle Axios for node module install instead of depending on Axios CDN.
