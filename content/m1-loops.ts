export const content = `
## Loops in C

Loops are used to execute a block of code repeatedly as long as a specified condition is true. Loops are divided into two categories:

### A. Entry-Controlled Loops
In these loops, the condition is checked **before** executing the loop body. If the condition is initially false, the loop body doesn't execute at all. (Examples: \`for\` loop, \`while\` loop).

#### 1. \`while\` loop
A basic entry-controlled loop. Best used when the number of iterations is not known beforehand.

**Syntax:**
\`\`\`c
while (condition) {
    // Loop body
    // increment/decrement
}
\`\`\`

**Example:**
\`\`\`c
int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;
}
\`\`\`

#### 2. \`for\` loop
A compact entry-controlled loop where initialization, condition, and increment/decrement happen in one line. Best used when the number of iterations is known exactly.

**Syntax:**
\`\`\`c
for (initialization; condition; increment/decrement) {
    // Loop body
}
\`\`\`

**Example:**
\`\`\`c
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
\`\`\`

---

### B. Exit-Controlled Loops
In these loops, the condition is checked **after** the execution of the loop body. This guarantees that the loop body will execute *at least once*, even if the condition is false. (Example: \`do-while\` loop).

#### 3. \`do-while\` loop
**Syntax:**
\`\`\`c
do {
    // Loop body
    // increment/decrement
} while (condition); // Notice the semicolon here!
\`\`\`

**Example:**
\`\`\`c
int i = 10;
do {
    printf("%d ", i); // Will output 10 once, then condition fails
    i++;
} while (i <= 5);
\`\`\`

---

## Jump Statements

Jump statements alter the normal flow of the program by transferring control to another part of the code unconditionally.

### 1. \`break\` statement
Used to immediately exit the innermost enclosing loop or \`switch\` case.

**Example:**
\`\`\`c
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break; // Loop stops when i is 5
    }
    printf("%d ", i); // Prints 1 2 3 4
}
\`\`\`

### 2. \`continue\` statement
Skips the current iteration of the loop and jumps directly to the next iteration's condition/increment check.

**Example:**
\`\`\`c
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; // Skips printing 3
    }
    printf("%d ", i); // Prints 1 2 4 5
}
\`\`\`

### 3. \`goto\` statement
Allows an unconditional jump to a labeled statement within the same function. It is generally discouraged in modern programming as it makes code hard to trace (Spaghetti code).

**Syntax:**
\`\`\`c
goto label_name;

label_name:
    // statements
\`\`\`

**Example:**
\`\`\`c
int i = 1;
loop_start:  // A label
    if (i <= 5) {
        printf("%d ", i);
        i++;
        goto loop_start; // Jumps back up
    }
\`\`\`
`;
