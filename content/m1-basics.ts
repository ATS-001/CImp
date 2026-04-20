export const content = `
## 1. Character Set in C

A character set is a set of alphabets, letters and some special characters that are valid in C language.

*   **Alphabets:** Uppercase (\`A-Z\`) and Lowercase (\`a-z\`)
*   **Digits:** \`0, 1, 2, 3, 4, 5, 6, 7, 8, 9\`
*   **Special Characters:** \`~ @ # $ % ^ & * ( ) _ - + = { } [ ] ; : ' " < > , . / ? | \\\`
*   **White Space Characters:** space, newline (\`\\n\`), horizontal tab (\`\\t\`), carriage return (\`\\r\`), form feed (\`\\f\`)

## 2. Tokens

Tokens are the smallest individual units in a C program. When a compiler compiles a program, it breaks the code into tokens.

1.  **Keywords:** Reserved words that have special meaning to the compiler (e.g., \`int\`, \`if\`, \`while\`, \`return\`). C has 32 standard keywords.
2.  **Identifiers:** User-defined names for variables, functions, arrays, etc.
3.  **Constants:** Fixed values that do not change during program execution.
4.  **Strings:** Sequence of characters enclosed in double quotes (e.g., \`"Hello"\`).
5.  **Special Symbols:** Characters having special meaning (e.g., \`[ ] ( ) { } , ;\`).
6.  **Operators:** Symbols that perform operations on variables and values (e.g., \`+\`, \`-\`, \`*\`).

## 3. Variables

A variable is a name given to a memory location to store data. Its value can be changed during execution.

**Rules for naming variables (Identifiers):**
*   Must begin with a letter or an underscore (\`_\`).
*   Can consist of letters, digits, and underscores.
*   Cannot be a reserved keyword.
*   Case-sensitive (e.g., \`num\` and \`Num\` are different).

**Syntax:**
\`\`\`c
datatype variable_name;
\`\`\`
Example: \`int age = 20;\`

## 4. Escape Characters (Escape Sequences)

Escape sequences are used in C to represent characters that cannot be typed directly (like newline) or have special meaning (like quotation marks).

*   \`\\n\`: Newline
*   \`\\t\`: Horizontal Tab
*   \`\\\\\`: Backslash
*   \`\\'\`: Single quote
*   \`\\"\`: Double quote
*   \`\\a\`: Alert / Bell
*   \`\\b\`: Backspace
*   \`\\0\`: Null character (used to terminate strings)

## 5. Constants

Constants are values that remain fixed during the execution of a program.

1.  **Integer Constants:** Whole numbers without a decimal point.
    *   **Base 10 (Decimal):** Allowed digits \`0-9\`. E.g., \`15, -20, 0\`
    *   **Base 8 (Octal):** Must start with \`0\`. Allowed digits \`0-7\`. E.g., \`014\` (equals 12 in decimal)
    *   **Base 16 (Hexadecimal):** Must start with \`0x\` or \`0X\`. Allowed digits \`0-9, A-F\`. E.g., \`0x1A\`
2.  **Floating-point Constants:** Numbers with a fractional part or decimal point. E.g., \`3.14\`, \`-0.5\`, \`2.0e5\` (exponential notation)
3.  **Character Constants:** A single character enclosed in single quotes. E.g., \`'A'\`, \`'1'\`, \`'\\n'\`
4.  **String Constants:** A sequence of characters enclosed in double quotes. E.g., \`"Hello World"\`
5.  **Symbolic Constants:** Defined using the \`#define\` preprocessor directive. They do not occupy memory like variables.
    \`\`\`c
    #define PI 3.14159
    #define MAX 100
    \`\`\`
`;
