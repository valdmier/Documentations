## CSS Transform Rotate

### Transform Rotate

The `rotate()` function in the CSS `transform` property is used to rotate elements. It accepts an angle as its parameter, allowing you to specify the degree of rotation. Here's an overview of how to use it:

- **Syntax:**
  
  ```css
  .element {
    transform: rotate(angle);
  }
  ```

- **Values:**
  
  - `angle`: An angle in degrees. Positive values for clockwise rotation, negative for counterclockwise.

#### Possible Values for `angle`:

- **Positive Values (Clockwise Rotation):**
  
  ```css
  .rotate-clockwise {
    transform: rotate(45deg);
  }
  ```
  
  Rotates the element 45 degrees clockwise.

- **Negative Values (Counterclockwise Rotation):**
  
  ```css
  .rotate-counterclockwise {
    transform: rotate(-30deg);
  }
  ```
  
  Rotates the element 30 degrees counterclockwise.

- **360 Degrees (Full Rotation):**
  
  ```css
  .rotate-full-circle {
    transform: rotate(360deg);
  }
  ```
  
  Completes a full clockwise rotation.

### Combining Rotate and Scale

You can combine `rotate` with `scale` for more dynamic transformations. Here are some examples:

#### Example 1: Rotating and Scaling Together

```css
.rotate-and-scale {
  transform: rotate(30deg) scale(1.5);
}
```

Rotates the element 30 degrees and scales it to 1.5 times its original size.

#### Example 2: Sequential Transformations

```css
.sequential-transform {
  transform: rotate(45deg) scale(0.8) rotate(-20deg);
}
```

Rotates the element 45 degrees, scales it down to 80% of its size, and then further rotates it by -20 degrees.

### Practical Use Cases

#### Use Case 1: Creating a Tilted Image

```css
.tilted-image {
  transform: rotate(15deg);
}
```

Tilts an image by 15 degrees, adding a dynamic visual effect.

#### Use Case 2: Animated Clock Hands

```css
.clock-hand {
  animation: rotateAnimation 3s linear infinite;
}

@keyframes rotateAnimation {
  to {
    transform: rotate(360deg);
  }
}
```

Creates an animated clock hand that completes a full rotation every 3 seconds.
