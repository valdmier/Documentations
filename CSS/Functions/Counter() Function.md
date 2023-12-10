# CSS `counter` Function Documentation

The `counter` function in CSS is a powerful tool for generating and displaying automatic counters. It allows you to create dynamic counters, incrementing their values based on specified conditions. This documentation covers the usage of the `counter` function and provides examples to illustrate its application.

---

## Introduction to the `counter` Function

The `counter` function is used to dynamically generate and display counter values in CSS. It is particularly useful for scenarios where you need automatic numbering or labeling of elements, such as lists, sections, or any repeated content.

### Syntax:

```css
counter(name, counter-style, [integer])
```

- `name`: The name of the counter to be displayed.
- `counter-style`: Optional. Specifies the style of the counter, such as decimal, decimal-leading-zero, lower-roman, upper-roman, etc.
- `integer`: Optional. Specifies an integer to be added to the counter value.

### Example:

```css
body {
  counter-reset: section; /* Initialize the counter with the name 'section' */
}

h2::before {
  content: counter(section) ". "; /* Display the counter value before each h2 element */
  counter-increment: section; /* Increment the 'section' counter */
}
```

---

## Usage and Examples

### Basic Counter Usage

#### CSS:

```css
body {
  counter-reset: myCounter; /* Initialize the counter with the name 'myCounter' */
}

p::before {
  content: counter(myCounter); /* Display the counter value before each paragraph */
  counter-increment: myCounter; /* Increment the 'myCounter' counter */
}
```

#### HTML:

```html
<p>This is paragraph one.</p>
<p>This is paragraph two.</p>
<p>This is paragraph three.</p>
```

### Custom Counter Style

#### CSS:

```css
body {
  counter-reset: customCounter; /* Initialize the counter with the name 'customCounter' */
}

div::before {
  content: counter(customCounter, upper-roman) ". "; /* Display the counter value in upper-roman style */
  counter-increment: customCounter; /* Increment the 'customCounter' counter */
}
```

#### HTML:

```html
<div>This is item one.</div>
<div>This is item two.</div>
<div>This is item three.</div>
```

### Adding an Integer Offset

#### CSS:

```css
body {
  counter-reset: offsetCounter 5; /* Initialize the counter with the name 'offsetCounter' and an offset of 5 */
}

li::before {
  content: counter(offsetCounter) ". "; /* Display the counter value with the offset */
  counter-increment: offsetCounter; /* Increment the 'offsetCounter' counter */
}
```

#### HTML:

```html
<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
</ul>
```

---

## Conclusion

The `counter` function in CSS provides a flexible way to generate automatic counters with various styles and configurations. Whether you need simple numbering or customized labels, the `counter` function empowers you to create dynamic and visually appealing content. Experiment with different counter styles and integrate them into your stylesheets for enhanced document structure and readability.
