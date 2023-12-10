# CSS Selectors Documentation

## Overview

CSS selectors are fundamental tools for styling HTML elements. They allow you to precisely target and style specific elements or groups of elements. This documentation provides an in-depth explanation of various CSS selectors along with examples.

---

### Universal Selector `*`

```css
/* Targets all elements on the page */
* {
  margin: 0;
  padding: 0;
}
```

**HTML Example:**

```html
<p>This is a paragraph.</p>
<div>This is a div.</div>
<h2>This is an h2 heading.</h2>
```

---

### Element Selector `Element` or `[p, div, h2]`

```css
/* Targets all <p>, <div>, and <h2> elements */
p {
  font-size: 16px;
}
```

**HTML Example:**

```html
<p>This is a paragraph.</p>
```

---

### Non-Direct-Descendant Selector `Element OtherElement` or `div p`

```css
/* Targets all <p> elements inside a <div> */
div p {
  color: blue;
}
```

**HTML Example:**

```html
<div>
    <h1>
      <p>This paragraph is inside a h2 that is inside a div, it will still
        have blue text color.</p>
    </h1>
</div>
```

---

### Class Selector `.class-name`

```css
/* Targets all elements with the class 'highlight' */
.highlight {
  background-color: yellow;
}
```

**HTML Example:**

```html
<div class="highlight">This div has a yellow background.</div>
<span class="highlight">This span has a yellow background.</span>
```

---

### ID Selector `#id-name`

```css
/* Targets the element with the ID 'header' */
#header {
  font-size: 24px;
}
```

**HTML Example:**

```html
<h1 id="header">This is a header with a font size of 24px.</h1>
```

---

### Non-Direct-Descendant Selector `.parent .child`

```css
/* Targets elements with class 'item' inside an element with class 'container' */
.container .item {
  border: 1px solid black;
}
```

**HTML Example:**

```html
<div class="container">
  <div class="item">This item has a border.</div>
</div>
```

---

### Multiple Class Selector  (in one element)`.class-one.class-two`

```css
/* Targets elements with both classes 'text-bold' and 'red' */
.text-bold.red {
  font-weight: bold;
  color: red;
}
```

**HTML Example:**

```html
<p class="text-bold red">This paragraph has both bold and red styles.</p>
```

---

### Grouping Selector `.class-name div, .class-name p`

```css
/* Targets <div> and <p> elements inside an element with class 'box' */
.box div, .box p {
  margin: 5px;
}
```

**HTML Example:**

```html
<div class="box">
  <div>This div has a margin of 5px.</div>
  <p>This paragraph also has a margin of 5px.</p>
</div>
```

---

### Element with Class Selector (in one element) `Element.class-name` or `p.class-name`

```css
/* Targets <h3> elements with class 'warning' */
h3.warning {
  color: orange;
}
```

**HTML Example:**

```html
<h3 class="warning">This is a warning heading with orange text color.</h3>
```

---

### Direct-Descendant Selector `.parent > .child`

```css
/* Targets <li> elements that are direct children of an element with class 'menu' */
.menu > li {
  list-style-type: none;
}
```

**HTML Example:**

```html
<ul class="menu">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

---

### Direct-Adjacent-Sibling Selector `Element + Other Element` or `div + p`

```css
/* Targets a <p> element that is immediately preceded by a <div> */
div + p {
  font-weight: bold;
}
```

**HTML Example:**

```html
<p>This paragraph won't be styled.</p>
<div>This div is followed by a bold paragraph.</div>
<p>This paragraph is styled with bold text.</p>
<section>
    <p>won't be styled</p>
</section>
```

**Explanation:**

- The direct-adjacent selector `div + p` targets a `<p>` element that is immediately preceded by a `<div>`.
- In this example, it sets the font weight to bold for such paragraphs.

----

### General-Adjacent-Sibling Selector `Element ~ Other Element` (`div ~ p`)

```html
```css
<p>The general sibling selector (~) selects all elements that are next siblings of a specified element.</p>

<p>Paragraph 1.</p>

<div>
  <p>Paragraph 2.</p>
</div>

<p>Paragraph 3. (Colored)</p>
<code>Some code.</code>
<p>Paragraph 4. (Colored)</p>
```

```
```css
/* Targets a <p> element that is immediately preceded by a <div> */
div ~ p {
  background-color: yellow;
}
```

----

### Attribute Existence Selector `[attribute]`

```css
/* Targets elements with the specified attribute */
[disabled] {
  opacity: 0.5;
}
```

**HTML Example:**

```html
<button disabled>Disabled Button</button>
<input type="text" />
```

**Explanation:**

- The attribute existence selector `[attribute]` targets elements that have the specified attribute, regardless of its value.
- In this example, it sets the opacity of elements with the `disabled` attribute to 0.5.

---

### Element with Specific Attribute Selector `element[attribute]`

```css
/* Targets <a> elements with the 'target' attribute */
a[target] {
  text-decoration: none;
}
```

**HTML Example:**

```html
<a href="#" target="_blank">Open in New Tab</a>
<a href="#">Default Link</a>
```

**Explanation:**

- The element with a specific attribute selector `element[attribute]` targets specific elements that have the specified attribute.
- In this example, it removes the text decoration for `<a>` elements with the `target` attribute.

---

### Attribute Value Selector `[attribute=value]`

```css
/* Targets elements with a specific attribute value */
[type="checkbox"] {
  margin-right: 5px;
}
```

**HTML Example:**

```html
<input type="checkbox" /> Checkbox 1
<input type="text" /> Text Input
```

**Explanation:**

- The attribute value selector `[attribute=value]` targets elements with a specific attribute and value.
- In this example, it adds right margin to `<input>` elements with the attribute `type` set to "checkbox."

---

### Partial Attribute Value Selector `[attribute*=value]`

```css
/* Targets elements with an attribute containing a specific value anywhere */
[src*="logo"] {
  border: 1px solid #ccc;
}
```

**HTML Example:**

```html
<img src="logo.png" alt="Logo" />
<img src="banner.png" alt="Banner" />
```

**Explanation:**

- The partial attribute value selector `[attribute*=value]` targets elements with an attribute containing a specific value anywhere within it.
- In this example, it adds a border to `<img>` elements with the `src` attribute containing "logo."

---

### Attribute Prefix Value Selector `[attribute^=value]`

```css
/* Targets elements with an attribute starting with a specific value */
[href^="https"] {
  color: blue;
}
```

**HTML Example:**

```html
<a href="https://example.com">Secure Link</a>
<a href="http://example.com">Regular Link</a>
```

**Explanation:**

- The attribute prefix value selector `[attribute^=value]` targets elements with an attribute starting with a specific value.
- In this example, it sets the color to blue for `<a>` elements with the `href` attribute starting with "https."

---

### Attribute Suffix Value Selector `[attribute$=value]`

```css
/* Targets elements with an attribute ending with a specific value */
[src$=".pdf"] {
  color: red;
}
```

**HTML Example:**

```html
<a href="document.pdf">PDF Document</a>
<img src="image.jpg" alt="Image" />
```

**Explanation:**

- The attribute suffix value selector `[attribute$=value]` targets elements with an attribute ending with a specific value.
- In this example, it sets the color to red for `<a>` elements with the `href` attribute ending with ".pdf."

---

### Attribute Value Whitespace-separated Selector `[attribute~=value]`

```css
/* Targets elements with an attribute containing a specific value as a whole word */
[class~="highlight"] {
  background-color: yellow;
}
```

**HTML Example:**

```html
<div class="box highlight">Highlighted Box</div>
<div class="boxhighlight">Another Box</div>
```

**Explanation:**

- The attribute value whitespace-separated selector `[attribute~=value]` targets elements with an attribute containing a specific value as a whole word.
- In this example, it sets the background color to yellow for `<div>` elements with the `class` attribute containing "highlight" as a whole word.

---

### Element Attribute Hyphen-separated Value Selector `element[attribute|=value]`

```css
/* Targets elements with an attribute starting with a specific value followed by a hyphen */
[lang|="en"] {
  font-family: 'Arial', sans-serif;
}
```

**HTML Example:**

```html
<p lang="en-us">English Paragraph</p>
<p lang="fr">French Paragraph</p>
```

**Explanation:**

- The element attribute hyphen-separated value selector `element[attribute|=
