# CSS `overflow` Property Documentation

The CSS `overflow` property is used to control what happens when the content of an element overflows its box. It's a fundamental property for managing content that doesn't fit within its container. This documentation provides an in-depth explanation of the `overflow` property, including its possible values and sub-properties.

## Introduction to the `overflow` Property

The `overflow` property allows you to specify how to handle content that exceeds the dimensions of an element's box, whether it's an element's width, height, or both. This is particularly useful for handling content in containers like divs, paragraphs, and scrollable areas.

## The `overflow` Property Values

The `overflow` property can take the following values:

- `visible`: This is the default value. It allows content to overflow the container without any clipping, making it visible outside the box.

- `hidden`: This value hides any overflowing content, clipping it so it's not visible.

- `scroll`: It adds scrollbars to the container, allowing the user to scroll and view the clipped content.

- `auto`: Similar to `scroll`, it adds scrollbars, but only if there's overflowing content. If the content fits within the container, there won't be any scrollbars.

---

## Sub-Properties

### The `overflow-x` and `overflow-y` Sub-Properties

The `overflow` property also has sub-properties, `overflow-x` and `overflow-y`, which allow you to control the overflow behavior separately for the horizontal (`x`) and vertical (`y`) dimensions. These sub-properties can take the same values as the main `overflow` property.

```css
/* Example: Controlling overflow on the horizontal and vertical axes */
div {
  overflow-x: scroll;
  overflow-y: hidden;
}
```

----

## Example: Using `overflow` for a Scrollable Container

```css
.scrollable-container {
  width: 300px;
  height: 150px;
  border: 1px solid #ccc;
  overflow-y: auto; /* Adds scrollbars if content overflows */
}
```

```html
<div class="scrollable-container">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel facilisis purus. Curabitur auctor et neque ac venenatis.
  </p>
</div>
```

In this example, the `overflow: auto;` value adds scrollbars to the `.scrollable-container` when the content overflows its dimensions.

## Conclusion

The CSS `overflow` property, along with its values and sub-properties, is a powerful tool for controlling content that overflows its container. By understanding and using these properties effectively, you can ensure that your web pages provide a smooth and user-friendly experience for handling overflowed content.
