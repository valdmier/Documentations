# HTML Entities Documentation

HTML entities are special character codes used in HTML documents to represent characters that have a reserved meaning or cannot be easily typed or displayed directly. These entities are essential for ensuring proper rendering and maintaining the integrity of web content. This documentation explains the importance of HTML entities, the issues they solve, and provides a table of common HTML entities.

---

## Importance of HTML Entities

HTML entities are crucial for several reasons:

1. **Character Encoding**: HTML documents are typically encoded using UTF-8, which can handle a vast range of characters from various languages. However, to include a character in an HTML document, it must be represented as a character entity. This ensures that the character is correctly interpreted and displayed by web browsers.

2. **Reserve Characters**: Some characters have special meanings in HTML, such as `<` and `>`, which denote the start and end of HTML tags. To display these characters as literal text rather than markup, they must be replaced with their respective HTML entities.

3. **Unprintable Characters**: Certain characters, like non-breaking spaces or specific control characters, are not easily entered or visible in source code. HTML entities provide a means to represent these characters.

4. **Accessibility**: HTML entities play a vital role in web accessibility. They allow web developers to provide text alternatives for non-text content, like images, ensuring that screen readers and assistive technologies can convey the content to users with disabilities.

---

## Issues Solved by HTML Entities

HTML entities solve several critical issues:

1. **Interpretation**: HTML entities ensure that browsers correctly interpret and render special characters as intended, preventing unexpected rendering issues or misinterpretations.

2. **Code Validation**: Including raw special characters in HTML code may lead to validation errors. Using entities helps maintain valid HTML documents.

3. **Character Confusion**: Certain characters, such as the ampersand (`&`), can be confused with HTML entities when they appear in web content. Using entities prevents such confusion.

---

## Common HTML Entities

Below is a table of some common HTML entities:

| Entity    | Character | Description                   | Name      | Number    |
| --------- | --------- | ----------------------------- | --------- | --------- |
| `&lt;`    | `<`       | Less than                     | `&lt;`    | `&#60;`   |
| `&gt;`    | `>`       | Greater than                  | `&gt;`    | `&#62;`   |
| `&amp;`   | `&`       | Ampersand                     | `&amp;`   | `&#38;`   |
| `&quot;`  | `"`       | Double quotation mark         | `&quot;`  | `&#34;`   |
| `&apos;`  | `'`       | Apostrophe (single quotation) | `&apos;`  | `&#39;`   |
| `&cent;`  | ¢         | Cent                          | `&cent;`  | `&#162;`  |
| `&pound;` | £         | Pound                         | `&pound;` | `&#163;`  |
| `&yen;`   | ¥         | Yen                           | `&yen;`   | `&#165;`  |
| `&euro;`  | €         | Euro                          | `&euro;`  | `&#8364;` |
| `&copy;`  | ©         | Copyright                     | `&copy;`  | `&#169;`  |
| `&reg;`   | ®         | Registered trademark          | `&reg;`   | `&#174;`  |

## Note

<u>Entity names are case sensitive.</u>

Using HTML entities ensures that your web content is accurately represented and readily accessible across different devices and browsers. It helps in addressing character interpretation and rendering issues, leading to a consistent and reliable user experience.
