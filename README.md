# 🚀 Sagar Bawankule – Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-6-47A248?style=for-the-badge&logo=mongodb)

A modern, professional portfolio website showcasing my skills, projects, and experience as an **AI & Software Developer**.

[**Live Demo**](https://sagar-bawankule.vercel.app) • [**LinkedIn**](https://www.linkedin.com/in/sagar-bawankule-856a79264/)

</div>

---

## ✨ Features

### 🎨 Design & UI
- **Dark/Light Mode** – Toggle between stunning dark and light themes
- **Glassmorphism Effects** – Modern frosted glass card design
- **Animated Mesh Gradient Background** – Floating gradient orbs with grid pattern
- **Responsive Design** – Looks perfect on all devices (mobile, tablet, desktop)
- **Smooth Animations** – Framer Motion for polished micro-interactions

### 📄 Sections
- **Hero** – Eye-catching intro with profile image and call-to-action buttons
- **About** – Professional introduction with core technologies
- **Education** – Academic journey with timeline-style cards
- **Projects** – Featured work with live demos and GitHub links
- **Skills** – Categorized technical skills with beautiful pill design
- **Certifications** – Professional credentials and achievements
- **Internships** – Work experience with company details
- **Contact** – Contact form and social media links

### ⚙️ Technical Features
- **Full-Stack Architecture** – Next.js API routes with MongoDB
- **Admin Dashboard** – Protected CMS for managing all content
- **JWT Authentication** – Secure admin login system
- **Database Seeding** – One-click database population
- **Image Optimization** – Next.js Image component for fast loading
- **SEO Optimized** – Meta tags and semantic HTML

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15, React 18, TypeScript, Tailwind CSS |
| **Backend** | Next.js API Routes, MongoDB, Mongoose |
| **Authentication** | JWT, bcrypt |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sagar-Bawankule/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your values:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your_secure_password
   ADMIN_EMAIL=your@email.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Seed the database** (first time only)
   
   Open [http://localhost:3000/api/seed](http://localhost:3000/api/seed) in your browser to populate the database with initial data.

6. **Open the app**
   
   Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets (images, resume, etc.)
├── src/
│   ├── app/
│   │   ├── admin/         # Admin dashboard pages
│   │   ├── api/           # API routes
│   │   │   ├── auth/      # Authentication endpoints
│   │   │   ├── projects/  # Projects CRUD
│   │   │   ├── skills/    # Skills CRUD
│   │   │   ├── seed/      # Database seeding
│   │   │   └── ...        # Other API routes
│   │   ├── globals.css    # Global styles & theme
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ...
│   ├── context/           # React contexts
│   │   └── ThemeContext.tsx
│   ├── lib/               # Utility functions
│   │   └── mongodb.ts
│   └── models/            # MongoDB schemas
│       ├── Admin.ts
│       ├── Project.ts
│       ├── Skill.ts
│       └── ...
├── .env.local.example     # Environment variables template
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔐 Admin Dashboard

Access the admin panel at `/admin/login`

**Features:**
- ✏️ Edit all portfolio content
- ➕ Add new projects, skills, certifications
- 🗑️ Delete items
- 📊 View statistics
- 🔒 JWT-protected routes

---

## 🎨 Theme Customization

The portfolio supports **Dark Mode** and **Light Mode**. Toggle using the sun/moon button in the navbar.

To customize colors, edit `src/app/globals.css`:

```css
:root {
  --bg-primary: #0a0a1a;
  --text-primary: #ffffff;
  --accent-blue: #3b82f6;
  --accent-purple: #8b5cf6;
}

[data-theme="light"] {
  --bg-primary: #f8fafc;
  --text-primary: #0f172a;
}
```

---

## 📦 Deployment

### Deploy on Netlify

1. **Push your code to GitHub**

2. **Go to [Netlify](https://app.netlify.com)**

3. **Click "Add new site" → "Import an existing project"**

4. **Connect your GitHub repository**

5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

6. **Add Environment Variables** (Site settings → Environment variables):
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your_secure_password
   ADMIN_EMAIL=your@email.com
   ```

7. **Deploy!**

8. **After deployment**, visit `https://yoursite.netlify.app/api/seed` once to populate the database.

### Deploy on Vercel (Alternative)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Set these in your deployment platform:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `ADMIN_USERNAME` | Admin login username |
| `ADMIN_PASSWORD` | Admin login password |
| `ADMIN_EMAIL` | Admin email address |

---

## 📄 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Sagar Vinod Bawankule**

- 🌐 Portfolio: [sagar-bawankule.vercel.app](https://sagar-bawankule.vercel.app)
- 💼 LinkedIn: [Sagar Bawankule](https://www.linkedin.com/in/sagar-bawankule-856a79264/)
- 🐙 GitHub: [Sagar-Bawankule](https://github.com/Sagar-Bawankule)
- 📧 Email: sagarbawankule334@gmail.com

---

<div align="center">

⭐ **Star this repo if you like it!** ⭐

Made with ❤️ by Sagar Bawankule

</div>
