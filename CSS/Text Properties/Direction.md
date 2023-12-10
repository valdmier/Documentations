# CSS `direction` Property Documentation

The CSS `direction` property is used to specify the text direction within an element. It controls the order in which characters are displayed, making it essential for managing the display of content in various languages.

## Introduction to the `direction` Property

The `direction` property is a fundamental CSS property for handling text directionality. It's commonly used to manage bidirectional text, which involves languages that are read from right to left (RTL), such as Arabic and Hebrew, as well as left-to-right (LTR) languages like English.

## Basic Usage

The `direction` property can take one of two values:

- `ltr` (Left-to-Right): This value indicates that the text within the element should be displayed from left to right, as in most Western languages.

- `rtl` (Right-to-Left): This value indicates that the text should be displayed from right to left, as in many Middle Eastern and South Asian languages.

---

### Examples

#### Left-to-Right Text Direction

```css
p {
  direction: ltr;
}
```

This CSS sets the text direction of the `p` element to left-to-right, suitable for languages like English.

#### Right-to-Left Text Direction

```css
div {
  direction: rtl;
}
```

In this example, the `div` element's text content will be displayed from right to left, ideal for languages like Arabic or Hebrew.
