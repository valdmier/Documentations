# CSS `text-indent` Property Documentation

The CSS `text-indent` property is used to control the indentation of the first line of a block-level element. It is particularly useful for creating well-structured and visually appealing paragraphs, lists, and other text-based content. This documentation provides an overview of the `text-indent` property and its applications.

## Introduction to Text Indentation

Text indentation refers to the horizontal space that is added at the beginning of the first line of a block-level element. The `text-indent` property allows you to adjust this indentation by specifying the distance, often in pixels or other length units, by which the text should be indented.

### Syntax

The `text-indent` property is applied using CSS. You can set it to a specific length value:

```css
p {
  text-indent: 20px;
}
```

In this example, the first line of all `<p>` elements is indented by 20 pixels.

## Examples of Text Indentation

### Basic Text Indentation

```css
p {
  text-indent: 20px;
}
```

In this example, the `text-indent` property is used to indent the first line of all `<p>` elements by 20 pixels.

### Negative Text Indentation

```css
blockquote {
  text-indent: -15px;
}
```

Here, the `text-indent` property creates a negative indentation of 15 pixels for the first line of all `<blockquote>` elements, effectively moving the text to the left.

### Using Percentage Values

```css
ul {
  text-indent: 10%;
}
```

The `text-indent` property is set to a percentage value in this example, which can be useful for responsive design. It indents the first line of all `<ul>` elements by 10% of the container's width.

### Resetting Text Indentation

```css
li {
  text-indent: 0;
}
```

To reset the text indentation for list items (`<li>`), you can simply set the `text-indent` property to 0. This ensures that the first line is not indented.

## Combining Text Indentation with Other CSS Properties

The `text-indent` property can be combined with other CSS properties to achieve specific text formatting. For example, you can adjust the indentation of a list along with the list-style type to customize the appearance of list items.

```css
ul {
  text-indent: 20px;
  list-style-type: square;
}
```

In this code, the first line of all `<ul>` elements is indented by 20 pixels, and the list-style type is set to squares.

## Conclusion

The CSS `text-indent` property is a valuable tool for controlling the indentation of the first line of block-level elements. It is commonly used in various scenarios, such as styling paragraphs, lists, and blockquotes. Understanding how to use `text-indent` effectively can improve the structure and readability of your web content.
