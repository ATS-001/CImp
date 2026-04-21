export const content = `
# Paper C: December 2024 (Solved)

Analysis of the **APJ Abdul Kalam Technological University** B.Tech Degree S1 (Challenge Course) Examination questions.

---

### Part A (Identity & Loops)

#### 1. Valid Identifiers
**Criteria**: \`mark1\` (Valid), \`_123\` (Valid), \`$price\` (Invalid - Symbol), \`rank list\` (Invalid - Space), \`-name\` (Invalid - Operator).

#### 6. Static Count Behavior
**Question**: \`static int count = 0; count++;\` called 5 times.
**Solution**: Since \`count\` is static, its value persists between calls.
**Output**: 1, 2, 3, 4, 5.

---

### Part B (Program Logic)

#### Q9a. Expression Trace
\`\`\`c
int a=5, b=8, c=9, d;
d = a++ + --b + c++;
// 5 + 7 + 9 = 21 (Result)
// Final State: a=6, b=7, c=10
\`\`\`

#### Q10a. Bitwise Bit Counting
Counting '1' bits using \`num & 1\`.
\`\`\`c
int countOnes(int n) {
    int count = 0;
    while(n > 0) {
        if(n & 1) count++;
        n >>= 1;
    }
    return count;
}
\`\`\`

#### Q11b. Bubble Sort (Descending)
Sorting in reverse order using \`a[j] < a[j+1]\`.

#### Q12b. Manual Palindrome Check
Checking if a string is a palindrome without using \`strrev()\` or \`strcmp()\`.
\`\`\`c
int isPalindrome(char s[], int len) {
    for(int i=0; i < len/2; i++) {
        if(s[i] != s[len-1-i]) return 0;
    }
    return 1;
}
\`\`\`

#### Q14a. Student Struct & Grading
Implementing a structure for student records and assigning grades (O, A, B, etc.) based on percentage thresholds $(90, 80, 70 \dots)$.

#### Q16b. Stock Reorder Logic
Reading stock data and printing items where \`quantity < reorder_level\`.
`;
