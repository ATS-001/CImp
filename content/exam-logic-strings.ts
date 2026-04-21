export const content = `
# Strings & Logical Simulations

Advanced string handling often involves bypassing standard library functions (\`<string.h>\`) to demonstrate manual pointer and array management.

---

### 1. String Length Without \`strlen()\`
Calculating length manually by iterating until the null terminator (\`\\\\0\`).

\`\`\`c
#include <stdio.h>

int main() {
    char str[100];
    int length = 0;

    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);

    // Remove newline if fgets reads it
    while (str[length] != '\\0') {
        if (str[length] == '\\n') {
            str[length] = '\\0';
            break;
        }
        length++;
    }

    printf("Length of string: %d\\n", length);
    return 0;
}
\`\`\`

---

### 2. Comprehensive Character Count
Counting vowels, consonants, digits, and whitespace characters in a sentence.

\`\`\`c
#include <stdio.h>
#include <ctype.h>

int main() {
    char str[150];
    int v = 0, c = 0, d = 0, s = 0;

    printf("Enter string: ");
    fgets(str, sizeof(str), stdin);

    for (int i = 0; str[i] != '\\0'; i++) {
        char ch = tolower(str[i]);
        if (ch >= 'a' && ch <= 'z') {
            if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') v++;
            else c++;
        } else if (ch >= '0' && ch <= '9') d++;
        else if (ch == ' ' || ch == '\\t') s++;
    }

    printf("Vowels: %d\\nConsonants: %d\\nDigits: %d\\nSpaces: %d\\n", v, c, d, s);
    return 0;
}
\`\`\`

---

### 3. Logic: Login System Simulation
A basic simulation of username and password verification.

\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char user[20], pass[20];
    const char correct_user[] = "admin";
    const char correct_pass[] = "1234";

    printf("Username: ");
    scanf("%s", user);
    printf("Password: ");
    scanf("%s", pass);

    if (strcmp(user, correct_user) == 0 && strcmp(pass, correct_pass) == 0) {
        printf("--- Login Successful ---\\n");
    } else {
        printf("!!! Error: Invalid Credentials !!!\\n");
    }

    return 0;
}
\`\`\`

---

### Key Concepts
* **Manual Iteration**: Using \`str[i] != '\\0'\` is the fundamental way to traverse any string.
* **Normalization**: using \`tolower()\` simplifies vowel checks by reducing the cases to check.
* **Security**: In real apps, passwords should never be stored as plain strings (even in \`const\`), but for exams, this demonstrates logic.
`;
