export const content = `
## Programs (Part 2 - Loops & Logic)

### 11. Checking whether a number is Prime or not
\`\`\`c
#include <stdio.h>
int main() {
    int n, i, flag = 0;
    printf("Enter a positive integer: ");
    scanf("%d", &n);

    if (n == 0 || n == 1) flag = 1;

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

### 12. Sum of Digits of a Given Number
\`\`\`c
#include <stdio.h>
int main() {
    int num, sum = 0, remainder;
    printf("Enter an integer: ");
    scanf("%d", &num);

    while (num != 0) {
        remainder = num % 10;
        sum += remainder;
        num /= 10;
    }
    
    printf("Sum of digits = %d\\n", sum);
    return 0;
}
\`\`\`

### 13. Printing numbers in Ascending Order (1 to N)
\`\`\`c
#include <stdio.h>
int main() {
    int n, i;
    printf("Enter N: ");
    scanf("%d", &n);
    
    printf("Ascending Order: ");
    for (i = 1; i <= n; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}
\`\`\`

### 14. Printing numbers in Descending Order (N to 1)
\`\`\`c
#include <stdio.h>
int main() {
    int n, i;
    printf("Enter N: ");
    scanf("%d", &n);
    
    printf("Descending Order: ");
    for (i = n; i >= 1; i--) {
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}
\`\`\`

### 15. Checking whether a Number is an Armstrong Number
*(An Armstrong number is a number such that the sum of its digits raised to the power of the number of digits is equal to the number itself).*
\`\`\`c
#include <stdio.h>
#include <math.h>

int main() {
    int num, originalNum, remainder, n = 0;
    double result = 0.0;
    
    printf("Enter an integer: ");
    scanf("%d", &num);
    
    originalNum = num;
    
    // Find the number of digits (n)
    for (originalNum = num; originalNum != 0; ++n) {
        originalNum /= 10;
    }

    originalNum = num;
    
    // Calculate the result
    while (originalNum != 0) {
        remainder = originalNum % 10;
        result += pow(remainder, n);
        originalNum /= 10;
    }

    if ((int)result == num)
        printf("%d is an Armstrong number.\\n", num);
    else
        printf("%d is not an Armstrong number.\\n", num);

    return 0;
}
\`\`\`

### 16. Printing the Fibonacci Series (With User Inputted Terms)
\`\`\`c
#include <stdio.h>
int main() {
    int i, n, t1 = 0, t2 = 1, nextTerm;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    
    printf("Fibonacci Series: ");
    for (i = 1; i <= n; ++i) {
        printf("%d, ", t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
    printf("\\n");
    return 0;
}
\`\`\`

### 17. Example for \`do-while\` Loop
\`\`\`c
#include <stdio.h>
int main() {
    int i = 1;
    // Condition is checked after executing body
    do {
        printf("Value of i: %d\\n", i);
        i++;
    } while (i <= 3);
    
    return 0;
}
\`\`\`

### 18. Example for I/O Functions (getchar, putchar, gets, fgets, puts)
\`\`\`c
#include <stdio.h>
int main() {
    char ch;
    char str1[50], str2[50];

    printf("1. Enter a single character: ");
    ch = getchar(); // Reads one char
    
    // consume the leftover newline character in input buffer
    getchar(); 

    printf("You entered character: ");
    putchar(ch);    // Prints one char
    printf("\\n");

    printf("2. Enter a string (for gets - unsafe): ");
    gets(str1);     // Unsafe, reads till newline
    printf("You entered string 1: ");
    puts(str1);     // Prints string with newline

    printf("3. Enter another string (for fgets - safe): ");
    fgets(str2, sizeof(str2), stdin); // Safe, limits length
    printf("You entered string 2: ");
    puts(str2);

    return 0;
}
\`\`\`

### 19. Example for \`goto\` Statement
\`\`\`c
#include <stdio.h>
int main() {
    int check = 0;

    jump_here: // Label declaration
    printf("We jumped here! Check: %d\\n", check);
    check++;

    if (check < 3) {
        goto jump_here; // Unconditional jump
    }
    
    printf("Exited goto loop.\\n");
    return 0;
}
\`\`\`

### 20. To Check Whether a Number is Palindrome or Not
*(A palindrome number remains the same when its digits are reversed).*
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
`;
