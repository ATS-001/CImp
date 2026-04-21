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

  // Module 3
  { id: 'm3-functions', module: 'Module 3', title: '1. Modular Prog & Functions', description: 'Types of functions, Parameters, Return statements, Declaration vs Definition' },
  { id: 'm3-advanced', module: 'Module 3', title: '2. Macros, CLI & Recursion', description: 'Macros, Command line arguments (argc, argv, atoi), Recursion concepts' },
  { id: 'm3-structures', module: 'Module 3', title: '3. Structures & Unions', description: 'Structs, Unions, arrays of structures, and their memory differences' },
  { id: 'm3-storage', module: 'Module 3', title: '4. Storage Classes', description: 'Auto, register, static, and extern scope and lifetimes' },

  // Module 4
  { id: 'm4-pointers', module: 'Module 4', title: '1. Pointers & References', description: 'Addresses, dereferencing, arrays/functions with pointers, and pointer-to-pointer' },
  { id: 'm4-memory', module: 'Module 4', title: '2. Dynamic Memory', description: 'Stack vs Heap, malloc, calloc, realloc, free, and memory leakage' },
  { id: 'm4-files', module: 'Module 4', title: '3. File Handling', description: 'Text/binary files, File Pointers, fopen modes, input/output stream ops and fseek/ftell' },

  // Programs
  { id: 'm1-programs-1', module: 'Programs', title: '1. C Fundamental Program 1', description: 'Sum, Area, User info, Positive/Negative/Zero, Greatest among 3, Odd/Even' },
  { id: 'm1-programs-2', module: 'Programs', title: '2. C Fundamental Program 2', description: 'Factors, Prime, Sum of Digits, Asc/Desc printing, Armstrong, Fibonacci, Palindrome, etc.' },
  { id: 'm2-programs-1', module: 'Programs', title: '3. Arrays & Matrices', description: 'Sum/Avg, Bubble sort, Matrix operations (Addition, Multiplication, Transpose)' },
  { id: 'm2-programs-2', module: 'Programs', title: '4. Strings Programs', description: 'strcpy, strlen, strcat, strcmp, strchr, strstr, Palindromes, Vowels count' },
  { id: 'm2-programs-3', module: 'Programs', title: '5. Enum, Typedef & Operators', description: 'Enum variants, Typedef examples, Increment/Decrement operator traces' },
  { id: 'm3-programs-1', module: 'Programs', title: '6. Functions & Search', description: 'Taylor series, prime arrays, linear search, and bubble sort using functions' },
  { id: 'm3-programs-2', module: 'Programs', title: '7. Pass-by, Recursion & Macros', description: 'Swap by reference, recursive GCD/LCM/Factorial, Macros and CLI usage' },
  { id: 'm3-programs-3', module: 'Programs', title: '8. Structures & Logic', description: 'Local/Global Structs, sorting movie lists, measuring distances, arrays of distinct structures' },
  { id: 'm3-programs-4', module: 'Programs', title: '9. Unification & Storage', description: 'Implementing storage classes and executing unions' },
  { id: 'm4-programs-1', module: 'Programs', title: '10. Adv Pointers & Arrays', description: 'Pointer arithmetic, Array access, String concatenation, Function pointers, and Double pointers' },
  { id: 'm4-programs-2', module: 'Programs', title: '11. Pointers & Struct Logic', description: 'Pass by reference, Array name as pointer, Arrow operator (->), and Dynamic structure allocation' },
  { id: 'm4-programs-3', module: 'Programs', title: '12. Dynamic Mem & Recursion', description: 'Hands-on malloc, calloc, realloc, and solving Strong Numbers & Permutations with Recursion' },
  { id: 'm4-programs-4', module: 'Programs', title: '13. File Operations (KTU)', description: 'Text & Binary file handling, reading/writing structures, and Random Access using fseek/ftell' },

  // Question Papers Analysis
  { id: 'ktu-dec-2025', module: 'Question Papers', title: 'Paper A: Dec 2025 / Jan 2026', description: 'Solved questions for Challenge Course S2 (S) / S1 Examination.' },
  { id: 'ktu-may-2025', module: 'Question Papers', title: 'Paper B: May 2025 (Regular)', description: 'Solved questions for KTU Degree S2 (R) Examination.' },
  { id: 'ktu-dec-2024', module: 'Question Papers', title: 'Paper C: December 2024', description: 'Solved questions for Challenge Course S1 Examination.' },
];

