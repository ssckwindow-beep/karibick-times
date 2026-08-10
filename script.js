* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #3a0645;
    --primary-dark: #22032a;
    --accent: #d81b60;
    --gold: #f4b400;
    --dark: #111111;
    --text: #333333;
    --light: #f7f5f8;
    --white: #ffffff;
    --border: #e5e0e7;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--white);
    color: var(--text);
    line-height: 1.6;
}

a {
    color: inherit;
    text-decoration: none;
}

.container {
    width: min(1180px, 92%);
    margin: auto;
}


/* TOP BAR */

.top-bar {
    background: var(--dark);
    color: #ffffff;
    font-size: 13px;
}

.top-content {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
}


/* HEADER */

.site-header {
    background: var(--primary);
    color: white;
}

.header-content {
    min-height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand {
    display: flex;
    align-items: center;
    gap: 14px;
}

.brand-mark {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: var(--gold);
    color: var(--primary);
    font-size: 21px;
    font-weight: 900;
    transform: rotate(-5deg);
}

.brand-text h1 {
    font-size: 32px;
    line-height: 1;
    letter-spacing: -1px;
}

.brand-text h1 span,
.footer-brand span {
    color: var(--gold);
}

.brand-text p {
    font-size: 12px;
    margin-top: 7px;
    opacity: 0.9;
    letter-spacing: 1px;
}


/* NAVIGATION */

.main-nav {
    background: var(--white);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 50;
}

.nav-content {
    display: flex;
    overflow-x: auto;
}

.nav-content a {
    padding: 16px 19px;
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
}

.nav-content a:hover {
    background: var(--primary);
    color: white;
}


/* MOBILE MENU BUTTON */

.menu-toggle {
    display: none;
    border: 0;
    background: var(--accent);
    color: white;
    font-size: 24px;
    width: 46px;
    height: 46px;
    border-radius: 8px;
}


/* BREAKING NEWS */

.breaking-bar {
    background: var(--accent);
    color: white;
}

.breaking-content {
    display: flex;
    align-items: center;
    min-height: 44px;
}

.breaking-content strong {
    background: var(--gold);
    color: var(--primary);
    padding: 4px 12px;
    margin-right: 15px;
    font-size: 12px;
}

.breaking-text {
    overflow: hidden;
}


/* HERO */

.hero-section {
    background: var(--light);
    padding: 45px 0;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.65fr 1fr;
    gap: 25px;
}

.hero-story {
    background: white;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}

.story-image {
    min-height: 300px;
    background:
        linear-gradient(135deg, #3a0645, #d81b60);
    position: relative;
}

.hero-image {
    min-height: 390px;
}

.hero-image span {
    position: absolute;
    bottom: 18px;
    left: 18px;
    background: var(--gold);
    color: var(--primary);
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 900;
}

.story-content {
    padding: 25px;
}

.story-content h2 {
    font-size: clamp(28px, 4vw, 44px);
    line-height: 1.08;
    margin: 10px 0;
    color: var(--dark);
}

.category {
    display: inline-block;
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1px;
}

.read-more,
.card-content a,
.feature-content a {
    display: inline-block;
    margin-top: 15px;
    color: var(--primary);
    font-weight: 800;
}


/* SIDE STORIES */

.side-stories {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.small-story {
    background: white;
    display: grid;
    grid-template-columns: 130px 1fr;
    min-height: 125px;
    box-shadow: 0 5px 18px rgba(0,0,0,0.07);
}

.small-story > div:last-child {
    padding: 14px;
}

.small-story h3 {
    font-size: 17px;
    line-height: 1.25;
    margin-top: 5px;
}

.small-image {
    min-height: 125px;
}


/* IMAGE THEMES */

.news-image {
    background: linear-gradient(135deg, #263238, #607d8b);
}

.sports-image {
    background: linear-gradient(135deg, #064e3b, #10b981);
}

.politics-image {
    background: linear-gradient(135deg, #172554, #2563eb);
}

.entertainment-image {
    background: linear-gradient(135deg, #701a75, #ec4899);
}

.education-image {
    background: linear-gradient(135deg, #78350f, #f59e0b);
}

.technology-image {
    background: linear-gradient(135deg, #172554, #06b6d4);
}


/* GENERAL SECTIONS */

.section {
    padding: 70px 0;
}

.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 28px;
}

.section-heading h2 {
    color: var(--dark);
    font-size: 34px;
    line-height: 1.1;
}

.section-heading > a {
    color: var(--accent);
    font-weight: 800;
}

.eyebrow {
    display: block;
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 2px;
    margin-bottom: 6px;
}


/* NEWS CARDS */

.news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.news-card,
.large-content-card {
    background: white;
    border: 1px solid var(--border);
    overflow: hidden;
}

.card-image {
    min-height: 210px;
}

.card-content {
    padding: 21px;
}

.card-content h3 {
    color: var(--dark);
    font-size: 21px;
    line-height: 1.25;
    margin: 7px 0;
}


/* SPORTS */

.coloured-section {
    background: var(--primary);
    color: white;
}

.light-heading h2,
.light-heading > a {
    color: white;
}

.light-heading .eyebrow {
    color: var(--gold);
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.feature-card {
    background: white;
    color: var(--text);
}

.feature-image {
    min-height: 260px;
}

.feature-content {
    padding: 23px;
}

.feature-content h3 {
    color: var(--dark);
    font-size: 25px;
    line-height: 1.2;
    margin: 8px 0;
}


/* CATEGORY BOXES */

.category-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.category-box {
    padding: 28px 20px;
    min-height: 190px;
    color: white;
    transition: transform 0.2s ease;
}

.category-box:hover {
    transform: translateY(-5px);
}

.category-box span {
    font-size: 34px;
}

.category-box h3 {
    margin-top: 10px;
    font-size: 22px;
}

.politics-box {
    background: #1d4ed8;
}

.entertainment-box {
    background: #c026d3;
}

.education-box {
    background: #d97706;
}

.technology-box {
    background: #0891b2;
}


/* TWO COLUMN */

.two-column {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.large-card-image {
    min-height: 280px;
}


/* NEWSLETTER */

.newsletter {
    background: var(--gold);
    padding: 50px 0;
}

.newsletter-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.newsletter h2 {
    color: var(--primary);
    font-size: 35px;
    line-height: 1.1;
}

.newsletter form {
    display: flex;
    width: min(480px, 100%);
}

.newsletter input {
    flex: 1;
    padding: 16px;
    border: none;
    outline: none;
}

.newsletter button {
    padding: 16px 22px;
    border: none;
    background: var(--primary);
    color: white;
    font-weight: 800;
    cursor: pointer;
}


/* FOOTER */

.site-footer {
    background: var(--primary-dark);
    color: white;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 50px;
    padding: 55px 0;
}

.footer-brand h2 {
    font-size: 28px;
}

.footer-grid h3 {
    color: var(--gold);
    margin-bottom: 12px;
}

.footer-grid a {
    display: block;
    margin: 8px 0;
    opacity: 0.85;
}

.copyright {
    border-top: 1px solid rgba(255,255,255,0.15);
    padding: 18px 0;
    font-size: 13px;
    opacity: 0.8;
}


/* MOBILE */

@media (max-width: 800px) {

    .header-content {
        min-height: 85px;
    }

    .brand-text h1 {
        font-size: 23px;
    }

    .brand-text p {
        font-size: 9px;
    }

    .brand-mark {
        width: 45px;
        height: 45px;
        font-size: 16px;
    }

    .menu-toggle {
        display: block;
    }

    .main-nav {
        display: none;
    }

    .main-nav.active {
        display: block;
    }

    .nav-content {
        flex-direction: column;
    }

    .nav-content a {
        border-bottom: 1px solid var(--border);
    }

    .hero-grid,
    .news-grid,
    .feature-grid,
    .two-column,
    .category-grid,
    .footer-grid {
        grid-template-columns: 1fr;
    }

    .hero-image {
        min-height: 260px;
    }

    .section {
        padding: 50px 0;
    }

    .section-heading {
        align-items: start;
        gap: 15px;
    }

    .section-heading h2 {
        font-size: 28px;
    }

    .newsletter-content {
        flex-direction: column;
        align-items: flex-start;
    }

    .newsletter form {
        width: 100%;
    }

    .footer-grid {
        gap: 30px;
    }
}
