export const content = `
## File Handling in C

File handling in C enables us to create, update, read, and delete the files stored on the local file system through our C program.

### File Operations
1. Creation of a new file
2. Opening an existing file
3. Reading from a file
4. Writing to a file
5. Moving to a specific location in a file (seeking)
6. Closing a file

### File Opening Modes

| Mode | Description |
| :--- | :--- |
| \`r\` | Opens a text file in read mode. If the file does not exist, it returns NULL. |
| \`w\` | Opens a text file in write mode. If the file exists, its contents are overwritten. If it doesn't exist, a new file is created. |
| \`a\` | Opens a text file in append mode. Data is added to the end of the file. If the file doesn't exist, a new file is created. |
| \`r+\` | Opens a text file in read and write mode. |
| \`w+\` | Opens a text file in read and write mode. Overwrites existing file or creates a new one. |
| \`a+\` | Opens a text file in read and write mode. Appends to existing file or creates a new one. |
| \`rb\`, \`wb\`, \`ab\` | Same as above but for binary files. |

### File Handling Functions

#### 1. fopen() and fclose()
Used to open and close a file.

\`\`\`c
#include <stdio.h>

int main() {
    FILE *fp;
    fp = fopen("test.txt", "w"); // Open file in write mode
    
    if (fp == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    printf("File opened successfully.\\n");
    fclose(fp); // Close the file
    return 0;
}
\`\`\`

#### 2. fprintf() and fscanf()
Used to write and read formatted data to/from a file.

\`\`\`c
#include <stdio.h>

int main() {
    FILE *fp;
    char name[50];
    int age;
    
    // Writing to file
    fp = fopen("data.txt", "w");
    fprintf(fp, "%s %d", "John", 25);
    fclose(fp);
    
    // Reading from file
    fp = fopen("data.txt", "r");
    fscanf(fp, "%s %d", name, &age);
    printf("Name: %s, Age: %d\\n", name, age);
    fclose(fp);
    
    return 0;
}
\`\`\`

#### 3. fputc() and fgetc()
Used to write and read a single character.

\`\`\`c
#include <stdio.h>

int main() {
    FILE *fp;
    char ch;
    
    // Writing character
    fp = fopen("char.txt", "w");
    fputc('A', fp);
    fclose(fp);
    
    // Reading character
    fp = fopen("char.txt", "r");
    ch = fgetc(fp);
    printf("Character read: %c\\n", ch);
    fclose(fp);
    
    return 0;
}
\`\`\`

#### 4. fputs() and fgets()
Used to write and read strings.

\`\`\`c
#include <stdio.h>

int main() {
    FILE *fp;
    char str[50];
    
    // Writing string
    fp = fopen("string.txt", "w");
    fputs("Hello World\\n", fp);
    fclose(fp);
    
    // Reading string
    fp = fopen("string.txt", "r");
    fgets(str, 50, fp);
    printf("String read: %s", str);
    fclose(fp);
    
    return 0;
}
\`\`\`
`;
