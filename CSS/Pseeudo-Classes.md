# CSS Pseudo-Classes Documentation

Pseudo-classes in CSS are selectors that enable you to style elements based on their state or position in the document. They provide a powerful way to target specific elements without the need for additional classes or IDs. This documentation covers various pseudo-classes and their applications.

## Introduction to Pseudo-Classes

Pseudo-classes are denoted by a colon `:` followed by the pseudo-class name. They are used to style elements based on dynamic conditions, user interaction, or specific structural characteristics.

---

**NOTE:** Pseudo-elements use `:`.

---

### Example of Using Pseudo-Classes:

```css
a:hover {
  color: red; /* Styles the link when hovered over */
}
```

## Common Pseudo-Classes

### `:hover`

The `:hover` pseudo-class is used to style an element when the user hovers over it.

```css
button:hover {
  background-color: lightblue; /* Styles the button on hover */
}
```

### `:active`

The `:active` pseudo-class styles an element while it is being activated (clicked or pressed).

```css
a:active {
  text-decoration: underline; /* Underlines a link when clicked */
}
```

### `:focus`

The `:focus` pseudo-class targets an element that currently has focus, typically used with form elements.

```css
input:focus {
  border: 2px solid blue; /* Adds a blue border to the focused input */
}
```

### `:nth-child`

The `:nth-child` pseudo-class selects elements based on their position in a parent container.

```css
li:nth-child(even) {
  background-color: #f2f2f2; /* Styles even list items in a container */
}
```

### `:not`

The `:not` pseudo-class selects elements that do not match a specified selector.

```css
input:not(:checked) {
  border-color: red; /* Styles unchecked checkboxes with a red border */
}
```

### `:first-child` and `:last-child`

These pseudo-classes select the first and last child elements of a parent.

```css
li:first-child {
  font-weight: bold; /* Styles the first list item in a container */
}

li:last-child {
  color: green; /* Styles the last list item in a container */
}
```

## Dynamic States and User Interaction

Pseudo-classes are particularly useful for styling elements based on user interaction and dynamic states. By leveraging these selectors, you can create more engaging and responsive web designs without the need for JavaScript.

---

## Common Pseudo-Classes

 Here are the 20 most commonly used pseudo-classes:

| Pseudo-Class        | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| :hover              | Styles an element when hovered over.                              |
| :active             | Styles an element while being activated (clicked).                |
| :focus              | Styles an element that currently has focus.                       |
| :nth-child()        | Selects elements based on their position in a parent.             |
| :not()              | Selects elements that do not match a specified selector.          |
| :first-child        | Selects the first child element of a parent.                      |
| :last-child         | Selects the last child element of a parent.                       |
| :nth-of-type()      | Selects elements based on their type and position.                |
| :first-of-type      | Selects the first element of a specific type.                     |
| :last-of-type       | Selects the last element of a specific type.                      |
| :nth-last-child()   | Selects elements based on their position from the end.            |
| :nth-last-of-type() | Selects elements based on their type and position from the end.   |
| :only-child         | Selects elements that are the only child of their parent.         |
| :only-of-type       | Selects elements that are the only of their type in their parent. |
| :empty              | Selects elements that have no children.                           |
| :checked            | Selects checked input elements.                                   |
| :disabled           | Selects disabled input elements.                                  |
| :enabled            | Selects enabled input elements.                                   |
| :visited            | Selects visited links.                                            |

These pseudo-classes cover a range of scenarios, from styling based on user interaction (`:hover`, `:active`) to structural positioning (`:first-child`, `:nth-child()`) and more.

## Dynamic States and User Interaction

Pseudo-classes are particularly useful for styling elements based on user interaction and dynamic states. By leveraging these selectors, you can create more engaging and responsive web designs without the need for JavaScript.

## Conclusion

Understanding and utilizing CSS pseudo-classes enhance your ability to style elements dynamically based on various conditions. Whether it's adjusting styles on user interaction or targeting specific structural positions, pseudo-classes provide a versatile toolset for crafting modern and interactive web designs.
