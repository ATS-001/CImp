export const content = `
## File Related Programs (KTU 2024 Pattern)

Here are 10 questions/programs related to file handling based on common KTU exam patterns.

### 1. Write a program to read a text file and count the number of characters, words, and lines.
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *file;
    char path[100];
    char ch;
    int characters, words, lines;

    file = fopen("input.txt", "r");
    if (file == NULL) {
        printf("\\nUnable to open file.\\n");
        exit(EXIT_FAILURE);
    }

    characters = words = lines = 0;
    while ((ch = fgetc(file)) != EOF) {
        characters++;
        if (ch == '\\n' || ch == '\\0')
            lines++;
        if (ch == ' ' || ch == '\\t' || ch == '\\n' || ch == '\\0')
            words++;
    }

    if (characters > 0) {
        words++;
        lines++;
    }

    printf("\\n");
    printf("Total characters = %d\\n", characters);
    printf("Total words      = %d\\n", words);
    printf("Total lines      = %d\\n", lines);

    fclose(file);
    return 0;
}
\`\`\`

### 2. Write a program to copy the contents of one file to another.
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *sourceFile, *destFile;
    char ch;

    sourceFile = fopen("source.txt", "r");
    if (sourceFile == NULL) {
        printf("Cannot open source file.\\n");
        exit(1);
    }

    destFile = fopen("destination.txt", "w");
    if (destFile == NULL) {
        printf("Cannot open destination file.\\n");
        fclose(sourceFile);
        exit(1);
    }

    while ((ch = fgetc(sourceFile)) != EOF) {
        fputc(ch, destFile);
    }

    printf("File copied successfully.\\n");

    fclose(sourceFile);
    fclose(destFile);
    return 0;
}
\`\`\`

### 3. Write a program to append data to an existing file.
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;
    char text[100];

    fp = fopen("file.txt", "a");
    if (fp == NULL) {
        printf("Error opening file!\\n");
        exit(1);
    }

    printf("Enter text to append: ");
    fgets(text, sizeof(text), stdin);

    fprintf(fp, "%s", text);
    printf("Data appended successfully.\\n");

    fclose(fp);
    return 0;
}
\`\`\`

### 4. Write a program to read numbers from a file and write even numbers to one file and odd numbers to another.
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *f1, *f2, *f3;
    int number;

    f1 = fopen("numbers.txt", "r");
    f2 = fopen("even.txt", "w");
    f3 = fopen("odd.txt", "w");

    if (f1 == NULL || f2 == NULL || f3 == NULL) {
        printf("Error opening files!\\n");
        exit(1);
    }

    while (fscanf(f1, "%d", &number) != EOF) {
        if (number % 2 == 0)
            fprintf(f2, "%d ", number);
        else
            fprintf(f3, "%d ", number);
    }

    printf("Numbers separated successfully.\\n");

    fclose(f1);
    fclose(f2);
    fclose(f3);
    return 0;
}
\`\`\`

### 5. Write a program to read student details (roll no, name, marks) and write them to a file using structures.
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Student {
    int roll;
    char name[50];
    float marks;
};

int main() {
    FILE *fp;
    struct Student s;

    fp = fopen("students.dat", "wb");
    if (fp == NULL) {
        printf("Error opening file!\\n");
        exit(1);
    }

    printf("Enter Roll No: ");
    scanf("%d", &s.roll);
    printf("Enter Name: ");
    scanf("%s", s.name);
    printf("Enter Marks: ");
    scanf("%f", &s.marks);

    fwrite(&s, sizeof(struct Student), 1, fp);
    printf("Data written to file.\\n");

    fclose(fp);
    return 0;
}
\`\`\`

### 6. Write a program to read student details from the binary file created in the previous program.
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Student {
    int roll;
    char name[50];
    float marks;
};

int main() {
    FILE *fp;
    struct Student s;

    fp = fopen("students.dat", "rb");
    if (fp == NULL) {
        printf("Error opening file!\\n");
        exit(1);
    }

    printf("Student Details:\\n");
    while (fread(&s, sizeof(struct Student), 1, fp) == 1) {
        printf("Roll No: %d\\n", s.roll);
        printf("Name: %s\\n", s.name);
        printf("Marks: %.2f\\n", s.marks);
    }

    fclose(fp);
    return 0;
}
\`\`\`

### 7. Write a program to merge two files into a third file.
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fs1, *fs2, *ft;
    char ch;

    fs1 = fopen("file1.txt", "r");
    fs2 = fopen("file2.txt", "r");
    ft = fopen("file3.txt", "w");

    if (fs1 == NULL || fs2 == NULL || ft == NULL) {
        printf("Error opening files!\\n");
        exit(1);
    }

    while ((ch = fgetc(fs1)) != EOF)
        fputc(ch, ft);

    while ((ch = fgetc(fs2)) != EOF)
        fputc(ch, ft);

    printf("Files merged successfully.\\n");

    fclose(fs1);
    fclose(fs2);
    fclose(ft);
    return 0;
}
\`\`\`

### 8. Explain fseek(), ftell(), and rewind() with an example.
\`\`\`c
#include <stdio.h>

int main() {
    FILE *fp;
    fp = fopen("test.txt", "w+");
    fputs("This is a test file.", fp);

    // ftell() returns current position
    printf("Current position: %ld\\n", ftell(fp));

    // rewind() sets position to beginning
    rewind(fp);
    printf("Position after rewind: %ld\\n", ftell(fp));

    // fseek() moves pointer to specific location
    // SEEK_SET (beginning), SEEK_CUR (current), SEEK_END (end)
    fseek(fp, 5, SEEK_SET);
    printf("Position after fseek(5): %ld\\n", ftell(fp));

    fclose(fp);
    return 0;
}
\`\`\`

### 9. Write a program to delete a specific line from a text file.
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp1, *fp2;
    char filename[40];
    char c;
    int del_line, temp = 1;

    printf("Enter file name: ");
    scanf("%s", filename);

    fp1 = fopen(filename, "r");
    if (fp1 == NULL) {
        printf("Cannot open file %s \\n", filename);
        exit(1);
    }

    printf("Enter line number to delete: ");
    scanf("%d", &del_line);

    fp2 = fopen("temp.txt", "w");

    while ((c = fgetc(fp1)) != EOF) {
        if (c == '\\n')
            temp++;
        if (temp != del_line)
            fputc(c, fp2);
    }

    fclose(fp1);
    fclose(fp2);
    remove(filename);
    rename("temp.txt", filename);

    printf("Line deleted successfully.\\n");
    return 0;
}
\`\`\`

### 10. Write a program to compare two files and report if they are identical or not.
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp1, *fp2;
    int ch1, ch2;

    fp1 = fopen("file1.txt", "r");
    fp2 = fopen("file2.txt", "r");

    if (fp1 == NULL || fp2 == NULL) {
        printf("Error opening files.\\n");
        exit(1);
    }

    do {
        ch1 = fgetc(fp1);
        ch2 = fgetc(fp2);
    } while (ch1 != EOF && ch2 != EOF && ch1 == ch2);

    if (ch1 == ch2)
        printf("Files are identical.\\n");
    else
        printf("Files are different.\\n");

    fclose(fp1);
    fclose(fp2);
    return 0;
}
\`\`\`
`;
