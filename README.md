# 🚀 Portfolio3D — Portfolio Builder

> **Create jaw-dropping, animated portfolio websites in minutes — no coding required.**

Portfolio3D is a browser-based portfolio builder that lets anyone design and export a professional portfolio website with a stunning 3D animated background, live preview, and one-click HTML export. Built with PHP, MySQL, Three.js, and vanilla JavaScript.

---

## ✨ Features

- 🎨 **3D Animated Background** — A WebGL canvas powered by Three.js renders a dynamic, interactive 3D scene on every page load.
- 🌟 **Floating Particles** — Decorative particle effects add depth and visual polish to the overall design.
- 📝 **Portfolio Builder** — A structured, panel-based form lets users fill in their profile, skills, and projects without writing any code.
- 👁️ **Live Preview** — Instantly render a real-time preview of the portfolio directly on the page before exporting.
- 📦 **Export Options** — Download the finished portfolio as a standalone HTML file or a structured JSON file.
- 💾 **Database Persistence** — Portfolio data is saved to a MySQL database via PHP and PDO, so work is never lost.
- 📱 **Responsive Design** — Built with a mobile-first layout using CSS and the Poppins font family from Google Fonts.

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Backend    | PHP 8+, PDO                         |
| Database   | MySQL                               |
| 3D Engine  | Three.js (r128)                     |
| Icons      | Font Awesome 6.4                    |
| Fonts      | Google Fonts — Poppins              |
| Frontend   | Vanilla JavaScript, CSS3, HTML5     |

---

## 📁 Project Structure

```
portfolio-builder/
│
├── index.php           # Main entry point — renders the full UI
├── config.php          # Database connection + auto table creation
│
└── assets/
    ├── css/
    │   └── style.css   # All styling and layout
    └── js/
        └── main.js     # Core logic: builder, preview, save, export
```

---

## ⚙️ Getting Started

### Prerequisites

- PHP 8.0 or higher
- MySQL 5.7+ or MariaDB
- A local server like [XAMPP](https://www.apachefriends.org/), [WAMP](https://www.wampserver.com/), or [Laragon](https://laragon.org/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ammarahmed-git/portfolio-builder.git
   cd portfolio-builder
   ```

2. **Set up the database**

   Open your MySQL client (e.g. phpMyAdmin) and create a new database:
   ```sql
   CREATE DATABASE portfolio_builder;
   ```

3. **Configure your database credentials**

   Open `config.php` and update the constants to match your local environment:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_USER', 'your_username');
   define('DB_PASS', 'your_password');
   define('DB_NAME', 'portfolio_builder');
   ```

4. **Start your local server**

   Place the project folder inside your server's root directory (e.g. `htdocs` for XAMPP) and start Apache + MySQL.

5. **Open in browser**
   ```
   http://localhost/portfolio-builder/
   ```

   The database tables (`users`, `portfolios`) are created automatically on first load.

---

## 🗄️ Database Schema

### `portfolios`
| Column       | Type        | Description                        |
|--------------|-------------|------------------------------------|
| `id`         | INT (PK)    | Auto-incremented portfolio ID      |
| `user_id`    | INT         | Reference to the owning user       |
| `title`      | VARCHAR(255)| Portfolio title                    |
| `description`| TEXT        | Portfolio description              |
| `skills`     | TEXT        | Comma-separated list of skills     |
| `projects`   | JSON        | JSON array of project objects      |
| `created_at` | TIMESTAMP   | Auto-set on creation               |

### `users`
| Column       | Type        | Description                        |
|--------------|-------------|------------------------------------|
| `id`         | INT (PK)    | Auto-incremented user ID           |
| `username`   | VARCHAR(50) | Unique username                    |
| `email`      | VARCHAR(100)| Unique email address               |
| `password`   | VARCHAR(255)| Hashed password                    |
| `created_at` | TIMESTAMP   | Auto-set on creation               |

---

## 🧭 How to Use

1. **Open the app** in your browser and land on the animated hero section.
2. **Click "Start Building"** to scroll to the Portfolio Builder.
3. **Fill in your Profile** — name, email, bio, and an optional profile photo.
4. **Add your Skills** — type a skill into the input and click "Add Skill".
5. **Add your Projects** — click "+ New Project" and fill in the project details.
6. **Click "Preview"** to render a live preview of your portfolio on the same page.
7. **Click "Save Portfolio"** to persist your data to the MySQL database.
8. **Go to Export** and choose:
   - **Export HTML** — downloads a ready-to-deploy HTML file.
   - **Export JSON** — downloads a structured JSON file of all your portfolio data.

---

## 🚧 Roadmap

- [ ] User authentication (login / register UI)
- [ ] Multiple portfolio templates
- [ ] Drag-and-drop section reordering
- [ ] AI-powered design suggestions
- [ ] Custom domain deployment guide
- [ ] Dark / light theme toggle

---

## 🔒 Security Notes

- **Never commit real credentials.** The default `config.php` uses `root` with no password for local development. Before deploying, switch to environment variables or a `.env` file.
- Passwords stored in the `users` table should be hashed with `password_hash()` before insertion.
- Validate and sanitize all user input on the server side before saving to the database.

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add: your feature description"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Ammar Ahmed**
- GitHub: [@Ammarahmed-git](https://github.com/Ammarahmed-git)

---

> Built with ❤️ and Three.js — because portfolios should be as impressive as the people behind them.
