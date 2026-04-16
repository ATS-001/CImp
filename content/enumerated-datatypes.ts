export const content = `
## Enumerated Datatypes in C

An enumeration (or enum) is a user-defined data type in C. It is mainly used to assign names to integral constants, the names make a program easy to read and maintain.

### Syntax

\`\`\`c
enum enum_name {
    value1,
    value2,
    value3,
    // ...
};
\`\`\`

By default, the value of \`value1\` is 0, \`value2\` is 1, \`value3\` is 2, and so on. You can also explicitly assign values to the enum elements.

### Examples

#### Example 1: Basic usage
\`\`\`c
#include <stdio.h>

enum week { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };

int main() {
    enum week today;
    today = Wednesday;
    
    printf("Day %d\\n", today + 1); // Output: Day 4
    return 0;
}
\`\`\`

#### Example 2: Explicit values
\`\`\`c
#include <stdio.h>

enum State { Working = 1, Failed = 0, Freezed = 0 };

int main() {
    printf("%d, %d, %d\\n", Working, Failed, Freezed); // Output: 1, 0, 0
    return 0;
}
\`\`\`

#### Example 3: Changing default values
\`\`\`c
#include <stdio.h>

enum day { sunday = 1, monday, tuesday = 5, wednesday, thursday = 10, friday, saturday };

int main() {
    printf("%d %d %d %d %d %d %d\\n", sunday, monday, tuesday, wednesday, thursday, friday, saturday);
    // Output: 1 2 5 6 10 11 12
    return 0;
}
\`\`\`
`;
