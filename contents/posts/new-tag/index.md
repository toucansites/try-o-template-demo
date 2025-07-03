---
type: post
title: Add New Tag
description: This guide will walk you through how to add a new tag
publication: 2025-03-03 00:00:01
tags:
  - content
authors:
  - toucansites
featured: false
---

# Add a New Tag

![Cover Image](./assets/cover.jpg)

Tags are essential for organizing content on your website. They help visitors find posts by topic and enhance site navigation. Follow the steps below to add a new tag in **Try-O-Template**.

---

## Step 1: Navigate to the Tags Directory

1. Open your project directory.
2. Go to the **contents/tags/** folder. This folder contains all tag-related content.

---

## Step 2: Create a New Tag Directory

1. Create a new directory for your tag:
   - Name the folder based on the tag name you want to add. For example:

     ```bash
     mkdir contents/tags/my-new-tag
     ```

   - Use lowercase letters and hyphens for consistency in folder naming.

---

## Step 3: Add an **index.md** File

1. Inside the new directory (e.g., **contents/tags/my-new-tag**), create a file named **index.md**.
   - This file stores the metadata for the tag.

2. Add the following content to the **index.md** file:

   ```markdown
   ---
   type: tag
   title: My New Tag
   description: "A description for this tag."
   order: 1
   ---
   ```

   **Fields Explanation**:
   - **type**: Always set to **tag**.
   - **title**: The display name of the tag.
   - **description**: A short description of the tag's purpose.
   - **order**: Specifies the display order of tags, with lower numbers appearing first.

---

### Step 4: Regenerate the Site

Once the tag is created, regenerate your site to apply the changes:

1. Open your terminal and navigate to your project directory.
2. Run the following command:

   ```bash
   toucan generate
   ```

3. This updates the site’s content and templates to incorporate the new tag.

---

### Step 5: Verify the Tag

1. Start the local development server:

   ```bash
   toucan serve
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000).
3. Go to the **Tags** page to verify that the new tag is displayed.

---

### Additional Notes

- **Using Tags in Posts**:
  - To assign a tag to a post, include it in the **tags** field of the post’s **index.md** file. Example:

    ```markdown
    tags:
      - my-new-tag
    ```

- **Styling Tags**:
  - To customize how tags are displayed, modify the relevant Mustache file in the **templates/default/views/** directory.

---

This guide ensures you can easily add and manage tags in **Try-O**.
