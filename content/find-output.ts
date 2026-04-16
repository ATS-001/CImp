export const content = `
## Find Output Problems (KTU 2024 Pattern)

Here are 10 "Find the output" questions based on common C programming concepts tested in KTU exams.

### Question 1
\`\`\`c
#include <stdio.h>
int main() {
    int i = 5;
    printf("%d %d %d", i++, i, ++i);
    return 0;
}
\`\`\`
**Output:** \`7 7 7\` (Note: Evaluation order of arguments in printf is compiler-dependent, usually right to left)

### Question 2
\`\`\`c
#include <stdio.h>
int main() {
    int a = 10, b = 20;
    if (a = 5)
        printf("a is 5");
    else
        printf("a is not 5");
    return 0;
}
\`\`\`
**Output:** \`a is 5\` (Assignment operator \`=\` is used instead of equality \`==\`, so \`a\` becomes 5, which is true)

### Question 3
\`\`\`c
#include <stdio.h>
int main() {
    int x = 10;
    {
        int x = 20;
        printf("%d ", x);
    }
    printf("%d", x);
    return 0;
}
\`\`\`
**Output:** \`20 10\` (Scope of inner \`x\` is limited to the block)

### Question 4
\`\`\`c
#include <stdio.h>
int main() {
    char str[] = "Hello";
    printf("%ld", sizeof(str));
    return 0;
}
\`\`\`
**Output:** \`6\` (Includes the null terminator \`\\0\`)

### Question 5
\`\`\`c
#include <stdio.h>
int main() {
    int a = 5;
    switch(a) {
        case 5: printf("Five ");
        case 6: printf("Six ");
        default: printf("Default");
    }
    return 0;
}
\`\`\`
**Output:** \`Five Six Default\` (Missing \`break\` statements cause fall-through)

### Question 6
\`\`\`c
#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3};
    printf("%d", arr[3]);
    return 0;
}
\`\`\`
**Output:** \`0\` (Uninitialized elements of an array are set to 0)

### Question 7
\`\`\`c
#include <stdio.h>
int main() {
    int *p;
    int a = 10;
    p = &a;
    *p = 20;
    printf("%d", a);
    return 0;
}
\`\`\`
**Output:** \`20\` (Pointer \`p\` modifies the value of \`a\`)

### Question 8
\`\`\`c
#include <stdio.h>
int main() {
    int i = 0;
    for (i = 0; i < 5; i++);
    printf("%d", i);
    return 0;
}
\`\`\`
**Output:** \`5\` (The semicolon after the \`for\` loop makes it an empty loop)

### Question 9
\`\`\`c
#include <stdio.h>
int main() {
    int a = 10, b = 5;
    int c = a > b ? a : b;
    printf("%d", c);
    return 0;
}
\`\`\`
**Output:** \`10\` (Ternary operator assigns the larger value to \`c\`)

### Question 10
\`\`\`c
#include <stdio.h>
void func(int x) {
    x = 20;
}
int main() {
    int a = 10;
    func(a);
    printf("%d", a);
    return 0;
}
\`\`\`
**Output:** \`10\` (Pass by value does not modify the original variable)
`;
