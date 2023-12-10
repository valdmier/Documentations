# CSS `z-index` Property Documentation

The `z-index` property in CSS is used to control the stacking order of elements in the web page. It determines which elements are displayed in front of or behind others, allowing you to create layered layouts and visual effects. In this documentation, we will explore the `z-index` property, its possible values, and how to use it effectively in web design.

## Introduction to the `z-index` Property

The `z-index` property assigns a stacking context to elements and defines their order within that context. It is particularly useful when you have overlapping elements and need to specify their relative depth.

### Example of `z-index` Usage:

```css
div {
  z-index: 2;
}
```

In this example, the `div` element is assigned a `z-index` of `2`, indicating its position in the stacking order.

---

## Possible `z-index` Values

The `z-index` property accepts integer values, and elements with higher values appear in front of those with lower values. Commonly used values include:

- `auto`: The default value, elements are stacked according to their position in the document flow.

- `0`: Elements are stacked at the base level, without any elevation.

- Positive integers: Higher values indicate elements should appear on top of those with lower values.

- Negative integers: Lower values indicate elements should appear behind those with higher values.

---

### Example of Using `z-index` Values:

```css
.overlay {
  z-index: 3; /* Displayed above elements with lower z-index */
}
```

---

## Combining `z-index` with `position`

**<mark>IMPORTANT </mark> Note:**  `z-index` is that it only works when the `position` property is applied to an element. Without a specified position, `z-index` has no effect.

---

### Example of Combining `z-index` with `position`:

```css
.modal {
  position: absolute;
  z-index: 4; /* Stacking context for the modal */
}
```

In this example, the `modal` element is positioned `absolute`, enabling the `z-index` property to control its stacking order.

---

## Common Use Cases

- **Layered Menus**: Use `z-index` to create dropdown menus that appear above other content.

- **Modal Dialogs**: Apply `z-index` to make modal dialogs or pop-up windows appear in front of the main content.

- **Overlays**: Create overlays or tooltips with controlled stacking order using `z-index`.

- **Complex Layouts**: Use `z-index` to manage the stacking order of elements in intricate layouts, such as overlapping cards or grids.

---

## Conclusion

The `z-index` property in CSS is a vital tool for controlling the stacking order of elements within a web page. By assigning appropriate values to `z-index`, you can create layered layouts, interactive menus, and complex design compositions. Remember that `z-index` works in conjunction with the `position` property. 
