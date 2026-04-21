export const content = `
## Programs (Dynamic Memory & Recursion)

### 11. Dynamic Array using malloc()
**The Question:** Write a C program to dynamically allocate memory for an array of integers based on user input using \`malloc()\`, read the elements, and print them.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i;
    int *ptr;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    // Dynamically allocate memory using malloc
    ptr = (int*) malloc(n * sizeof(int));

    if (ptr == NULL) {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    printf("Enter elements:\\n");
    for (i = 0; i < n; i++) {
        scanf("%d", ptr + i);
    }

    printf("Entered elements are: ");
    for (i = 0; i < n; i++) {
        printf("%d ", *(ptr + i));
    }
    printf("\\n");

    // Free allocated memory
    free(ptr);
    return 0;
}
\`\`\`

### 12. Dynamic Array using calloc() and Initialization Check
**The Question:** Demonstrate the use of \`calloc()\` to allocate memory for an array and show that it automatically initializes all bytes to zero.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5, i;
    int *ptr;

    // Dynamically allocate memory using calloc (initializes to 0)
    ptr = (int*) calloc(n, sizeof(int));

    if (ptr == NULL) {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    printf("Elements initialized by calloc:\\n");
    for (i = 0; i < n; i++) {
        printf("%d ", *(ptr + i)); // Should print 0s
    }
    printf("\\n");

    free(ptr);
    return 0;
}
\`\`\`

### 13. Resizing Memory with realloc()
**The Question:** Write a program that initially allocates memory for 2 integers, then expands that memory to hold 4 integers using \`realloc()\`.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;
    
    // Initial assignment
    ptr = (int*) malloc(2 * sizeof(int));
    if (ptr == NULL) return 1;

    ptr[0] = 10;
    ptr[1] = 20;

    printf("Initial Allocation: %d %d\\n", ptr[0], ptr[1]);

    // Resizing the allocated block to hold 4 integers
    ptr = (int*) realloc(ptr, 4 * sizeof(int));
    if (ptr == NULL) return 1;

    ptr[2] = 30;
    ptr[3] = 40;

    printf("After realloc: ");
    for (int i = 0; i < 4; i++) {
        printf("%d ", ptr[i]);
    }
    printf("\\n");

    free(ptr);
    return 0;
}
\`\`\`

### 14. Check Strong Number (Recursion)
**The Question:** Write a program to check if a given number is a "Strong Number" (where the sum of factorials of digits equals the original number) using a recursive function for factorial.

\`\`\`c
#include <stdio.h>

// Function to find factorial recursively
int factorial(int n) {
    if (n == 0 || n == 1) return 1;
    return n * factorial(n - 1);
}

// Function to check if a number is a Strong Number
int isStrong(int num) {
    int temp = num;
    int sum = 0;

    while (temp > 0) {
        int rem = temp % 10;
        sum += factorial(rem); 
        temp /= 10;
    }

    return (sum == num);
}

int main() {
    int n;
    printf("Enter a number to check if it's a Strong Number: ");
    scanf("%d", &n);

    if (isStrong(n)) {
        printf("%d is a Strong Number.\\n", n);
    } else {
        printf("%d is NOT a Strong Number.\\n", n);
    }

    return 0;
}
\`\`\`

### 15. Permutations of a String (Recursion)
**The Question:** Write a recursive C program to generate and print all possible permutations of a given string (e.g., "ABC").

\`\`\`c
#include <stdio.h>
#include <string.h>

void swap(char *x, char *y) {
    char temp = *x;
    *x = *y;
    *y = temp;
}

// Recursive function to generate permutations
void permute(char *str, int l, int r) {
    if (l == r) {
        printf("%s\\n", str);
    } else {
        for (int i = l; i <= r; i++) {
            swap((str + l), (str + i));
            permute(str, l + 1, r); 
            swap((str + l), (str + i)); // Backtrack
        }
    }
}

int main() {
    char str[] = "ABC";
    int n = strlen(str);
    printf("Permutations of string %s are:\\n", str);
    permute(str, 0, n - 1);
    return 0;
}
\`\`\`
`;
