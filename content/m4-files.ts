export const content = `
## File Handling in C

A file is a basic structure used to permanently store data outside an application's RAM limits on a physical hard drive.

### Types of Files

*   **Text Files (\`.txt\`)**: Store character output logically mapped and readable by text editors.
*   **Binary Files (\`.bin\`)**: Store data structurally in 1s and 0s, evaluating more efficiently and securely.

---

### Core Operations Matrix

To effectively manage files locally, C utilizes an internal \`FILE\` pointer.

| Mode | Operation | Core Behavior |
| :--- | :--- | :--- |
| **\`r\`** | Read | Opens a file for reading. If it does not exist, \`fopen()\` returns \`NULL\`. |
| **\`w\`** | Write | Writes entirely to a file. Overwrites existing content. |
| **\`a\`** | Append | Adds outputs exclusively to the end of the file. |
| **\`rb\` / \`wb\`** | Read/Write | Reads and writes logically in binary mode. |

### The \`FILE\` Pointer

Every file operation fundamentally relies on the \`FILE\` pointer:
\`\`\`c
FILE *fptr; 
fptr = fopen("my_document.txt", "w");
\`\`\`

---

### Practical Functions

1.  **\`fopen()\`**: Opens a document explicitly based on mode.
2.  **\`fclose()\`**: Safely closes a file to prevent memory leaks and file corruption.
3.  **\`fputc()\` / \`fgetc()\`**: Character-based read/write.
4.  **\`fprintf()\` / \`fscanf()\`**: Formatted I/O operations functionally similar to standard \`printf\`/\`scanf\`.
5.  **\`fgets()\` / \`fputs()\`**: Safely read/write string lines explicitly.

### Traversal Operations
-   **\`fseek(fptr, offset, SEEK_SET/SEEK_CUR/SEEK_END)\`**: Moves the pointer inside the file logically.
-   **\`ftell(fptr)\`**: Retreives the current file pointer byte offset.
`;
