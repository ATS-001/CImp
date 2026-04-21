export const content = `
## Programs (Pointers & Structure Logic)

### 6. Modifying Values Using Pointers & Functions
**The Question:** Write a C program to modify the value of an integer variable within a function by passing its address (Pass by Reference).

\`\`\`c
#include <stdio.h>

void modifyValue(int *val) {
    *val = 500; // Directly manipulates the memory location
}

int main() {
    int number = 100;
    
    printf("Value before modification: %d\\n", number);
    
    // Pass the memory address
    modifyValue(&number); 
    
    printf("Value after pointer modification: %d\\n", number);
    
    return 0;
}
\`\`\`

### 7. Accessing Arrays Without Initializing Separate Pointer
**The Question:** Demonstrate how to access array elements using the array name itself as a pointer, without declaring a separate pointer variable.

\`\`\`c
#include <stdio.h>

int main() {
    int arr[5] = {2, 4, 6, 8, 10};
    
    // Using array name directly as a pointer
    printf("First element (using *arr): %d\\n", *arr);
    printf("Second element (using *(arr + 1)): %d\\n", *(arr + 1));
    printf("Third element (using *(arr + 2)): %d\\n", *(arr + 2));
    
    return 0;
}
\`\`\`

### 8. Pointer to Structure (Using Arrow Operator)
**The Question:** Define a structure for a Student (name, roll no) and access its members using a structure pointer and the arrow (\`->\`) operator.

\`\`\`c
#include <stdio.h>

struct Student {
    char name[50];
    int rollNo;
};

int main() {
    struct Student s1 = {"John Doe", 101};
    struct Student *ptr = &s1;
    
    // Using the arrow operator to access members
    printf("Student Name: %s\\n", ptr->name);
    printf("Student Roll Number: %d\\n", ptr->rollNo);
    
    return 0;
}
\`\`\`

### 9. Pointer to Structure (Without Arrow Operator)
**The Question:** Access structure members using a pointer and the dot operator with dereferencing (\`(*ptr).member\`) as an alternative to the arrow operator.

\`\`\`c
#include <stdio.h>
#include <string.h>

struct Book {
    char title[100];
    float price;
};

int main() {
    struct Book b1;
    struct Book *ptr = &b1;
    
    // Initialization using (*ptr).member syntax
    strcpy((*ptr).title, "Advanced C Programming");
    (*ptr).price = 450.50;
    
    // Access using deregulation
    printf("Book Title: %s\\n", (*ptr).title);
    printf("Book Price: %.2f\\n", (*ptr).price);
    
    return 0;
}
\`\`\`

### 10. Dynamic Employee Database using Pointers
**The Question:** Write a program that accepts the number of employees from the user, dynamically allocates memory for that many Employee structures (ID, Salary), and prints the details.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Employee {
    int id;
    float salary;
};

int main() {
    int n, i;
    printf("Enter number of employees: ");
    scanf("%d", &n);
    
    // Dynamic memory allocation based on user input
    struct Employee *ptr = (struct Employee *)malloc(n * sizeof(struct Employee));
    
    if (ptr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    
    for (i = 0; i < n; i++) {
        printf("Enter ID and Salary for Employee %d: ", i + 1);
        scanf("%d %f", &(ptr + i)->id, &(ptr + i)->salary);
    }
    
    printf("\\nEmployee Details Tracker:\\n");
    for (i = 0; i < n; i++) {
        printf("ID: %d, Salary: %.2f\\n", (ptr + i)->id, (ptr + i)->salary);
    }
    
    free(ptr); // Clean up memory
    return 0;
}
\`\`\`
`;
