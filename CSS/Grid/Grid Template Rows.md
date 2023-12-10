# CSS `grid-template-rows` Property Documentation

The `grid-template-rows` property in CSS complements `grid-template-columns` by defining the number and size of rows in a grid container. It allows you to create versatile layouts by specifying the height of rows using various units. This documentation covers the basic syntax, common values, and scenarios associated with `grid-template-rows`.

## Basic Syntax

```css
grid-template-rows: value1 value2 ...;
```

The property accepts a space-separated list of values, where each value defines the height of a row.

## Common Values

### 1. **Fixed-Length Rows**

```css
.grid-container {
  grid-template-rows: 100px 200px 1fr;
}
```

Define rows with fixed lengths using absolute or relative units.

### 2. **Repeat Function**

```css
.grid-container {
  grid-template-rows: repeat(3, 1fr 2fr);
}
```

Simplify row definitions using the `repeat()` function for repeated patterns.

### 3. **Mixing Units**

```css
.grid-container {
  grid-template-rows: 100px 1fr auto;
}
```

Combine different units for flexible layouts, such as fixed-height, fractional, and auto-sized rows.

### 4. **Fractional Unit (`fr`) **

```css
.grid-container {
  grid-template-rows: 1fr 2fr 1fr;
}
```

Distribute available space proportionally among rows using the `fr` unit.

### 5. **Auto **

```css
.grid-container {
  grid-template-rows: auto 1fr auto;
}
```

Allow rows to size based on their content, with one row taking up the remaining space.

## Scenarios and Use Cases

### A. **Equal-Height Rows**

```css
.grid-container {
  grid-template-rows: repeat(3, 1fr);
}
```

Achieve an even distribution of available space among three rows.

### B. **Responsive Layout**

```css
.grid-container {
  grid-template-rows: 1fr;
}
```

Adapt to smaller screens with a single-row layout where each row takes up the entire height.

### C. **Mixed Layout**

```css
.grid-container {
  grid-template-rows: auto 1fr auto;
}
```

Combine fixed-height (`auto`) and flexible-height (`1fr`) rows for a mixed layout.

### D. **Asymmetric Layout**

```css
.grid-container {
  grid-template-rows: 1fr 2fr 1fr;
}
```

Rows are defined with varying proportions to create an asymmetric layout.

## Conclusion

The `grid-template-rows` property, along with `grid-template-columns`, empowers you to craft versatile and responsive grid structures. Whether defining fixed-length rows, using the `fr` unit for flexible heights, or combining different units, understanding these values helps you create diverse and adaptive grid layouts. Experiment with these scenarios to tailor your designs to specific requirements.
