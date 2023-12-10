# CSS `attr` Function Documentation

The `attr` function in CSS is a powerful and versatile tool that allows you to retrieve and use the values of HTML attributes as part of your styles. This documentation covers the usage of the `attr` function and provides examples to illustrate its application.

---

## Introduction to the `attr` Function

The `attr` function is used to retrieve the value of an HTML attribute and use it in your CSS styles. It enhances the flexibility and dynamic nature of your styles by allowing them to adapt based on the values of attributes present in the HTML.

### Syntax:

```css
attr(attribute-name, [fallback])
```

- `attribute-name`: The name of the HTML attribute whose value you want to retrieve.
- `fallback`: Optional. Specifies a fallback value in case the attribute is not present.

### Example:

```css
/* Retrieve and use the value of the 'data-color' attribute */
div {
  color: attr(data-color, blue);
}
```

---

## Usage and Examples

### Basic `attr` Usage

#### HTML:

```html
<div data-color="red">This div has a data-color attribute.</div>
<div>This div does not have a data-color attribute.</div>
```

#### CSS:

```css
/* Apply color based on the 'data-color' attribute */
div {
  color: attr(data-color, blue);
}
```

### Fallback Value

#### HTML:

```html
<div>This div does not have a data-color attribute.</div>
```

#### CSS:

```css
/* Apply color based on the 'data-color' attribute with a fallback to red */
div {
  color: attr(data-color, red);
}
```

### Applying to Different Properties

#### HTML:

```html
<a href="https://www.example.com" data-external="true">External Link</a>
<a href="https://www.internal-link.com">Internal Link</a>
```

#### CSS:

```css
/* Style links based on the 'data-external' attribute */
a[data-external="true"] {
  color: green;
  font-weight: bold;
}
```

### Combining with `content`

#### HTML:

```html
<div data-tooltip="This is a tooltip!">Hover me</div>
```

#### CSS:

```css
/* Display a tooltip using the 'data-tooltip' attribute value */
div::before {
  content: attr(data-tooltip);
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  display: none;
}

div:hover::before {
  display: block;
}
```

---

## Conclusion

The `attr` function in CSS offers a dynamic way to incorporate HTML attribute values into your styles. Whether you're adjusting colors, styles, or content based on specific attributes, the `attr` function empowers you to create more adaptable and responsive designs. Experiment with different attributes and integrate them into your stylesheets for enhanced customization and flexibility.
