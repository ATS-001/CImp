export const content = `
## Macros

A macro is a fragment of code that has been designated an identifier name using the \`#define\` preprocessor directive. When the code is compiled, the preprocessor blindly replaces every occurrence of the macro identifier with the associated code fragment before true compilation begins.

**Syntax:**
\`\`\`c
#define MACRO_NAME value_or_expression
\`\`\`

**Characteristics:**
*   There's no semicolon (\`;\`) at the close of a macro definition.
*   They don't consume memory the way variables do because they resolve text-replacement during preprocessing.

**Examples:**
\`\`\`c
#define PI 3.14159
#define AREA(r) (PI * (r) * (r))
\`\`\`

---

## Command Line Arguments (\`argc\`, \`argv\`, \`atoi\`)

In C, it is possible to pass parameter constraints to a program natively as you execute it via the operating system terminal. These are called command line arguments.

**Syntax of \`main()\` to accept CLI arguments:**
\`\`\`c
int main(int argc, char *argv[])
\`\`\`

1.  **\`argc\` (Argument Count):** An integer that dictates how many arguments were passed to the program via terminal. By default, it is at least \`1\` because the compilation file name itself counts as the first argument.
2.  **\`argv\` (Argument Vector):** An array of character pointers (strings) holding the distinct arguments.
    *   \`argv[0]\` holds the name of the program.
    *   \`argv[1]\` points to the first user-supplied argument.

### The \`atoi()\` function
When passing numerical data through the command line (e.g., \`./program 10 20\`), they arrive strictly as *Strings*. 
*   **\`atoi(string)\` (ASCII to Integer):** Converts the string format to a native integer type. It dictates needing the \`<stdlib.h>\` library.

---

## Recursion

**Recursion** is the mechanism by which a function physically calls itself in order to iterate over a problem space. 

It is critically essential for solving problems naturally structured as sub-graphs (like computing Factorials, Fibonacci sequences, or traversing directories).

### The Mechanics of Recursion:
For a recursive function to work without inciting a stack overflow, it requires strictly two conditions:

1.  **Base Case:** The terminal condition where the function ceases calling itself and begins cleanly popping returns off the stack.
2.  **Recursive Step:** The procedure in which the function continues calling itself while actively breaking down the problem toward the base case.

**General Example:**
\`\`\`c
int factorial(int n) {
    // 1. Base Case
    if (n == 0 || n == 1) 
        return 1;
        
    // 2. Recursive Step
    return n * factorial(n - 1); 
}
\`\`\`

---

### Recursion Vs. Looping (Iteration)

While both recursion and looping execute repetitive tasks, they operate distinctly differently on the hardware level:

| Feature | Recursion | Looping (Iteration) |
| :--- | :--- | :--- |
| **Mechanics** | A function calls itself physically. | A functional block natively repeats utilizing standard structures (\`for\`, \`while\`). |
| **Termination Point** | Requires a strictly evaluated **Base Case** to stop. | Requires a specific **Condition** to purposefully evaluate to mathematically false. |
| **Memory Overhead** | **High:** Every sequential call allocates an entirely new active stack frame (Risk of Stack Overflow). | **Low:** Utilizes the exact parallel memory block structurally without re-allocating. |
| **Execution Speed** | Generally **slower** resulting natively from function call/return overheads sequence. | Generally **faster** execution strictly holding zero stacking call overhead. |
| **Code Readability** | Structurally significantly cleaner and dramatically shorter natively regarding complex logic (Trees, node traversal). | Sometimes physically longer and visually clunky natively structuring complex bounds. |
`;
