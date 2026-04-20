export const content = `
## Control Statements in C

Control statements determine the flow of execution of a program based on certain conditions.

### 1. Simple \`if\` statement
It is used to execute a block of code only if a given condition is true.

**Syntax:**
\`\`\`c
if (condition) {
    // Statements to execute if condition is true
}
\`\`\`

**Example:**
\`\`\`c
int a = 10;
if (a > 5) {
    printf("a is greater than 5");
}
\`\`\`

### 2. \`if-else\` statement
It provides two paths of execution. If the condition is true, the \`if\` block executes. If false, the \`else\` block executes.

**Syntax:**
\`\`\`c
if (condition) {
    // Statements if true
} else {
    // Statements if false
}
\`\`\`

**Example:**
\`\`\`c
int a = 10;
if (a % 2 == 0) {
    printf("Even");
} else {
    printf("Odd");
}
\`\`\`

### 3. \`else-if\` ladder
Used when there are multiple conditions to check. It checks conditions from top to bottom. As soon as a true condition is found, its block is executed, and the rest of the ladder is bypassed.

**Syntax:**
\`\`\`c
if (condition1) {
    // Executed if condition1 is true
} else if (condition2) {
    // Executed if condition2 is true
} else if (condition3) {
    // Executed if condition3 is true
} else {
    // Executed if ALL conditions are false
}
\`\`\`

**Example:**
\`\`\`c
int marks = 85;
if (marks >= 90) {
    printf("A Grade");
} else if (marks >= 80) {
    printf("B Grade");
} else if (marks >= 70) {
    printf("C Grade");
} else {
    printf("Failed");
}
\`\`\`

### 4. \`switch-case\` statement
An alternative to a long \`else-if\` ladder that tests a variable against a list of values (cases). It works cleanly with integers and characters. A \`break\` statement is usually needed to stop fall-through.

**Syntax:**
\`\`\`c
switch (expression) {
    case constant1:
        // statements
        break;
    case constant2:
        // statements
        break;
    default:
        // executed if no match is found
}
\`\`\`

**Example:**
\`\`\`c
char op = '+';
int a = 10, b = 5;

switch(op) {
    case '+':
        printf("Sum is %d", a + b);
        break;
    case '-':
        printf("Difference is %d", a - b);
        break;
    case '*':
        printf("Product is %d", a * b);
        break;
    default:
        printf("Invalid Operator");
}
\`\`\`
`;
