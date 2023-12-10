# CSS `calc()` Function Documentation

The `calc()` function in CSS allows you to perform calculations and combine different units to set element properties. It is a powerful tool for creating responsive and dynamic designs. Here are some examples of equations that can be used with `calc()`:

1. **Addition:**

```css
width: calc(50% + 20px);
```

2. **Subtraction:**

```css
height: calc(100vh - 50px);
```

3. **Multiplication:**

```css
font-size: calc(16px * 1.5);
```

4. **Division:**

```css
line-height: calc(2em / 1.5);
```

5. **Combining Units:**

```css
margin: calc(10px + 2em);
```

6. **Nested Equations:**

```css
width: calc(50% + (100% - 20px));
```

7. **Using Variables:**

```css
--width: 200px;
width: calc(var(--width) + 50px);
```

`calc()` provides flexibility for handling various units and performing complex calculations, making it a valuable asset for responsive and dynamic web design.
