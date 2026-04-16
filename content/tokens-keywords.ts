export const content = `
## Tokens, Keywords, Identifiers in C

### 1. Tokens

A token is the smallest individual unit in a C program. C programs are written using these tokens. There are six types of tokens in C:

1. **Keywords:** e.g., \`int\`, \`while\`
2. **Identifiers:** e.g., \`main\`, \`total\`
3. **Constants:** e.g., \`10\`, \`20.5\`
4. **Strings:** e.g., \`"Hello"\`
5. **Special Symbols:** e.g., \`()\`, \`{}\`
6. **Operators:** e.g., \`+\`, \`/\`, \`-\`, \`*\`

### 2. Keywords

Keywords are predefined, reserved words used in programming that have special meanings to the compiler. Keywords are part of the syntax and they cannot be used as an identifier.

There are 32 keywords in C:
\`auto\`, \`break\`, \`case\`, \`char\`, \`const\`, \`continue\`, \`default\`, \`do\`, \`double\`, \`else\`, \`enum\`, \`extern\`, \`float\`, \`for\`, \`goto\`, \`if\`, \`int\`, \`long\`, \`register\`, \`return\`, \`short\`, \`signed\`, \`sizeof\`, \`static\`, \`struct\`, \`switch\`, \`typedef\`, \`union\`, \`unsigned\`, \`void\`, \`volatile\`, \`while\`.

### 3. Identifiers

Identifiers refer to the names of variables, functions, arrays, classes, etc., created by the programmer. They are the fundamental requirement of any language.

**Rules for naming identifiers:**
1. A valid identifier can have letters (both uppercase and lowercase letters), digits, and underscores.
2. The first letter of an identifier should be either a letter or an underscore.
3. You cannot use keywords as identifiers.
4. There is no rule on how long an identifier can be. However, you may run into problems in some compilers if the identifier is longer than 31 characters.

**Examples:**
*   Valid: \`age\`, \`_count\`, \`total_sum\`, \`num1\`
*   Invalid: \`1num\` (starts with digit), \`int\` (keyword), \`total sum\` (contains space)

### Example Program showing Tokens

\`\`\`c
#include <stdio.h>

int main() {
    int x = 10;
    printf("Value is %d", x);
    return 0;
}
\`\`\`

**Tokens in the above program:**
*   \`int\` (Keyword)
*   \`main\` (Identifier)
*   \`(\`, \`)\`, \`{\`, \`}\` (Special Symbols)
*   \`int\` (Keyword)
*   \`x\` (Identifier)
*   \`=\` (Operator)
*   \`10\` (Constant)
*   \`;\` (Special Symbol)
*   \`printf\` (Identifier)
*   \`"Value is %d"\` (String)
*   \`,\` (Special Symbol)
*   \`x\` (Identifier)
*   \`return\` (Keyword)
*   \`0\` (Constant)
`;
