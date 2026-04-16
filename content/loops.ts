export const content = `
## Entry and Exit Controlled Loops

Loops in C can be broadly classified into two types based on where the condition is checked:

### 1. Entry Controlled Loop

In an entry-controlled loop, the test condition is checked before entering the loop body. If the condition is false initially, the loop body is not executed even once.

**Examples:** \`for\` loop, \`while\` loop.

#### \`while\` loop syntax:
\`\`\`c
while (condition) {
    // statements
}
\`\`\`

#### Example Program:
\`\`\`c
#include <stdio.h>

int main() {
    int i = 1;
    
    // Condition is checked first
    while (i <= 5) {
        printf("%d ", i);
        i++;
    }
    return 0;
}
\`\`\`

### 2. Exit Controlled Loop

In an exit-controlled loop, the test condition is checked after executing the loop body. Therefore, the loop body will execute at least once, regardless of whether the condition is true or false initially.

**Example:** \`do-while\` loop.

#### \`do-while\` loop syntax:
\`\`\`c
do {
    // statements
} while (condition);
\`\`\`

#### Example Program:
\`\`\`c
#include <stdio.h>

int main() {
    int i = 10;
    
    // Body executes first, then condition is checked
    do {
        printf("%d ", i);
        i++;
    } while (i <= 5); // Condition is false, but body executed once
    
    return 0;
}
\`\`\`
`;
