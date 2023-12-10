# Comprehensive Guide to CSS Grid: minmax, auto-fill, and auto-fit Properties

---

#### Minmax

The `minmax` function sets a flexible range for the size of grid tracks, allowing developers to create adaptable layouts.

```css
.grid-container {
  grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr);
}
```

In this example, the first column has a minimum size of 100 pixels and a maximum size of one fraction unit, while the second column has a minimum size of 200 pixels and a maximum size of two fraction units.

---

#### Auto-fill

The `auto-fill` keyword dynamically generates as many tracks as will fit, adjusting to the container's width.

```css
.grid-container {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
```

Here, columns adjust based on the container's width, each with a minimum size of 150 pixels and a maximum size of one fraction unit.

---

#### Auto-fit

Similar to `auto-fill`, `auto-fit` creates tracks dynamically. However, it collapses any empty tracks, optimizing space.

```css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

This example generates columns with a minimum size of 100 pixels and a maximum size of one fraction unit. Empty tracks are collapsed for an optimized layout.

---

### Grid Template Rows

The usage of `minmax`, `auto-fill`, and `auto-fit` is analogous when applied to grid template rows.

```css
.grid-container {
  grid-template-rows: minmax(50px, 1fr) auto-fill minmax(200px, auto-fit);
}
```

Here, the first row has a dynamic size (50 pixels to one fraction unit), subsequent rows fill available space, and the last row collapses empty tracks.

---

### Additional Cases

#### Varying Column Sizes

Combine `minmax` for specific columns and `auto-fill` for flexibility.

```css
.grid-container {
  grid-template-columns: minmax(100px, 1fr) minmax(150px, 2fr) auto-fill;
}
```

This creates a layout with a fixed-size first column, a flexible second column, and additional columns adjusting dynamically.

---

#### Responsive Row Heights

Utilize `auto-fit` to create rows that adapt to content while maintaining a minimum height.

```css
.grid-container {
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
}
```

This ensures rows adjust to content height, with a minimum of 100 pixels.
