### **Align Content**

#### Description:

The `align-content` property aligns a grid container's lines within the container when there is extra space in the cross-axis. It applies to multi-line grid containers.

#### Syntax:

```css
align-content: value;
```

#### Values:

- `flex-start`: Lines are packed towards the start of the cross axis.
- `flex-end`: Lines are packed towards the end of the cross axis.
- `center`: Lines are centered along the cross axis.
- `space-between`: Lines are evenly distributed along the cross axis; the first line is at the start, and the last line is at the end.
- `space-around`: Lines are evenly distributed along the cross axis with equal space around them.
- `stretch`: Lines are stretched to fill the container along the cross axis.

#### Example:

```css
.container {
  display: grid;
  grid-template-rows: 50px 50px 50px;
  align-content: space-around;
}
```

In this example, the lines are evenly distributed along the cross axis with equal space around them.
