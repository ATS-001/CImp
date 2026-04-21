export const content = `
## Programs (Pointers, Recursion & CLI)

### 8. Factorial Using Recursion
\`\`\`c
#include <stdio.h>

// Recursive Function
long long fact(int n) {
    if (n == 0 || n == 1) // Base Step
        return 1;
    else
        return n * fact(n - 1); // Recursive call
}

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Factorial of %d is %lld\\n", n, fact(n));
    return 0;
}
\`\`\`

### 9. Swapping of Two Numbers by Pass By Value
*(Notice how the original variables \`a\` and \`b\` in \`main\` are NOT affected)*
\`\`\`c
#include <stdio.h>

void swapByValue(int x, int y) {
    int temp = x;
    x = y;
    y = temp;
    printf("Inside function: x=%d, y=%d\\n", x, y);
}

int main() {
    int a = 10, b = 20;
    
    printf("Before call: a=%d, b=%d\\n", a, b);
    swapByValue(a, b);
    printf("After call: a=%d, b=%d\\n", a, b); // Data naturally reverts
    
    return 0;
}
\`\`\`

### 10. Swapping of Two Numbers by Pass By Reference
*(Modifies actual operational memory pointers)*
\`\`\`c
#include <stdio.h>

void swapByReference(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
    // Notice variables globally update
}

int main() {
    int a = 10, b = 20;
    
    printf("Before call: a=%d, b=%d\\n", a, b);
    swapByReference(&a, &b);
    printf("After call: a=%d, b=%d\\n", a, b); // Swapped globally
    
    return 0;
}
\`\`\`

### 16. Area of Circle using Function with a Macro for PI
\`\`\`c
#include <stdio.h>

#define PI 3.14159

float getArea(float radius) {
    // Calling macro dynamically inside bounds
    return PI * radius * radius;
}

int main() {
    float r = 5.0;
    printf("Area of circle with radius %.2f is %.4f\\n", r, getArea(r));
    return 0;
}
\`\`\`

### 18. Macro for Square of a Number
\`\`\`c
#include <stdio.h>

#define SQUARE(x) ((x) * (x))

int main() {
    int num = 6;
    printf("The square of %d is: %d\\n", num, SQUARE(num));
    return 0;
}
\`\`\`

### 19. Command Line Interface (CLI) Example to Add Two Numbers
\`\`\`c
#include <stdio.h>
#include <stdlib.h> // specifically imported to utilize atoi()

int main(int argc, char *argv[]) {
    // Check if the user passed exactly 2 operational arguments mathematically
    if (argc != 3) {
        printf("Usage error. Run format natively: %s <num1> <num2>\\n", argv[0]);
        return 1;
    }

    // Convert string parameters safely to integers natively
    int num1 = atoi(argv[1]);
    int num2 = atoi(argv[2]);

    printf("Sum compilation of %d and %d is: %d\\n", num1, num2, num1 + num2);
    return 0;
}
\`\`\`

### 24. Greatest Common Divisor (GCD) using Recursion
\`\`\`c
#include <stdio.h>

int getGCD(int n1, int n2) {
    if (n2 != 0)
        return getGCD(n2, n1 % n2);
    else
        return n1;
}

int main() {
    int a, b;
    printf("Enter two positive integers: ");
    scanf("%d %d", &a, &b);
    printf("GCD is: %d\\n", getGCD(a, b));
    return 0;
}
\`\`\`

### 25. Least Common Multiple (LCM) using Recursion (Without generic GCD math)
\`\`\`c
#include <stdio.h>

// Utilizing a third parameter inherently
int getLCM(int a, int b, int multiple) {
    if ((multiple % a == 0) && (multiple % b == 0)) {
        return multiple;
    }
    // Increment recursively safely
    return getLCM(a, b, multiple + 1);
}

int main() {
    int a, b, max;
    printf("Enter two positive integers: ");
    scanf("%d %d", &a, &b);
    
    max = (a > b) ? a : b;
    
    printf("LCM natively is: %d\\n", getLCM(a, b, max));
    return 0;
}
\`\`\`
`;
