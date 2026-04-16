export const content = `
## Sorting and Searching Programs

### 1. Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

\`\`\`c
#include <stdio.h>

int main() {
    int array[100], n, c, d, swap;

    printf("Enter number of elements\\n");
    scanf("%d", &n);

    printf("Enter %d integers\\n", n);
    for (c = 0; c < n; c++)
        scanf("%d", &array[c]);

    for (c = 0 ; c < n - 1; c++) {
        for (d = 0 ; d < n - c - 1; d++) {
            if (array[d] > array[d+1]) { /* For decreasing order use '<' instead of '>' */
                swap       = array[d];
                array[d]   = array[d+1];
                array[d+1] = swap;
            }
        }
    }

    printf("Sorted list in ascending order:\\n");
    for (c = 0; c < n; c++)
        printf("%d\\n", array[c]);

    return 0;
}
\`\`\`

### 2. Linear Search

Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.

\`\`\`c
#include <stdio.h>

int main() {
    int array[100], search, c, n;

    printf("Enter number of elements in array\\n");
    scanf("%d", &n);

    printf("Enter %d integer(s)\\n", n);
    for (c = 0; c < n; c++)
        scanf("%d", &array[c]);

    printf("Enter a number to search\\n");
    scanf("%d", &search);

    for (c = 0; c < n; c++) {
        if (array[c] == search) {
            printf("%d is present at location %d.\\n", search, c+1);
            break;
        }
    }
    
    if (c == n)
        printf("%d isn't present in the array.\\n", search);

    return 0;
}
\`\`\`
`;
