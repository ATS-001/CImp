export const content = `
## Enumerated Data Type (\`enum\`) in C

An enumeration (enum) is a user-defined data type mainly used to assign meaningful names (identifiers) to integral constants. It vastly improves code readability, making code self-documenting.

**Syntax:**
\`\`\`c
enum enum_name {
    value1,
    value2,
    // ...
};
\`\`\`

**Key Points:**
1. Unless explicitly assigned, the default value of the first enum constant is \`0\`.
2. The subsequent values increment by \`1\` automatically.
3. You can override the sequence at any point by explicitly assigning values.

**Example 1: Default ordering**
\`\`\`c
#include <stdio.h>

// Week starts at 0 by default
enum Weekday { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY };

int main() {
    enum Weekday today = WEDNESDAY;
    printf("Day number: %d\\n", today); // Prints: 3
    return 0;
}
\`\`\`

**Example 2: Overriding values**
\`\`\`c
#include <stdio.h>

// Specific status codes
enum Status { PENDING = 0, SUCCESS = 1, FAILURE = -1 };

int main() {
    enum Status current_status = FAILURE;
    if (current_status == FAILURE) {
        printf("Process failed with code %d\\n", current_status); // Prints -1
    }
    return 0;
}
\`\`\`

---

## \`typedef\` in C

The \`typedef\` keyword is used to give a new name (alias) to an existing data type. It is useful for creating concise code, abstracting away complex data types (like pointers or structures), and increasing code portability.

**Syntax:**
\`\`\`c
typedef existing_type new_alias_name;
\`\`\`

### Example 1: Basic Types
\`\`\`c
#include <stdio.h>

// Create an alias 'Length' for 'unsigned long'
typedef unsigned long Length;

int main() {
    // You can now use Length instead of writing 'unsigned long'
    Length distance = 1200000;
    printf("Distance is: %lu متر\\n", distance);
    return 0;
}
\`\`\`

### Example 2: \`typedef\` with Structures

\`typedef\` is an absolute lifesaver when working with structures, allowing you to declare structure variables without repeatedly typing the \`struct\` keyword.

\`\`\`c
#include <stdio.h>
#include <string.h>

// Combine typedef with struct definition
typedef struct {
    int roll_no;
    char name[50];
} Student; // "Student" is now a type alias for this anonymous struct

int main() {
    // No need to write 'struct Student s1;'
    Student s1; 
    
    s1.roll_no = 101;
    strcpy(s1.name, "Alice");
    
    printf("Roll No: %d, Name: %s\\n", s1.roll_no, s1.name);
    return 0;
}
\`\`\`
`;