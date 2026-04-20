export interface Topic {
  id: string;
  title: string;
  description: string;
  module: string;
}

export const topics: Topic[] = [
  // Module 1
  { id: 'm1-basics', module: 'Module 1', title: '1. C Basics', description: 'Character Set, Tokens, Variables, Constants, Escape Characters' },
  { id: 'm1-datatypes', module: 'Module 1', title: '2. Data Types & Qualifiers', description: 'Primary, Secondary types, Qualifiers (signed, short, long, unsigned) and sizes' },
  { id: 'm1-io', module: 'Module 1', title: '3. Input & Output', description: 'printf, scanf, getchar, putchar, gets, fgets, puts' },
  { id: 'm1-operators', module: 'Module 1', title: '4. Operators & Precedence', description: 'Arithmetic, Relational, Logical, Bitwise, Ternary, etc.' },
  { id: 'm1-control', module: 'Module 1', title: '5. Control Statements', description: 'if, if-else, else-if ladder, switch case' },
  { id: 'm1-loops', module: 'Module 1', title: '6. Loops & Jump Statements', description: 'for, while, do-while, break, continue, goto' },
  { id: 'm1-math', module: 'Module 1', title: '7. Math Functions', description: 'Math library prototypes and functions' },
  
  // Module 2
  { id: 'm2-arrays', module: 'Module 2', title: '1. Arrays & sizeof()', description: 'Arrays, sizeof() operator, 2D arrays and accessing elements' },
  { id: 'm2-strings', module: 'Module 2', title: '2. Strings & Functions', description: 'String terminators, initialization, <string.h> predefined functions, non-standard, ctype.h' },
  { id: 'm2-enum-typedef', module: 'Module 2', title: '3. Enum & Typedef', description: 'Enumerated data types and typedef aliasing in C' },

  // Programs
  { id: 'm1-programs-1', module: 'Programs', title: '1. Module 1 Programs (Part 1)', description: 'Sum, Area, User info, Positive/Negative/Zero, Greatest among 3, Odd/Even' },
  { id: 'm1-programs-2', module: 'Programs', title: '2. Module 1 Programs (Part 2)', description: 'Factors, Prime, Sum of Digits, Asc/Desc printing, Armstrong, Fibonacci, Palindrome, etc.' },
  { id: 'm2-programs-1', module: 'Programs', title: '3. Arrays & Matrices Programs', description: 'Sum/Avg, Bubble sort, Matrix operations (Addition, Multiplication, Transpose)' },
  { id: 'm2-programs-2', module: 'Programs', title: '4. Strings Programs', description: 'strcpy, strlen, strcat, strcmp, strchr, strstr, Palindromes, Vowels count' },
  { id: 'm2-programs-3', module: 'Programs', title: '5. Enum, Typedef & Operators', description: 'Enum variants, Typedef examples, Increment/Decrement operator expressions (25 examples)' },
];

