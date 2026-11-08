# KingyelPort — Personal Portfolio

A responsive personal portfolio website for **Kinley Gyeltshen**, a final-year Computer System & Network student at Jigme Namgyel Engineering College (JNEC), Royal University of Bhutan.

**Live site:** https://YOUR-USERNAME.github.io/kinleyport/

## Features

- Six pages: Home, About, Skills, Projects, Education and Contact
- Dark and light theme toggle, remembered between visits
- Animated typing effect and counters on the home page
- Project filter (All / Web / Desktop)
- Education timeline and certification cards, with links to the certificate PDFs
- Responsive layout with a mobile menu
- Back-to-top button and an animated mascot

## Projects

- **Event Hub:** a web platform for discovering, organizing and managing events
- **Gym & Campus Fitness Membership Tracker:** a desktop app built with Python, Tkinter and SQLite
- **Car Rental System:** a web-based system for vehicle reservations, customers, bookings and payments

## Certifications

- CCNA: Switching, Routing, and Wireless Essentials (Cisco Networking Academy, via JNEC)
- CCNA: Introduction to Networks (Cisco Networking Academy, via JNEC)
- Becoming a Linux Server Admin (Packt, via Coursera)
- Master Full-Stack Web Development with Laravel & PHP (Board Infinity, via Coursera)
- Python Tkinter: Design, Build & Integrate GUIs (EDUCBA, via Coursera)

## Built with

- HTML5, CSS3 and JavaScript (vanilla)
- [Bootstrap 5.3](https://getbootstrap.com/) for layout
- [Font Awesome 6](https://fontawesome.com/) for icons

## Project structure

```
.
├── index.html
├── about.html
├── skills.html
├── projects.html
├── education.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js          # data (skills, projects, education, certificates) and page behaviour
├── media/               # profile photo, background image, mascot
├── certificates/        # certificate PDFs
└── README.md
```

## Run locally

No build step is needed.

```bash
git clone https://github.com/YOUR-USERNAME/kinleyport.git
cd kinleyport
```

Then open `index.html` in your browser, or serve the folder:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Customising

Most content lives in the arrays at the top of `js/main.js`:

- `skills`: skill categories and items
- `projects`: add `repo` and `live` links to show GitHub and Live buttons
- `education` and `certifications`: timeline entries and certificate cards
- `typingWords`: the text typed on the home page

## Deployment

The site is static, so it runs on GitHub Pages: **Settings → Pages → Deploy from a branch → main / (root)**.

## Contact

- Email: kinleygyeltshen1907@gmail.com
- Location: Mongar, Bhutan

## License

© Kinley Gyeltshen. All rights reserved.
