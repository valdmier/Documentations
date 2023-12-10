# CSS `font-weight` Property Documentation

The `font-weight` property in CSS allows you to control the thickness or boldness of text characters in web pages. It is an essential typography property that helps you create visual contrast and emphasize text elements. In this documentation, we will explore the `font-weight` property, its possible values, and how to use it effectively in your web design.

## Introduction to the `font-weight` Property

The `font-weight` property sets the thickness or boldness of characters within a text element. It can be applied to various HTML elements, including headings, paragraphs, and spans, to achieve different levels of emphasis and visual hierarchy.

### Example of `font-weight` Usage:

```css
h1 {
  font-weight: bold;
}

p {
  font-weight: normal;
}
```

In this example, the `font-weight` property is used to make the text within `<h1>` elements bold, while the text within `<p>` elements is set to its normal weight.

## Possible `font-weight` Values

The `font-weight` property accepts a range of values, allowing you to control the thickness of text characters. Common values include:

1. `normal`: The default font weight. This is equivalent to the numerical value `400`.

2. `bold`: A thicker or heavier font weight. This is equivalent to the numerical value `700`.

3. `bolder`: Increases the font weight relative to the parent element.

4. `lighter`: Decreases the font weight relative to the parent element.

5. Numerical values (**`100 to 900`**): You can specify a numerical value to set the font weight precisely. Common values are `100` (thin) to `900` (black).

---

**<u><mark>IMPORTNT</mark></u>** **Note**: Not all font support 100-900 thickness.

---

### Example of Using Numerical Values:

```css
p {
  font-weight: 600; /* Custom font weight value */
}
```

## Importance of `font-weight`

The `font-weight` property plays a significant role in web design. By adjusting the weight of text characters, you can establish visual hierarchy, create emphasis, and improve readability. Some common use cases for different font weights include:

- **Headings**: Using heavier font weights for headings can make them stand out and provide a clear hierarchy.

- **Emphasis**: Bold or thicker text can be used to emphasize important information, such as key points or call-to-action buttons.

- **Contrast**: Adjusting font weight can help create contrast between different sections of a webpage, enhancing the overall design.

## Combining `font-weight` with Font Families

You can use the `font-weight` property in combination with specific font families to achieve the desired style and emphasis. For example, you can choose a font family that offers various weights, and then adjust the `font-weight` property to fine-tune the appearance of your text elements.

### Example of Combining `font-weight` with Font Families:

```css
body {
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-weight: 700; /* Bold font weight for headings */
}

p {
  font-weight: 400; /* Normal font weight for paragraphs */
}
```

## Conclusion

The `font-weight` property in CSS is a valuable tool for controlling the thickness and boldness of text characters in your web design. By choosing the appropriate font weight and applying it strategically to different text elements, you can enhance the visual hierarchy, create emphasis, and improve the overall readability of your web pages. Understanding how to use `font-weight` effectively is essential for achieving your design goals and providing a visually appealing user experience.
