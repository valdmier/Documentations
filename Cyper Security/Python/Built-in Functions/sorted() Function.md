## **Python `sorted()` Function Documentation**

---

### **Overview**

The `sorted()` function in Python is a built-in function used to sort elements in an iterable, such as a list, tuple, or string, in a specified order. It is a versatile tool for arranging elements in ascending or descending order based on various criteria.

---

### **Usage**

The `sorted()` function is typically used in the following format:

```python
sorted(iterable, key, reverse)
```

- `iterable`: The iterable that you want to sort.
- `key` (optional): A function that calculates a key for each element, used to determine the sorting order based on the keys.
- `reverse` (optional): A Boolean value that indicates whether the sorting should be in descending order (`True`) or ascending order (`False`, which is the default).

---

### **Return Value**

The `sorted()` function returns a new list containing the sorted elements from the iterable. The original iterable remains unaltered.

---

### **Examples**

#### Example 1: Sorting a List in Ascending Order

You can use the `sorted()` function to sort a list of numbers in ascending order:

```python
numbers = [10, 25, 7, 42, 18]

# Sort the list in ascending order
sorted_numbers = sorted(numbers)

print(sorted_numbers)  # Output: [7, 10, 18, 25, 42]
```

#### Example 2: Sorting a List in Descending Order

You can sort a list of numbers in descending order by setting the `reverse` parameter to `True`:

```python
numbers = [10, 25, 7, 42, 18]

# Sort the list in descending order
sorted_numbers_descending = sorted(numbers, reverse=True)

print(sorted_numbers_descending)  # Output: [42, 25, 18, 10, 7]
```

#### Example 3: Using Key Function

The `key` parameter allows you to sort elements based on a specific key function:

```python
fruits = ["apple", "banana", "cherry", "blueberry"]

# Sort the list of fruits based on their lengths
sorted_fruits = sorted(fruits, key=len)

print(sorted_fruits)  # Output: ["apple", "cherry", "banana", "blueberry"]
```

---

### **Notes**

- The `sorted()` function is a powerful tool for arranging elements in an iterable in a specific order, whether it's ascending or descending.
- The `key` parameter enables you to customize the sorting criteria based on a function.
- The original iterable remains unchanged, as the `sorted()` function returns a new sorted list.
- One more important detail about the `sorted()` function is that **it cannot** take lists or strings that have elements of more than one data type. For example, you can’t use the list [1, 2, "hello"].
