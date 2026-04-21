export const content = `
## Programs (Functions & Recursion - Part 1)

### 1. Function to Add Two Numbers
\`\`\`c
#include <stdio.h>

// Function definition
int add(int a, int b) {
    return a + b;
}

int main() {
    int x, y, sum;
    printf("Enter two numbers: ");
    scanf("%d %d", &x, &y);
    
    sum = add(x, y); // Function call
    printf("Sum = %d\\n", sum);
    return 0;
}
\`\`\`

### 2. Function to Find Factorial
\`\`\`c
#include <stdio.h>

long long getFactorial(int n) {
    long long fact = 1;
    for(int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("Factorial of %d is %lld\\n", num, getFactorial(num));
    return 0;
}
\`\`\`

### 3. Compute Partial Sum of Taylor Series (Exponential e^x)
*(Expression: e^x = 1 + x/1! + x^2/2! + x^3/3!...)*
\`\`\`c
#include <stdio.h>

int main() {
    int i, n;
    float x, sum = 1, t = 1;

    printf("Expression: e^x = 1 + x/1! + x^2/2! + x^3/3! ...\\n");
    printf("Enter the value for x: ");
    scanf("%f", &x);
    printf("Enter the number of terms n: ");
    scanf("%d", &n);

    for (i = 1; i < n; i++) {
        t = t * x / i;
        sum = sum + t;
    }

    printf("The Exponential partial sum is: %.4f\\n", sum);
    return 0;
}
\`\`\`

### 4. Code to Compute Output of Taylor Series (Using Functions)
\`\`\`c
#include <stdio.h>

float calculateTaylor(float x, int n) {
    float sum = 1, t = 1;
    for (int i = 1; i < n; i++) {
        t = t * x / i;
        sum = sum + t;
    }
    return sum;
}

int main() {
    float x; int n;
    printf("Enter x and precision term depth n: ");
    scanf("%f %d", &x, &n);
    printf("e^%.2f using %d terms = %.5f\\n", x, n, calculateTaylor(x, n));
    return 0;
}
\`\`\`

### 5. Print First 100 Prime Numbers
\`\`\`c
#include <stdio.h>

int isPrime(int n) {
    if (n < 2) return 0;
    for(int i = 2; i <= n/2; i++) {
        if(n % i == 0) return 0;
    }
    return 1;
}

int main() {
    int count = 0, num = 2;
    printf("First 100 Prime Numbers:\\n");
    
    while(count < 100) {
        if(isPrime(num)) {
            printf("%d ", num);
            count++;
        }
        num++;
    }
    printf("\\n");
    return 0;
}
\`\`\`

### 6. Linear Search of Array (Standard Array search)
\`\`\`c
#include <stdio.h>

int main() {
    int n, key, i, found = 0;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter elements: ");
    for(i=0; i<n; i++) scanf("%d", &arr[i]);
    
    printf("Enter element to find: ");
    scanf("%d", &key);
    
    for(i=0; i<n; i++) {
        if(arr[i] == key) {
            printf("Element found at index %d.\\n", i);
            found = 1;
            break;
        }
    }
    
    if(!found) printf("Element not present entirely.\\n");
    return 0;
}
\`\`\`

### 7. Taylor Series Expansion of Cosine
*(Expression: cos(x) = 1 - x^2/2! + x^4/4! - x^6/6! ...)*
\`\`\`c
#include <stdio.h>
#define PI 3.14159

int main() {
    int n, i;
    float x, sum = 1, t = 1;
    
    printf("Expression: cos(x) = 1 - x^2/2! + x^4/4! - x^6/6!...\\n");
    printf("Enter x (in degrees): ");
    scanf("%f", &x);
    printf("Enter accuracy terms n: ");
    scanf("%d", &n);
    
    x = x * (PI / 180.0); // Convert degrees to radians
    
    for (i = 1; i < n; i++) {
        t = t * (-1) * x * x / (2 * i * (2 * i - 1));
        sum = sum + t;
    }
    
    printf("Cos() Value: %.4f\\n", sum);
    return 0;
}
\`\`\`

### 11. Passing Array to a function called \`Print_array\`
\`\`\`c
#include <stdio.h>

void print_array(int arr[], int size) {
    printf("Array Elements: ");
    for(int i=0; i<size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int sequence[] = {10, 20, 30, 40, 50};
    int size = sizeof(sequence)/sizeof(sequence[0]);
    print_array(sequence, size);
    return 0;
}
\`\`\`

### 12. Read Array and Print Array Functions
\`\`\`c
#include <stdio.h>

// Reading array through pointers implicitly via array decay
void read_array(int arr[], int size) {
    printf("Enter %d elements: ", size);
    for(int i=0; i<size; i++) {
        scanf("%d", &arr[i]);
    }
}

void print_array(int arr[], int size) {
    printf("Values entered: ");
    for(int i=0; i<size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int n;
    printf("Enter size: ");
    scanf("%d", &n);
    int myArr[n];
    
    read_array(myArr, n);
    print_array(myArr, n);
    
    return 0;
}
\`\`\`

### 13. Read and Print Matrix Using Functions
\`\`\`c
#include <stdio.h>

// For 2D array params, column size must be fixed or VLA parameter mapped
void readMatrix(int r, int c, int mat[r][c]) {
    printf("Enter %d x %d matrix elements:\\n", r, c);
    for(int i=0; i<r; i++)
        for(int j=0; j<c; j++)
            scanf("%d", &mat[i][j]);
}

void printMatrix(int r, int c, int mat[r][c]) {
    printf("The Matrix is:\\n");
    for(int i=0; i<r; i++) {
        for(int j=0; j<c; j++) {
            printf("%d ", mat[i][j]);
        }
        printf("\\n");
    }
}

int main() {
    int r = 2, c = 2;
    int matrix[r][c];
    
    readMatrix(r, c, matrix);
    printMatrix(r, c, matrix);
    return 0;
}
\`\`\`

### 14. Linear Search Implement Using Functions
\`\`\`c
#include <stdio.h>

int linearSearch(int arr[], int n, int key) {
    for(int i=0; i<n; i++) {
        if(arr[i] == key) return i;
    }
    return -1;
}

int main() {
    int arr[] = {3, 5, 2, 8, 1};
    int key = 8;
    int index = linearSearch(arr, 5, key);
    
    if(index != -1) printf("Found at index %d.\\n", index);
    else printf("Not Found.\\n");
    return 0;
}
\`\`\`

### 15. Bubble Sort Implement Using Functions
\`\`\`c
#include <stdio.h>

// Arrays decay into pointers globally, so swaps affect main natively
void bubbleSort(int arr[], int n) {
    int temp;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;
    
    bubbleSort(arr, n);
    
    printf("Sorted array: ");
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    printf("\\n");
    
    return 0;
}
\`\`\`

### 17. Insert Element at Position and Shift Others
\`\`\`c
#include <stdio.h>

int main() {
    int arr[100] = {1, 2, 3, 4, 5};
    int n = 5;
    int pos, ele;

    printf("Array initially: 1 2 3 4 5\\n");
    printf("Enter element to insert: ");
    scanf("%d", &ele);
    printf("Enter position (1 to %d): ", n + 1);
    scanf("%d", &pos);

    // Make space
    for (int i = n - 1; i >= pos - 1; i--) {
        arr[i + 1] = arr[i];
    }
    
    arr[pos - 1] = ele;
    n++; // increment explicit active size bounds

    printf("New array sequence:\\n");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    return 0;
}
\`\`\`
`;
