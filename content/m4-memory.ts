export const content = `
## Dynamic Memory Allocation

Dynamic memory allocation evaluates exclusively utilizing the \`<stdlib.h>\` library natively during programmatic application *Runtime*. 

### Static vs. Dynamic Allocation

| Parameter | Static Allocation | Dynamic Allocation |
| :--- | :--- | :--- |
| **Space** | Pre-calculated size exclusively correctly compiled. | Evaluated totally dynamically via runtime requests. |
| **Architecture** | Memory bound to the Stack. | Memory allocated to the Heap flexibly. |
| **Pointers** | Pointers exclusively specifically used for referenced data. | Required inherently to access the allocated Heap spaces. |
| **Example** | \`int arr[100];\` | \`int *p = malloc(100 * sizeof(int));\` |

### Memory Segments (Stack vs. Heap)

1.  **Stack Memory:** Controlled automatically by the OS.
2.  **Heap Memory:** Developer manually controls dynamically.

---

## Operations (\`malloc\`, \`calloc\`, \`realloc\`, \`free\`)

### 1. \`malloc()\` (Memory Allocation)
\`malloc()\` fundamentally allocates a specified block of memory, leaving it uninitialized.
\`\`\`c
int *ptr = (int*) malloc(5 * sizeof(int)); // Explicitly allocates dynamically 
\`\`\`

### 2. \`calloc()\` (Contiguous Allocation)
\`calloc()\` contiguously allocates sequential block spaces inside memory, initializing them to zero.
\`\`\`c
int *ptr = (int*) calloc(5, sizeof(int)); // Initializes safely the block values
\`\`\`

### 3. \`realloc()\` (Re-Allocation)
\`realloc()\` dynamically expands or shrinks natively predefined bound memory blocks.
\`\`\`c
ptr = (int*) realloc(ptr, 10 * sizeof(int));
\`\`\`

### 4. \`free()\`
\`free()\` safely returns allocated memory to the OS.
\`\`\`c
free(ptr); // Prevents memory leaks.
\`\`\`
`;

