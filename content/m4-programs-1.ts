export const content = `
## Programs (Advanced Pointers & Arrays)

### 1. Accessing Array Elements via Pointer
**The Question:** Write a C program to access and print all elements of an integer array using a pointer and pointer arithmetic.

\`\`\`c
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr; // Base address assignment
    
    printf("Array Elements:\\n");
    for(int i = 0; i < 5; i++) {
        // Accessing values utilizing pointer arithmetic
        printf("Element %d: %d\\n", i + 1, *(ptr + i));
    }
    
    return 0;
}
\`\`\`

### 2. Finding Largest Element in an Array via Pointers
**The Question:** Write a C program to find the largest value in an array where the array limit and elements are provided by the user, using pointer logic.

\`\`\`c
#include <stdio.h>

int main() {
    int n, i;
    printf("Enter limit: ");
    scanf("%d", &n);
    
    int arr[n];
    int *ptr = arr;
    
    printf("Enter elements:\\n");
    for(i = 0; i < n; i++) {
        scanf("%d", ptr + i);
    }
    
    int max = *ptr;
    for(i = 1; i < n; i++) {
        if(*(ptr + i) > max) {
            max = *(ptr + i);
        }
    }
    
    printf("Largest element is: %d\\n", max);
    return 0;
}
\`\`\`

### 3. String Concatenation using Pointers
**The Question:** Develop a C function that concatenates two strings using only pointers (without using the standard \`strcat\` function).

\`\`\`c
#include <stdio.h>

void concatenate(char *str1, char *str2) {
    // Navigate to the end of the first string
    while (*str1 != '\\0') {
        str1++;
    }
    
    // Copy second string to the end of the first
    while (*str2 != '\\0') {
        *str1 = *str2;
        str1++;
        str2++;
    }
    *str1 = '\\0'; // Explicit string termination
}

int main() {
    char str1[100] = "Hello, ";
    char str2[] = "World!";
    
    concatenate(str1, str2);
    printf("Concatenated String: %s\\n", str1);
    
    return 0;
}
\`\`\`

### 4. Executing a Function via Function Pointer
**The Question:** Demonstrate how to declare and execute a simple void function using a function pointer in C.

\`\`\`c
#include <stdio.h>

void hello() {
    printf("Hello from a function pointer!\\n");
}

int main() {
    // Function pointer declaration
    void (*p)() = hello;
    
    // Calling function using pointer
    p(); 
    
    return 0;
}
\`\`\`

### 5. Double Pointers (Pointer to Pointer)
**The Question:** Write a program to illustrate the use of double pointers by accessing an integer value through two levels of indirection.

\`\`\`c
#include <stdio.h>

int main() {
    int x = 100;
    int *p1 = &x;     // Pointer to x
    int **p2 = &p1;   // Pointer to p1
    
    printf("Value accessed via double pointer: %d\\n", **p2);
    printf("Address of x: %p\\n", (void*)&x);
    printf("Value of p1: %p\\n", (void*)p1);
    printf("Value of p2: %p\\n", (void*)p2);
    
    return 0;
}
\`\`\`
`;
