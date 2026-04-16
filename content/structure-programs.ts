export const content = `
## Structure Programs

### 1. Employee Data

\`\`\`c
#include <stdio.h>

struct Employee {
    int id;
    char name[50];
    float salary;
};

int main() {
    struct Employee emp;

    printf("Enter Employee ID: ");
    scanf("%d", &emp.id);
    
    printf("Enter Employee Name: ");
    scanf("%s", emp.name);
    
    printf("Enter Employee Salary: ");
    scanf("%f", &emp.salary);

    printf("\\n--- Employee Details ---\\n");
    printf("ID: %d\\n", emp.id);
    printf("Name: %s\\n", emp.name);
    printf("Salary: %.2f\\n", emp.salary);

    return 0;
}
\`\`\`

### 2. Student Data (Array of Structures)

\`\`\`c
#include <stdio.h>

struct Student {
    int roll;
    char name[50];
    float marks;
};

int main() {
    struct Student s[3];
    int i;

    printf("Enter information of students:\\n");

    // storing information
    for (i = 0; i < 3; ++i) {
        s[i].roll = i + 1;
        printf("\\nFor roll number %d,\\n", s[i].roll);
        
        printf("Enter first name: ");
        scanf("%s", s[i].name);
        
        printf("Enter marks: ");
        scanf("%f", &s[i].marks);
    }

    printf("\\nDisplaying Information:\\n\\n");

    // displaying information
    for (i = 0; i < 3; ++i) {
        printf("\\nRoll number: %d\\n", i + 1);
        printf("First name: ");
        puts(s[i].name);
        printf("Marks: %.1f", s[i].marks);
        printf("\\n");
    }
    return 0;
}
\`\`\`

### 3. Book Details

\`\`\`c
#include <stdio.h>
#include <string.h>

struct Book {
    char title[50];
    char author[50];
    int book_id;
};

int main() {
    struct Book book1;        /* Declare Book1 of type Book */
    struct Book book2;        /* Declare Book2 of type Book */

    /* book 1 specification */
    strcpy(book1.title, "C Programming");
    strcpy(book1.author, "Nuha Ali");
    book1.book_id = 6495407;

    /* book 2 specification */
    strcpy(book2.title, "Telecom Billing");
    strcpy(book2.author, "Zara Ali");
    book2.book_id = 6495700;

    /* print book1 info */
    printf("Book 1 title : %s\\n", book1.title);
    printf("Book 1 author : %s\\n", book1.author);
    printf("Book 1 book_id : %d\\n", book1.book_id);

    /* print book2 info */
    printf("Book 2 title : %s\\n", book2.title);
    printf("Book 2 author : %s\\n", book2.author);
    printf("Book 2 book_id : %d\\n", book2.book_id);

    return 0;
}
\`\`\`
`;
