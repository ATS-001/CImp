export const content = `
## Dynamic Memory Allocation in C

Dynamic Memory Allocation is a process in which we allocate or deallocate memory during the execution of the program (run time). C language provides four library functions for dynamic memory allocation, defined in \`<stdlib.h>\`.

### 1. malloc()

\`malloc\` stands for "memory allocation". It dynamically allocates a single large block of memory with the specified size. It returns a pointer of type \`void\` which can be cast into a pointer of any form. It initializes the allocated memory with garbage values.

**Syntax:**
\`\`\`c
ptr = (cast-type*) malloc(byte-size);
\`\`\`

**Example:**
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i, *ptr;
    n = 5;
    
    ptr = (int*) malloc(n * sizeof(int));
    
    if (ptr == NULL) {
        printf("Memory not allocated.\\n");
        exit(0);
    } else {
        printf("Memory successfully allocated using malloc.\\n");
        for (i = 0; i < n; ++i) {
            ptr[i] = i + 1;
        }
        printf("The elements of the array are: ");
        for (i = 0; i < n; ++i) {
            printf("%d, ", ptr[i]);
        }
        printf("\\n");
        free(ptr);
    }
    return 0;
}
\`\`\`

### 2. calloc()

\`calloc\` stands for "contiguous allocation". It dynamically allocates the specified number of blocks of memory of the specified type. It initializes each block with a default value '0'.

**Syntax:**
\`\`\`c
ptr = (cast-type*)calloc(n, element-size);
\`\`\`

**Example:**
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i, *ptr;
    n = 5;
    
    ptr = (int*) calloc(n, sizeof(int));
    
    if (ptr == NULL) {
        printf("Memory not allocated.\\n");
        exit(0);
    } else {
        printf("Memory successfully allocated using calloc.\\n");
        printf("The elements of the array are: ");
        for (i = 0; i < n; ++i) {
            printf("%d, ", ptr[i]); // Will print 0s
        }
        printf("\\n");
        free(ptr);
    }
    return 0;
}
\`\`\`

### 3. realloc()

\`realloc\` stands for "re-allocation". It is used to dynamically change the memory allocation of a previously allocated memory.

**Syntax:**
\`\`\`c
ptr = realloc(ptr, newSize);
\`\`\`

**Example:**
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr, i;
    
    ptr = (int*) malloc(2 * sizeof(int));
    ptr[0] = 1;
    ptr[1] = 2;
    
    printf("Previously allocated memory:\\n");
    for(i = 0; i < 2; i++) printf("%d ", ptr[i]);
    
    // Reallocating memory
    ptr = realloc(ptr, 4 * sizeof(int));
    ptr[2] = 3;
    ptr[3] = 4;
    
    printf("\\nNewly allocated memory:\\n");
    for(i = 0; i < 4; i++) printf("%d ", ptr[i]);
    printf("\\n");
    
    free(ptr);
    return 0;
}
\`\`\`

### 4. free()

\`free\` is used to dynamically de-allocate the memory. The memory allocated using functions malloc() and calloc() is not de-allocated on their own. Hence the free() method is used, whenever the dynamic memory allocation takes place.

**Syntax:**
\`\`\`c
free(ptr);
\`\`\`
`;
