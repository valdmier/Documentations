# CSS `filter` Property Documentation

The `filter` property in CSS is a powerful tool that allows you to apply various visual effects to HTML elements. It enhances the presentation of images and elements by applying filters, creating a range of visual effects. Below are seven commonly used values for the `filter` property.

## Filter Values

| Value           | Description                                                                                                                                                                                                         | Example                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `grayscale(n)`  | Converts the element to grayscale. The `n` value (0 to 100) determines the level of grayscale, where 0 is no grayscale and 100 is full grayscale.                                                                   | `filter: grayscale(50%);`    |
| `sepia(n)`      | Applies a sepia tone to the element. The `n` value (0 to 100) controls the intensity of the sepia effect.                                                                                                           | `filter: sepia(80%);`        |
| `brightness(n)` | Adjusts the brightness of the element. The `n` value (0 to infinity) defines the level of brightness, with 1 being the default. Values less than 1 darken the element, while values greater than 1 brighten it.     | `filter: brightness(150%);`  |
| `contrast(n)`   | Alters the contrast of the element. The `n` value (0 to infinity) determines the contrast level, with 1 being the default. Values less than 1 reduce contrast, while values greater than 1 increase it.             | `filter: contrast(120%);`    |
| `blur(n)`       | Applies a blur effect to the element. The `n` value (0 to infinity) controls the amount of blur, with 0 being no blur.                                                                                              | `filter: blur(5px);`         |
| `hue-rotate(n)` | Rotates the colors of the element. The `n` value (0 to 360) represents the degree of rotation on the color wheel.                                                                                                   | `filter: hue-rotate(90deg);` |
| `saturate(n)`   | Adjusts the saturation of the element. The `n` value (0 to infinity) determines the saturation level, with 1 being the default. Values less than 1 desaturate the element, while values greater than 1 saturate it. | `filter: saturate(150%);`    |

## Usage Example

```css
.image-filter {
  filter: grayscale(20%) brightness(120%) blur(2px);
}
```

This example applies a combination of grayscale, brightness, and blur effects to an element with the class `image-filter`. Adjust the values as needed to achieve the desired visual effect.

The `filter` property is versatile, allowing you to combine multiple filter functions to create unique and visually appealing styles for your web content. Experiment with different values to achieve the desired results in your designs.
