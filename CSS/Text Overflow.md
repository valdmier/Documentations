# CSS `text-overflow` Property Documentation

The `text-overflow` property in CSS is used to control how text overflow is displayed within an HTML element when it exceeds its containing box. This property is particularly useful for ensuring that text content remains visually appealing, even when it can't fit entirely within its designated space.

## Introduction to the `text-overflow` Property

The `text-overflow` property enables web developers to define how text that overflows its containing element should be managed. It is commonly used in situations where text must be truncated or otherwise handled when it extends beyond its container's boundaries.

---

## `text-overflow` Property Values

The `text-overflow` property accepts the following values:

| Value      | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `clip`     | Text that overflows is clipped, and any overflowing text is not visible. |
| `ellipsis` | An ellipsis (...) is displayed at the end, indicating hidden overflow.   |
| `string`   | Allows you to specify a custom string displayed when text overflows.     |

### Example:

```css
/* Using 'ellipsis' value */
.overflow-text {
  white-space: nowrap; /* Prevents text from wrapping */
  overflow: hidden;   /* Hides overflowed text */
  text-overflow: ellipsis; /* Displays ellipsis for overflowed text */
  width: 200px;       /* Container width */
}
```

### Example with Custom String:

```css
/* Using a custom string for overflow */
.custom-string-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: "Read more..."; /* Custom string for overflow */
  width: 200px;
}
```

---

**<u><mark>IMPORTANT </mark></u>Note:** `text-overflow` has to be combined with `white-space: nowrap;` and `overflow: hidden;`.

---

## `text-overflow` Property in Action

The `text-overflow` property is often applied in conjunction with other CSS properties to create a desired text truncation effect. Some common use cases include:

### 1. Truncated Text in Button Labels

```css
/* Button with truncated text and ellipsis */
.button-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px; /* Adjust width as needed */
}
```

### 2. Displaying Additional Information on Hover

```css
/* Display full text on hover */
.hover-tooltip {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  transition: width 0.5s; /* Smooth transition */
}

.hover-tooltip:hover {
  width: auto; /* Expand width on hover */
}
```

### 3. Custom Overflow Indicator

```css
/* Using a custom overflow indicator */
.custom-indicator {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: " >>"; /* Custom overflow indicator */
  width: 150px;
}
```

HTML Example:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* CSS for 'ellipsis' example */
        .overflow-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 200px;
        }

        /* CSS for custom string example */
        .custom-string-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: "Read more..."; /* Custom string for overflow */
            width: 200px;
        }
    </style>
</head>
<body>
    <div class="overflow-text">
        This is a long text that will be truncated with an ellipsis when it overflows its container.
    </div>

    <div class="custom-string-text">
        This is another long text that will be truncated with a custom string "Read more..." when it overflows its container.
    </div>
</body>
</html>
```

---

## Summary

In summary, the CSS `text-overflow` property is a valuable tool for managing text that exceeds its container's size. By using values like `ellipsis` or custom strings, you can control how overflowed text is displayed, ensuring a clean and user-friendly experience for your website visitors. This property is particularly useful when dealing with limited space for text content, such as in buttons, tooltips, or other user interface elements.
