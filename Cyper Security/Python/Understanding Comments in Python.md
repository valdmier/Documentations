## **Understanding Comments in Python**

In Python, comments serve as valuable notes for both programmers and future readers of your code. They help clarify your code's intentions and enhance readability. Here's what you need to know about using comments:

----

### **Single-Line Comments**

- Single-line comments begin with the `#` symbol in Python.
- Following the PEP 8 style guide, it's recommended to keep all lines in Python, including comments, under 79 characters for optimal readability.
- Single-line comments are typically used to explain specific sections or intentions within your code.

**Example:**

```python
# Print elements of 'computer_assets' list

computer_assets = ["laptop1", "desktop20", "smartphone03"]

for asset in computer_assets:
    print(asset)
```

**Note:** Single-line comments are essential for clarifying more complex code, such as functions, multiple loops, or conditional statements. They are optional for simpler code, like variable reassignments.

---

### **Multi-Line Comments**

- Multi-line comments come into play when a single comment exceeds 79 characters, such as when documenting complex functions.
- There are two common ways to create multi-line comments in Python:

**Using the `#` Symbol:**

```python
# remaining_login_attempts() function takes two integer parameters,
# the maximum login attempts allowed and the total attempts made,
# and it returns an integer representing remaining login attempts

def remaining_login_attempts(maximum_attempts, total_attempts):
    return maximum_attempts - total_attempts
```

**Using Docstrings:**

- Docstrings are multi-line comments written inside triple quotation marks (`""" """`).
- They serve as documentation for your code and are used to explain functions, classes, and modules in detail.

**Example:**

```python
"""
remaining_login_attempts() function takes two integer parameters,
the maximum login attempts allowed and the total attempts made,
and it returns an integer representing remaining login attempts
"""
```
