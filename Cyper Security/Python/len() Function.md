## **Python `len()` Function**

In Python, the `len()` function is a built-in function used for determining the length or size of a sequence, collection, or object. Here's a concise documentation of the `len()` function:

### **Usage**

The `len()` function is used to retrieve the length of a sequence, collection, or object, such as strings, lists, tuples, and dictionaries. It is called with a single argument, which is the object you want to measure.

```python
len(object)
```

- `object`: The object for which you want to find the length.

### **Return Value**

The `len()` function returns an integer representing the length of the specified object.

---

### **Examples**

#### Example 1: Finding the Length of a String

```python
text = "Hello, World!"
length = len(text)

# 'length' is now 13, the number of characters in the string
```

#### Example 2: Determining the Length of a List

```python
fruits = ['apple', 'banana', 'cherry']
count = len(fruits)

# 'count' is now 3, the number of elements in the list
```

#### Example 3: Measuring the Length of a Dictionary

```python
person = {'name': 'Alice', 'age': 30, 'city': 'New York'}
attributes = len(person)

# 'attributes' is now 3, the number of key-value pairs in the dictionary
```

---

### **Notes**

- The `len()` function is versatile and can be applied to a wide range of data structures in Python.
- It's a handy tool for determining the size, number of elements, or characters in an object.

The `len()` function is a straightforward way to obtain the length or size of various data structures in Python, aiding in tasks like looping through elements or validating data lengths.
