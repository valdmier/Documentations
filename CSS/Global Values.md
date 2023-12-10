# CSS Global Values Documentation

## Overview

CSS Global Values are keywords that can be applied to various CSS properties to define their values in a consistent way across different properties. This documentation provides an in-depth explanation of the global values `initial`, `inherit`, `unset`, `revert`, and `revert-layer`, along with examples of their usage.

---

### `initial` Value

The `initial` keyword applies the initial (or default) value of a property to an element. It can be used for any CSS property, including the shorthand property `all`. When `all` is set to `initial`, all CSS properties are restored to their respective initial values.

#### Examples

```css
/* Example: Reset color for an element */
p {
  color: red;
}

em {
  color: initial; /* Restores color to initial value */
}
```

---

### `inherit` Value

The `inherit` keyword makes an element's property the same as its parent. It sets the property to its inherited value. It can be used for any CSS property, including the `all` shorthand property.

#### Examples

```css
/* Example: Inherit font styles from the parent */
.parent {
  font-size: 16px;
  color: blue;
}

.child {
  font-size: inherit; /* Inherits font size from the parent */
  color: inherit;    /* Inherits color from the parent */
}
```

---

### `unset` Value

The `unset` keyword sets a property to its inherited value if it inherits, and to its initial value if it does not. It can be applied to any CSS property, including the `all` shorthand property.

#### Examples

```css
/* Example: Unset border color for paragraphs inside a div */
div {
  border: 1px solid green;
}

p {
  border-color: unset; /* Resets border color to inherited or initial value */
}
```

---

### `revert` Value

The `revert` keyword reverts the cascaded value of a property to the value the property would have had if no changes had been made by the current style origin (Browser). It can be used for any CSS property, including the `all` shorthand property.

#### Examples

```css
/* Example: Revert font-weight and color */
h3 {
  font-weight: normal;
  color: blue;
}

/* Revert values to user-agent or user defaults */
h3.revert-example {
  all: revert;
}
```

---

### `revert-layer` Value

The `revert-layer` keyword rolls back the cascade to a previous cascade layer if one exists. If no other cascade layer exists, the properties will revert to the matching rule in the current layer or a previous style origin. It can be used for any CSS property, including the `all` shorthand property.

#### Examples

```css
/* Example: Revert properties to a previous cascade layer */
h3 {
  font-weight: normal;
  color: blue;
}

/* Revert values to a previous cascade layer */
h3.revert-layer-example {
  all: revert-layer;
}
```


