---
type: post
title: Troubleshooting
description: Solutions to common issues with Try-O-Template and Toucan static site generator.
publication: 2025-03-13 00:00:01
tags:
  - deployment
authors:
  - toucansites
featured: false
---

# Troubleshooting

![Cover Image](./assets/cover.jpg)

This guide will help you troubleshoot common problems when working with **Try-O-Template** and **Toucan**.

---

## 1. "Command not found" errors

**Issue**  
`command not found: toucan`

**Cause**  
Toucan CLI is not installed or not in your system’s **PATH**.

**Solution**  

- Check installation: `toucan --version`
- Install from [Toucan Documentation](https://toucansites.com/docs/)
- Ensure Toucan is in your system’s **PATH`

---

## 2. Images Not Displaying

**Common Problems**  

- Images not in **assets** folder inside post directory.
- Cover image is not named `cover.*` (e.g., `cover.jpg`, `cover.png`).
- Typos in filenames or unsupported formats.

**Solution**  

- Place all images in **assets** inside the post directory.
- Name cover image `cover.*`. Toucan will use it automatically.
- Reference images in content like this:

  ```markdown
  ![Example](./assets/example.jpg)
  ```

---

## 3. 404 Page Not Found

**Cause**  

- Missing content directory or **index.md** file.
- Incorrect `url` in **site.yml**.
- `baseUrl` not updated for deployment.

**Solution**  

- Verify page/post folder and **index.md** exist.
- Check `navigation` in **site.yml**.
- Set `baseUrl` in **site.yml**:

  ```yaml
  baseUrl: "https://yourusername.github.io/repository-name/"
  ```

---

## 4. Local Changes Not Updating

**Cause**  

- **Browser cache storing an older version** of your site.
- **Toucan site not regenerated** after content or style changes.

**Solution**  

### 1. Regenerate the Site

Each time you make changes to content or styles, you need to regenerate the site:

```bash
toucan generate
```

### 2. Serve the Updated Site Locally

After generating, preview the site locally:

```bash
toucan serve
```

### 3. Clear Cache in Any Browser (Recommended)

Most browsers cache site files (e.g., images, styles) to load faster. Clear the cache to see the latest version.

#### Clear Cache Using Inspect Tool (Works in Chrome, Edge, Firefox, etc.)

1. Open your site in the browser.
2. **Right-click → Inspect** (or press **F12**).
3. Go to the **Network** tab.
4. **Check "Disable Cache"** (works only when DevTools is open).
5. **Refresh the page** (F5 or Ctrl + R).

#### Manually Clear Cache (Example: Google Chrome)

1. Open **Chrome**.
2. Press **Ctrl + Shift + Delete** (Windows) or **Cmd + Shift + Delete** (Mac).
3. Select **All Time** as the time range.
4. Check **Cached images and files**.
5. Click **Clear data**.

This ensures your latest site changes are visible in the browser.

---

## 5. Custom Domain Not Working

**Cause**  

- DNS records missing or wrong.
- Missing **CNAME** file.
- HTTPS not enabled.

**Solution**  

- **A records** for apex domain:

  ```text
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

- **CNAME** for subdomains:

  ```text
  username.github.io
  ```

- Add a **CNAME** file to repo.
- Enable **Enforce HTTPS** in GitHub Pages settings.

---

## 6. Git Push Rejected

**Cause**  

- SSH keys missing.
- Local branch out of sync.

**Solution**  

- Add SSH key to GitHub.
- Sync branch:

  ```bash
  git pull origin main
  git add .
  git commit -m "message"
  git push origin main
  ```

---

## 7. Broken Links After Deployment

**Cause**  

- `baseUrl` not updated.
- Paths work locally but break on GitHub Pages.

**Solution**  

- Set `baseUrl` in **site.yml**:

  ```yaml
  baseUrl: "https://yourusername.github.io/repository-name/"
  ```

- Use absolute paths for reliability.

---

## 8. New Post Not Showing Up

**Issue**  
A new post you created is not appearing on the site.

**Possible Causes**  

- **publication date** is missing in the frontmatter.
- Date is set in the future, so the post is not published yet.

**Solution**  

- Ensure the post’s frontmatter includes a publication date:

  ```markdowm
  publication: 2025-01-16 10:00:00
  ```

- Make sure the date is not in the future unless you want to schedule the post.

---

## 9. Unknown Tag Name in a Post

**Issue**  
The tag assigned to a post is not working, or the post is not grouped under the expected tag.

**Possible Causes**  

- The tag used in the post’s tags field does not exist in the contents/tags/ directory.
- Typo in the tag folder name or in the tags field of the post.

**Solution**  

- Check that the tag has a corresponding folder in contents/tags/ (e.g., contents/tags/tutorials/).
- Make sure the folder contains index.md with at least:

  ```markdown
  type: tag
  title: Tutorials
  ```

- Ensure the tags field in the post matches the folder name:

  ```markdown
  tags:
  - tutorials
  ```

---

## Final Tips

- Always check the terminal for errors.
- See [Toucan Documentation](https://toucansites.com/docs/).
- Contact [Toucan Support](https://toucansites.com/contact/) if needed.
