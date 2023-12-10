## Python `type()` Function Documentation

---

### **Overview**

The `type()` function is a built-in Python function that allows you to determine the data type of a given object or value. It is a powerful tool for introspection and is commonly used when you need to ascertain the data type of a variable in your code.

### **Syntax**

```python
type(object)
```

- `object`: The object or value whose data type you want to check.

### **Return Value**

The `type()` function returns the data type of the specified object as a type object.

### **Examples**

#### Example 1: Checking the Data Type of Variables

You can use the `type()` function to check the data type of various objects:

```python
# Integer
x = 5
print(type(x))  # Output: <class 'int'>

# String
name = "John"
print(type(name))  # Output: <class 'str'>

# List
numbers = [1, 2, 3]
print(type(numbers))  # Output: <class 'list'>

# Dictionary
person = {"name": "Alice", "age": 30}
print(type(person))  # Output: <class 'dict'>

# Boolean
is_python_fun = True
print(type(is_python_fun))  # Output: <class 'bool'>
```

---

#### Example 2: Using `type()` for Conditional Execution

The `type()` function can be used to conditionally execute code based on the data type of an object. For instance, you can check if a variable is a string and then perform specific actions:

```python
data = "example data"
if type(data) == str:
    print("This is a string.")
else:
    print("This is not a string.")

# output: This is a string.
```

---

#### Example 3: Dynamic Typing in Python

Python is dynamically typed, meaning that variable types can change during runtime. The `type()` function can be used to verify types before performing operations:

```python
x = 5
y = "10"

if type(x) == int and type(y) == int:
    result = x + y
    print("Sum:", result)
else:
  print("Data types are not compatible for addition.")

# "Data types are not compatible for addition.
```

---

### **Summary**

- The `type()` function is a tool for ensuring that you work with the correct data types.
- helpful for debugging and making your code more robust.
- It returns a type object, which can be compared with type literals like `int`, `str`, `list`, etc., for data type verification.
