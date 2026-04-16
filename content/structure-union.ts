export const content = `
## Structure and Union in C

### 1. Structure

A structure is a user-defined data type in C that allows you to combine data items of different kinds. Structures are used to represent a record.

**Syntax:**
\`\`\`c
struct structure_name {
    data_type member1;
    data_type member2;
    // ...
};
\`\`\`

**Example Program:**
\`\`\`c
#include <stdio.h>
#include <string.h>

struct Student {
    int roll_no;
    char name[50];
    float marks;
};

int main() {
    struct Student s1;
    
    s1.roll_no = 1;
    strcpy(s1.name, "John Doe");
    s1.marks = 85.5;
    
    printf("Roll No: %d\\n", s1.roll_no);
    printf("Name: %s\\n", s1.name);
    printf("Marks: %.2f\\n", s1.marks);
    
    return 0;
}
\`\`\`

### 2. Union

A union is a special data type available in C that allows to store different data types in the same memory location. You can define a union with many members, but only one member can contain a value at any given time.

**Syntax:**
\`\`\`c
union union_name {
    data_type member1;
    data_type member2;
    // ...
};
\`\`\`

**Example Program:**
\`\`\`c
#include <stdio.h>
#include <string.h>

union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data data;
    
    data.i = 10;
    printf("data.i : %d\\n", data.i);
    
    data.f = 220.5;
    printf("data.f : %f\\n", data.f);
    
    strcpy(data.str, "C Programming");
    printf("data.str : %s\\n", data.str);
    
    // Note: Only the last assigned value is valid
    printf("After assigning string:\\n");
    printf("data.i : %d (corrupted)\\n", data.i);
    
    return 0;
}
\`\`\`

### 3. Structure VS Union

| Feature | Structure | Union |
| :--- | :--- | :--- |
| **Memory Allocation** | Allocates memory for all members separately. | Allocates memory equal to the size of the largest member. |
| **Size** | Size is greater than or equal to the sum of sizes of its members. | Size is equal to the size of its largest member. |
| **Value Modification** | Altering the value of one member does not affect others. | Altering the value of one member alters the value of others. |
| **Access** | All members can be accessed at any time. | Only one member can be accessed at a time. |
| **Initialization** | Multiple members can be initialized at once. | Only the first member can be initialized at declaration. |
| **Keyword** | \`struct\` | \`union\` |
`;
