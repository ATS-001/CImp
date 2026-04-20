export const content = `
## Arrays in C

An array is a collection of data elements of the **same data type**, stored under a single name in **contiguous memory locations**. It allows you to store multiple values in a single variable instead of declaring separate variables for each value.

### 1D Arrays (One-Dimensional Array)

**Syntax for Declaration:**
\`\`\`c
data_type array_name[array_size];
\`\`\`

**Example:**
\`\`\`c
int marks[5]; // Declares an array of 5 integers
\`\`\`

**Initialization methods:**
\`\`\`c
int a[5] = {10, 20, 30, 40, 50}; // Exact size
int b[] = {1, 2, 3};             // Implicit size (compiler sets it to 3)
int c[5] = {1, 2};               // Partial initialization (remaining elements are 0)
\`\`\`

---

## The \`sizeof()\` Operator

The \`sizeof()\` operator is a unary operator used to compute the size of its operand in bytes. It is extremely useful when calculating the number of elements in an array.

**Example calculating array size:**
\`\`\`c
#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    
    // Total size of array in bytes
    int total_bytes = sizeof(arr); 
    
    // Size of a single element (e.g., int = 4 bytes)
    int element_size = sizeof(arr[0]); 
    
    // Calculate total elements
    int total_elements = total_bytes / element_size; 
    
    printf("Total bytes: %d\\n", total_bytes);       // Output: 20
    printf("Element size: %d\\n", element_size);     // Output: 4
    printf("Number of elements: %d\\n", total_elements); // Output: 5
    
    return 0;
}
\`\`\`

---

## 2D Arrays (Two-Dimensional Array)

A two-dimensional array is an array of arrays. It is treated as a matrix with rows and columns.

**Syntax for Declaration:**
\`\`\`c
data_type array_name[rows][columns];
\`\`\`

**Initialization methods:**
\`\`\`c
// Method 1: Using nested braces
int matrix1[2][3] = {
    {1, 2, 3}, // Row 0
    {4, 5, 6}  // Row 1
};

// Method 2: Without nested braces (compiler fills row by row)
int matrix2[2][3] = {1, 2, 3, 4, 5, 6}; 

// Method 3: Omitting row size (column size must always be defined!)
int matrix3[][2] = {
    {1, 2}, 
    {3, 4}, 
    {5, 6}
};
\`\`\`

### Accessing a 2D Array

Elements in a 2D array are accessed using their row and column indexes, starting from \`0\`.

To access the element at the 1st row and 2nd column of \`matrix[3][3]\`, you would use \`matrix[0][1]\`.

**Example: Traversing and printing a 2D array:**
\`\`\`c
#include <stdio.h>

int main() {
    int i, j;
    int arr[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    printf("Elements of the 2D array:\\n");
    for(i = 0; i < 2; i++) {       // Loop for Rows
        for(j = 0; j < 3; j++) {   // Loop for Columns
            printf("%d ", arr[i][j]);
        }
        printf("\\n"); // Move to next line for the next row
    }

    return 0;
}
\`\`\`
`;