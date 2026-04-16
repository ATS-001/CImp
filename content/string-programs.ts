export const content = `
## String Programs in C

### 1. Reverse of a String (Without using library function)

\`\`\`c
#include <stdio.h>

int main() {
    char str[100], rev[100];
    int i, j, count = 0;

    printf("Enter a string: ");
    scanf("%s", str);

    // Finding length
    while (str[count] != '\\0') {
        count++;
    }

    j = count - 1;

    // Reversing
    for (i = 0; i < count; i++) {
        rev[i] = str[j];
        j--;
    }
    rev[i] = '\\0';

    printf("Reversed string: %s\\n", rev);
    return 0;
}
\`\`\`

### 2. String Operations (Using Library Functions)

C provides a library \`<string.h>\` that contains many useful string handling functions.

\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[50] = "Hello";
    char str2[50] = "World";
    char str3[50];
    int len;

    // 1. strlen() - Find length of string
    len = strlen(str1);
    printf("Length of str1: %d\\n", len);

    // 2. strcpy() - Copy string
    strcpy(str3, str1);
    printf("Copied string (str3): %s\\n", str3);

    // 3. strcat() - Concatenate strings
    strcat(str1, str2);
    printf("Concatenated string (str1): %s\\n", str1);

    // 4. strcmp() - Compare strings
    if (strcmp(str1, str2) == 0) {
        printf("Strings are equal\\n");
    } else {
        printf("Strings are not equal\\n");
    }

    // 5. strrev() - Reverse string (Note: Not standard in all compilers)
    // strrev(str2);
    // printf("Reversed str2: %s\\n", str2);

    return 0;
}
\`\`\`
`;
