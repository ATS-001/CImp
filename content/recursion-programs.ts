export const content = `
## Recursion Programs in C

Recursion is the process of repeating items in a self-similar way. In programming languages, if a program allows you to call a function inside the same function, then it is called a recursive call of the function.

### 1. Factorial using Recursion

\`\`\`c
#include <stdio.h>

long int multiplyNumbers(int n);

int main() {
    int n;
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    printf("Factorial of %d = %ld\\n", n, multiplyNumbers(n));
    return 0;
}

long int multiplyNumbers(int n) {
    if (n >= 1)
        return n * multiplyNumbers(n - 1);
    else
        return 1;
}
\`\`\`

### 2. Sum of Digits using Recursion

\`\`\`c
#include <stdio.h>

int sumOfDigits(int num);

int main() {
    int num, sum;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    sum = sumOfDigits(num);
    printf("Sum of digits of %d is %d\\n", num, sum);
    return 0;
}

int sumOfDigits(int num) {
    if (num == 0)
        return 0;
    return (num % 10 + sumOfDigits(num / 10));
}
\`\`\`

### 3. Reverse of a Number using Recursion

\`\`\`c
#include <stdio.h>

int reverse(int num);

int main() {
    int num, rev;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    rev = reverse(num);
    printf("Reverse of %d is %d\\n", num, rev);
    return 0;
}

int sum = 0;
int reverse(int num) {
    if (num) {
        int rem = num % 10;
        sum = sum * 10 + rem;
        reverse(num / 10);
    }
    else
        return sum;
    return sum;
}
\`\`\`
`;
