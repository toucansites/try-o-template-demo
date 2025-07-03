---
type: post
title: Template Tweaks
description: Learn how to customize your Try-O-Template by changing styles and using block directives.
publication: 2025-03-11 00:00:01
tags:
  - deployment
authors:
  - toucansites
featured: false
---

# Template Tweaks

![Cover Image](./assets/cover.jpg)

This guide will help you customize **Try-O-Template**, from adjusting styles to using **block directives** for flexible content management.

---

## 1. Changing the Background Color

To adjust background colors, add or modify these variables in **templates/default/assets/css/variables.css**:

```css
:root {
   --background-color: #ffffff;
   --background-color-accent: #cbeafb;
}

@media (prefers-color-scheme: dark) {
    :root {
        --background-color: #000000;
        --background-color-accent: #1a1a1a;
    }
}
```

---

## 2. Changing Text Colors

To update text colors globally, modify any of the **text-color**:

```css
:root {
    --text-color: #4b4b4b;
    --text-color-1: #afafaf;
    --text-color-2: #009be4;
    --text-color-3: #58cc02;
}
@media (prefers-color-scheme: dark) {
    :root {
        --text-color: #c9c9c9;
        --text-color-1: #afafaf;
        --text-color-2: #009be4;
        --text-color-3: #58cc02;
    }
}
```

---

## 3. Using Block Directives

Block directives allow **reusable content components** to be easily placed inside posts or pages.

### **HighlightedText Block Usage**

```markdown
@HighlightedText { This is a highlighted note. }
```

@HighlightedText { This is a highlighted note. }

### **Button Block Usage**

```markdown
@Button(url: "https://example.com") { Click Here }
```

@Button(url: "https://google.com") { Click Here }

---

## 4. Testing and Applying Changes

1. Regenerate the site after making template or block directive changes:

   ```bash
   toucan generate
   ```

2. Preview locally:

   ```bash
   toucan serve
   ```

3. Open your browser at **http://localhost:3000** and verify your tweaks.

---

## Conclusion

By modifying CSS and using block directives, you can **fully customize Try-O-Template** to match your design needs. Block directives provide **structured content elements**, while CSS changes allow for full template control.
