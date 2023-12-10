# CSS `border-radius` Property Documentation

The `border-radius` property in CSS is used to create rounded corners for an element's border. It's a versatile property that allows you to control the curvature of each corner independently. This documentation covers the usage of the `border-radius` property and its sub-properties, providing examples to illustrate their application.

---

## Introduction to `border-radius`

The `border-radius` property accepts one to four values, defining the radii of the quarter ellipses that make up the corners of the element's box. The values can be specified in pixels, percentages, or using the `em` unit.

### Syntax:

```css
/* Four values for each corner */
border-radius: [top-left] [top-right] [bottom-right] [bottom-left];

/* Three values: top-left, top-right, bottom-left/right */
border-radius: [top-left] [top-right bottom-right];

/* Two values: top-left/right, bottom-left/right */
border-radius: [top-left top-right] [bottom-left bottom-right];

/* One value for all corners */
border-radius: [radius];
```

- `[top-left]`, `[top-right]`, `[bottom-right]`, `[bottom-left]`: The radius of each quarter ellipse. It can be a length (e.g., `10px`), percentage (e.g., `50%`), or `em` unit.
- `[radius]`: A single value for all four corners.

### Sub-Properties:

- `border-top-left-radius`
- `border-top-right-radius`
- `border-bottom-right-radius`
- `border-bottom-left-radius`

These sub-properties allow you to set the radius for individual corners directly.

### Example:

```css
/* Apply different radii to each corner using sub-properties */
div {
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 40px;
}
```

---

## Usage and Examples

### Rounded Corners for a Square

#### CSS:

```css
/* Create rounded corners for a square element */
.square {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  border-radius: 20px;
}
```

### Elliptical Corners

#### CSS:

```css
/* Create elliptical corners for a rectangular element */
.rectangle {
  width: 200px;
  height: 100px;
  background-color: #e74c3c;
  border-radius: 50% 10%;
}
```

### Circle with Equal Radii

#### CSS:

```css
/* Create a circular element with equal radii */
.circle {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  border-radius: 50%;
}
```

### Adjusting Individual Corners

#### CSS:

```css
/* Adjust the radii of individual corners */
.custom-shape {
  width: 150px;
  height: 100px;
  background-color: #f39c12;
  border-top-left-radius: 0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 75px;
}
```

---

## Conclusion

The `border-radius` property, along with its sub-properties, is a valuable tool for adding a touch of design to your elements by creating rounded corners. Whether you're aiming for a simple rounded rectangle, elliptical corners, or a custom shape, `border-radius` provides the flexibility to achieve various visual effects. Experiment with different values to find the curvature that best complements your design.
