# CSS Text Decoration and Text Transform Properties Documentation

CSS provides two sets of properties, namely `text-decoration` and `text-transform`, that allow you to control how text within HTML elements is visually displayed and transformed. This documentation explores both sets of properties and their various values for customizing text styling and appearance.

## Introduction to Text Decoration Properties

Text decoration properties help you modify the appearance of text, such as underlining links or striking through deleted content. These properties provide visual cues to improve user experience and readability.

### `text-decoration-line`

The `text-decoration-line` property specifies the type of text decoration to be applied to the text. It can take the following values:

- `none`: No text decoration is applied (default).
- `underline`: Adds an underline to the text.
- `overline`: Adds a line above the text.
- `line-through`: Adds a line through the middle of the text.
- `underline overline`: Adds both underline and overline to the text.

```css
a {
  text-decoration-line: underline;
}
```

### `text-decoration-color`

The `text-decoration-color` property defines the color of the text decoration. You can set it to a color value such as a color name, hexadecimal code, or RGB value.

```css
a {
  text-decoration-line: underline;
  text-decoration-color: #3498db;
}
```

### `text-decoration-style`

The `text-decoration-style` property controls the style of the line used in text decoration. It accepts values like `solid`, `dotted`, and `wavy`.

```css
a {
  text-decoration-line: underline;
  text-decoration-style: dotted;
}
```

## Introduction to Text Transform Properties

Text transform properties are used to change the capitalization of text or apply various text transformations for visual styling.

### `text-transform`

The `text-transform` property defines text capitalization or transformation. It accepts several values:

- `none`: No capitalization or transformation is applied.
- `capitalize`: Transforms the first letter of each word to uppercase.
- `uppercase`: Transforms all letters to uppercase.
- `lowercase`: Transforms all letters to lowercase.

```css
h1 {
  text-transform: uppercase;
}
```

## Combining Text Decoration and Text Transform

You can use both text decoration and text transform properties to customize text styling. Here's an example:

```css
a {
  text-decoration-line: underline;
  text-decoration-color: #3498db;
  text-transform: uppercase;
}
```

This CSS code underlines links while transforming their text to uppercase.

## Conclusion

Text decoration and text transform properties are valuable tools for enhancing the visual presentation of text in web pages. By using these CSS properties, you can control text styling, make text more accessible, and provide a more visually appealing reading experience for your users.
