# Deployment & Build Guide

A reference manual for deploying the portfolio to cloud production services.

---

## ⚡ 1. Primary Deployment: Vercel (Recommended)

Vercel is the creator of Next.js, providing native optimizations out of the box.

### Deploying via Vercel CLI
1. Install Vercel globally:
   ```bash
   npm install -g vercel
   ```
2. Run deployment command in root:
   ```bash
   vercel
   ```
3. Follow the prompts to log in, name the project, and link to your workspace.
4. Promote the build to production:
   ```bash
   vercel --prod
   ```

### Deploying via Git Integration (Continuous Deployment)
1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Visit [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New Project**.
3. Import your repository.
4. Choose the default build options (Vercel automatically detects Next.js configurations).
5. Click **Deploy**. Vercel will trigger a new build on every git push.

---

## 🛠️ 2. Production Build Commands

To test your production build locally before deploying:

```bash
# Compile and optimize production assets
npm run build

# Start production server locally to inspect
npm run start
```

---

## 🌐 3. Domain Association
1. Inside the Vercel Project Dashboard, navigate to **Settings** ➡️ **Domains**.
2. Enter your custom domain name (e.g., `ankursingh.dev`).
3. Vercel will generate custom DNS record configurations (CNAME or A records).
4. Update these records inside your DNS registrar (e.g., GoDaddy, Cloudflare, Namecheap) to verify ownership.
