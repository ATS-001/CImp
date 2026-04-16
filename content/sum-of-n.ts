export const content = `
## Sum of N Given Numbers

This program calculates the sum of 'n' numbers entered by the user.

\`\`\`c
#include <stdio.h>

int main() {
    int n, i;
    float num, sum = 0.0;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    for (i = 1; i <= n; ++i) {
        printf("Enter number %d: ", i);
        scanf("%f", &num);
        sum += num;
    }

    printf("Sum = %.2f\\n", sum);
    return 0;
}
\`\`\`

### Using Arrays

If you need to store the numbers for later use, you can use an array:

\`\`\`c
#include <stdio.h>

int main() {
    int n, i;
    float arr[100], sum = 0.0;

    printf("Enter the number of elements (1 to 100): ");
    scanf("%d", &n);

    for (i = 0; i < n; ++i) {
        printf("Enter number %d: ", i + 1);
        scanf("%f", &arr[i]);
        sum += arr[i];
    }

    printf("Sum = %.2f\\n", sum);
    return 0;
}
\`\`\`
`;
