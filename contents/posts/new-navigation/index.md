---
type: post
title: Create a custom page in navigation
description: This guide will walk you through how to create a custom page and add it to the navigation menu
publication: 2025-03-06 00:00:01
tags:
  - content
authors:
  - toucansites
featured: false
---

# Create a Custom Page in Navigation

![Cover Image](./assets/cover.jpg)

Adding a custom page is a great way to enhance your site’s functionality by including pages like ‘Contact Us,’ ‘FAQ,’ or other static content. Follow the steps below to create a custom page and add it to the navigation menu in **Try-O-Template**.

---

## Step 1: Edit the Navigation Menu

1. Open the **site.yml** file in your project directory.
   - This file manages the navigation menu displayed on your site.

2. Add a new entry under the **navigation** section for your custom page. Example:

   ```markdown
   navigation:
     - label: "About"
       url: "/about/"
     - label: "Authors"
       url: "/authors/"
     - label: "Tags"
       url: "/tags/"
     - label: "Contact Us"
       url: "/contact-us/"
   ```

   **Fields Explanation**:
   - **label**: The text displayed in the navigation menu.
   - **url**: The relative URL of the custom page.

---

## Step 2: Create the Custom Page Directory

1. Navigate to the **contents/** folder.
2. Create a new directory for your custom page. For example:

   ```bash
   mkdir contents/contact-us
   ```

---

## Step 3: Add an **index.md** File

1. Inside the new directory (e.g., **contents/contact-us**), create a file named **index.md**.
   - This file stores the metadata and content for the custom page.

2. Add the following content to the **index.md** file:

   ```markdown
   ---
   title: "Contact Us"
   description: "Get in touch with us through this page."
   image: /images/contact-us-header.jpg
   views:
      html: pages.default_page
   ---
   ```

   **Fields Explanation**:
   - **title**: The title of the custom page.
   - **description**: A short description or summary of the page's content.
   - **image**: A header image for the page (optional).
   - **views.html**: The Mustache file used to render the page.

---

## Step 4: Add Content to the Page

Below the metadata in **index.md**, write the content of your custom page using Markdown. Example:

```text
## Contact Us

We'd love to hear from you! Please use the contact form below or email us directly at [support@example.com](mailto:support@example.com).

### Office Address
123 Example Street  
City, Country 12345
```

---

## Step 5: Create a New Template (Optional)

1. If the default template **pages.default_page** does not fit your needs, create a custom Mustache file:
   - Navigate to **templates/default/views/pages/**.
   - Create a new Mustache file, e.g., **contact_page.mustache**.
2. Update the **views** field in the custom page's metadata to use your new template:

   ```markdown
   views: 
      html: pages.contact_page
   ```

---

## Step 6: Regenerate the Site

Once the custom page is created, regenerate the site to apply the changes:

1. Open your terminal and navigate to your project directory.
2. Run the following command:

   ```bash
   toucan generate
   ```

3. This updates the site’s content and refreshes the navigation menu.

---

## Step 7: Verify the Custom Page

1. Start the local development server:

   ```bash
   toucan serve
   ```

2. Open your browser and go to [http://localhost:3000/contact-us/](http://localhost:3000/contact-us/).
3. Ensure that the custom page is displayed correctly and can be accessed from the navigation menu.

---

## Additional Notes

- **Updating Content**:
  - You can edit the **index.md** file at any time to update the content of the custom page.
- **Styling**:
  - Update the relevant Mustache templates and CSS files in the **templates/default/** directory to customize the page's look.

---

This guide ensures you can create and manage custom pages with ease in **Try-O**.
