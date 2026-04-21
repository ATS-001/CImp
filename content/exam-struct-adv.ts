export const content = `
# Advanced Structure Logic

Exam papers often require combining structures with sorting algorithms or using them for tracking complex data like time or sports stats.

---

### 1. Structure Sorting (Movies by Rating)
Storing a list of movies and finding/sorting the top-rated ones.

\`\`\`c
#include <stdio.h>
#include <string.h>

struct Movie {
    char name[50];
    float rating;
};

int main() {
    struct Movie m[10], temp;
    int n, i, j;

    printf("Enter number of movies: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("Movie %d name & rating: ", i + 1);
        scanf("%s %f", m[i].name, &m[i].rating);
    }

    // Bubble Sort based on ratings (Descending)
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (m[j].rating < m[j+1].rating) {
                temp = m[j];
                m[j] = m[j+1];
                m[j+1] = temp;
            }
        }
    }

    printf("\\nTop Movies:\\n");
    for (i = 0; i < (n < 5 ? n : 5); i++) {
        printf("%s (%.1f/10)\\n", m[i].name, m[i].rating);
    }

    return 0;
}
\`\`\`

---

### 2. Time Arithmetic (Adding Durations)
Using structures to add two time values (hours and minutes) with carry-over logic.

\`\`\`c
#include <stdio.h>

struct Time {
    int h, m;
};

void addTime(struct Time t1, struct Time t2, struct Time *total) {
    total->m = t1.m + t2.m;
    total->h = t1.h + t2.h + (total->m / 60);
    total->m %= 60;
}

int main() {
    struct Time t1 = {2, 45}, t2 = {1, 30}, result;
    
    addTime(t1, t2, &result);
    
    printf("Time 1: %02d:%02d\\n", t1.h, t1.m);
    printf("Time 2: %02d:%02d\\n", t2.h, t2.m);
    printf("Total:  %02d:%02d\\n", result.h, result.m);

    return 0;
}
\`\`\`

---

### 3. Cricket Stats Logic
Finding the player with the highest score from a structure array.

\`\`\`c
#include <stdio.h>

struct Player {
    char name[50];
    int runs;
};

int main() {
    struct Player p[10];
    int n, highIndex = 0;

    printf("Number of players: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("Player %d name & runs: ", i + 1);
        scanf("%s %d", p[i].name, &p[i].runs);
        
        if (p[i].runs > p[highIndex].runs) {
            highIndex = i;
        }
    }

    printf("\\nHighest Scorer: %s with %d runs\\n", p[highIndex].name, p[highIndex].runs);
    return 0;
}
\`\`\`

---

### Key Takeaways
* **Sorting**: You can swap entire structure variables just like integers (\`temp = a; a = b; b = temp;\`).
* **Time**: Always handle the overflow (minutes > 60) by adding to hours.
* **Pointers**: Passing by reference (\`struct Time *total\`) allows a function to modify multiple fields that persist in the main function.
`;
