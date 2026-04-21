export const content = `
## Structures in C (\`struct\`)

Unlike an array that stores a collection of identically-typed data, a **structure** is a user-defined container capable of fusing distinct, fundamentally varying data types under a single unified name. 

They are incredibly important for representing explicit objects (like a \`Student\`, finding their \`id\` as an int, \`name\` as a string, and \`grade\` as a float).

### Syntax & Declaration
\`\`\`c
struct structure_name {
    data_type member1;
    data_type member2;
    // ...
}; // Struct bodies MUST be terminated with a semicolon
\`\`\`

**Example:**
\`\`\`c
struct Book {
    char title[100];
    char author[50];
    float price;
};
\`\`\`

### Accessing Structure Members
Members of a defined structure are explicitly grabbed using the Dot (\`.\`) operator.
\`\`\`c
struct Book b1; // declaring a variable 'b1' of type 'struct Book'
b1.price = 299.99; // Dot allocation
\`\`\`

---

## Unions in C (\`union\`)

A **union** is functionally declared and utilized identically to a structure. However, there is a distinct, massive discrepancy regarding **Memory Handling**.

While a structure allocates distinct physical memory storage sequentially for *every single member*, a union fundamentally isolates memory. A union allocates just enough singular memory to handle its strictly *largest* constituent member, and all internal variables dynamically utilize that exact same memory space.

**Syntax:**
\`\`\`c
union Data {
    int i;    // typically 4 bytes
    float f;  // typically 4 bytes
    char str[20]; // 20 bytes
}; // The max size of this union will merely be 20 bytes.
\`\`\`

### Fundamental Rule of Unions
Because elements share the same localized physical memory sector, modifying/reading one variant dynamically erodes or overlays the data of the former variant. **You can definitively only operate one single member inside a union at any given exact fraction of runtime logic.**

---

## Structures Vs. Unions

| Feature | Structures (\`struct\`) | Unions (\`union\`) |
| :--- | :--- | :--- |
| **Keyword** | \`struct\` | \`union\` |
| **Memory Allocation** | Memory is actively distributed exclusively for *each* member. | Memory is centralized to solely accommodate the physical size of its largest constituent member. |
| **Total Size Computation** | Equivalent to the sum compilation of all structural elements. | Strictly equivalent to the isolated exact size of its largest element. |
| **Data Integrity** | Adjusting data in one field holds zero effect natively against adjacent fields. | Manipulating any constituent forcibly alters and corrupts the parallel un-updated elements. |
| **Access Utility** | All structural components are completely concurrently accessible simultaneously. | Merely a isolated solitary member is dynamically accessible concurrently. |
`;
