export const content = `
## Programs (Part 1 - Basics & Conditions)

### 1. Sum of Two Numbers
\`\`\`c
#include <stdio.h>
int main() {
    int num1, num2, sum;
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    sum = num1 + num2;
    printf("Sum is: %d\\n", sum);
    return 0;
}
\`\`\`

### 2. Calculate Area of the Circle
\`\`\`c
#include <stdio.h>
int main() {
    float radius, area;
    printf("Enter the radius of the circle: ");
    scanf("%f", &radius);
    area = 3.14159 * radius * radius;
    printf("Area of the circle is: %.2f\\n", area);
    return 0;
}
\`\`\`

### 3. Print Details of the User
\`\`\`c
#include <stdio.h>
int main() {
    char name[50];
    int age;
    printf("Enter your name: ");
    gets(name); // Using gets() as requested, though fgets() is safer.
    printf("Enter your age: ");
    scanf("%d", &age);
    
    printf("\\n--- User Details ---\\n");
    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    return 0;
}
\`\`\`

### 4. Positive, Negative, or Zero (Using Ternary Operator)
\`\`\`c
#include <stdio.h>
int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    
    // Ternary Operator: condition ? true_exp : false_exp
    (n > 0) ? printf("Positive\\n") : 
            ((n < 0) ? printf("Negative\\n") : printf("Zero\\n"));
    return 0;
}
\`\`\`

### 5. Positive, Negative, or Zero (Without Ternary Operator)
\`\`\`c
#include <stdio.h>
int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    
    if (n > 0) {
        printf("Positive\\n");
    } else if (n < 0) {
        printf("Negative\\n");
    } else {
        printf("Zero\\n");
    }
    return 0;
}
\`\`\`

### 6. Greatest Among Three Numbers (Using Ternary Operator)
\`\`\`c
#include <stdio.h>
int main() {
    int a, b, c, max;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    
    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    
    printf("Greatest number is %d\\n", max);
    return 0;
}
\`\`\`

### 7. Greatest Among Three Numbers (Without Ternary Operator)
\`\`\`c
#include <stdio.h>
int main() {
    int a, b, c;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    
    if (a >= b && a >= c) {
        printf("Greatest is %d\\n", a);
    } else if (b >= a && b >= c) {
        printf("Greatest is %d\\n", b);
    } else {
        printf("Greatest is %d\\n", c);
    }
    return 0;
}
\`\`\`

### 8. Checking Odd or Even (Using Ternary Operator)
\`\`\`c
#include <stdio.h>
int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    (num % 2 == 0) ? printf("Even\\n") : printf("Odd\\n");
    return 0;
}
\`\`\`

### 9. Checking Odd or Even (Without Ternary Operator)
\`\`\`c
#include <stdio.h>
int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    if (num % 2 == 0) {
        printf("Even\\n");
    } else {
        printf("Odd\\n");
    }
    return 0;
}
\`\`\`

### 10. Factor of a Given Number (Without Function)
\`\`\`c
#include <stdio.h>
int main() {
    int num, i;
    printf("Enter a positive integer: ");
    scanf("%d", &num);
    
    printf("Factors of %d are: ", num);
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            printf("%d ", i);
        }
    }
    printf("\\n");
    return 0;
}
\`\`\`
`;
