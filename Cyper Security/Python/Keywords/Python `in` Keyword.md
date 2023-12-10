## **Python `in` Keyword Documentation**

---

### **Overview**

The `in` keyword in Python is a membership operator used to check if a specific element exists within a sequence or a collection. It is a valuable tool for searching and making decisions based on the presence of an item in an iterable.

### **Usage**

The `in` keyword is typically used in the following format:

```python
element in iterable
```

- `element`: The value you want to check for existence within the iterable.
- `iterable`: The sequence or collection that you want to search.

### **Return Value**

The `in` keyword returns a Boolean value, which can be `True` if the `element` is found within the `iterable`, and `False` if it is not.

---

### **Examples**

#### Example 1: Checking for Element Existence in a List

You can use the `in` keyword to determine if an element is present in a list:

```python
fruits = ["apple", "banana", "cherry"]

# Check if "banana" is in the list
if "banana" in fruits:
    print("Found banana")
```

---

#### Example 2: Checking for Substring in a String

You can also use `in` to search for substrings within a string:

```python
text = "Hello, World!"

# Check if "Hello" is in the text
if "Hello" in text:
    print("Greeting found")
```

---

#### Example 3: Using `not in`

To check if an element is not present in an iterable, you can use `not in`:

```python
numbers = [1, 2, 3, 4, 5]

# Check if 6 is not in the list
if 6 not in numbers:
    print("6 is not in the list")
```

---

#### Example 4: Iterating Through a List

You can also use the `in` keyword to iterate through elements of a list:

```python
users = ["elarson", "bmoreno", "tshah", "sgilmore"]

for user in users:
    print(user)
```

---

### **Notes**

- The `in` keyword is versatile and can be applied to various data structures, including **lists, strings, tuples, dictionaries, and sets**.
- It is a valuable tool for performing membership checks, simplifying code, and making decisions based on the presence or absence of elements within an iterable.
