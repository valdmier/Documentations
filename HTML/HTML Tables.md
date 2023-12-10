# HTML Tables Documentation

Tables in HTML are versatile elements that allow you to display data in a structured format. You can use tables to present various types of information, such as numerical data, text, images, or a combination of these. This documentation provides an in-depth guide on how to create and customize tables in HTML.

---

HTML tables consist of several tags that help structure and format tabular data. Below is a table listing these tags along with a brief explanation of their purposes:

| Tag         | Description                                              |
| ----------- | -------------------------------------------------------- |
| `<table>`   | Defines the entire table structure.                      |
| `<tr>`      | Represents a table row within the table.                 |
| `<td>`      | Defines individual table data (cell) within a row.       |
| `<th>`      | Specifies table headers, typically within the first row. |
| `<caption>` | Provides a brief description of the table's content.     |
| `<thead>`   | Encloses the table's header section.                     |
| `<tbody>`   | Contains the main data content of the table.             |
| `<tfoot>`   | Wraps the table's footer section, usually for summaries. |

---

## Creating a Basic Table

To create a basic HTML table, you need three main elements: `<table>`, `<tr>`, and `<td>`. The `<table>` element defines the entire table, `<tr>` (table row) elements define rows within the table, and `<td>` (table data) elements represent individual cells within those rows.

### Syntax

```html
<table>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```

### Example

```html
<table>
  <tr>
    <td>John Doe</td>
    <td>35 years old</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>28 years old</td>
  </tr>
</table>
```

#### Example Output

| John Doe   | 35 years old |
| ---------- | ------------ |
| Jane Smith | 28 years old |

---

## Table Headers

Tables often contain header rows to provide context for the data in the table. In HTML, you can use the `<th>` element to define table headers.

### Syntax

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

### Example

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>35</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>28</td>
  </tr>
</table>
```

#### Example Output

| Name       | Age |
| ---------- | --- |
| John Doe   | 35  |
| Jane Smith | 28  |

---

## Table Captions

You can add a caption to your table using the `<caption>` element. This caption is displayed above the table and provides a brief description of its contents.

### Syntax

```html
<table>
  <caption>Table Caption</caption>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

### Example

```html
<table>
  <caption>Employee Information

Name    Position
John Doe    Manager
Jane Smith    Developer
</caption>
  <tr>
    <th>Name</th>
    <th>Position</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>Manager</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>Developer</td>
  </tr>
</table>
```

#### Example Output

**Employee Information**

| Name       | Position  |
| ---------- | --------- |
| John Doe   | Manager   |
| Jane Smith | Developer |

---

## Table Headers (`<thead>`), Footers (`<tfoot>`), and Body (`<tbody>`)

HTML5 introduced new structural elements to improve table semantics. You can now divide your table into three main sections:

- `<thead>` (Table Head): Contains header information such as column labels.
- `<tbody>` (Table Body): Contains the main data content.
- `<tfoot>` (Table Footer): Contains summary information or totals.

This allows for better organization and accessibility of tabular data.

### Syntax

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total 1</td>
      <td>Total 2</td>
    </tr>
  </tfoot>
</table>
```

### Example

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Manager</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>Developer</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Summary: 2 employees</td>
    </tr>
  </tfoot>
</table>
```

#### Example Output

| Name                 | Position  |
| -------------------- | --------- |
| John Doe             | Manager   |
| Jane Smith           | Developer |
| Summary: 2 employees |           |

---

## Table Borders and Styling

HTML tables can be styled using CSS to control aspects like borders, background colors, and text alignment. You can apply CSS classes or inline styles to your tables to achieve the desired visual presentation.

### Syntax

```html
<table class="styled-table">
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

```css
/* CSS style for the table */
.styled-table {
  border-collapse: collapse;
  width: 100%;
  background-color: #f2f2f2;
}

.styled-table th, .styled-table td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.styled-table tr:nth-child(even) {
  background-color: #dddddd;
}
```

### Example

```html
<table class="styled-table">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>35</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>28</td>
  </tr>
</table>
```

#### Example Output

**Employee Information**

| Name       | Age |
| ---------- | --- |
| John Doe   | 35  |
| Jane Smith | 28  |

---

## `colspan` Attribute

The `colspan` attribute is used in HTML tables to determine how many columns a table cell should span horizontally. It merges adjacent cells to create a larger one, improving table layout and data presentation.

## Syntax

Apply the `colspan` attribute to a `<td>` or `<th>` element, setting it to an integer value representing the number of columns the cell should span.

### Example

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td colspan="2">Row 1, Cell 2 and Cell 3</td>
  </tr>
</table>
```

In this example, the second `<td>` element spans two columns, merging Cell 2 and Cell 3.

## Usage

- **Column Spanning**: Merge cells horizontally for improved layout.
- **Table Layouts**: Create complex table layouts by combining header cells.
- **Data Presentation**: Enhance data presentation, improving user understanding.

---

## Conclusion

HTML tables are an effective way to organize and present data in web documents. Understanding the
