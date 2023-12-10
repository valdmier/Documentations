# CSS Media Queries Documentation

## Overview

CSS media queries allow you to apply styles based on various characteristics of the user agent, such as device type, screen resolution, or viewport width. This documentation provides an in-depth explanation of CSS media queries along with examples.

---

### Basic Media Query for Print

```css
/* Applying styles specifically for print */
@media print {
  body {
    font-size: 12pt;
    color: black;
  }

  /* Additional print-specific styles can be added here */
}
```

**Explanation:**

- The `@media print` query targets styles to be applied when the document is printed.
- In this example, it adjusts the font size to 12pt and sets the text color to black for the printed document.

---

### Media Query for Small Screens

```css
/* Applying styles for small screens (less than or equal to 600px width) */
@media (max-width: 600px) {
  /* Styles for small screens go here */
}
```

**Explanation:**

- The `@media (max-width: 600px)` query targets styles for screens with a maximum width of 600 pixels.
- You can customize styles to optimize the layout for smaller screens.

---

### Media Query for Large Screens

```css
/* Applying styles for large screens (greater than 1200px width) */
@media (min-width: 1200px) {
  /* Styles for large screens go here */
}
```

**Explanation:**

- The `@media (min-width: 1200px)` query targets styles for screens with a minimum width of 1200 pixels.
- This can be useful for providing enhanced styles or layouts on larger screens.

---

### Media Query for High-Resolution Screens

```css
/* Applying styles for high-resolution screens (Retina displays, for example) */
@media (min-resolution: 2dppx) {
  /* Styles for high-resolution screens go here */
}
```

**Explanation:**

- The `@media (min-resolution: 2dppx)` query targets styles for screens with a minimum resolution of 2 dots per pixel.
- This can be used to provide higher quality images or other assets for high-resolution displays.

---

### Media Query for Dark Mode

```css
/* Applying styles for devices with a preference for dark color schemes */
@media (prefers-color-scheme: dark) {
  /* Styles for dark mode go here */
}
```

**Explanation:**

- The `@media (prefers-color-scheme: dark)` query targets styles for devices with a preference for dark color schemes.
- This can be used to adjust the color palette for improved readability in dark mode.

---

### Media Query for Landscape Orientation

```css
/* Applying styles for devices in landscape orientation */
@media (orientation: landscape) {
  /* Styles for landscape orientation go here */
}
```

**Explanation:**

- The `@media (orientation: landscape)` query targets styles for devices in landscape orientation.
- This can be used to optimize layouts for landscape viewing.

---

### Combining Multiple Media Queries

```css
/* Applying styles for devices with a width between 600px and 1200px, in landscape orientation */
@media (min-width: 600px) and (max-width: 1200px) and (orientation: landscape) {
  /* Combined styles go here */
}
```

**Explanation:**

- Multiple media queries can be combined using logical operators (`and`, `or`, `not`) to create complex conditions.
- In this example, styles will be applied for devices with a width between 600px and 1200px in landscape orientation.

---

### Negating a Media Query

```css
/* Applying styles for devices that do not support hover */
@media not all and (hover: hover) {
  /* Styles for devices without hover support go here */
}
```

**Explanation:**

- The `@media not all and (hover: hover)` query targets styles for devices that do not support hover.
- This can be useful for providing alternative styles for touch devices.

---

### HTML Example with Media Attribute

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" media="screen">
  <link rel="stylesheet" href="print-styles.css" media="print">
  <title>Your Webpage</title>
</head>
<body>
  <!-- Your webpage content goes here -->
</body>
</html>
```

**Explanation:**

- The HTML `link` tag includes two stylesheets: one for screens and one for print.
- The `media` attribute specifies when each stylesheet should be applied.
- Adjust the content of "styles.css" and "print-styles.css" based on your design and print styling needs.


