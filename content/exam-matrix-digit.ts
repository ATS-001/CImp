export const content = `
# Matrix Symmetry & Digit Frequency

This section covers common array-based challenges found in competitive exams and KTU papers.

---

### 1. Symmetric Matrix Check
A matrix is **Symmetric** if it is equal to its transpose ($A = A^T$). This means $A[i][j] == A[j][i]$ for all elements.

\`\`\`c
#include <stdio.h>

int main() {
    int rows, cols, i, j, isSymmetric = 1;
    int a[10][10];

    printf("Enter rows and columns: ");
    scanf("%d %d", &rows, &cols);

    if (rows != cols) {
        printf("Matrix must be square!\\n");
        return 0;
    }

    printf("Enter matrix elements:\\n");
    for (i = 0; i < rows; i++)
        for (j = 0; j < cols; j++)
            scanf("%d", &a[i][j]);

    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            if (a[i][j] != a[j][i]) {
                isSymmetric = 0;
                break;
            }
        }
    }

    if (isSymmetric) printf("Matrix is Symmetric\\n");
    else printf("Matrix is not Symmetric\\n");

    return 0;
}
\`\`\`

---

### 2. Digit Frequency Counting
This program counts how many times each digit (0-9) occurs in a given integer.

\`\`\`c
#include <stdio.h>

int main() {
    long long num, temp;
    int digitCount[10] = {0}; // Initialize all 10 digits as zero
    int lastDigit;

    printf("Enter an integer: ");
    scanf("%lld", &num);
    temp = num;

    // Handle case if number is 0
    if (num == 0) digitCount[0] = 1;
    if (num < 0) num = -num; 

    while (num > 0) {
        lastDigit = num % 10;
        digitCount[lastDigit]++;
        num /= 10;
    }

    printf("Digit frequencies in %lld:\\n", temp);
    for (int i = 0; i < 10; i++) {
        if (digitCount[i] > 0) {
            printf("Digit %d: %d times\\n", i, digitCount[i]);
        }
    }

    return 0;
}
\`\`\`

---

### Exam Tips
* **Symmetry**: Always check if \`rows == cols\` first. Only square matrices can be symmetric.
* **Frequency**: Use an array of size 10 where indices represent the digits. This is much faster than running 10 separate loops.
`;
