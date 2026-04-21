export const content = `
## Modular Programming

Modular Programming is a software design technique that involves dividing a large program into smaller, manageable, and independent sub-programs called **modules** (or functions). 

### Advantages of Modular Programming
*   **Reusability:** Code written once can be reused multiple times across different parts of the application.
*   **Maintainability:** Easier to locate errors and fix bugs since code is sequestered in specific modules.
*   **Readability:** Complex logic is broken down into simple, descriptive units, making the main code abstract and clean.
*   **Collaboration:** Multiple programmers can work on different functions simultaneously.

---

## Functions

A function in C is a block of code strictly designed to perform a specific task. Every C program intrinsically has at least one central function: \`main()\`.

### 1. Standard Library Functions
These are built-in native functions provided by C (e.g., \`printf()\`, \`scanf()\`, \`sqrt()\`, \`strlen()\`). You simply include their respective header files (\`<stdio.h>\`, \`<math.h>\`, \`<string.h>\`) and utilize them immediately.

### 2. User-Defined Functions
These are functions formulated and structured by the programmer to address specific problems.

#### Components of a User-Defined Function:

1.  **Function Declaration (Prototype):** Informs the compiler about the function's name, return type, and parameters *before* it gets fully defined or called.
    \`\`\`c
    return_type function_name(parameter_list);
    \`\`\`
2.  **Function Definition:** The concrete block of code specifying exactly what the function does.
    \`\`\`c
    return_type function_name(parameter_list) {
        // the body of the function
    }
    \`\`\`
3.  **Function Call:** Triggering the function to execute from another spot in the program.
    \`\`\`c
    function_name(arguments);
    \`\`\`

---

## The Return Statement

The \`return\` statement terminates the execution of a function and passes the control (and optionally, a result value) back to the calling function.
*   If the function type is \`void\`, it does not return a value.
*   If the function specifies a type (like \`int\`, \`float\`), the \`return\` statement **must** return a matching value.

---

## Formal vs. Actual Parameters

*   **Actual Parameters (Arguments):** The distinct values directly passed to the function during the *Function Call*. Example: \`add(5, 10);\`
*   **Formal Parameters:** The conceptual variables defined strictly inside the *Function Definition* that receive and store the evaluated Actual Parameters. Example: \`int add(int a, int b) { ... }\`

---

## Types of Functions

Based strictly on presence or absence of arguments and return values, there are 4 primary structures:

1.  **Function with No Arguments and No Return Value**
    \`\`\`c
    void printHello() { printf("Hello\\n"); }
    \`\`\`
2.  **Function with Arguments but No Return Value**
    \`\`\`c
    void sayHi(char name[]) { printf("Hi %s\\n", name); }
    \`\`\`
3.  **Function with No Arguments but Returns a Value**
    \`\`\`c
    int getFixedNumber() { return 100; }
    \`\`\`
4.  **Function with Arguments and Returns a Value**
    \`\`\`c
    int sum(int x, int y) { return x + y; }
    \`\`\`
`;
