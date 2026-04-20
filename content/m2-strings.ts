export const content = `
## Strings in C

In C, a string is functionally an array of characters ending with a special null character. It is primarily used to store words or text.

### The String Terminator \`\\0\`

Every string in C must be terminated by a null character (identifier: \`'\\0'\`). The compiler uses this null character to determine the end of the string in memory.

---

### Initialization of Strings (4 Ways)

C provides multiple ways to declare and initialize a string:

1. **Explicit character array with null terminator:**
   \`char str[] = {'H', 'e', 'l', 'l', 'o', '\\0'};\`
2. **Double quotes (Implicit size and null terminator):**
   \`char str[] = "Hello";\` *(Compiler automatically sets size to 6 and appends '\\0')*
3. **Fixed size array with double quotes:**
   \`char str[10] = "Hello";\` *(Fills unused spaces with '\\0')*
4. **Using a Character Pointer:**
   \`char *str = "Hello";\` *(Creates a read-only string literal in memory)*

---

### String Header File \`<string.h>\`

To use predefined robust string manipulation functions, C provides the \`<string.h>\` header library. You must include this file using \`#include <string.h>\` at the top of your program.

### Predefined String Functions

*   \`strlen(s1)\`: Returns the numeric length of the string \`s1\` (excluding the null terminator).
*   \`strcpy(s1, s2)\`: Copies string \`s2\` into string \`s1\`.
*   \`strcat(s1, s2)\`: Concatenates (appends) string \`s2\` to the end of string \`s1\`.
*   \`strcmp(s1, s2)\`: Compares strings \`s1\` and \`s2\`.
    *   Returns \`0\` if they are exactly the same.
    *   Returns \`<0\` if \`s1\` is lexicographically smaller than \`s2\`.
    *   Returns \`>0\` if \`s1\` is lexicographically greater than \`s2\`.
*   \`strchr(s1, ch)\`: Returns a pointer to the *first* occurrence of character \`ch\` in string \`s1\`.
*   \`strstr(s1, s2)\`: Returns a pointer to the *first* occurrence of string \`s2\` in string \`s1\`.

---

### Non-Standard String Functions

Some compilers (like Turbo C/Windows C libraries) provide non-standard extentions. *(Note: These might not work in GCC/Linux environments without custom implementation).*

*   \`strrev(s1)\`: Reverses the string \`s1\`.
*   \`strlwr(s1)\`: Converts the string \`s1\` to lowercase.
*   \`strupr(s1)\`: Converts the string \`s1\` to uppercase.

---

### The \`<ctype.h>\` Library

The \`<ctype.h>\` header provides functions primarily for checking and transforming individual characters (NOT strings, but chars).

**Checking Functions (Return non-zero for true, 0 for false):**
*   \`isalpha(c)\`: Checks if 'c' is an alphabet letter.
*   \`isdigit(c)\`: Checks if 'c' is a numeric digit.
*   \`isalnum(c)\`: Checks if 'c' is an alphabet string OR numeric digit.
*   \`isspace(c)\`: Checks if 'c' is a whitespace character (space, tab, newline).
*   \`ispunct(c)\`: Checks if 'c' is a punctuation character.

**Transforming Functions:**
*   \`toupper(c)\`: Converts lowercase letter to uppercase.
*   \`tolower(c)\`: Converts uppercase letter to lowercase.
`;