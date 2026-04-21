export const content = `
# Perfect & Strong Numbers

Mathematical logic puzzles are common in C examinations. These involve nested loops and remainder operations.

---

### 1. Perfect Number
A **Perfect Number** is a positive integer that is equal to the sum of its proper divisors (excluding the number itself).

**Example**: 6 is a perfect number because divisors of 6 are 1, 2, and 3. Sum: 1 + 2 + 3 = 6.

\`\`\`c
#include <stdio.h>

int main() {
    int num, sum = 0, i;
    printf("Enter a number: ");
    scanf("%d", &num);

    for (i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }

    if (sum == num && num != 0)
        printf("%d is a Perfect Number\\n", num);
    else
        printf("%d is not a Perfect Number\\n", num);

    return 0;
}
\`\`\`

---

### 2. Strong Number
A **Strong Number** is a special number in which the sum of the factorials of its digits is equal to the number itself.

**Example**: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145.

\`\`\`c
#include <stdio.h>

long factorial(int n) {
    long fact = 1;
    for (int i = 1; i <= n; i++) fact *= i;
    return fact;
}

int main() {
    int num, originalNum, rem;
    long sum = 0;

    printf("Enter a number: ");
    scanf("%d", &num);
    originalNum = num;

    while (num > 0) {
        rem = num % 10;
        sum += factorial(rem);
        num /= 10;
    }

    if (sum == originalNum)
        printf("%d is a Strong Number\\n", originalNum);
    else
        printf("%d is not a Strong Number\\n", originalNum);

    return 0;
}
\`\`\`

---

### 3. Decimal to Binary
Converting a positive decimal number to its binary representation using a user-defined function.

\`\`\`c
#include <stdio.h>

void decimalToBinary(int num) {
    int binary[32], i = 0;
    
    if (num == 0) {
        printf("0");
        return;
    }

    while (num > 0) {
        binary[i] = num % 2;
        num /= 2;
        i++;
    }

    for (int j = i - 1; j >= 0; j--)
        printf("%d", binary[j]);
}

int main() {
    int n;
    printf("Enter decimal: ");
    scanf("%d", &n);
    printf("Binary: ");
    decimalToBinary(n);
    printf("\\n");
    return 0;
}
\`\`\`

---

### Key Takeaways
* **Perfect Numbers**: Focus on divisors from 1 to \`n/2\`.
* **Strong Numbers**: Focus on digit extraction (using \`%\` and \`/\`) and factorial calculation.
`;
