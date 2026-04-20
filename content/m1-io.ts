export const content = `
## 1. Formatted Input / Output

### printf()
Used to print formatted output to the standard output screen (console).

**Syntax:** \`printf("format_string", variables...);\`

\`\`\`c
int age = 20;
printf("I am %d years old.", age); // %d is the format specifier for integer
\`\`\`

### scanf()
Used to take formatted input from the standard input (keyboard). You must pass the memory address of the variable using the \`&\` (address-of) operator.

**Syntax:** \`scanf("format_string", &variables...);\`

\`\`\`c
int age;
printf("Enter your age: ");
scanf("%d", &age); // Requires '&' to store the value at the variable's memory address
\`\`\`

---

## 2. Unformatted Input / Output (Characters & Strings)

These functions do not require format specifiers like \`%d\` or \`%s\`.

### Character I/O

#### \`getchar()\`
Reads a single character from the keyboard. It waits for the user to press Enter.
**Syntax:** \`char c = getchar();\`

#### \`putchar()\`
Prints a single character to the console.
**Syntax:** \`putchar(character_variable);\`

**Example:**
\`\`\`c
#include <stdio.h>

int main() {
    char ch;
    printf("Enter a character: ");
    ch = getchar(); // Reads one character
    
    printf("You entered: ");
    putchar(ch);    // Prints one character
    printf("\\n");
    return 0;
}
\`\`\`

### String I/O

#### \`gets()\` *(Warning: Unsafe and Deprecated)*
Reads a line of text (string) from standard input until a newline is placed. It is dangerous because it doesn't check for array bounds, which can lead to buffer overflow attacks.
**Syntax:** \`gets(string_variable);\`

#### \`fgets()\` *(Safe Alternative to gets)*
Reads a string with a specified size limit from a specified stream (like \`stdin\` for keyboard). It is safer than \`gets\`.
**Syntax:** \`fgets(string_array, max_length, input_stream);\`

#### \`puts()\`
Writes a string to the console and automatically appends a newline character (\`\\n\`) at the end.
**Syntax:** \`puts(string_variable);\`

**Example:**
\`\`\`c
#include <stdio.h>

int main() {
    char name[50];
    
    printf("Enter your full name: ");
    // Using fgets instead of gets for safety
    fgets(name, sizeof(name), stdin); 
    
    printf("Your name is: ");
    puts(name); // Automatically adds a newline
    
    return 0;
}
\`\`\`
`;
