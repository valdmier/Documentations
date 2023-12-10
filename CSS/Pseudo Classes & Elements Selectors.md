# Pseudo Class Selectors

---

# :last-child

The **`:last-child`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) represents the last element among a group of sibling elements.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-01-17-01-image.png)

----

# :first-child

The **`:first-child`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) represents the first element among a group of sibling elements.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:first-child {
  border: 1px solid red;
  color: red;
}
```

#### Result

<img src="file:///C:/Users/user/AppData/Roaming/marktext/images/2023-12-09-01-19-52-image.png" title="" alt="" data-align="left">

----

# :first-of-type

The **`:first-of-type`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) represents the first element of its type among a group of sibling elements.

```html
<article>
  <div>This `div` is first!</div>
  <div>This <span>nested `span` is first</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <div>This <span>nested `span` gets styled</span>!</div>
  <p>This `p` qualifies!</p>
  <div>This is the final `div`.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### Result

<img src="file:///C:/Users/user/AppData/Roaming/marktext/images/2023-12-09-01-23-14-image.png" title="" alt="" data-align="left">

----

# :last-of-type

The **`:last-of-type`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) represents the last element of its type among a group of sibling elements.

```html
<article>
  <div>This `div` is first.</div>
  <div>This <span>nested `span` is last</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <p>This `p` qualifies!</p>
  <div>This is the final `div`!</div>
</article>
```

#### CSS

```css
article :last-of-type {
  background-color: pink;
}
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-01-32-23-image.png)

---

# :only-child

The **`:only-child`** CSS [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) represents an element without any siblings. This is the same as `:first-child:last-child` or `:nth-child(1):nth-last-child(1)`, but with a lower specificity.

```html
<ol>
  <li>
    First
    <ul>
      <li>This list has just one element.</li>
    </ul>
  </li>
  <li>
    Second
    <ul>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
    </ul>
  </li>
</ol>
```

#### CSS

```css
li li {
  list-style-type: disc;
}

li:only-child {
  color: red;
  list-style-type: square;
}
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-01-39-40-image.png)

----

# :not()

The **`:not()`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) represents elements that do not match a list of selectors. Since it prevents specific items from being selected, it is known as the *negation pseudo-class*.

#### Html

```html
<p>I am a paragraph.</p>
<p class="fancy">I am so very fancy!</p>
<div>I am NOT a paragraph.</div>
<h2>
  <span class="foo">foo inside h2</span>
  <span class="bar">bar inside h2</span>
</h2>

```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* <p> elements that don't have a class `.fancy` */
p:not(.fancy) {
  color: green;
}

/* Elements that are not <p> elements */
body :not(p) {
  text-decoration: underline;
}

/* Elements that are not <div>s or `.fancy` */
body :not(div):not(.fancy) {
  font-weight: bold;
}

/* Elements that are not <div>s or `.fancy` */
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* Elements inside an <h2> that aren't a <span> with a class of `.foo` */
h2 :not(span.foo) {
  color: red;
}

```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-21-52-16-image.png)

---

# :nth-child()

The **`:nth-child()`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on the indexes of the elements in the child list of their parents. In other words, the `:nth-child()` selector selects child elements according to their position among all the sibling elements within a parent element.

#### Html

```html

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
  <li>Fourth list item</li>
  <li>Fifth list item</li>
</ul>
```

#### CSS

```css
/* Selects the odd element of div siblings */
div:nth-child(odd) {
  background: red;
}

/* Selects the second li element in a list */
li:nth-child(2) {
  background: lightgreen;
}

/* Selects every third element among any group of siblings */
:nth-child(3) {
  background: yellow;
}
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-22-09-11-image.png)

---

# :nth-of-type()

The **`:nth-of-type()`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on their position among siblings of the same type (tag name).

#### Html

```html

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
  <li>Fourth list item</li>
  <li>Fifth list item</li>
</ul>

```

#### CSS

```css
/* Selects the even elements of div siblings */
div:nth-of-type(even) {
  background: red;
}

/* Selects the second li element in a list */
li:nth-of-type(2) {
  background: lightgreen;
}

/* Selects every third element among any group of siblings */
:nth-of-type(4) {
  background: yellow;
}
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-22-13-59-image.png)

---

# :nth-last-child()

The **`:nth-last-child()`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on their position among a group of siblings, counting from the end.

Html

```html

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
  <li>Fourth list item</li>
  <li>Fifth list item</li>
</ul>
```

#### CSS

```css
/* Selects from the end the 5th elemens of div siblings */
div:nth-last-child(5) {
  background: red;
}

/* Selects the second li element in a list  from bottom*/
li:nth-last-child(2) {
  background: lightgreen;
}

/* Selects every fourth element among any group of siblings */
:nth-last-child(4) {
  background: yellow;
}
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-22-21-50-image.png)

----

# :nth-last-of-type()

The **`:nth-last-of-type()`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on their position among siblings of the same type (tag name), counting from the end.

#### Html

```html
<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<div>
  <p>This is some text.</p>
</div>

<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
  <li>Fourth list item</li>
  <li>Fifth list item</li>
</ul>
```

#### CSS

```css
/* Selects from the end the 5th elemens of div siblings */
div:nth-last-of-type(3) {
  background: red;
}

/* Selects the second li element in a list  from bottom*/
li:nth-last-of-type(1) {
  background: lightgreen;
}

/* Selects every fourth element among any group of siblings */
:nth-last-of-type(2) {
  background: yellow ;
}
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-22-57-14-image.png)

----

# :root

The **`:root`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) matches the root element of a tree representing the document. In HTML, `:root` represents the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) element and is identical to the selector `html`, except that its [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is higher.

Html

```html
<!DOCTYPE html>
<html>
<head>
<style> 

/* Selects the second li element in a list  from bottom*/
:root {
  background: lightgreen;
}

/* Selects every fourth element among any group of siblings */
</style>
</head>
<body>


<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
  <li>Fourth list item</li>
  <li>Fifth list item</li>
</ul>

</body>
</html>
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-23-10-39-image.png)

---

# :checked

The **`:checked`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) selector represents any **radio** ([`<input type="radio">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)), **checkbox** ([`<input type="checkbox">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)), or **option** ([`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) in a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)) element that is checked or toggled to an `on` state.

#### Html

```html
<style>
input:checked {
  height: 50px;
  width: 50px;
}
</style>
</head>
<body>

<form action="">
  <input type="radio" checked="checked" value="male" name=
"gender"> Male<br>
  <input type="radio" value="female" name="gender"> Female<br>
  <input type="checkbox" checked="checked" value="Bike"> I have a bike<br>
  <input type="checkbox" value="Car"> I have a car 
</form>:checked
The :checked CSS pseudo-class selector represents any radio (<input type="radio">), checkbox (<input type="checkbox">), or option (<option> in a <select>) element that is checked or toggled to an on state.


```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-23-23-16-image.png)

---

# :empty

The **`:empty`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) represents any element that has no children. Children can be either element nodes or text (including whitespace). Comments, processing instructions, and CSS [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content) do not affect whether an element is considered empty.

#### Html

```html
<div class="box"><!-- I will be lime. --></div>
<div class="box">I will be pink.</div>
<div class="box">
  <!-- I will be pink in older browsers because of the whitespace around this comment. -->
</div>
<div class="box">
  <p>
    <!-- I will be pink in all browsers because of the non-collapsible whitespace and elements around this comment. -->
  </p>
</div>

```

#### CSS

```css
body {
  display: flex;
  justify-content: space-around;
}

.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-23-25-30-image.png)

----

# :disabled

The **`:disabled`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) represents any disabled element. An element is disabled if it can't be activated (selected, clicked on, typed into, etc.) or accept focus. The element also has an enabled state, in which it can be activated or accept focus.

#### Html

```html
<form action="#">
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Address" />
    <input type="text" placeholder="Zip Code" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>Billing address</legend>
    <label for="billing-checkbox">Same as shipping address:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="Name" disabled />
    <input type="text" placeholder="Address" disabled />
    <input type="text" placeholder="Zip Code" disabled />
  </fieldset>
</form>

```

#### CSS

```css
input[type="text"]:disabled {
  background: #ccc;
}

```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-23-29-47-image.png)

----

# :required

The **`:required`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) represents any [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), or [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element that has the [`required`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#required) attribute set on it.

#### Html

```html
<form>
  <div class="field">
    <label for="url_input">Enter a URL:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Enter an email address:</label>
    <input type="email" id="email_input" required />
  </div>
</form>

```

#### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}

```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-23-31-23-image.png)

---

# ::selection

The **`::selection`** CSS [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) applies styles to the part of a document that has been highlighted by the user (such as clicking and dragging the mouse acr

#### Html

```html
<!DOCTYPE html>
<html>
<head>
<style>
::selection {
  color: red;
  background: yellow;
}
</style>
</head>
<body>

<h1>Select some text on this page:</h1>

<p>This is a paragraph.</p>
<div>This is some text in a div element.</div>

</body>
</html>
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-23-35-02-image.png)

----

# ::placeholder

The **`::placeholder`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) represents the [placeholder text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder) in an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) or [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element.

#### Html

```html
<!DOCTYPE html>
<html>
<head>
<style>
::-ms-input-placeholder { /* Edge 12-18 */
  color: red;
}

::placeholder {
  color: red;
}
</style>
</head>
<body>

<p>Use the ::placeholder selector to change the color of the placeholder text:</p>

<input type="text" name="fname" placeholder="First name">

</body>
</html>
```

#### Result

![](C:\Users\user\AppData\Roaming\marktext\images\2023-12-09-23-37-26-image.png)
