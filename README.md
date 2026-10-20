# Full-Stack Blog Application

A full-stack blogging application developed by **Sardar Mohammed Rashid** using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

This project demonstrates full-stack JavaScript development, RESTful API integration, database management, and CRUD operations.

## Features

- Create new blog posts
- View and read existing blog posts
- Edit and update blog posts
- Delete blog posts
- Store and retrieve blog data using MongoDB
- Connect a React frontend to a Node.js/Express backend

## Technologies Used

**Frontend**
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

**Backend**
- Node.js
- Express.js
- REST APIs

**Database**
- MongoDB Atlas

**Development Tools**
- Git
- GitHub
- VS Code

## How It Works

1. Users interact with the React frontend.
2. React communicates with the Express backend using HTTP requests.
3. The backend processes requests and interacts with MongoDB.
4. The application supports creating, retrieving, updating, and deleting blog posts.

## Frontend Deployment Status

**Unresolved as of October 20, 2026:** the repository contains conflicting frontend deployment signals. No single supported frontend deployment or canonical live URL has been confirmed.

| Evidence | Current value | What it establishes |
| --- | --- | --- |
| Repository homepage | https://fullstack-blog-iota-black.vercel.app | A Vercel URL is advertised in repository metadata. |
| Latest inspected `main` commit | `5dc045d3120628459c01a54fc2886193a512ca80` | GitHub reports a successful Vercel deployment on October 17, 2026, for the `fullstack-blog-frontend` project. This does not confirm that the advertised homepage is its current production URL. |
| Previously advertised README demo | https://sardarmrashed.github.io/fullstack-blog | The README linked to GitHub Pages. This URL is retained here as evidence, not as a verified live demo. |
| Root and frontend `package.json` | `homepage: https://sardarMrashed.github.io/fullstack-blog-frontend`; `predeploy: npm run build`; `deploy: gh-pages -d build` | Both packages contain GitHub Pages publishing configuration, but their asset base path differs from the README URL. |
| `gh-pages` branch | `9663f1ebc32b44fc6fa1f467ea8e1dd7ec017b5b`, dated May 5, 2026 | Contains a built frontend whose `index.html` uses `/fullstack-blog/` asset URLs, which also differ from the current package metadata. Branch existence alone does not establish the current Pages publishing source. |
| Frontend API | https://fullstack-blog-068r.onrender.com/api/posts | `frontend/src/App.js` calls this Render backend. The API address does not determine the frontend host. |

The inspected `main` tree contains no `vercel.json`, tracked `.vercel/` configuration, `CNAME`, or GitHub Actions workflows that resolve this conflict. Repository metadata reports Pages enabled, but the GitHub connector could not read the Pages settings or deployment-history endpoints. Live-site behavior and the Vercel project settings were not verified.

**Configuration preserved:** neither package's homepage, deployment scripts, dependencies, nor the `gh-pages` branch has been changed. Before aligning these values, the maintainer needs to confirm the intended frontend host, its production URL, the Vercel production branch/root directory or Pages publishing branch/directory, and a successful deployment serving this application. Then update this section and the applicable package metadata together.

## Project Goals

This project was developed to practice building full-stack JavaScript applications, connecting frontend and backend systems, working with REST APIs, and managing data with MongoDB.

## Developer

**Sardar Mohammed Rashid**

Full-Stack Developer | React.js | Node.js | MongoDB

- [GitHub](https://github.com/sardarMrashed)
- [LinkedIn](https://www.linkedin.com/in/sardar-mohammed-rashid/)

---

*Built as part of my full-stack development portfolio.*
