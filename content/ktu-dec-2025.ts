export const content = `
# Paper A: Dec 2025 / Jan 2026 (Solved)

Analysis of the **APJ Abdul Kalam Technological University** B.Tech Degree S2 (S) / S1 (Challenge Course) Examination questions.

---

### Part A (Selected Logic)

#### 1. Expression Evaluation
**Question**: Calculate and print the result of: \`8 + 3 * (10 - 6) / 2\`
**Solution**:
*   \`10 - 6 = 4\`
*   \`3 * 4 = 12\`
*   \`12 / 2 = 6\`
*   \`8 + 6 = 14\`
**Output**: \`14\`

#### 2. String Length without Built-ins
**Implementation**:
\`\`\`c
int length = 0;
while(str[length] != '\\0') length++;
\`\`\`

#### 3. Storage Classes IDENTIFIED
**Trace**:
\`\`\`c
int x; // Extern (Global)
int main() {
    int y; // Auto (Local)
}
\`\`\`

---

### Part B (Program Implementation)

#### Q9a. Perfect Number
Checks if the sum of divisors equals the number.
\`\`\`c
int isPerfect(int n) {
    int sum = 0;
    for(int i = 1; i <= n/2; i++) {
        if(n % i == 0) sum += i;
    }
    return (sum == n);
}
\`\`\`

#### Q10a/11a. Digit Frequency & Matrix Symmetry
*   **Digit Frequency**: Using an array of size 10 to count occurrences of 0-9.
*   **Symmetry**: Verifying \`A[i][j] == A[j][i]\` for a square matrix.

#### Q13b. Decimal to Binary
Iterative approach using modulo and division.
\`\`\`c
void decToBin(int n) {
    int bin[32], i = 0;
    while(n > 0) { 
        bin[i++] = n % 2; 
        n /= 2; 
    }
    for(int j = i-1; j >= 0; j--) printf("%d", bin[j]);
}
\`\`\`

#### Q16b. Time Structure Arithmetic
Adding two time values and handling minute overflow (> 60).
\`\`\`c
void addTime(struct Time t1, struct Time t2, struct Time *res) {
    res->m = (t1.m + t2.m) % 60;
    res->h = t1.h + t2.h + ((t1.m + t2.m) / 60);
}
\`\`\`
`;
