# CSS Margin Collapse Documentation

Margin collapse is a behavior in CSS where the vertical margins of adjacent block-level elements are combined, resulting in a single margin that is equal to the largest of the individual margins. This documentation provides an overview of margin collapse rules, examples, and considerations.

---

## Understanding Margin Collapse

### 1. Vertical Margin Collapse

Margin collapse occurs exclusively in the vertical direction, affecting the top and bottom margins of block-level elements.

### 2. Overlapping of Margins

When adjacent elements have vertical margins, the margin collapse behavior ensures that the larger margin takes precedence, and the smaller margin overlaps into the larger one.

### 3. No Separation by Another Element

Margin collapse is most prominent when there is no separating element between two adjacent block-level elements. If another element (like a border or padding) intervenes, margin collapse is mitigated.

### 4. Nesting Doesn't Prevent Collapse

Nested elements do not prevent margin collapse between the parent and its children. The margins of the parent and the first/last child can still collapse.

---

## Examples of Margin Collapse

### Example 1: Simple Margin Collapse

**HTML:**

```html
<div class="box"></div>
<div class="box"></div>
```

**CSS:**

```css
.box {
  margin-top: 20px;
  margin-bottom: 30px;
}

/* Margin collapse between adjacent divs */
.box + .box {
  margin-top: 40px; /* Larger margin collapses with the margin of the previous div */
}
```

### Example 2: Margin Collapse with Parent and Child

**HTML:**

```html
<div class="parent">
  <div class="child"></div>
</div>
```

**CSS:**

```css
.parent {
  margin-bottom: 20px;
}

.child {
  margin-top: 30px;
}

/* Margin collapse between parent and child */
.parent + .child {
  margin-top: 30px; /* Larger margin collapses with the margin of the parent */
}
```

### Example 3: Nested Elements

**HTML:**

```html
<div class="outer">
  <div class="inner"></div>
</div>
```

**CSS:**

```css
.outer {
  margin-bottom: 20px;
}

.inner {
  margin-top: 30px;
}

/* Margin collapse between nested elements */
.outer + .inner {
  margin-top: 30px; /* Larger margin collapses with the margin of the outer element */
}
```

---

## Additional Information

- Margin collapsing occurs in three basic cases: adjacent siblings, no content separating parent and descendants, and empty blocks.
- Complex margin collapsing happens when these cases are combined.
- The rules apply even to margins that are zero.
- When negative margins are involved, the size of the collapsed margin is determined by the sum of the largest positive margin and the smallest (most negative) negative margin.
- Margin collapse is only relevant in the vertical direction.
- Margins don't collapse in a container with `display` set to `flex` or `grid`.
