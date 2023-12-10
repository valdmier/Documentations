## **Python `str.lower()` and `str.upper()` Methods**

In Python, the `.lower()` and `.upper()` methods are used to manipulate and transform strings. These methods provide efficient ways to change the case of the characters in a string. Here's a brief documentation for both methods:

----

### **`str.lower()` Method**

#### **Usage**

The `.lower()` method is used to convert all the alphabetic characters in a string to lowercase. It doesn't affect non-alphabetic characters.

```python
string.lower()
```

- `string`: The string you want to convert to lowercase.

#### **Return Value**

The `.lower()` method returns a new string with all alphabetic characters converted to lowercase.

#### **Example**

```python
text = "Hello, World!"
lower_text = text.lower()

# 'lower_text' is now "hello, world!"
```

---

### **`str.upper()` Method**

#### **Usage**

The `.upper()` method is used to convert all the alphabetic characters in a string to uppercase. It doesn't affect non-alphabetic characters.

```python
string.upper()
```

- `string`: The string you want to convert to uppercase.

#### **Return Value**

The `.upper()` method returns a new string with all alphabetic characters converted to uppercase.

#### **Example**

```python
text = "Hello, World!"
upper_text = text.upper()

# 'upper_text' is now "HELLO, WORLD!"
```

---

### **Notes**

- Both methods create a new string and do not modify the original string.
- They are particularly useful when you need to standardize the case of text for comparison or formatting purposes.
- The `.lower()` and `.upper()` methods are specific to string objects and are not applicable to other data types.

These methods are helpful for ensuring consistent casing in text and are frequently used for string manipulation and text processing in Python.
