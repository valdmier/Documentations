# CSS Animation Documentation

## Overview

CSS animations enable the gradual change of style from one set of CSS styles to another. The `animation` property is a shorthand property combining various animation-related properties into a single declaration. This documentation will delve into the sub-properties of the `animation` property, providing a detailed explanation of each.

### Animation Property

The `animation` property specifies the animation's name, duration, timing function, delay, iteration count, direction, fill mode, and play state in a concise manner:

```css
.element {
  animation: name duration timing-function delay iteration-count direction fill-mode play-state;
}
```

----

## Sub-properties

### `animation-name`

The `animation-name` property declares the name of the `@keyframes` at-rule to manipulate. It refers to a set of keyframes that describe the animation's behavior at different points in time.

```css
.element {
  animation-name: slide-in;
}
```

----

#### Values:

- `slide-in`: Refers to a set of keyframes named `slide-in`.

### `animation-duration`

The `animation-duration` property sets the length of time it takes for an animation to complete one cycle. It is expressed in seconds (s) or milliseconds (ms).

```css
.element {
  animation-duration: 2s;
}
```

#### Values:

- `2s`: Animation lasts for 2 seconds.

---

### `animation-timing-function`

The `animation-timing-function` property establishes preset acceleration curves, determining the pace of the animation's progression. It can be set to:

- `ease`: Gradual acceleration, then deceleration (default).
- `linear`: Constant speed.
- `ease-in`: Gradual acceleration.
- `ease-out`: Gradual deceleration.
- `ease-in-out`: Gradual acceleration, then deceleration.
- `step-start`: Immediate jump to the final state.
- `step-end`: Immediate jump to the final state.

```css
.element {
  animation-timing-function: ease;
}
```

----

### `animation-delay`

The `animation-delay` property specifies the time between the element being loaded and the start of the animation sequence, introducing delays for interesting effects.

```css
.element {
  animation-delay: 1s;
}
```

#### Minus values in animation delay

if the the delay is given in minus then it means that animation starts at second 2 of it's duration.

Example:

```css
.element {
  animation-duration: 5s;
  animation-delay: -1s; /*starts at state of second 2 of the animation*/
}
```

----

### `animation-direction`

The `animation-direction` property defines the direction of an animation after each cycle. It can be set to:

- `normal`: Default, plays forward.
- `reverse`: Plays in reverse.
- `alternate`: Alternates between forward and reverse.
- `alternate-reverse`: Alternates, starting in reverse.

```css
.element {
  animation-direction: normal;
}
```

---

### `animation-iteration-count`

The `animation-iteration-count` property defines the number of times the animation should be performed. It can take a specific number, `infinite`, or `initial`.

```css
.element {
  animation-iteration-count: 3;
}
```

#### Values:

- `3`: Animation repeats 3 times.

---

### `animation-fill-mode`

The `animation-fill-mode` property sets which values are applied before/after the animation. It can be:

- `none`: No styles applied before or after the animation.
- `forwards`: Styles are retained after the animation ends.
- `backwards`: Styles are applied before the animation begins.
- `both`: Combines effects of both `forwards` and `backwards`.

```css
.element {
  animation-fill-mode: both;
}
```

---

### `animation-play-state`

The `animation-play-state` property allows you to pause or play the animation.

```css
.element {
  animation-play-state: paused;
}
```

#### Values:

- `paused`: The animation is paused.
- `running`: The animation is running.

---

## Examples

### Example 1: Slide In Animation

```css
.slide-in {
  animation: slide-in 2s ease-out 1s infinite normal forwards paused;
}
```

This example uses the `slide-in` keyframes, lasts for 2 seconds, has an ease-out timing function, starts 1 second after the element is loaded, repeats infinitely, plays forward, and initially pauses the animation.

### Example 2: Pulse Animation

```css
.pulse {
  animation: pulse 1s linear 0s infinite alternate normal running;
}
```

This example uses the `pulse` keyframes, lasts for 1 second, has a linear timing function, starts immediately, repeats infinitely in an alternate direction, plays forward, and runs initially.
