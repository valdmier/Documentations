# CSS Size Units Documentation

In CSS (Cascading Style Sheets), size units play a crucial role in defining the dimensions and layout of web elements. There are various size units available, each with its specific characteristics and use cases. In this documentation, we will explore common CSS size units, including `em`, `rem`, `px`, percentage (%), `vw`, `vmin`, and `vh`.

---

## `em` (Relative to the Font Size of the Parent)

The `em` unit is a relative unit that is typically relative to the font size of the parent element. If an element has a `font-size` of `16px`, and you set its `width` to `2em`, it will be `32px` wide because it's two times the parent's font size.

Example:

```css
p {
  font-size: 16px;
}

.child {
  width: 2em; /* 2 * 16px = 32px */
}
```

----

## `rem` (Relative to the Root Font Size)

The `rem` unit is also a relative unit, but it is relative to the root (`html`) font size. This unit is useful for maintaining consistent sizing across your website, as it's not affected by nested elements' font sizes.

Example:

```css
html {
  font-size: 16px; /*html gives fonts a default of 16px */
}

.child {
  font-size: 1.5rem; /* 1.5 * 16px = 24px */
}
```

---

## `px` (Pixels)

The `px` unit is an absolute unit and represents a fixed size in pixels. It provides precise control over element dimensions but does not scale with the user's settings. 

Example:

```css
div {
  width: 100px;
  height: 50px;
}
```

---

## Percentage (%)

Percentage units are relative to the parent element's size. They are widely used for responsive design and scaling elements based on their container.

Example:

```css
.parent {
  width: 200px;
}

.child {
  width: 50%; /* 50% of the parent's width (100px) */
}
```

---

## `vw` (Viewport Width)

The `vw` unit is relative to the viewport width, which is the width of the browser window. Using `vw` allows you to create responsive designs that adapt to different screen sizes.

Example:

```css
.container {
  width: 50vw; /* 50% of the viewport width */
}
```

---

## `vmin` (Viewport Minimum)

The `vmin` unit is relative to the smaller dimension of the viewport (either width or height). It's helpful for maintaining a responsive design in both landscape and portrait orientations.

Example:

```css
.container {
  font-size: 3vmin; /* 3% of the smaller viewport dimension */
}
```

----

## `vh` (Viewport Height)

The `vh` unit is relative to the viewport height, making it useful for elements that need to scale based on the vertical screen size.

Example:

```css
.header {
  height: 20vh; /* 20% of the viewport height */
}
```
