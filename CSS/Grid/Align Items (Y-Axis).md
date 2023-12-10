### **Align Items (Y-Axis)**

#### Description:

The `align-items` property aligns grid items along the cross axis of the grid container. It determines how items are aligned in the cross-axis if they do not fill the container.

#### Syntax:

```css
align-items: value;
```

#### Values:

- `flex-start`: Items are packed towards the start of the cross axis.
- `flex-end`: Items are packed towards the end of the cross axis.
- `center`: Items are centered along the cross axis.
- `stretch`: Items are stretched to fill the container along the cross axis.
- `baseline`: Items are aligned based on their baseline.

#### Example:

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  align-items: center;
}
```

In this example, the items are centered along the cross axis.
