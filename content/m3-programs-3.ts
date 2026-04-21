export const content = `
## Programs (Structures & Complex Logic)

### 20. Program Using Struct Defined Outside Main (Global Structure)
\`\`\`c
#include <stdio.h>

struct Point {
    int x;
    int y;
}; // Declared structurally totally outside any functions inherently globally

int main() {
    struct Point p1 = {10, 20};
    printf("Point globally allocated: (%d, %d)\\n", p1.x, p1.y);
    return 0;
}
\`\`\`

### 21. Program Using Struct Defined Inside Main (Local Structure)
\`\`\`c
#include <stdio.h>

int main() {
    struct Info {
        int code;
        float id;
    }; // Only functions inside main explicitly know 'Info' exists

    struct Info p1 = {404, 3.14};
    printf("Local structural info: Code=%d, ID=%.2f\\n", p1.code, p1.id);
    return 0;
}
\`\`\`

### 22. Program Using Struct for Details of a Book
\`\`\`c
#include <stdio.h>
#include <string.h>

struct Book {
    char title[50];
    char author[50];
    float price;
};

int main() {
    struct Book b1;
    strcpy(b1.title, "C Programming Guide");
    strcpy(b1.author, "Dennis Ritchie");
    b1.price = 49.99;
    
    printf("Title: %s\\n", b1.title);
    printf("Author: %s\\n", b1.author);
    printf("Price: $%.2f\\n", b1.price);
    return 0;
}
\`\`\`

### 23. Array of Struct by User Input
\`\`\`c
#include <stdio.h>

struct Employee {
    int id;
    float salary;
};

int main() {
    int n, i;
    printf("Enter number of operational employees: ");
    scanf("%d", &n);
    
    struct Employee emps[n];
    
    for(i=0; i<n; i++) {
        printf("Enter ID and Setup Salary for Emp %d: ", i+1);
        scanf("%d %f", &emps[i].id, &emps[i].salary);
    }
    
    printf("\\n--- Database Out ---\\n");
    for(i=0; i<n; i++) {
        printf("Emp ID: %d, Salary: $%.2f\\n", emps[i].id, emps[i].salary);
    }
    return 0;
}
\`\`\`

### 26. Struct Block Book with Accept & Print Functions
\`\`\`c
#include <stdio.h>

struct Book {
    char title[100];
    char author[50];
    float price;
};

struct Book acceptDetails() {
    struct Book b;
    printf("Enter Title: ");
    scanf(" %[^\\n]s", b.title); // Read completely string with spaces
    printf("Enter Author: ");
    scanf(" %[^\\n]s", b.author);
    printf("Enter Price: ");
    scanf("%f", &b.price);
    return b;
}

void printDetails(struct Book b) {
    printf("\\n--- Book Data ---\\n");
    printf("Title natively : %s\\n", b.title);
    printf("Author bounds  : %s\\n", b.author);
    printf("Price tag      : $%.2f\\n", b.price);
}

int main() {
    struct Book inputBook = acceptDetails();
    printDetails(inputBook);
    return 0;
}
\`\`\`

### 27. Movie User-Rank Sorter (Display Top 5 by Output Rating Ascending Sorting)
\`\`\`c
#include <stdio.h>
#include <string.h>

struct Movie {
    char name[100];
    float rating; // Out of 10
};

int main() {
    int n, i, j;
    struct Movie temp;
    
    printf("How many logical movies? ");
    scanf("%d", &n);
    struct Movie movies[n];
    
    for(i = 0; i < n; i++) {
        printf("Enter name and rating (/10.0) for movie %d: ", i+1);
        scanf(" %s %f", movies[i].name, &movies[i].rating);
    }
    
    // Bubble sort ascending completely
    for(i = 0; i < n-1; i++) {
        for(j = 0; j < n-i-1; j++) {
            if(movies[j].rating > movies[j+1].rating) {
                temp = movies[j];
                movies[j] = movies[j+1];
                movies[j+1] = temp;
            }
        }
    }
    
    printf("\\n--- TOP 5 HIGHEST RATED MOVIES ---\\n");
    // Print the highest evaluated structures natively (which are precisely at the absolute end)
    int limit = (n < 5) ? 0 : (n - 5);
    for(i = n - 1; i >= limit; i--) {
        printf("%s - %.1f/10\\n", movies[i].name, movies[i].rating);
    }
    
    return 0;
}
\`\`\`

### 28. Student Average Database Structuring (Finding Avg natively using C Struct array outputs)
\`\`\`c
#include <stdio.h>

struct Student {
    int roll;
    char name[50];
    float mark_of_C;
};

int main() {
    int n, i;
    float sum = 0.0, avg;

    printf("Enter number of students: ");
    scanf("%d", &n);

    struct Student class[n];

    for(i = 0; i < n; i++) {
        printf("Enter Roll, Name, and 'C' Subject Programming Mark for Student %d: ", i+1);
        scanf("%d %s %f", &class[i].roll, class[i].name, &class[i].mark_of_C);
        sum += class[i].mark_of_C;
    }

    avg = sum / n;
    printf("\\nThe Average explicit class structural array Mark in C is: %.2f\\n", avg);
    
    return 0;
}
\`\`\`

### 29. Structure with an Initiated Variable natively mapped Outside the Main Function
\`\`\`c
#include <stdio.h>

struct Configuration {
    int port;
    int maxConnections;
} globalConfig; // Native physical structural variable bound globally globally

int main() {
    globalConfig.port = 8080;
    globalConfig.maxConnections = 500;
    
    printf("Server running on structurally bound Port: %d\\n", globalConfig.port);
    return 0;
}
\`\`\`

### 30 & 31 & 32 & 33. Advanced Distance Struct Formatters (Integrated Add/Sub Operations)
*(This single program demonstrates both Adding and Subtracting struct elements directly via distinct structural functions and strictly conditionally)*
\`\`\`c
#include <stdio.h>

struct Distance {
    int feet;
    int inches;
};

// Sub-program parameter handling (adding explicitly safely mapped)
struct Distance addDistances(struct Distance d1, struct Distance d2) {
    struct Distance result;
    result.feet = d1.feet + d2.feet;
    result.inches = d1.inches + d2.inches;
    
    // Formatting bound limit output explicitly properly
    if (result.inches >= 12) {
        result.feet += result.inches / 12;
        result.inches = result.inches % 12;
    }
    return result;
}

// Sub-program parameter handling (subtracting explicitly utilizing conditions)
struct Distance subDistances(struct Distance d1, struct Distance d2) {
    struct Distance result;
    
    int t1 = (d1.feet * 12) + d1.inches;
    int t2 = (d2.feet * 12) + d2.inches;
    int diff;
    
    if (t1 > t2) diff = t1 - t2;
    else diff = t2 - t1; // Automatically forcing structural mathematical absolute
    
    result.feet = diff / 12;
    result.inches = diff % 12;
    
    return result;
}

int main() {
    struct Distance dist1 = {5, 9}; // 5 ft 9 in
    struct Distance dist2 = {2, 10}; // 2 ft 10 in
    
    // Operations seamlessly mapped externally via explicit functions
    struct Distance sum = addDistances(dist1, dist2);
    struct Distance diff = subDistances(dist1, dist2);
    
    printf("SUM Output Function Bounds: %d feet %d inches\\n", sum.feet, sum.inches);
    printf("SUB Output Function Bounds: %d feet %d inches\\n", diff.feet, diff.inches);
    
    return 0;
}
\`\`\`
`;
