## **Regular Expressions (Regex) in Python**

### **Overview**

Regular expressions, often referred to as regex or regexp, are powerful pattern-matching and text-processing tools used in many programming languages, including Python. They allow you to search, extract, and manipulate text based on specific patterns or rules. Regular expressions are particularly useful for tasks such as data validation, text parsing, and search operations.

### **Importing the `re` Module**

In Python, regular expressions are accessed and manipulated using the `re` module. Before you can work with regular expressions, you need to import this module:

---

### **Basic Pattern Matching**

#### **Alphanumeric Characters**

- `\w`: Matches any alphanumeric character, equivalent to `[a-zA-Z0-9]`.

- Example:
  
  ```python
  result = re.findall(r'\w', "Hello123")
  # Output: ['H', 'e', 'l', 'l', 'o', '1', '2', '3']
  ```

---

#### **Special Characters**

- `.`: Matches any character except a newline.

- Example:
  
  ```python
  result = re.findall(r'.', "abc")
  # Output: ['a', 'b', 'c']
  ```

---

#### **Digits**

- `\d`: Matches any digit character, equivalent to `[0-9]`.

- Example:
  
  ```python
  result = re.findall(r'\d', "Age: 25")
  # Output: ['2', '5']
  ```

---

#### **Whitespace**

- `\s`: Matches any whitespace character (space, tab, newline).

- Example:
  
  ```python
  result = re.findall(r'\s', "Hello\tWorld")
  # Output: ['\t']
  ```

---

### **Quantifiers**

Quantifiers specify the number of occurrences of a character or group in the pattern.

#### **`+` (One or More)**

- Matches one or more occurrences of the preceding character or group.

- Example:
  
  ```python
  result = re.findall(r'\d+', "Ages: 25, 30, 40")
  # Output: ['25', '30', '40']
  ```

#### **`*` (Zero or More)**

- Matches zero or more occurrences of the preceding character or group.

- Example:
  
  ```python
  result = re.findall(r'\d*', "IDs: 123, ABC, 789")
  # Output: ['123', '', '789', '', '', '', '']
  ```

#### **`?` (Zero or One)**

- Matches zero or one occurrence of the preceding character or group.

- Example:
  
  ```python
  result = re.findall(r'Mr\.?', "Mr. John and Mr Smith")
  # Output: ['Mr.', 'Mr']
  ```

#### **Braces `{}` (Specific Count)**

- Matches a specific number of occurrences.

- Example:
  
  ```python
  result = re.findall(r'\d{2}', "12, 345, 6789")
  # Output: ['12', '34', '67', '89']
  ```

---

### **Character Classes**

Character classes allow you to specify a set of characters to match.

#### **`[ ]` (Character Set)**

- Matches any single character within the square brackets.

- Example:
  
  ```python
  result = re.findall(r'[aeiou]', "Hello")
  # Output: ['e', 'o']
  ```

#### **`[^ ]` (Negation)**

- Matches any single character not within the square brackets.

- Example:
  
  ```python
  result = re.findall(r'[^aeiou]', "Hello")
  # Output: ['H', 'l', 'l']
  ```

### **Anchors and Boundaries**

Anchors and boundaries allow you to specify the position within a string where a match should occur.

#### **`^` (Start of Line)**

- Matches the start of a line.

- Example:
  
  ```python
  result = re.findall(r'^\d', "123 Start of line")
  # Output: ['1']
  ```

#### **`$` (End of Line)**

- Matches the end of a line.

- Example:
  
  ```python
  result = re.findall(r'\w$', "End of line: Hello")
  # Output: ['o']
  ```

#### **`\b` (Word Boundary)**

- Matches a word boundary (start or end of a word).

- Example:
  
  ```python
  result = re.findall(r'\b\w{4}\b', "Words of four letters")
  # Output: ['four']
  ```

### **Grouping and Capturing**

Parentheses are used to group and capture parts of a pattern. Captured groups can be extracted using `re.findall()`.

#### **`( )` (Grouping)**

- Groups elements together for applying quantifiers or other operators.

- Example:
  
  ```python
  result = re.findall(r'(\d{2})-(\d{2})', "01-23, 45-67")
  # Output: [('01', '23'), ('45', '67')]
  ```

### **Lookahead and Lookbehind**

Lookahead and lookbehind are used to specify conditions that must be met without including the matched text in the result.

#### **`(?= )` (Positive Lookahead)**

- Specifies that a pattern must be followed by another pattern.

- Example:
  
  ```python
  result = re.findall(r'\d(?=\w)', "1A 2B 3C")
  # Output: ['1', '2', '3']
  ```

#### **`(?<= )` (Positive Lookbehind)**

- Specifies that a pattern must be preceded by another pattern.

- Example:
  
  ```python
  result = re.findall(r'(?<=\d )\w', "1A 2B 3C")
  # Output: ['A', 'B', 'C']
  ```

### **Greedy vs. Non-Greedy Matching**

By default, regex matching is greedy, meaning it matches as much as possible. Adding `?` to a quantifier makes it non-greedy, matching as little as possible.

- Greedy:
  
  ```python
  result = re.findall(r'"(.*?)"', '"Text 1" and "Text 2"')
  # Output: ['Text 1', 'Text 2']
  ```

- Non-Greedy:
  
  ```python
  result = re.findall(r'"(.*?)"', '"Text 1" and "Text 2"')
  # Output: ['Text 1']
  ```

### **Repetition of Captured Groups**

You can specify how many times a captured group should be repeated.

- Example:
  
  ```python
  result = re.findall(r'(ab){2}', "ababab abab")
  # Output: ['abab', 'abab']
  ```

### **More Functions**

While `re.findall()` is commonly used, there are other functions in the `re` module, such as `re.search()`, `re.match()`, and `re.sub()`, to perform various operations with regular expressions.

### **Conclusion**

Regular expressions are a versatile tool for pattern matching and text manipulation in Python. This documentation provides an introduction to key concepts and functions, but regex is a vast topic with many advanced features and use cases. Mastery of regular expressions can significantly enhance your text-processing capabilities.
