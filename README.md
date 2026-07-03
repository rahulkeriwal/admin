# Swami Admin (Web)

Run locally:

```powershell
cd swami-admin-web
npm install
npm start
# open http://localhost:3000 in your browser
```

Login password: Rahul@2006

Deploy to GitHub + Vercel

1. Initialize git and push to GitHub:

```powershell
cd C:\Users\dark\Desktop\swami-admin-web
git init
git add .
git commit -m "Initial swami admin web"
# create a new repo on GitHub, then:
git remote add origin https://github.com/<your-username>/swami-admin-web.git
git branch -M main
git push -u origin main
```

2. On Vercel: Import the GitHub repository and deploy. Vercel will serve `public/` as the frontend and `api/*.js` as serverless functions.

