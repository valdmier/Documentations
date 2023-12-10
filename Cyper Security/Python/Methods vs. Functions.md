## **Methods vs. Functions in Python**

In Python, understanding the distinction between methods and functions is essential. Here's a concise documentation to help clarify the difference:

---

### **Functions:**

- Functions are blocks of organized, reusable code that perform a specific task.
- They are standalone and can be defined outside of classes or objects.
- Functions are defined using the `def` keyword and have their own scope.
- They are called by their name, followed by parentheses, to execute a specific action.
- Functions can accept arguments, perform computations, and return results.
- They can be used to break down complex tasks into manageable, modular pieces.
- Functions are not tied to any specific data type or object and can be used independently.

**Example:**

```python
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 7)  # Calls the 'add_numbers' function
```

---

### **Methods:**

- Methods are functions associated with specific objects or data types.
- They are defined within classes and operate on the attributes and data of those classes.
- Methods are accessed via an object or instance of a class.
- They are called on objects using dot notation, like `object.method()`.
- Methods often modify the internal state of an object and are bound to that object's data.
- They are used to encapsulate behavior specific to a particular object or data type.

**Example:**

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return 3.14 * self.radius * self.radius

circle1 = Circle(5)  # Creates an instance of the 'Circle' class
area = circle1.calculate_area()  # Calls the 'calculate_area' method on 'circle1'
```

---

### **Key Differences:**

- Functions are generally independent and can be used globally, while methods are associated with specific objects or classes.
- Functions are called directly by their name, while methods are accessed through object instances.
- Methods often operate on and modify the internal data of objects, while functions typically don't.

Understanding the distinction between methods and functions is crucial for effective programming in Python. Functions are versatile and can be applied broadly, while methods are specific to objects and encapsulate behavior associated with those objects.
