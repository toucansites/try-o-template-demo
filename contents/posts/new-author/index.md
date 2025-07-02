---
type: post
title: Add New Author
description: This guide will walk you through how to add a new author
publication: 2025-03-04 00:00:01
tags:
  - content
authors:
  - toucansites
featured: false
---

# Add a New Author

![Cover Image](./assets/cover.jpg)

Authors allow you to attribute content to specific contributors, enhancing credibility and providing additional context for your website. Follow these steps to add a new author in **Try-O-Template**.

---

## Step 1: Navigate to the Authors Directory

1. Open your project directory.
2. Go to the **contents/authors/** folder. This folder contains all author-related content.

---

## Step 2: Create a New Author Directory

1. Create a new directory for your author:
   - Name the folder based on the author's name. For example:

     ```bash
     mkdir contents/authors/john-doe
     ```

   - Use lowercase letters and hyphens for consistency in folder naming.

---

## Step 3: Add an **index.md** File

1. Inside the new directory (e.g., **contents/authors/john-doe**), create a file named **index.md**.
   - This file stores the author’s metadata.

2. Add the following content to the **index.md** file:

   ```markdown
   ---
   type: author
   title: John Doe
   description: "Tech Blogger and Writer"
   image: ./assets/john-doe.jpg
   priority: 1
   linkedin: "https://www.linkedin.com/in/johndoe/"
   twitter: "https://twitter.com/johndoe"
   ---
   ```

   **Fields Explanation**:
   - **type**: Always set to **author**.
   - **title**: The display name of the author.
   - **description**: A short bio of the author.
   - **image**: Path to the author's profile picture (relative to the author's directory).
   - **priority**: Specifies the display order of authors, with lower numbers appearing first.
   - **linkedin**: Add the author's LinkedIn profile URL (optional).
   - **twitter**: Add the author's Twitter handle (optional).

---

## Step 4: Add a Profile Picture

1. Inside the author's directory, create an **assets** folder:

   ```bash
   mkdir contents/authors/john-doe/assets
   ```

2. Place a profile picture named **cover.jpg** (or the filename specified in the **image field**) inside the assets folder.

---

## Step 5: Regenerate the Site

After creating the author, you need to regenerate your site to apply the changes:

1. Open your terminal and navigate to your project directory.
2. Run the following command:

   ```bash
   toucan generate
   ```

3. This updates the site’s content and templates to include the new author.

---

## Step 6: Verify the Author

1. Start the local development server:

   ```bash
   toucan serve
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000).
3. Go to the **Authors** page to verify that the new author is displayed.

---

## Additional Notes

- **Using Authors in Posts**:
  - To assign an author to a post, include their folder name in the **authors** field of the post’s **index.md** file.

    ```markdown
    authors:
      - john-doe
    ```

- **Styling Author Profiles**:
  - To customize the author display, modify the relevant Mustache file in the **templates/default/views/** directory.

---

This guide ensures you can easily add and manage authors in **Try-O-Template**.
