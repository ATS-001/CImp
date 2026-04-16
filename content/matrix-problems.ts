export const content = `
## Matrix Problems in C

### 1. Matrix Addition

\`\`\`c
#include <stdio.h>

int main() {
    int r = 2, c = 2, i, j;
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{5, 6}, {7, 8}};
    int sum[2][2];

    for (i = 0; i < r; ++i)
        for (j = 0; j < c; ++j)
            sum[i][j] = a[i][j] + b[i][j];

    printf("Sum of two matrices is:\\n");
    for (i = 0; i < r; ++i) {
        for (j = 0; j < c; ++j) {
            printf("%d   ", sum[i][j]);
        }
        printf("\\n");
    }
    return 0;
}
\`\`\`

### 2. Matrix Subtraction

\`\`\`c
#include <stdio.h>

int main() {
    int r = 2, c = 2, i, j;
    int a[2][2] = {{5, 6}, {7, 8}};
    int b[2][2] = {{1, 2}, {3, 4}};
    int diff[2][2];

    for (i = 0; i < r; ++i)
        for (j = 0; j < c; ++j)
            diff[i][j] = a[i][j] - b[i][j];

    printf("Difference of two matrices is:\\n");
    for (i = 0; i < r; ++i) {
        for (j = 0; j < c; ++j) {
            printf("%d   ", diff[i][j]);
        }
        printf("\\n");
    }
    return 0;
}
\`\`\`

### 3. Matrix Multiplication

\`\`\`c
#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{5, 6}, {7, 8}};
    int mul[2][2];
    int i, j, k;

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            mul[i][j] = 0;
            for (k = 0; k < 2; k++) {
                mul[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    printf("Multiplication of two matrices is:\\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            printf("%d\\t", mul[i][j]);
        }
        printf("\\n");
    }
    return 0;
}
\`\`\`

### 4. Matrix Transpose

\`\`\`c
#include <stdio.h>

int main() {
    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int trans[3][2];
    int i, j;

    for (i = 0; i < 2; ++i)
        for (j = 0; j < 3; ++j)
            trans[j][i] = a[i][j];

    printf("Transpose of the matrix:\\n");
    for (i = 0; i < 3; ++i) {
        for (j = 0; j < 2; ++j) {
            printf("%d  ", trans[i][j]);
        }
        printf("\\n");
    }
    return 0;
}
\`\`\`

### 5. Sum of Diagonal Elements

\`\`\`c
#include <stdio.h>

int main() {
    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int i, j, sum = 0;

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (i == j) {
                sum = sum + a[i][j];
            }
        }
    }

    printf("Sum of diagonal elements = %d\\n", sum);
    return 0;
}
\`\`\`
`;
