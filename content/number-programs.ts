export const content = `
## Number Programs in C

### 1. Check Prime Number

A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself.

\`\`\`c
#include <stdio.h>

int main() {
    int n, i, flag = 0;
    printf("Enter a positive integer: ");
    scanf("%d", &n);

    if (n == 0 || n == 1)
        flag = 1;

    for (i = 2; i <= n / 2; ++i) {
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }

    if (flag == 0)
        printf("%d is a prime number.\\n", n);
    else
        printf("%d is not a prime number.\\n", n);

    return 0;
}
\`\`\`

### 2. Check Armstrong Number

An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.

\`\`\`c
#include <stdio.h>

int main() {
    int num, originalNum, remainder, result = 0;
    printf("Enter a three-digit integer: ");
    scanf("%d", &num);
    originalNum = num;

    while (originalNum != 0) {
        remainder = originalNum % 10;
        result += remainder * remainder * remainder;
        originalNum /= 10;
    }

    if (result == num)
        printf("%d is an Armstrong number.\\n", num);
    else
        printf("%d is not an Armstrong number.\\n", num);

    return 0;
}
\`\`\`

### 3. Check Palindrome Number

A palindrome number is a number that remains the same when its digits are reversed.

\`\`\`c
#include <stdio.h>

int main() {
    int n, reversed = 0, remainder, original;
    printf("Enter an integer: ");
    scanf("%d", &n);
    original = n;

    while (n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n /= 10;
    }

    if (original == reversed)
        printf("%d is a palindrome.\\n", original);
    else
        printf("%d is not a palindrome.\\n", original);

    return 0;
}
\`\`\`

### 4. Check Strong Number

A strong number is a number whose sum of the factorial of its digits is equal to the number itself.

\`\`\`c
#include <stdio.h>

int main() {
    int num, originalNum, remainder, sum = 0, i, fact;
    printf("Enter an integer: ");
    scanf("%d", &num);
    originalNum = num;

    while (num > 0) {
        remainder = num % 10;
        fact = 1;
        for (i = 1; i <= remainder; i++) {
            fact = fact * i;
        }
        sum = sum + fact;
        num = num / 10;
    }

    if (sum == originalNum)
        printf("%d is a Strong number.\\n", originalNum);
    else
        printf("%d is not a Strong number.\\n", originalNum);

    return 0;
}
\`\`\`
`;
