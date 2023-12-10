# CSS `background-image` and `background-repeat` Documentation

The `background-image` and `background-repeat` properties in CSS are used to set background images for HTML elements and control how those images are displayed or repeated. This documentation provides an in-depth guide on how to use these properties and offers examples for various notations and input values.

---

## `background-image` Property

### Description

The `background-image` property is used to set one or more background images for an HTML element. These images are displayed behind the content of the element.

### Syntax

```css
selector {
  background-image: url('image-path');
}
```

### Example

```css
div {
  background-image: url('background-image.jpg');
}
```

### Multiple Background Images

You can use multiple images as a comma-separated list.

```css
div {
  background-image: url('image1.jpg'), url('image2.jpg');
}
```

## `background-repeat` Property

### Description

The `background-repeat` property determines how a background image is repeated within its containing element.

### Syntax

```css
selector {
  background-repeat: value;
}
```

### Possible Values

- `repeat`: The image is repeated both horizontally and vertically (default).
- `repeat-x`: The image is repeated horizontally.
- `repeat-y`: The image is repeated vertically.
- `no-repeat`: The image is not repeated.
- `space`: The image is repeated, but it creates equal spacing between images, filling the container.
- `round`: The image is repeated, but it adjusts the number of repetitions to fill the container evenly.

### Example

```css
div {
  background-image: url('background-image.jpg');
  background-repeat: no-repeat;
}
```

### Combining `background-image` and `background-repeat`

```css
div {
  background-image: url('background-image.jpg');
  background-repeat: repeat-x;
}
```

## Examples for Various Notations and Inputs

### Using URLs

```css
div {
  background-image: url('image-path.jpg');
}
```

### Using Data URLs

```css
div {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wAA
AAAAAG2NI1QAAAABJRU5ErkJggg==');
}
```

### Using Linear Gradient

```css
div {
  background-image: linear-gradient(to right, #3498db, #f47983);
}
```

### Using Radial Gradient

```css
div {
  background-image: radial-gradient(circle at center, #3498db, #f47983);
}
```

### Using Multiple Background Images

```css
div {
  background-image: url('image1.jpg'), url('image2.jpg');
}
```

### Using `background-repeat` Values

```css
div {
  background-image: url('background-image.jpg');
  background-repeat: repeat-x;
}
```

### Using `space` and `round`

```css
div {
  background-image: url('background-image.jpg');
  background-repeat: space;
}
```

## Conclusion

The `background-image` and `background-repeat` properties are essential tools for controlling the visual appearance of HTML elements. They allow you to add background images and define how they are displayed, repeated, or positioned. By mastering these properties, you can create visually appealing and dynamic web designs.
