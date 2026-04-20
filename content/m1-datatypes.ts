export const content = `
## 1. Data Types in C

Data types specify the type and size of data that can be stored in a variable. C categorizes data types into three main types:

1.  **Primary (Fundamental) Data Types:** Built-in types that form the basis for all other types.
    *   \`int\` (Integer values)
    *   \`char\` (Single character values)
    *   \`float\` (Single-precision floating-point values)
    *   \`double\` (Double-precision floating-point values)
    *   \`void\` (Empty/No value)
2.  **Secondary (User-Defined) Data Types:** Data types created by the user to group data.
    *   \`struct\` (Structures)
    *   \`union\` (Unions)
    *   \`enum\` (Enumerated types)
    *   \`typedef\`
3.  **Tertiary (Derived) Data Types:** Data types that are derived from primary data types.
    *   Arrays
    *   Pointers
    *   Functions

---

## 2. Data Type Qualifiers (Modifiers)

Qualifiers are keywords used to modify the properties (size or sign) of primary data types to fit specific needs.

### 1. Size Qualifiers
Used to alter the memory size allocated to a data type.
*   **short:** Decreases the memory size (usually minimum 2 bytes). Used when small numbers are expected to save memory.
*   **long:** Increases the memory size (usually minimum 4 or 8 bytes) to store very large numbers.

### 2. Sign Qualifiers
Used to specify whether a variable can hold negative values or only positive values.
*   **signed:** Can store both negative and positive values (default for \`int\` and \`char\`).
*   **unsigned:** Can store only zero and positive values. By removing negative numbers, it doubles the maximum positive range.

---

## 3. Sizes and Ranges (Standard 32/64-bit Systems)

*Note: The exact size may vary depending on the compiler and architecture, but these are the standard typical sizes.*

| Data Type / Qualifier | Size in Bytes | Size in Bits | Range | Format Specifier |
| :--- | :--- | :--- | :--- | :--- |
| **char** (or signed char) | 1 byte | 8 bits | -128 to +127 | \`%c\` |
| **unsigned char** | 1 byte | 8 bits | 0 to 255 | \`%c\` |
| **short int** (signed) | 2 bytes | 16 bits | -32,768 to +32,767 | \`%hd\` |
| **unsigned short int** | 2 bytes | 16 bits | 0 to 65,535 | \`%hu\` |
| **int** (signed) | 4 bytes | 32 bits | -2,147,483,648 to +2,147,483,647 | \`%d\` or \`%i\` |
| **unsigned int** | 4 bytes | 32 bits | 0 to 4,294,967,295 | \`%u\` |
| **long int** (signed) | 4 or 8 bytes | 32 or 64 | Varies based on architecture | \`%ld\` |
| **unsigned long int** | 4 or 8 bytes | 32 or 64 | Varies based on architecture | \`%lu\` |
| **long long int** | 8 bytes | 64 bits | -(2^63) to (2^63)-1 | \`%lld\` |
| **float** | 4 bytes | 32 bits | 6 decimal places of precision | \`%f\` |
| **double** | 8 bytes | 64 bits | 15 decimal places of precision | \`%lf\` |
| **long double** | 10 or 16 bytes| 80 or 128 | 19 decimal places of precision | \`%Lf\` |

### Example Usage of Qualifiers
\`\`\`c
#include <stdio.h>

int main() {
    short int a = 1000;
    unsigned int b = 4000000000; // Positive only
    long long int c = 9000000000000000000LL;
    
    printf("Size of short int: %zu bytes\\n", sizeof(a));
    printf("Size of unsigned int: %zu bytes\\n", sizeof(b));
    printf("Size of long long int: %zu bytes\\n", sizeof(c));
    
    return 0;
}
\`\`\`
`;
