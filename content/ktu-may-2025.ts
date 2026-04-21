export const content = `
# Paper B: May 2025 (Solved)

Analysis of the **APJ Abdul Kalam Technological University** B.Tech Degree S2 (Regular) Examination questions.

---

### Part A (Selected Traces)

#### 1. Bitwise Output
**Question**: \`int a=5, b=9; printf("%d", a & b);\`
**Solution**:
*   \`5 = 0101\`
*   \`9 = 1001\`
*   \`& = 0001\` (Decimal 1)
**Output**: \`1\`

#### 4. Matrix Diagonals
Printing elements where \`i == j\`.
\`\`\`c
for(int i=0; i<3; i++) printf("%d ", a[i][i]);
\`\`\`

---

### Part B (Program Implementation)

#### Q9a. Strong Number
Sum of factorial of digits equals the number itself.
\`\`\`c
int isStrong(int n) {
    int sum = 0, temp = n;
    while(temp > 0) {
        int fact = 1;
        for(int i=1; i <= (temp % 10); i++) fact *= i;
        sum += fact;
        temp /= 10;
    }
    return (sum == n);
}
\`\`\`

#### Q11b. String Cat Trace
**Question**: \`strcat("abc", "def")\`
**Output**: \`abcdef\`

#### Q12a. Character Analysis
Counting vowels and consonants manually using a loop and \`tolower()\` or \`isupper()\` logic.

#### Q13b. Book Structure
Defining a structure with Title, Author, and Price, then displaying them via a function.

#### Q15a. Largest via Pointers
Using \`*(ptr + i)\` to find the maximum in an array.
\`\`\`c
int findMax(int *arr, int n) {
    int max = *arr;
    for(int i=1; i<n; i++) if(*(arr+i) > max) max = *(arr+i);
    return max;
}
\`\`\`

#### Q16b. File Processing
Reading integers from a file and filtering for even/odd counts.
\`\`\`c
while(fscanf(fp, "%d", &num) != EOF) {
    if(num % 2 == 0) e++; else o++;
}
\`\`\`
`;
