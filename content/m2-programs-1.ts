export const content = `
## Programs (Arrays & Matrices)

### 1. Sum and Average of N numbers using Arrays
\`\`\`c
#include <stdio.h>

int main() {
    int n, i;
    float sum = 0.0, average;
    
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int arr[n]; // VLA (Variable Length Array)
    
    printf("Enter %d numbers:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    
    average = sum / n;
    
    printf("Sum = %.2f\\n", sum);
    printf("Average = %.2f\\n", average);
    
    return 0;
}
\`\`\`

### 2. Bubble Sort Array in Ascending Order
\`\`\`c
#include <stdio.h>

int main() {
    int n, i, j, temp;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    int arr[n];
    
    printf("Enter %d integers:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) { // Swap if current element is greater
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    printf("Sorted array in Ascending order:\\n");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}
\`\`\`

### 3. Bubble Sort Array in Descending Order
\`\`\`c
#include <stdio.h>

int main() {
    int n, i, j, temp;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    int arr[n];
    
    printf("Enter %d integers:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) { // Swap if current is smaller (< instead of >)
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    printf("Sorted array in Descending order:\\n");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}
\`\`\`

### 4. Example For Accessing a 2D Array
\`\`\`c
#include <stdio.h>

int main() {
    // Declaring and directly initializing a 2D array
    int matrix[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };
    
    printf("Accessing specific 2D matrix elements:\\n");
    printf("Element at Row 1, Col 1 (index 0,0) = %d\\n", matrix[0][0]);
    printf("Element at Row 2, Col 3 (index 1,2) = %d\\n", matrix[1][2]);
    
    printf("\\nTraversing the entire array:\\n");
    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 3; j++) {
            printf("matrix[%d][%d] = %d\\n", i, j, matrix[i][j]);
        }
    }
    return 0;
}
\`\`\`

### 5. Add Two 2D Arrays (Sum Matrix)
\`\`\`c
#include <stdio.h>

int main() {
    int r, c, i, j;
    printf("Enter rows and columns for matrices: ");
    scanf("%d %d", &r, &c);
    
    int a[r][c], b[r][c], sum[r][c];
    
    printf("Enter elements of 1st matrix:\\n");
    for(i = 0; i < r; ++i)
        for(j = 0; j < c; ++j)
            scanf("%d", &a[i][j]);
            
    printf("Enter elements of 2nd matrix:\\n");
    for(i = 0; i < r; ++i)
        for(j = 0; j < c; ++j)
            scanf("%d", &b[i][j]);
            
    // Adding
    for(i = 0; i < r; ++i)
        for(j = 0; j < c; ++j)
            sum[i][j] = a[i][j] + b[i][j];
            
    printf("\\nSum Matrix:\\n");
    for(i = 0; i < r; ++i) {
        for(j = 0; j < c; ++j) {
            printf("%d ", sum[i][j]);
            if(j == c - 1) printf("\\n");
        }
    }
    return 0;
}
\`\`\`

### 6. Matrix Multiplication of Two User Inputted Matrices
\`\`\`c
#include <stdio.h>

int main() {
    int r1, c1, r2, c2, i, j, k;
    printf("Enter rows and col for first matrix: ");
    scanf("%d %d", &r1, &c1);
    printf("Enter rows and col for second matrix: ");
    scanf("%d %d", &r2, &c2);
    
    if (c1 != r2) {
        printf("Error! column of first matrix not equal to row of second.\\n");
        return 0;
    }
    
    int a[r1][c1], b[r2][c2], result[r1][c2];
    
    printf("Enter elements of matrix 1:\\n");
    for(i = 0; i < r1; ++i)
        for(j = 0; j < c1; ++j)
            scanf("%d", &a[i][j]);
            
    printf("Enter elements of matrix 2:\\n");
    for(i = 0; i < r2; ++i)
        for(j = 0; j < c2; ++j)
            scanf("%d", &b[i][j]);
            
    // Initialize result matrix to 0
    for(i = 0; i < r1; ++i)
        for(j = 0; j < c2; ++j)
            result[i][j] = 0;
            
    // Multiply
    for(i = 0; i < r1; ++i)
        for(j = 0; j < c2; ++j)
            for(k = 0; k < c1; ++k)
                result[i][j] += a[i][k] * b[k][j];
                
    printf("\\nResultant Matrix after Multiplication:\\n");
    for(i = 0; i < r1; ++i) {
        for(j = 0; j < c2; ++j) {
            printf("%d ", result[i][j]);
        }
        printf("\\n");
    }
    return 0;
}
\`\`\`

### 19. Transpose of a Matrix
\`\`\`c
#include <stdio.h>

int main() {
    int r, c, i, j;
    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);
    
    int a[r][c], trans[c][r];
    
    printf("Enter matrix elements:\\n");
    for(i = 0; i < r; ++i)
        for(j = 0; j < c; ++j)
            scanf("%d", &a[i][j]);
            
    // Computing transpose
    for(i = 0; i < r; ++i)
        for(j = 0; j < c; ++j)
            trans[j][i] = a[i][j];
            
    printf("\\nTranspose Matrix:\\n");
    for(i = 0; i < c; ++i) {
        for(j = 0; j < r; ++j) {
            printf("%d ", trans[i][j]);
        }
        printf("\\n");
    }
    return 0;
}
\`\`\`
`;
