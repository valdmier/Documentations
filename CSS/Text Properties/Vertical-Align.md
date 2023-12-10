# CSS `vertical-align` Property Documentation

The CSS `vertical-align` property is used to control the vertical alignment of inline or inline-block elements within their containing elements. This property allows you to specify how an element should be aligned vertically concerning the baseline or bottom of the line box.

## Introduction to the `vertical-align` Property

In CSS, the `vertical-align` property is applied to inline or inline-block elements to control their vertical alignment within the line box. It is particularly useful when dealing with text or inline elements, such as images, icons, and inline-block elements like buttons.

## Basic Usage

To use the `vertical-align` property, you assign it a value that defines the desired vertical alignment. The available values include:

- `baseline`: Aligns the element's baseline with the baseline of the parent element.
- `top`: Aligns the top of the element with the tallest element on the line.
- `middle`: Aligns the middle of the element with the middle of the parent element's x-height.
- `bottom`: Aligns the bottom of the element with the lowest element on the line.

### Examples

#### Vertical Alignment with Baseline

```css
span {
  vertical-align: baseline;
}
```

In this example, the `span` element is aligned with the baseline of the parent element.

#### Vertical Alignment at the Top

```css
img {
  vertical-align: top;
}
```

This CSS aligns the top of the `img` element with the top of the parent element, ensuring it appears at the top of the line.

#### Middle Vertical Alignment

```css
i {
  vertical-align: middle;
}
```

The `i` element is vertically centered within the line by aligning its middle with the middle of the parent element's x-height.

#### Bottom Vertical Alignment

```css
button {
  vertical-align: bottom;
}
```

In this example, the `button` element is aligned at the bottom relative to the line box.
