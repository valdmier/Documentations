# CSS Transition Properties Documentation

CSS transitions provide a way to create smooth animations when changing the state of an element. The `transition` property is used to define the transition effect, and it includes several sub-properties: `property`, `duration`, `timing-function`, and `delay`. This documentation explores these properties, explaining their individual roles and providing examples.

---

## `transition` Property

The `transition` property is shorthand for defining multiple transition-related properties in a single declaration.

### Syntax:

```css
/* Apply transition property */
transition: property duration timing-function delay;

/* Example */
.element {
  transition: width 1s ease-in-out 0.5s;
}
```

### Sub-Properties:

1. **`property` (Required):** Specifies the CSS property or properties to which the transition should be applied.

2. **`duration` (Required):** Defines the duration of the transition. It can be specified in seconds (`s`) or milliseconds (`ms`).

3. **`timing-function` (Optional):** Specifies the timing function for the transition, determining the acceleration of the animation. Common values include `ease`, `linear`, `ease-in`, `ease-out`, and `ease-in-out`.

4. **`delay` (Optional):** Sets a delay before the transition starts. It can be specified in seconds (`s`) or milliseconds (`ms`).

---

## `transition-property`

The `transition-property` property specifies the CSS property or properties to which the transition effect should be applied.

### Syntax:

```css
/* Apply transition-property */
transition-property: property;

/* Example */
.element {
  transition-property: width;
}
```

### Values:

- **`all` (Default):** Applies the transition to all properties.

- **Specific Property Names:** Apply the transition to specific CSS properties, separated by commas.

---

## `transition-duration`

The `transition-duration` property defines the duration of the transition effect.

### Syntax:

```css
/* Apply transition-duration */
transition-duration: duration;

/* Example */
.element {
  transition-duration: 1s; /* 1 second duration */
}
```

### Values:

- **`s`:** Specifies the duration in seconds.

- **`ms`:** Specifies the duration in milliseconds.

---

## `transition-timing-function`

The `transition-timing-function` property specifies the timing function used for the transition effect.

### Syntax:

```css
/* Apply transition-timing-function */
transition-timing-function: timing-function;

/* Example */
.element {
  transition-timing-function: ease-in-out;
}
```

### Values:

- **`ease` (Default):** Slow at the beginning, fast in the middle, slow at the end.

- **`linear`:** Constant speed throughout the transition.

- **`ease-in`:** Starts slow and accelerates.

- **`ease-out`:** Starts fast and decelerates.

- **`ease-in-out`:** Starts slow, accelerates in the middle, and decelerates at the end.

---

## `transition-delay`

The `transition-delay` property defines a delay before the transition starts.

### Syntax:

```css
/* Apply transition-delay */
transition-delay: delay;

/* Example */
.element {
  transition-delay: 0.5s; /* 0.5 seconds delay */
}
```

### Values:

- **`s`:** Specifies the delay in seconds.

- **`ms`:** Specifies the delay in milliseconds.

---

## `List of Animatable Properties`

Many CSS properties can be animated using transitions or animations. Here is a list of some common animatable properties:

- **Color Properties:**
  
  - `color`
  - `background-color`
  - `border-color`
  - `outline-color`
  - ...

- **Dimensional Properties:**
  
  - `width`
  - `height`
  - `margin`
  - `padding`
  - `border-width`
  - ...

- **Positioning Properties:**
  
  - `top`
  - `left`
  - `right`
  - `bottom`

- **Transform Properties:**
  
  - `transform`
  - `rotate`
  - `scale`
  - `translate`
  - ...

- **Opacity:**
  
  - `opacity`

- **Font Properties:**
  
  - `font-size`
  - `line-height`

- **Others:**
  
  - `letter-spacing`
  - `word-spacing`
  - `box-shadow`
  - ...

---

## Conclusion

Understanding the `transition` property and its sub-properties (`property`, `duration`, `timing-function`, and `delay`) is essential for creating effective and visually appealing animations in CSS. By experimenting with different values and combinations, you can achieve smooth transitions that enhance the user experience on your website or web application. The list of animatable properties provides a reference for properties that can be animated, allowing you to bring life to various aspects of your design.
