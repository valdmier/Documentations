## CSS Transform Origin Documentation

### Transform Origin Property

The `transform-origin` property in CSS defines the point around which a transformation is applied to an element. It determines the origin of the transformation, influencing the positioning of the transformed element.

```css
.element-transform {
  transform-origin: 50% 50%; /* Default values - center of the element */
}
```

- **X and Y Percentages:** The `transform-origin` property takes two values, representing the X and Y percentages. For example, `50% 50%` centers the transformation around the middle of the element.

- **Unit Values:** Alternatively, unit values like pixels or em can be used to specify the exact coordinates. For instance, `transform-origin: 0 0` sets the origin to the top-left corner of the element.

### Transform Origin Values

#### Horizontal Values

- **Left:** `transform-origin: left;` sets the origin on the left edge of the element.

- **Right:** `transform-origin: right;` positions the origin on the right edge.

#### Vertical Values

- **Top:** `transform-origin: top;` places the origin on the top edge of the element.

- **Bottom:** `transform-origin: bottom;` sets the origin on the bottom edge.

#### Combinations

- **Top Left:** `transform-origin: left top;` or `transform-origin: 0 0;` places the origin at the top-left corner.

- **Bottom Right:** `transform-origin: right bottom;` or `transform-origin: 100% 100%;` positions the origin at the bottom-right corner.



### Transform Origin and Transformations

The `transform-origin` property works in tandem with transformation functions like `rotate`, `scale`, and `translate`. It defines the pivot point around which these transformations occur.

```css
.element-transform {
  transform-origin: top left;
  transform: rotate(45deg);
}
```

In this example, the element is rotated 45 degrees around its top-left corner due to the specified `transform-origin`.

---

<img src="file:///C:/Users/user/AppData/Roaming/marktext/images/2023-12-06-15-50-07-image.png" title="" alt="" data-align="left">

<img src="file:///C:/Users/user/AppData/Roaming/marktext/images/2023-12-06-15-50-41-image.png" title="" alt="" width="390">

---

### Conclusion

Understanding and utilizing the `transform-origin` property is essential for precise control over the positioning of transformed elements. Whether centering transformations or defining specific pivot points, `transform-origin` empowers developers to create visually appealing and responsive designs in the digital landscape.
