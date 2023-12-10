# **Understanding Python Modules and Libraries**

---

In Python, modules and libraries are essential for extending the functionality of your code. Here's an overview of how to work with them:

### **Modules and Libraries**

- A module is a Python file containing functions, variables, classes, or any runnable code. It serves as a unit of organization for code.
- A library is a collection of modules that provide reusable code for various tasks.

---

## **Python Standard Library**

- The Python Standard Library is an extensive collection of pre-built code that comes bundled with Python.

- It includes various modules, each designed for specific tasks.

- Examples of modules in the Python Standard Library include 
  
  - `re` (for pattern searching)
  
  - `csv` (for working with CSV files)
  
  - `glob` and `os` (for interacting with the command line)
  
  - `time` and `datetime` (for handling timestamps).

- Another module is `statistics`, which is used for statistical calculations.

---

### **Importing Modules from the Python Standard Library**

#### Importing an Entire Module

- Use the `import` keyword followed by the module name to import the entire module.

- For example: `import statistics` imports the `statistics` module.

- You can access functions within the module using the module name, e.g., `statistics.mean()`.

- example:
  
  `import statistics`

---

#### Importing Specific Functions

- Use the `from` keyword to import specific functions from a module.

- For example: `from statistics import mean, median` imports only the `mean` and `median` functions.

- After importing specific functions, you can use them directly without specifying the module name.

- example: 
  
  `from statistics import mean, median`

---

### **Examples of Importing and Using the `statistics` Module**

#### Example 1: Calculating Mean

`mean()` can be used to calculate the average

```python
import statistics

monthly_failed_attempts = [20, 17, 178, 33, 15, 21, 19, 29, 32, 15, 25, 19]
mean_failed_attempts = statistics.mean(monthly_failed_attempts)

# Output: mean: 35.25
print("mean:", mean_failed_attempts)
```

#### Example 2: Calculating Median

`median()` method calculates the median (**middle value**) of the given data set.

```python
import statistics

monthly_failed_attempts = [20, 17, 178, 33, 15, 21, 19, 29, 32, 15, 25, 19]
median_failed_attempts = statistics.median(monthly_failed_attempts)

# Output: median: 20.5
print("median:", median_failed_attempts)
```

---

### **External Libraries**

- In addition to the Python Standard Library, you can download and use external libraries.
- Examples include Beautiful Soup (`bs4`) for parsing HTML and NumPy (`numpy`) for numerical and mathematical computations.
- You need to install external libraries before using them in your code.

---

### **Importing External Libraries**

- After installation, import external libraries using the `import` keyword.
- For example: `import numpy` allows you to use NumPy functionalities in your code.

Remember that modules and libraries greatly expand Python's capabilities and allow you to work efficiently and effectively on various tasks.
