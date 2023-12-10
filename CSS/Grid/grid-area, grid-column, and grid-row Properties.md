# **CSS Grid Documentation: `grid-area`, `grid-column`, and `grid-row` Properties**

## `grid-area` Property

The `grid-area` property is a shorthand property that combines `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end` properties. It defines a grid item's size and location within the grid container. The syntax is as follows:

```css
.item {
  grid-area: row-start / column-start / row-end / column-end;
}
```

- `row-start`: The starting row line for the grid item.
- `column-start`: The starting column line for the grid item.
- `row-end`: The ending row line for the grid item.
- `column-end`: The ending column line for the grid item.

## `grid-column` Property

The `grid-column` property is a shorthand property that specifies a grid item's location within the grid container along the column axis. It accepts two values, representing the starting and ending positions of the grid item on the column axis. The syntax is as follows:

```css
.item {
  grid-column: column-start / column-end;
}
```

- `column-start`: The starting column line for the grid item.
- `column-end`: The ending column line for the grid item.

## `grid-row` Property

The `grid-row` property is a shorthand property that defines a grid item's location within the grid container along the row axis. It accepts two values, representing the starting and ending positions of the grid item on the row axis. The syntax is as follows:

```css
.item {
  grid-row: row-start / row-end;
}
```

- `row-start`: The starting row line for the grid item.
- `row-end`: The ending row line for the grid item.

## Examples

### Example 1: Using `grid-area`

```css
.item1 {
  grid-area: 1 / 1 / 3 / 3;
}

.item2 {
  grid-area: 1 / 3 / 2 / 5;
}
```

### Example 2: Using `grid-column` and `grid-row`

```css
.item3 {
  grid-column: 2 / 4;
  grid-row: 2 / 4;
}
```

## Best Practices

- Use the `grid-area` property for concise positioning and sizing of grid items.
- Utilize `grid-column` and `grid-row` properties when you need to set positions separately for column and row axes.












