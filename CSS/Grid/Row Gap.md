# CSS `row-gap` Property Documentation

The `row-gap` property in CSS complements the `column-gap` property by defining the vertical spacing between grid rows within a container. This documentation covers the basic syntax, common values, and scenarios associated with the `row-gap` property.

## Basic Syntax

```css
row-gap: value;
```

Similar to `column-gap`, this property accepts a single value that defines the gap between rows.

## Common Values

### 1. **Fixed Length**

```css
.grid-container {
  row-gap: 15px;
}
```

Set a fixed gap of `15px` between rows.

### 2. **Percentage**

```css
.grid-container {
  row-gap: 3%;
}
```

Define the gap as a percentage of the container height.

### 3. **Em Unit**

```css
.grid-container {
  row-gap: 1.5em;
}
```

Use the `em` unit for a gap relative to the font size of the container.

## Scenarios and Use Cases

### A. **Consistent Vertical Spacing**

```css
.grid-container {
  row-gap: 20px;
}
```

Maintain a uniform gap of `20px` between all rows.

### B. **Responsive Vertical Spacing**

```css
.grid-container {
  row-gap: 5%;
}
```

Adapt the gap to be a percentage of the container height for responsive layouts.

### C. **Balancing Vertical and Horizontal Gaps**

```css
.grid-container {
  column-gap: 15px;
  row-gap: 10px;
}
```

Combine `column-gap` and `row-gap` to achieve balanced spacing between columns and rows.

## Conclusion

The `row-gap` property complements `column-gap` to provide comprehensive control over the grid layout. By understanding and experimenting with different values, you can ensure harmonious vertical spacing between rows.
