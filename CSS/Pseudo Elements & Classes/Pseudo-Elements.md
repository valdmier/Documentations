# CSS Pseudo-Elements Documentation

Pseudo-elements in CSS extend the capability of selectors by allowing you to style parts of an element rather than the whole element. They are denoted by a double colon `::` followed by the pseudo-element name. This documentation covers various pseudo-elements and their applications.

---

**NOTE:** Pseudo-elements use `::`.

---

## Introduction to Pseudo-Elements

Pseudo-elements target specific parts of an element, such as the first line or first letter. They are used to apply styles to portions of an element's content rather than the element itself.

### Example of Using Pseudo-Elements:

```css
p::first-line {
  font-weight: bold; /* Styles the first line of a paragraph */
}
```

## Common Pseudo-Elements

### `::before`

The `::before` pseudo-element inserts content before the actual content of an element. It is often used for decorative purposes.

```css
p::before {
  content: "→ "; /* Adds an arrow before each paragraph */
}
```

### `::after`

The `::after` pseudo-element inserts content after the actual content of an element. Like `::before`, it is used for decorative purposes.

```css
p::after {
  content: " ←"; /* Adds an arrow after each paragraph */
}
```

### `::first-line`

The `::first-line` pseudo-element selects the first line of a block-level element and allows styling specifically for that line.

```css
p::first-line {
  font-weight: bold; /* Styles the first line of each paragraph */
}
```

### `::first-letter`

The `::first-letter` pseudo-element selects the first letter of a block-level element and allows styling specifically for that letter.

```css
p::first-letter {
  font-size: 150%; /* Increases the font size of the first letter in each paragraph */
}
```

### `::selection`

The `::selection` pseudo-element selects the portion of text that is currently being selected by the user.

```css
::selection {
  background-color: yellow; /* Changes the background color of selected text */
  color: black; /* Changes the text color of selected text */
}
```

## Specific Use Cases

### Styling the First Letter

```css
p::first-letter {
  font-size: 150%;
  color: darkred;
}
```

### Adding Decorative Content Before Headings

```css
h2::before {
  content: "🔍 ";
}
```

### Styling the Selected Text

```css
::selection {
  background-color: #7fd5f1;
  color: #1a1a1a;
}
```

---

| Pseudo-Element    | Description                                                                             |
| ----------------- | --------------------------------------------------------------------------------------- |
| `::before`        | Inserts content before the actual content of an element. Used for decorative purposes.  |
| `::after`         | Inserts content after the actual content of an element. Used for decorative purposes.   |
| `::first-line`    | Selects the first line of a block-level element for specific styling.                   |
| `::first-letter`  | Selects the first letter of a block-level element for specific styling.                 |
| `::selection`     | Selects the portion of text currently being selected by the user.                       |
| `::placeholder`   | Selects the placeholder text in an input or textarea element.                           |
| `::marker`        | Styles the marker box of a list item.                                                   |
| `::backdrop`      | Styles the background behind an element with an `::before` or `::after` pseudo-element. |
| `::first-of-type` | Selects the first sibling of its type among the children of its parent.                 |
| `::last-of-type`  | Selects the last sibling of its type among the children of its parent.                  |

---



## Conclusion

CSS pseudo-elements provide a way to style specific parts of an element's content, allowing for enhanced design and presentation. Whether it's adding decorative content, styling the first letter, or modifying the appearance of selected text, pseudo-elements offer a flexible approach to fine-tuning your web design.
