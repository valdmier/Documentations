Certainly, here's the documentation with horizontal lines (---) added between each section for better separation:

---

# CSS `white-space` Property Documentation

The CSS `white-space` property is used to control how whitespace, including spaces, tabs, and line breaks, within an HTML element's content should be handled. This property provides you with options to influence how text wraps, breaks, and behaves when it encounters different types of whitespace. In this documentation, we will explore the `white-space` property, its values, and how it affects the presentation of text content.

---

## Introduction to the `white-space` Property

The `white-space` property in CSS allows you to define how whitespace characters within text content should be displayed. It provides several values that control the handling of spaces, tabs, and line breaks. Understanding and using the `white-space` property can greatly impact the layout and readability of your web content.

### Syntax

You can apply the `white-space` property using CSS, and it accepts the following values:

- `normal`: The default value. It collapses multiple spaces into a single space and wraps text when necessary.
- `nowrap`: Prevents text from wrapping to the next line, ensuring that long lines extend beyond the element's container.
- `pre`: Preserves whitespace characters exactly as they are in the source code, including spaces, tabs, and line breaks.
- `pre-line`: Collapses consecutive spaces and line breaks but wraps text when necessary.
- `pre-wrap`: Preserves spaces and line breaks but wraps text when necessary.
- `break-spaces`: Preserves spaces and line breaks, allowing text to break at spaces when necessary.

---

## Examples of `white-space`

### Normal White-Space Handling

```css
p {
  white-space: normal;
}
```

In this example, the `white-space` property is set to `normal` for all `<p>` elements. Multiple spaces will be collapsed into a single space, and text will wrap when necessary.

### No Wrapping (No Line Breaks)

```css
code {
  white-space: nowrap;
}
```

For `<code>` elements, setting `white-space` to `nowrap` prevents text from wrapping. Long lines extend beyond the container, and spaces and tabs are preserved.

### Preformatted Text (Preserving All Whitespace)

```css
pre {
  white-space: pre;
}
```

The `pre` element uses `white-space: pre` to preserve all whitespace characters as they are in the source code, including spaces, tabs, and line breaks.

### Collapsed White-Space

```css
div {
  white-space: pre-line;
}
```

For `<div>` elements, setting `white-space` to `pre-line` collapses consecutive spaces and line breaks but wraps text when necessary.

### Preserving Spaces and Line Breaks

```css
blockquote {
  white-space: pre-wrap;
}
```

Here, the `white-space` property is set to `pre-wrap` for all `<blockquote>` elements, preserving spaces and line breaks while wrapping text when necessary.

### Line Breaks at Spaces

```css
address {
  white-space: break-spaces;
}
```

In this example, the `address` element uses `white-space: break-spaces` to preserve spaces and line breaks, allowing text to break at spaces when necessary.

---

## Use Cases

### Code Blocks

```css
code {
  white-space: pre;
}
```

When displaying code blocks, such as within `<code>` elements, using `white-space: pre` preserves spaces, tabs, and line breaks exactly as they appear in the source code.

### Long URLs

```css
a.url {
  white-space: nowrap;
}
```

For long URLs or text strings, applying `white-space: nowrap` can prevent text from breaking across lines and improve the presentation.

---

## Conclusion

The CSS `white-space` property is a valuable tool for controlling how whitespace within text content is displayed. By choosing the appropriate value for `white-space`, you can influence text wrapping, the preservation of whitespace characters, and the overall layout of your web content. Understanding the different `white-space` values and their effects is essential for achieving the desired text presentation in web design.
