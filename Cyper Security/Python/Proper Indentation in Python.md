## **Proper Indentation in Python**

In Python, indentation is crucial for code structure and readability. It's used to define the scope of code blocks, such as conditional statements, iterative statements, and function definitions. The PEP 8 style guide recommends using four spaces for each level of indentation. Here's how proper indentation is applied:

### **Example:**

```python
count = 0
login_status = True

while login_status:
    print("Try again.")
    count = count + 1
    if count == 4:
        login_status = False
```

In this example:

- The `while` loop is indented with four spaces, indicating that the following block is part of the loop.
- The `if` statement inside the loop is indented by an additional four spaces, making it eight spaces in total.
- Consistent four-space indentation enhances code clarity and ensures proper code execution.
