## CSS Flexbox Documentation

## Flex Container Properties

### Display Flex

The `display` property is set to `flex` to create a flex container. All direct children of this container become flex items.

```css
.flex-container {
 display: flex;
}
```

---

### Inline-Flex (`display: inline-flex`)

- **Behaves Like `inline` and `flex` Combined:** `inline-flex` combines features of both `inline` and `flex`. It allows elements to appear inline with adjacent elements and also enables flexible box properties.

- **Respects Flexbox Properties:** Inline-flex elements can utilize flexbox properties for flexible and responsive layouts.

- **Does Not Add Line Break:** Similar to `inline`, `inline-flex` does not create line breaks, allowing elements to appear on the same line.

- **Example:**

```css
span {
  display: inline-flex;
  background-color: #2ecc71;
  color: #ffffff;
  padding: 5px;
  margin: 5px;
}
```

---

### Flex Direction

The `flex-direction` property defines the main axis of the flex container. It can be row, row-reverse, column, or column-reverse.

```css
.flex-container-row {
  flex-direction: row; /* Default value */
}

.flex-container-row-reverse {
  flex-direction: row-reverse;
}

.flex-container-column {
  flex-direction: column;
}

.flex-container-column-reverse {
  flex-direction: column-reverse;
}
```

---

### Flex Wrap

The `flex-wrap` property controls whether flex items are forced onto a single line or can be wrapped onto multiple lines in the flex container.

```css
.flex-container-wrap {
  flex-wrap: wrap;
}

.flex-container-no-wrap {
  flex-wrap: nowrap; /* Default value */
}

.flex-container-wrap-reverse {
  flex-wrap: wrap-reverse;
}
```

---

### Flex Flow Shorthand

The `flex-flow` shorthand property is a combination of `flex-direction` and `flex-wrap`. It accepts two values: `flex-direction` and `flex-wrap`.

```css
.flex-container-flow-row-wrap {
  flex-flow: row wrap;
}
```

## Flex Container Alignment Properties

---

### Justify Content (X-Axis)

The `justify-content` property aligns flex items along the main axis of the flex container. It can be flex-start, flex-end, center, space-between, or space-around.

```css
.flex-container-justify-start {
  justify-content: flex-start; /* Default value */
}

.flex-container-justify-end {
  justify-content: flex-end;
}

.flex-container-justify-center {
  justify-content: center;
}

.flex-container-justify-space-between {
  justify-content: space-between;
}

.flex-container-justify-space-around {
  justify-content: space-around;
}
```

---

### Align Items (Y-Axis)

The `align-items` property aligns flex items along the cross axis of the flex container. It can be flex-start, flex-end, center, stretch, or baseline.

```css
.flex-container-align-items-start {
  align-items: flex-start;
}

.flex-container-align-items-end {
  align-items: flex-end;
}

.flex-container-align-items-center {
  align-items: center;
}

.flex-container-align-items-stretch {
  align-items: stretch; /* Default value */
}

.flex-container-align-items-baseline {
  align-items: baseline;
}
```

---

### Align Content (On Parent for All Children)

The `align-content` property aligns a flex container's lines within the flex container when there is extra space in the cross-axis. It can be flex-start, flex-end, center, space-between, space-around, or stretch.

```css
.flex-container-align-content-start {
  align-content: flex-start;
}

.flex-container-align-content-end {
  align-content: flex-end;
}

.flex-container-align-content-center {
  align-content: center;
}

.flex-container-align-content-space-between {
  align-content: space-between;
}

.flex-container-align-content-space-around {
  align-content: space-around;
}

.flex-container-align-content-stretch {
  align-content: stretch; /* Default value */
}
```

## Flex Item Properties

---

### Align Self (On The Item Itself)

The `align-self` property allows the default alignment to be overridden for individual flex items. It can be auto, flex-start, flex-end, center, stretch, or baseline.

```css
.flex-item-align-self-auto {
  align-self: auto; /* Default value */
}

.flex-item-align-self-start {
  align-self: flex-start;
}

.flex-item-align-self-end {
  align-self: flex-end;
}

.flex-item-align-self-center {
  align-self: center;
}

.flex-item-align-self-stretch {
  align-self: stretch;
}

.flex-item-align-self-baseline {
  align-self: baseline;
}
```

---

### Order

The `order` property defines the order of a flex item relative to the other items in the flex container. It can be any integer, and the default value is 0.

```css
.flex-item-order-1 {
  order: 1;
}

.flex-item-order-2 {
  order: 2;
}
```

---

### Flex Grow

The `flex-grow` property specifies how a flex item should grow relative to the other flex items in the flex container. It is a unitless number, and the default value is 0.

```css
.flex-item-grow-1 {
  flex-grow: 0; /* Default */
}

.flex-item-grow-2 {
  flex-grow: 0.5;
}
```

---

### Flex Shrink

The `flex-shrink` property specifies how a flex item should shrink relative to the other flex items in the flex container. It is a unitless number, and the default value is 1.

```css
.flex-item-shrink-1 {
  flex-shrink: 1;
}

.flex-item-shrink-2 {
  flex-shrink: 2;
}
```

---

### Flex Basis

The `flex-basis` property defines the initial size of a flex item in the main axis before any space is distributed. It can be a length, percentage, or auto. The default value is auto.

```css
.flex-item-basis-auto {
  flex-basis: auto; /* Default value */
}

.flex-item-basis-50percent {
  flex-basis: 50%;
}

.flex-item-basis-100px {
  flex-basis: 100px;
}
```

---

### Flex Shorthand

The `flex` shorthand property is used to set the `flex-grow`, `flex-shrink`, and `flex-basis` properties in one declaration.

```css
.flex-container-shorthand {
  flex: 1 1 auto; /* Default values */
}
```

---
