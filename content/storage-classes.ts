export const content = `
## Storage Classes in C

A storage class defines the scope (visibility) and life-time of variables and/or functions within a C Program. They precede the type that they modify. We have four different storage classes in a C program:

1. \`auto\`
2. \`register\`
3. \`static\`
4. \`extern\`

### 1. auto Storage Class

The \`auto\` storage class is the default storage class for all local variables.

**Syntax:**
\`\`\`c
auto data_type variable_name;
\`\`\`

**Example:**
\`\`\`c
#include <stdio.h>

int main() {
    int a = 10; // auto by default
    auto int b = 20; // explicitly auto
    
    printf("a = %d\\n", a);
    printf("b = %d\\n", b);
    
    return 0;
}
\`\`\`

### 2. register Storage Class

The \`register\` storage class is used to define local variables that should be stored in a register instead of RAM. This means that the variable has a maximum size equal to the register size (usually one word) and can't have the unary '&' operator applied to it (as it does not have a memory location).

**Syntax:**
\`\`\`c
register data_type variable_name;
\`\`\`

**Example:**
\`\`\`c
#include <stdio.h>

int main() {
    register int i;
    int sum = 0;
    
    for(i = 1; i <= 5; i++) {
        sum += i;
    }
    
    printf("Sum = %d\\n", sum);
    return 0;
}
\`\`\`

### 3. static Storage Class

The \`static\` storage class instructs the compiler to keep a local variable in existence during the life-time of the program instead of creating and destroying it each time it comes into and goes out of scope. Therefore, making local variables static allows them to maintain their values between function calls.

**Syntax:**
\`\`\`c
static data_type variable_name;
\`\`\`

**Example:**
\`\`\`c
#include <stdio.h>

void func() {
    static int count = 0; // initialized only once
    count++;
    printf("Count = %d\\n", count);
}

int main() {
    func(); // Output: Count = 1
    func(); // Output: Count = 2
    func(); // Output: Count = 3
    return 0;
}
\`\`\`

### 4. extern Storage Class

The \`extern\` storage class is used to give a reference of a global variable that is visible to ALL the program files. When you use 'extern', the variable cannot be initialized however, it points the variable name at a storage location that has been previously defined.

**Syntax:**
\`\`\`c
extern data_type variable_name;
\`\`\`

**Example:**
\`\`\`c
// File 1: main.c
#include <stdio.h>

int count = 5; // Global variable
extern void write_extern();

int main() {
    write_extern();
    return 0;
}

// File 2: support.c
#include <stdio.h>

extern int count; // Reference to global variable in main.c

void write_extern() {
    printf("Count is %d\\n", count);
}
\`\`\`
`;
