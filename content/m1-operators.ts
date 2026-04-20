export const content = `
## Operators in C

An operator is a symbol that tells the compiler to perform specific mathematical or logical functions.

### 1. Arithmetic Operators
Used for mathematical calculations.
*   \`+\` (Addition)
*   \`-\` (Subtraction)
*   \`*\` (Multiplication)
*   \`/\` (Division - Returns quotient)
*   \`%\` (Modulus - Returns remainder of integer division)

**Example:**
\`\`\`c
int a = 10, b = 3;
printf("Div: %d, Modulo: %d", a/b, a%b); // Div: 3, Modulo: 1
\`\`\`

### 2. Relational Operators
Used to compare two values. They return \`1\` if true and \`0\` if false.
*   \`==\` (Equal to)
*   \`!=\` (Not equal to)
*   \`>\` (Greater than)
*   \`<\` (Less than)
*   \`>=\` (Greater than or equal to)
*   \`<=\` (Less than or equal to)

**Example:** \`5 > 3\` returns \`1\`.

### 3. Logical Operators
Used to combine conditional statements. Returns \`1\` (true) or \`0\` (false).
*   \`&&\` (Logical AND): True if BOTH conditions are true.
*   \`||\` (Logical OR): True if AT LEAST ONE condition is true.
*   \`!\` (Logical NOT): Reverses the logical state (True becomes False).

**Example:** \`((5 > 3) && (10 < 20))\` returns \`1\`.

### 4. Assignment & Shorthand Operators
Used to assign values to variables.
*   \`=\` (Simple assignment)
*   **Shorthand Operators (Compound Assignment):** Combine an arithmetic/bitwise operator with assignment.
    *   \`a += b\` is equivalent to \`a = a + b\`
    *   \`a -= b\` is equivalent to \`a = a - b\`
    *   \`a *= b\` is equivalent to \`a = a * b\`
    *   \`a /= b\` is equivalent to \`a = a / b\`
    *   \`a %= b\` is equivalent to \`a = a % b\`

### 5. Increment and Decrement Operators
Used to increase (\`++\`) or decrease (\`--\`) a value by 1.
*   **Prefix (e.g., \`++a\`):** Increment/decrement happens FIRST, then the new value is used in the expression.
*   **Postfix (e.g., \`a++\`):** The current value is used in the expression FIRST, then the increment/decrement happens.

**Example:**
\`\`\`c
int x = 5, y = 5;
int p = ++x; // Prefix: x becomes 6, then p is assigned 6. Result: x=6, p=6.
int q = y++; // Postfix: q is assigned 5, then y becomes 6. Result: y=6, q=5.
\`\`\`

### 6. Ternary Operator (Conditional Operator)
A shorthand for \`if-else\`. It takes three operands.
**Syntax:** \`condition ? expression_if_true : expression_if_false;\`

**Example:**
\`\`\`c
int a = 10, b = 20;
int max = (a > b) ? a : b; // max will be 20
\`\`\`

### 7. Bitwise Operators
Operate on bits and perform bit-by-bit operations. Works only with integers.
*   \`&\` (Bitwise AND): \`1\` if both bits are \`1\`.
*   \`|\` (Bitwise OR): \`1\` if at least one bit is \`1\`.
*   \`^\` (Bitwise XOR): \`1\` if bits are different.
*   \`~\` (Bitwise NOT/Complement): Flips bits (1s complement).
*   \`<<\` (Left Shift): Shifts bits left (equivalent to multiplying by 2^n).
*   \`>>\` (Right Shift): Shifts bits right (equivalent to dividing by 2^n).

**Example:**
\`\`\`c
int a = 5;  // Binary: 0101
int b = 3;  // Binary: 0011
printf("%d", a & b); // 0001 (Decimal 1)
printf("%d", a | b); // 0111 (Decimal 7)
printf("%d", a << 1); // 1010 (Decimal 10)
\`\`\`

---

## Operator Precedence

Precedence decides which operator evaluates first in an expression. Associativity decides the order (Left-to-Right or Right-to-Left) when operators of the same precedence appear.

**Basic Hierarchy (Highest to Lowest):**
1.  \`( ) [ ]\` (Brackets)
2.  \`++ -- ! ~ & * sizeof\` (Unary operators) -> Right to Left
3.  \`* / %\` (Multiplication / Division / Modulus) -> Left to Right
4.  \`+ -\` (Addition / Subtraction) -> Left to Right
5.  \`<< >>\` (Bitwise Shifts)
6.  \`< <= > >=\` (Relational)
7.  \`== !=\` (Equality)
8.  \`&\` (Bitwise AND)
9.  \`^\` (Bitwise XOR)
10. \`|\` (Bitwise OR)
11. \`&&\` (Logical AND)
12. \`||\` (Logical OR)
13. \`? :\` (Ternary) -> Right to Left
14. \`= += -= *= /= %= \` (Assignment) -> Right to Left

*Tip: Use parentheses \`()\` to force a specific order of evaluation and ignore default precedence.*
`;
