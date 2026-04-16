export const content = `
## Functions and Function Prototypes

A function is a group of statements that together perform a task. Every C program has at least one function, which is \`main()\`.

### Function Declaration (Prototype)

A function prototype tells the compiler about a function's name, return type, and parameters. It is usually placed at the top of the file or in a header file.

**Syntax:**
\`\`\`c
return_type function_name( parameter list );
\`\`\`

### Function Definition

The function definition provides the actual body of the function.

**Syntax:**
\`\`\`c
return_type function_name( parameter list ) {
   body of the function
}
\`\`\`

### Example Program

\`\`\`c
#include <stdio.h>

/* function declaration (prototype) */
int max(int num1, int num2);

int main() {
   /* local variable definition */
   int a = 100;
   int b = 200;
   int ret;

   /* calling a function to get max value */
   ret = max(a, b);

   printf("Max value is : %d\\n", ret);
   return 0;
}

/* function returning the max between two numbers */
int max(int num1, int num2) {
   /* local variable declaration */
   int result;

   if (num1 > num2)
      result = num1;
   else
      result = num2;

   return result; 
}
\`\`\`

### Why use Function Prototypes?
1. It tells the compiler about the return type of the function.
2. It tells the compiler about the number of arguments passed to the function.
3. It tells the compiler about the data types of the arguments.
4. It helps the compiler catch errors if the function is called incorrectly.
`;
