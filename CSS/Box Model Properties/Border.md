# CSS Border Property Documentation

The CSS `border` property is a versatile property that allows you to define the style, width, and color of an element's border. Borders are commonly used to create separation between elements and improve the overall design of web pages. This documentation provides a comprehensive explanation of the `border` property and its various sub-properties.

---

## Anatomy of the `border` Property

The `border` property can be set as a shorthand or split into individual properties. It consists of the following components:

1. `border-width`: Specifies the width of the border.
2. `border-style`: Defines the style of the border.
3. `border-color`: Specifies the color of the border.

These sub-properties can be set separately, allowing fine-grained control over the appearance of borders.

## Setting the `border` Property

The `border` property can be defined in three ways:

### 1. Shorthand `border` Property

The shorthand property combines all sub-properties into a single declaration. The order is as follows: `border-width`, `border-style`, and `border-color`.

#### Example:

```css
div {
  border: 2px dashed #ff6600;
}
```

### 2. Individual Border Properties

You can set the `border` properties individually for more control over each aspect. Use `border-width`, `border-style`, and `border-color` separately.

#### Example:

```css
div {
  border-width: 2px;
  border-style: dashed;
  border-color: #ff6600;
}
```

### 3. Border-Specific Properties

Certain elements have dedicated properties for setting border styles on specific sides, such as `border-top`, `border-left`, `border-right`, and `border-bottom`. These properties accept the same values as the `border` property.

#### Example:

```css
div {
  border-top: 2px solid #ff6600;
  border-left: 1px dotted #333333;
}
```

## Border Properties and Values

### Border Width (`border-width`)

The `border-width` property determines the thickness of the border. You can use predefined values like `thin`, `medium`, and `thick`, or specify the width using length units (e.g., `px`, `em`, `rem`).

#### Example:

```css
div {
  border-width: 3px; /* Set a 3-pixel border width */
}
```

### Border Style (`border-style`)

The `border-style` property defines the style of the border, such as `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, and more.

#### Example:

```css
div {
  border-style: dashed; /* Create a dashed border */
}
```

### Border Color (`border-color`)

The `border-color` property specifies the color of the border. You can use color keywords, HEX values, RGB values, or other valid CSS color representations.

#### Example:

```css
div {
  border-color: #ff6600; /* Set an orange border color */
}
```

## Border on Individual Sides

Borders can be applied to specific sides of an element using properties like `border-top`, `border-right`, `border-bottom`, and `border-left`. These properties accept the same values as the `border` property and allow for unique styling on each side.

#### Example:

```css
div {
  border-top: 1px solid #333333; /* Create a solid top border */
  border-left: 2px dotted #ff6600; /* Create a dotted left border */
}
```

## Border Radius (`border-radius`)

The `border-radius` property enables the creation of rounded corners for elements. You can specify the radius for each corner individually using properties like `border-top-left-radius`, `border-top-right-radius`, `border-bottom-left-radius`, and `border-bottom-right-radius`.

#### Example:

```css
div {
  border-radius: 10px; /* Create equal-radius corners for all sides */
}
```

## Rounded Borders on Individual Sides

For rounded borders on specific sides, use the `border-top-left-radius`, `border-top-right-radius`, `border-bottom-left-radius`, and `border-bottom-right-radius` properties.

#### Example:

```css
div {
  border-top-left-radius: 10px; /* Create a rounded top-left corner */
  border-bottom-right-radius: 20px; /* Create a rounded bottom-right corner */
}
```

## Conclusion

The CSS `border` property and its associated sub-properties (`border-width`, `border-style`, `border-color`, and `border-radius`) provide extensive control over the visual presentation of borders surrounding HTML elements. Mastering these properties enables the creation of appealing and well-defined web designs.
