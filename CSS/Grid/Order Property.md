**CSS Grid Documentation: `order` Property**

## Introduction

The `order` property in CSS Grid Layout is a powerful tool that allows developers to control the visual order of grid items independently of their source order in the HTML markup. It is particularly useful when reordering items for different screen sizes or creating visually engaging layouts.

## `order` Property Syntax

The `order` property is applied to individual grid items. The syntax is straightforward:

```css
.item {
  order: <integer>;
}
```

- `<integer>`: A positive or negative integer value representing the desired order of the grid item.

## How the `order` Property Works

The `order` property assigns a numerical value to grid items, influencing their placement within the grid container. Items with a lower order value appear earlier in the visual order, while those with a higher order value appear later.

## Example Usage

Consider the following HTML structure:

```html
<div class="container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
</div>
```

And the corresponding CSS:

```css
.item1 { order: 3; }
.item2 { order: 1; }
.item3 { order: 2; }
```

In this example, despite the original HTML order, the visual order of the items will be 2, 3, 1 due to the assigned `order` values.

## Use Cases

- **Responsive Layouts:** Adjust the visual order of items based on screen size to enhance readability or emphasize important content.

- **Tabular Data:** Reorder columns in a grid layout to prioritize essential information for improved user experience.

## Best Practices

- Use the `order` property judiciously to enhance the layout without compromising the accessibility or readability of the content.

- Avoid excessive use of the `order` property, as it can make the code harder to maintain and understand.
