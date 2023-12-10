# CSS Custom Properties (Variables) Documentation

Custom properties, also known as CSS variables or cascading variables, allow CSS authors to define values that can be reused throughout a document. They are set using the `@property` at-rule or by custom property syntax (e.g., `--primary-color: blue;`). Custom properties are accessed using the CSS `var()` function (e.g., `color: var(--primary-color);`).

## Declaring Custom Properties

### Using Two Dashes (--) Prefix

You can declare a custom property by using two dashes as a prefix for the property name. For example:

```css
section {
  --main-bg-color: brown;
}
```

To make it globally accessible, you can define custom properties on the `:root` pseudo-class:

```css
:root {
  --main-bg-color: brown;
}
```

### Using the @property At-Rule

The `@property` at-rule provides more control over custom properties. You can specify the syntax, inheritance, initial value, and type constraints. For example:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Referencing Custom Properties with var()

Regardless of the declaration method, you use custom properties by referencing them in a `var()` function:

```css
details {
  background-color: var(--main-bg-color);
}
```

## First Steps with Custom Properties

Let's consider an example with HTML elements and applying styles based on their classes:

```html
<div class="container">
  <div class="one">
    <p>One</p>
  </div>
  <div class="two">
    <p>Two</p>
    <div class="three">
      <p>Three</p>
    </div>
  </div>
  <input class="four" placeholder="Four" />
  <textarea class="five">Five</textarea>
</div>
```

Initial styling without custom properties:

```css
.one {
  background-color: cornflowerblue;
}

.two {
  color: black;
  background-color: aquamarine;
}

.three {
  background-color: cornflowerblue;
}

.four,
.five {
  background-color: cornflowerblue;
}
```

After introducing custom properties:

```css
.container {
  --main-bg-color: cornflowerblue;
}

.one,
.three,
.four,
.five {
  background-color: var(--main-bg-color);
}

.two {
  color: black;
  background-color: aquamarine;
}
```

## Inheritance of Custom Properties

Custom properties defined with two dashes `--` inherit their value from their parent. For example:

```css
div {
  background-color: var(--box-color);
}

.two {
  --box-color: cornflowerblue;
}

.three {
  --box-color: aquamarine;
}
```

Results:

- `class="one"`: Invalid value (default for undefined custom property)
- `class="two"`: Cornflowerblue
- `class="three"`: Aquamarine
- `class="four"`: Cornflowerblue (inherited from its parent)

## Custom Property Fallback Values

### Using var() Function

Define fallback values for custom properties using the `var()` function:

```css
.one {
  /* Red if --my-var is not defined */
  color: var(--my-var, red);
}

.two {
  /* Pink if --my-var and --my-background are not defined */
  color: var(--my-var, var(--my-background, pink));
}

.three {
  /* Invalid: "--my-background, pink" */
  color: var(--my-var, --my-background, pink);
}
```

### Using @property Initial Value

You can use the `initial-value` of the `@property` at-rule as a fallback mechanism:

```css
@property --box-color {
  syntax: "<color>";
  initial-value: cornflowerblue;
  inherits: false;
}

.one {
  --box-color: aquamarine;
  background-color: var(--box-color);
}

.two {
  --box-color: aqumarine; /* Typo */
  background-color: var(--box-color);
}

.three {
  --box-color: 2rem; /* Invalid color value */
  background-color: var(--box-color);
}
```

## Invalid Custom Properties

When custom properties encounter an invalid value, the browser uses the initial or inherited value. For example:

```css
:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

In this case, the `--text-color` is an invalid color value, so the initial value (`cornflowerblue`) is applied.

## Values in JavaScript

To use custom property values in JavaScript, you can retrieve them using standard methods:

```javascript
// Get variable from inline style
element.style.getPropertyValue("--my-var");

// Get variable from computed style
getComputedStyle(element).getPropertyValue("--my-var");

// Set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

For more information, refer to the [Custom property syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) and [CSS Properties and Values API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API) documentation.


