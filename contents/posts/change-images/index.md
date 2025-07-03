---
type: post
title: Change Images
description: Learn how to change images, including the site logo, the favicon, cover images, post images, and author images in Try-O Template.
publication: 2025-03-02 00:00:01
tags:
  - content
authors:
  - toucansites
featured: false
---

# Change Images

![Cover Image](./assets/cover.jpg)

Learn how to change images, including the site logo, the favicon, cover images, post images, author images, and general Markdown images in Try-O Template.

---

## Understanding Image Locations

Different types of images are stored in different directories:  

- **Site Logo**: Located in **assets/images/logos/**, controls the main site logo (logo.png) and dark mode logo (logo~dark.png).
- **Post Images**: Stored in **contents/<slug>/assets/**, includes cover images (cover.jpg, .png, .webp) and inline images.
- **Author Images**: Found in **contents/authors/<author>/assets/**, used for author profile pictures (author.jpg).
- **General Markdown Images**: Can be stored inside any **assets/** directory within posts, pages, or other content. Used for embedding images inside Markdown files.

---

## Changing the Site Logo

1. **Navigate to the logo directory:**  

   ```bash
   cd assets/images/logos/
   ```

2. Replace the **logo.png** and **logo~dark.png** files with your custom images.
   - **logo.png** → Used in light mode.
   - **logo~dark.png** → Used in dark mode.

3. Ensure your new logos have the **same file names** as the originals.

4. Regenerate & preview the site:

   ```bash
   toucan generate
   toucan serve
   ```

---

## Changing the Favicon

Favicons are the small icons that appear in browser tabs and bookmarks. To update the favicon in Try-O:

1. Navigate to the favicon directory:

   ```bash
   cd assets/icons/
   ```

2. Replace the existing favicon files with your own. Recommended formats:
   • **favicon.ico** (main file used by most browsers)
   • Optional additional sizes: **favicon.png**, etc.

3. Ensure the filenames match the ones currently used, or update references in the site head if you’re using custom names.

4. Regenerate & preview the site:

   ```bash
   toucan generate
   toucan serve
   ```

---

## Changing Post Images (Cover & Inline Images)

1. Go to the post directory where you want to add/change images:

   ```bash
   cd contents/my-post/assets/
   ```

2. Replace or add images:
   - **Cover image**: Name the file **cover.jpg** (or **.png**, **.webp**). If there is a cover.* image in the assets folder, Toucan will automatically use it as the post’s cover image, and it will be displayed in the lists.
   - **Inline images**: Save them in the **assets/** folder.

3. Reference images inside the post:

   ```markdown
   ![Description](./assets/image-name.jpg)
   ```

4. Regenerate & preview the site:

   ```bash
   toucan generate
   toucan serve
   ```

---

## Changing Author Images

1. Navigate to the author’s directory:

   ```bash
   cd contents/authors/author-name/assets/
   ```

2. Replace the profile image (e.g., **author.jpg**).

3. Update the author’s **index.md** file:

   ```yaml
   image: ./assets/author.jpg
   ```

4. Regenerate & preview the site:

   ```bash
   toucan generate
   toucan serve
   ```

---

## Adding Images in Markdown Files (General Usage)

Markdown allows you to embed images directly within your content. You can add images using the following syntax:

1. Local Images (Stored in the project)

   If your image is inside the assets folder within your content directory, reference it as follows:

   ```markdown
   ![Alt Text](./assets/my-image.jpg)
   ```

2. Remote Images (External Links)

   If you want to add an image hosted online, use:

   ```markdown
   ![Alt Text](https://example.com/image.jpg)
   ```

## Troubleshooting Common Image Issues

### 1. Image Not Updating?

✔️ **Solution**: Clear your browser cache and refresh (**Ctrl + Shift + R**).  

### 2. Image Not Loading?

✔️ **Solution**: Double-check file paths and ensure images are inside the correct **assets/** folder.  

### 3. Dark Mode Logo Not Changing?

✔️ **Solution**: Make sure **logo~dark.png** is updated correctly.  

---

## Final Steps

- Always **replace images with the same file names** if you want changes to apply instantly.  
- Use **high-quality `.png` or `.webp` files** for best performance.  
- **Regenerate the site** (`toucan generate`) after making changes.  

---

This guide ensures you can **easily update any image** in **Try-O**! 🚀
