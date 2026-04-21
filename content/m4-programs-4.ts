export const content = `
## Programs (File Operations - KTU)

### 16. Write User Input to a Text File
**The Question:** Write a C program to open a file named "sample.txt" in write mode, accept a line of text from the user, and save it to the file.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fptr;
    char text[100];

    // Open file in write mode
    fptr = fopen("sample.txt", "w");

    if (fptr == NULL) {
        printf("Error opening file.\\n");
        return 1;
    }

    printf("Enter text to write to file: ");
    fgets(text, sizeof(text), stdin);

    // Written to the file
    fprintf(fptr, "%s", text);
    printf("Data successfully written to sample.txt!\\n");

    fclose(fptr);
    return 0;
}
\`\`\`

### 17. Read and Display a Text File
**The Question:** Write a C program to open an existing text file and display its entire contents on the console character by character.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fptr;
    char ch;

    // Open file in read mode
    fptr = fopen("sample.txt", "r");

    if (fptr == NULL) {
        printf("Cannot open file. Please run the Write program first.\\n");
        return 1;
    }

    printf("Contents of sample.txt:\\n");
    
    // Read character by character until EOF
    while ((ch = fgetc(fptr)) != EOF) {
        putchar(ch);
    }

    printf("\\n");
    fclose(fptr);
    return 0;
}
\`\`\`

### 18. Copy Contents from One File to Another
**The Question:** Develop a program that copies the content of a source file ("sample.txt") to a destination file ("copy.txt").

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *source_fptr, *dest_fptr;
    char ch;

    source_fptr = fopen("sample.txt", "r");
    if (source_fptr == NULL) {
        printf("Cannot open source file.\\n");
        return 1;
    }

    dest_fptr = fopen("copy.txt", "w");
    if (dest_fptr == NULL) {
        printf("Cannot open destination file.\\n");
        fclose(source_fptr);
        return 1;
    }

    // Copying characters
    while ((ch = fgetc(source_fptr)) != EOF) {
        fputc(ch, dest_fptr);
    }

    printf("File copied successfully!\\n");

    fclose(source_fptr);
    fclose(dest_fptr);
    return 0;
}
\`\`\`

### 19. Structured Data Storage using Binary Files
**The Question:** Demonstrate using binary files (\`fwrite\` and \`fread\`) to store and retrieve a structure representing a Student (Name, Mark).

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Student {
    char name[50];
    int mark;
};

int main() {
    FILE *fptr;
    struct Student s1 = {"Alice", 95};
    struct Student s2;

    // Write structure to binary file
    fptr = fopen("students.bin", "wb");
    if (fptr == NULL) return 1;

    fwrite(&s1, sizeof(struct Student), 1, fptr);
    fclose(fptr);
    printf("Binary data written successfully!\\n");

    // Read structure from binary file
    fptr = fopen("students.bin", "rb");
    if (fptr == NULL) return 1;

    fread(&s2, sizeof(struct Student), 1, fptr);
    printf("Read from binary file - Name: %s, Mark: %d\\n", s2.name, s2.mark);
    
    fclose(fptr);
    return 0;
}
\`\`\`

### 20. Random Access using fseek() and ftell()
**The Question:** Write a program to demonstrate the use of \`fseek()\` and \`ftell()\` to move the file pointer and find the size of a file.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fptr;

    fptr = fopen("sample.txt", "w");
    if(fptr == NULL) return 1;
    fputs("Hello Programming World!", fptr);
    fclose(fptr);

    fptr = fopen("sample.txt", "r");
    
    // Seek to 6th character
    fseek(fptr, 6, SEEK_SET);
    printf("Position after SEEK_SET: %ld\\n", ftell(fptr));
    
    char buffer[20];
    fgets(buffer, 12, fptr);
    printf("Read string starting from 6th character: %s\\n", buffer);
    
    // Total size of file
    fseek(fptr, 0, SEEK_END);
    printf("Total size of file: %ld bytes\\n", ftell(fptr));

    fclose(fptr);
    return 0;
}
\`\`\`
`;
