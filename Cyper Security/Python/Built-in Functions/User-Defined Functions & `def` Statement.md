# **User-Defined Functions in Python**

---

## **Overview**

User-defined functions in Python are essential for creating custom blocks of reusable code to perform specific tasks. They complement Python's built-in functions and are defined using the `def` statement. This documentation provides an in-depth look at user-defined functions, including their components, usage, and the advantages they offer in Python programming.

---

## **Python `def` Statement**

The Python `def` statement is the gateway to creating your own functions. It marks the beginning of a function definition and includes the following components:

1. **Function header** **
   
   - **Function Name**: A descriptive name for your function, adhering to Python's naming conventions.
   
   - **Parameters (Optional):** Variables the function accepts as input, enclosed in parentheses.
   
   - **Colon (:)**: Indicates the start of the function's code block.
     
     ```python
     def display_investigation_message():
     ```

2. **Function Body:** The code executed when the function is called. It is indented under the `def` statement.
   
   ```python
   def display_investigation_message():
    print("investigate activity")
   ```

3. **Return Statement (Optional):** Functions can return values using the `return` statement. If omitted, the function returns `None`.

4. **Calling a Function:**
   Once defined, you can employ your function as many times as needed in your code. This action is referred to as "calling a function." To call a function, use its name followed by parentheses. For instance, calling the previously defined function:
   
   ```python
   display_investigation_message()
   ```

---

### **Example: Defining a Simple Function**

```python
def greet(name):
    """This function greets the person passed in as a parameter."""
    print("Hello, " + name)
```

Here's the breakdown:

- `greet` is the function name.
- `(name)` is a single parameter.
- The colon `:` signifies the start of the function body.
- The `print` statement is part of the function body.

---

### **Example: Including a Docstring**

A docstring, a triple-quoted string, is good practice for documenting your functions.

```python
def greet(name):
    """This function greets the person passed in as a parameter."""
    print("Hello, " + name)
```

Including a docstring makes your code more understandable and helps other developers or your future self understand the function's purpose.

---

## **Using the `return` Statement**

Functions can return values, enhancing their versatility.

### **Example: Using the `return` Statement**

```python
def add(a, b):
    """This function adds two numbers and returns the result."""
    return a + b
```

You can use this function like this:

```python
result = add(3, 4)
print(result)  # Output: 7
```

The `return` statement sends the result back to the caller.
