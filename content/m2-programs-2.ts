export const content = `
## Programs (Strings)

### 7. Program using \`strcpy\`
*(Copies a string into another variable)*
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "C Programming";
    char destination[50];
    
    strcpy(destination, source);
    
    printf("Source String: %s\\n", source);
    printf("Destination String: %s\\n", destination);
    return 0;
}
\`\`\`

### 8. Program using \`strlen\`
*(Finds the length of a string)*
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char str[50];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    
    // Removing newline added by fgets (optional but clean)
    str[strcspn(str, "\\n")] = 0;
    
    int length = strlen(str);
    printf("Length of string '%s' is: %d\\n", str, length);
    return 0;
}
\`\`\`

### 9. Program using \`strcat\`
*(Concatenates/appends one string to the end of another)*
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[50] = "Hello ";
    char str2[] = "World!";
    
    strcat(str1, str2); // str2 is appended directly to str1
    
    printf("Concatenated String: %s\\n", str1);
    return 0;
}
\`\`\`

### 10. Program using \`strcmp\`
*(Compares strings alphabetically)*
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "Apple";
    char str2[] = "Apple";
    char str3[] = "Banana";
    
    int result1 = strcmp(str1, str2);
    int result2 = strcmp(str1, str3);
    
    if (result1 == 0) printf("str1 and str2 are equal.\\n");
    if (result2 < 0) printf("str1 comes before str3 alphabetically.\\n");
    
    return 0;
}
\`\`\`

### 11. Program using \`strchr\`
*(Finds the first occurrence of a specific character in a string)*
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Programming in C";
    char ch = 'm';
    char *ptr;
    
    // Returns pointer to the first occurrence
    ptr = strchr(str, ch); 
    
    if (ptr != NULL) {
        printf("Character '%c' found at position: %ld\\n", ch, ptr - str + 1);
    } else {
        printf("Character not found.\\n");
    }
    return 0;
}
\`\`\`

### 12. Program using \`strstr\`
*(Finds the first occurrence of a substring in a string)*
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Learning C is amazing";
    char substr[] = "is";
    char *ptr;
    
    ptr = strstr(str, substr);
    
    if (ptr != NULL) {
        printf("Substring \\"%s\\" found at position: %ld\\n", substr, ptr - str + 1);
    } else {
        printf("Substring not found.\\n");
    }
    return 0;
}
\`\`\`

### 13. Palindrome of a String (Method 1: Two-Pointer logic)
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char str[50];
    int left, right, isPalindrome = 1;
    
    printf("Enter a string: ");
    scanf("%s", str); // Reading without spaces
    
    left = 0;
    right = strlen(str) - 1;
    
    while (right > left) {
        if (str[left] != str[right]) {
            isPalindrome = 0;
            break;
        }
        left++;
        right--;
    }
    
    if (isPalindrome) printf("%s is a Palindrome.\\n", str);
    else printf("%s is NOT a Palindrome.\\n", str);
    
    return 0;
}
\`\`\`

### 20. Count Vowels, Consonants, Digits & Special Chars (\`<ctype.h>\`)
\`\`\`c
#include <stdio.h>
#include <ctype.h>

int main() {
    char line[150];
    int vowels, consonant, digit, space, special;
    vowels = consonant = digit = space = special = 0;

    printf("Enter a line of string: ");
    fgets(line, sizeof(line), stdin); // Uses string.h technically, but ctype is the focus

    for (int i = 0; line[i] != '\\0'; ++i) {
        char ch = tolower(line[i]); 
        
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            ++vowels;
        } else if (isalpha(ch)) { // Check if alphabet using ctype
            ++consonant;
        } else if (isdigit(ch)) { // Check if digit using ctype
            ++digit;
        } else if (isspace(ch)) { // Check if space using ctype
            ++space;
        } else {
            ++special;
        }
    }

    printf("Vowels: %d\\n", vowels);
    printf("Consonants: %d\\n", consonant);
    printf("Digits: %d\\n", digit);
    printf("White spaces: %d\\n", space);
    // Note: special count includes the newline added by fgets
    printf("Special Characters: %d\\n", special - 1); 

    return 0;
}
\`\`\`

### 21. Palindrome of a String (Method 2: Using standard functions and new array)
*(A more manual array copy approach instead of pointers)*
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char original[50], reversed[50];
    int len, i, j;
    
    printf("Enter a string: ");
    scanf("%s", original);
    
    len = strlen(original);
    
    // Reverse logic building
    j = 0;
    for(i = len - 1; i >= 0; i--) {
        reversed[j] = original[i];
        j++;
    }
    reversed[len] = '\\0'; // Terminate the reversed string
    
    // Compare directly
    if (strcmp(original, reversed) == 0) {
        printf("%s is a Palindrome.\\n", original);
    } else {
        printf("%s is NOT a Palindrome.\\n", original);
    }
    return 0;
}
\`\`\`
`;
