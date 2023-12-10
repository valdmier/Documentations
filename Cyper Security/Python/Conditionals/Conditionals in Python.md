# Conditionals in Python

---

## How conditional statements work

A **conditional statement** is a statement that evaluates code to determine whether it meets a specific set of conditions. When a condition is met, it evaluates to a Boolean value of True and performs specified actions. When the condition isn’t met, it evaluates a Boolean value of False and doesn’t perform the specified actions.

In conditional statements, the condition is often based on a comparison of two values. This table summarizes common comparison operators used to compare numerical values.

| **operator** | **use**                  |
| ------------ | ------------------------ |
| >            | greater than             |
| <            | less than                |
| >=           | greater than or equal to |
| <=           | less than or equal to    |
| ==           | equal to                 |
| !=           | not equal to             |

---

### **If Statements in Python**

**Overview**

The `if` statement in Python is used to create conditional logic, allowing your code to perform different actions based on whether a given condition is `True` or `False`.

### **Basic `if` Statement Structure**

```python
if condition:
    # Code to execute if the condition is True
```

- The `if` keyword starts the conditional statement.
- The condition is a logical expression that evaluates to `True` or `False`.
- Code to execute when the condition is `True` is indented under the `if` statement.

**Example:**

```python
status = 200

if status == 200:
    print("OK")
```

---

### **The `else` Statement**

The `else` keyword allows you to specify an alternative action if the `if` condition is `False`.

**Example:**

```python
if status == 200:
    print("OK")
else:
    print("check other status")
```

---

### **The `elif` Statement**

The `elif` (else if) keyword is used when you have multiple conditions to check, and you want to specify alternative actions based on different conditions.

**Example:**

```python
if status == 200:
    print("OK")
elif status == 400:
    print("Bad Request")
elif status == 500:
    print("Internal Server Error")
else:
    print("check other status")
```

- Python checks conditions in the order they are listed.
- Once a condition evaluates to `True`, the associated code block is executed.
- If none of the conditions are `True`, the `else` block (if provided) is executed.

----

### **Logical Operators for Multiple Conditions**

You can use logical operators (`anyud`, `or`, `not`) to create complex conditions involving multiple expressions.

**Example using `and`:**

```python
if status >= 200 and status <= 226:
    print("successful response")
```

**Example using `or`:**

```python
if status == 100 or status == 102:
    print("informational response")
```

**Example using `not`:**

```python
if not (status >= 200 and status <= 226):
    print("check status")
```

- `and` requires both conditions to be `True`.
- `or` requires at least one condition to be `True`.
- `not` negates a condition (inverts `True` to `False` and vice versa).

*Note: Indentation is crucial in Python to define the code blocks within `if`, `elif`, and `else` statements.*

---
