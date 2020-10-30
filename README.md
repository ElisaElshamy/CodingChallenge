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

Currently these comments are just hard coded into HTML as filler text.

### Roadmap

- Utilize features of Nunjucks by breaking block content in `home.njk` into smaller templates.
- Mobile nav is a hamburger nav that opens and closes.
- The form submits data and displays it on the DOM w/ JS so that user may see comment posted.
- User sees message that comment was posted successfully.
