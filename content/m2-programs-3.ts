export const content = `
## Programs (Enum, Typedef, Operators)

### 14. Program using Enum (Type calling and Iterating)
*(Shows declaring an enum variable and looping across integer bases for enums since C doesn't natively iterate over enums)*
\`\`\`c
#include <stdio.h>

// Definition for type 1
enum Days { SUN, MON, TUE, WED, THU, FRI, SAT }; 

int main() {
    // Declaring a variable of an enumerated type
    enum Days today = WED;
    printf("Today is day index: %d\\n\\n", today);
    
    printf("Iterating over entire Enum pseudo-range:\\n");
    // Standard iteration technique utilizing raw integer representation
    for (int i = SUN; i <= SAT; i++) {
        printf("Day number: %d\\n", i);
    }
    
    return 0;
}
\`\`\`

### 15. Program using Enum (Specific Values: Success=1, Failure=-1, Pending=0)
\`\`\`c
#include <stdio.h>

enum Status { 
    FAILURE = -1, 
    PENDING = 0, 
    SUCCESS = 1 
};

int main() {
    enum Status current_status;
    
    current_status = SUCCESS; // Simulating a process
    
    if (current_status == SUCCESS) {
        printf("Process Finished: SUCCESS (Code %d)\\n", current_status);
    } else if (current_status == FAILURE) {
        printf("Process Finished: FAILURE (Code %d)\\n", current_status);
    } else {
        printf("Process Finished: PENDING (Code %d)\\n", current_status);
    }
    
    return 0;
}
\`\`\`

### 16. Program using Typedef
\`\`\`c
#include <stdio.h>

// Creating a Type Alias
typedef float RealNumber;
typedef unsigned int PositiveInteger;

int main() {
    // using the newly defined types
    PositiveInteger age = 22;
    RealNumber height = 5.9;
    
    printf("Age: %u\\n", age);
    printf("Height: %.1f\\n", height);
    return 0;
}
\`\`\`

### 17. Basic Example of Increment/Decrement Operators
\`\`\`c
#include <stdio.h>

int main() {
    int x = 10, y = 10;
    
    printf("Initial   -> x = %d, y = %d\\n", x, y);
    printf("Prefix ++ -> ++x = %d (Value increments before print)\\n", ++x);
    printf("Postfix ++ -> y++ = %d (Value increments after print)\\n", y++);
    
    printf("Current   -> x = %d, y = %d\\n", x, y);
    return 0;
}
\`\`\`

### 18. Program using Increment/Decrement Operator Expressions (25 Example Trace Log)
*(This program demonstrates the mathematical evaluation of various complex prefix/postfix expression assignments)*
\`\`\`c
#include <stdio.h>

int main() {
    int a, b;
    printf("--- 25 Examples of Increment/Decrement Expressions ---\\n");
    
    // Ex 1
    a = 5; b = a++;
    printf("1.  a=5;  b=a++;     [Postfix] -> a=%d, b=%d\\n", a, b); // a=6, b=5

    // Ex 2
    a = 5; b = ++a;
    printf("2.  a=5;  b=++a;     [Prefix]  -> a=%d, b=%d\\n", a, b); // a=6, b=6
    
    // Ex 3
    a = 5; b = a--;
    printf("3.  a=5;  b=a--;     [Postfix] -> a=%d, b=%d\\n", a, b); // a=4, b=5
    
    // Ex 4
    a = 5; b = --a;
    printf("4.  a=5;  b=--a;     [Prefix]  -> a=%d, b=%d\\n", a, b); // a=4, b=4

    // Ex 5
    a = 2; b = (a++) + 5; 
    printf("5.  a=2;  b=a++ + 5;           -> a=%d, b=%d\\n", a, b); // a=3, b=7 (2+5)

    // Ex 6
    a = 2; b = (++a) + 5; 
    printf("6.  a=2;  b=++a + 5;           -> a=%d, b=%d\\n", a, b); // a=3, b=8 (3+5)

    // Ex 7
    a = 3; b = (a++) * 2; 
    printf("7.  a=3;  b=a++ * 2;           -> a=%d, b=%d\\n", a, b); // a=4, b=6 (3*2)
    
    // Ex 8
    a = 3; b = (++a) * 2; 
    printf("8.  a=3;  b=++a * 2;           -> a=%d, b=%d\\n", a, b); // a=4, b=8 (4*2)

    // Ex 9
    a = 10; b = (a--) - 4; 
    printf("9.  a=10; b=a-- - 4;           -> a=%d, b=%d\\n", a, b); // a=9, b=6 (10-4)

    // Ex 10
    a = 10; b = (--a) - 4; 
    printf("10. a=10; b=--a - 4;           -> a=%d, b=%d\\n", a, b); // a=9, b=5 (9-4)

    // Ex 11
    a = 5; b = a++ + a++; // Undefined behavior in strict C, behaves sequentially here.
    // 5 + 6 = 11, final a = 7
    printf("11. a=5;  b=a++ + a++;         -> a=%d, b=%d\\n", a, b); 

    // Ex 12
    a = 5; b = ++a + ++a; 
    // 6 + 7 = 13 (or compiler might pre-eval to 7+7=14), final a=7
    printf("12. a=5;  b=++a + ++a;         -> a=%d, b=%d\\n", a, b); 

    // Ex 13
    a = 5; b = ++a + a++; 
    // 6 + 6 = 12, a becomes 7
    printf("13. a=5;  b=++a + a++;         -> a=%d, b=%d\\n", a, b);

    // Ex 14
    a = 5; b = a++ + ++a; 
    // 5 + 7 = 12, a becomes 7
    printf("14. a=5;  b=a++ + ++a;         -> a=%d, b=%d\\n", a, b);

    // Ex 15
    a = 5; b = a-- + a--; 
    printf("15. a=5;  b=a-- + a--;         -> a=%d, b=%d\\n", a, b);

    // Ex 16
    a = 5; b = --a + --a; 
    printf("16. a=5;  b=--a + --a;         -> a=%d, b=%d\\n", a, b);

    // Ex 17
    a = 5; b = 10 + (a++); 
    printf("17. a=5;  b=10 + a++;          -> a=%d, b=%d\\n", a, b);

    // Ex 18
    a = 5; b = 10 - (++a); 
    printf("18. a=5;  b=10 - ++a;          -> a=%d, b=%d\\n", a, b);

    // Ex 19
    a = 4; b = a++ * a++; 
    printf("19. a=4;  b=a++ * a++;         -> a=%d, b=%d\\n", a, b);

    // Ex 20
    a = 4; b = ++a * ++a; 
    printf("20. a=4;  b=++a * ++a;         -> a=%d, b=%d\\n", a, b);

    // Ex 21
    a = 6; b = a-- / 2; 
    printf("21. a=6;  b=a-- / 2;           -> a=%d, b=%d\\n", a, b);

    // Ex 22
    a = 6; b = --a / 2; 
    printf("22. a=6;  b=--a / 2;           -> a=%d, b=%d\\n", a, b);

    // Ex 23
    a = 1; int c = 1; b = a++ + ++c;
    printf("23. a=1, c=1; b=a++ + ++c;     -> a=%d, c=%d, b=%d\\n", a, c, b);

    // Ex 24
    a = 1; c = 1; b = ++a + c++;
    printf("24. a=1, c=1; b=++a + c++;     -> a=%d, c=%d, b=%d\\n", a, c, b);

    // Ex 25
    a = 5; b = a++ + --a; 
    // a=5 used, a goes to 6, then pre-decrement makes a=5, 5+5=10
    printf("25. a=5;  b=a++ + --a;         -> a=%d, b=%d\\n", a, b);
    
    return 0;
}
\`\`\`
`;