# CSS `text-align` Property Documentation

The CSS `text-align` property is used to control the horizontal alignment of text within its containing element. It specifies how text should be aligned in relation to the element's box.

## Introduction to the `text-align` Property

The `text-align` property allows you to define how text content should be aligned horizontally within a block-level element. It is particularly useful for controlling the alignment of text within elements like paragraphs, headings, and divs.

## Basic Usage

The `text-align` property accepts several values, including:

- `left`: This value aligns the text to the left edge of the element's content box.
- `right`: It aligns the text to the right edge of the content box.
- `center`: This value centers the text horizontally within the content box.
- `justify`: It justifies the text, ensuring that both the left and right edges align with the content box.

---

### Examples

#### Left-Aligned Text

```css
p {
  text-align: left;
}
```

In this example, the `p` element's text is left-aligned within its content box.

#### Right-Aligned Text

```css
div {
  text-align: right;
}
```

This CSS right-aligns the text content of the `div` element within its box.

#### Centered Text

```css
h2 {
  text-align: center;
}
```

The `h2` element's text is horizontally centered within the element's content box.

#### Justified Text

```css
article {
  text-align: justify;
}
```

In this example, the text in the `article` element is justified, creating even left and right edges.
