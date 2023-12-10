## Advanced Grid Layout in CSS

### Grid Column Start

The `grid-column-start` property initiates the placement of a grid item by defining its starting grid line along the block (column) axis.

```css
.grid-item {
  grid-column-start: 1;
}
```

---

### Grid Column End

The `grid-column-end` property concludes the placement of a grid item by specifying its ending grid line along the block (column) axis.

```css
.grid-item {
  grid-column-end: 3;
}
```

---

### Grid Column (Shorthand)

The `grid-column` shorthand property streamlines the process by setting both `grid-column-start` and `grid-column-end` in a single declaration. It can also leverage the `span` keyword to determine the number of grid tracks the item should span.

```css
.grid-item {
  grid-column: 2 / span 3;
}
```

---

### Grid Row (Shorthand)

The `grid-row` shorthand property efficiently sets both `grid-row-start` and `grid-row-end` in a single declaration. The `span` keyword can also be utilized to specify the number of grid tracks the item should span.

```css
.grid-item {
  grid-row: 1 / 2;
}
```

---

### Grid Gap

The `grid-gap` property establishes the spacing between rows and columns in a grid container, offering a convenient shorthand for both `grid-row-gap` and `grid-column-gap`.

```css
.grid-container {
  grid-gap: 10px;
}
```

---

### Grid Auto Columns

The `grid-auto-columns` property configures the size of columns in a grid container when they are implicitly created by the `grid-auto-flow` property.

```css
.grid-container {
  grid-auto-columns: 100px;
}
```

---

### Grid Auto Rows

The `grid-auto-rows` property determines the size of rows in a grid container when they are implicitly created by the `grid-auto-flow` property.

```css
.grid-container {
  grid-auto-rows: 50px;
}
```

---

### Grid Auto Flow

The `grid-auto-flow` property grants control over the auto-placement algorithm, specifying the direction and order in which the browser should place items.

```css
.grid-container {
  grid-auto-flow: dense row;
}
```

---7
