### 1. **Justify Content (X-Axis)**

#### Description:

The `justify-content` property aligns grid items along the main axis of the grid container. It determines the distribution of extra space when items do not use all available space on the main axis.

#### Syntax:

```css
justify-content: value;
```

#### Values:

- `flex-start`: Items are packed towards the start of the main axis.
- `flex-end`: Items are packed towards the end of the main axis.
- `center`: Items are centered along the main axis.
- `space-between`: Items are evenly distributed along the main axis; the first item is at the start, and the last item is at the end.
- `space-around`: Items are evenly distributed along the main axis with equal space around them.
- `space-evenly`: Items are distributed so that the spacing between any two items (and the space before the first and after the last item) is equal.

#### Example:

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  justify-content: space-between;
}
```

In this example, the items are evenly distributed along the main axis with equal space between them.
