---
type: post
title: Adding Extra Content
description: Learn how to add custom content to different pages in Try-O-Template using Markdown and frontmatter in index.md files.
publication: 2025-03-07 00:00:01
tags:
  - content
authors:
  - toucansites
featured: false
---

# Adding Extra Content

![Cover Image](./assets/cover.jpg)

In **Try-O-Template**, you can add extra content to your pages using **Markdown** inside index.md files. This guide will show you how to structure your content and use custom fields.

---

## 1. Understanding How Pages Work in Try-O-Template

All the page content in **Try-O-Template** is defined inside the **contents/** directory.  
Common pages include:  

- Homepage → **contents/[home]index.md**  
- Search Page → **contents/search/index.md**
- Tags List → **contents/lists/tag/index.md**
- Authors List → **contents/lists/author/index.md**
- About Page → **contents/about/index.md**
- Custom Pages (like "About") → **contents/custom-page/index.md**

Each of these pages supports **custom content and metadata** stored in the **index.md** file.  

---

## 2. Adding Custom Data to Pages

To add extra content, open the **index.md** file of the page you want to modify and update the **YAML frontmatter** at the top.  

### Example: Adding Custom Data to **index.md**  

```yaml
---
title: "About Us"
description: "Learn more about our team and mission."
custom_message: "We value transparency and innovation."
featured: true
contact_email: "contact@example.com"
---
```

### How to Use Custom Fields in Frontmatter

Any custom fields added to the frontmatter can be accessed dynamically in the site.  
For example, if you add a **scontact_email**s field, you can reference it within your Markdown content like this:

```markdown
# Contact Us  
For inquiries, reach us at [{{ contact_email }}](mailto:{{ contact_email }})
```

If the **contact_email**s field is set in the frontmatter, the Markdown content will be replaced dynamically.  

This allows you to **store structured data** and use it within your Markdown pages.  

---

## 3. Adding Content to Pages

All extra content should be added inside the **index.md** file using Markdown.  
Below the frontmatter, you can write **Markdown content**, which will be **automatically rendered on the page**.  

### Example: Markdown Content in **index.md**  

```markdown
# Welcome to Our Site  

We are passionate about creating high-quality static sites using **Try-O-Template**.  

## Our Values  
- 🚀 Innovation  
- 🔍 Transparency  
- 💡 Knowledge Sharing  

## Contact Us  
📧 Email: contact@example.com  
📍 Address: 123 Example Street, City, Country  
```

All this Markdown content gets inserted into the page dynamically!

---

## 4. Best Practices for Adding Extra Content

- Use frontmatter for structured data (title, description, messages).  
- Use Markdown for flexible content (text, lists, images, links).  
- Keep content clean & organized for better readability.  

Customizing pages in Try-O-Template is easy with **index.md** files.  
By using **YML metadata** and **Markdown for content**, you can enhance any page dynamically!
