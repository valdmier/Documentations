# CSS Outline Property Documentation

The CSS `outline` property allows you to add a line around an element, creating a visible border. It's often used for highlighting elements like links or form fields when they gain focus. This documentation provides a comprehensive explanation of the `outline` property and its various sub-properties.

---

## Anatomy of the `outline` Property

The `outline` property can be set as a shorthand or split into individual properties. It consists of the following components:

1. `outline-width`: Specifies the width of the outline.
2. `outline-style`: Defines the style of the outline.
3. `outline-color`: Specifies the color of the outline.

These sub-properties can be set separately, allowing fine-grained control over the appearance of outlines.

## Setting the `outline` Property

The `outline` property can be defined in three ways:

### 1. Shorthand `outline` Property

The shorthand property combines all sub-properties into a single declaration. The order is as follows: `outline-width`, `outline-style`, and `outline-color`.

#### Example:

```css
a:focus {
  outline: 2px dashed #ff6600;
}
```

### 2. Individual Outline Properties

You can set the `outline` properties individually for more control over each aspect. Use `outline-width`, `outline-style`, and `outline-color` separately.

#### Example:

```css
a:focus {
  outline-width: 2px;
  outline-style: dashed;
  outline-color: #ff6600;
}
```

## Outline Properties and Values

### Outline Width (`outline-width`)

The `outline-width` property determines the thickness of the outline. You can use predefined values like `thin`, `medium`, and `thick`, or specify the width using length units (e.g., `px`, `em`, `rem`).

#### Example:

```css
a:focus {
  outline-width: 3px; /* Set a 3-pixel outline width */
}
```

### Outline Style (`outline-style`)

The `outline-style` property defines the style of the outline, such as `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, and more.

#### Example:

```css
a:focus {
  outline-style: dashed; /* Create a dashed outline */
}
```

### Outline Color (`outline-color`)

The `outline-color` property specifies the color of the outline. You can use color keywords, HEX values, RGB values, or other valid CSS color representations.

#### Example:

```css
a:focus {
  outline-color: #ff6600; /* Set an orange outline color */
}
```

## Differences Between `border` and `outline`

The `border` and `outline` properties serve similar visual purposes but have essential differences:

1. **Positioning:** Borders are rendered within the box model of an element and affect its dimensions. Outlines, on the other hand, are drawn outside the box model and do not affect the element's dimensions.

2. **Limitations:** Outlines are ideal for accessibility and user interface highlighting, but they are less versatile than borders in terms of styling. For complex border designs, the `border` property is a better choice.

3. **Interaction:** Outlines are commonly used to highlight focused elements, such as links, form inputs, and buttons. This enhances user experience and accessibility.

4. **Accessibility:** Outlines are essential for keyboard navigation and screen readers, providing clear focus indicators for interactive elements.

## Conclusion

The CSS `outline` property and its associated sub-properties (`outline-width`, `outline-style`, and `outline-color`) are valuable tools for enhancing the accessibility and usability of web pages. While it may seem similar to the `border` property, the primary purpose of outlines is to improve user interface interaction, especially in the context of focus indicators. Understanding when and how to use `outline` is key to creating user-friendly web designs.
