export interface Topic {
  id: string;
  title: string;
  description: string;
}

export const topics: Topic[] = [
  { id: 'storage-classes', title: '1. Storage Classes', description: 'Storage Classes (with example programs, general syntax)' },
  { id: 'structure-union', title: '2. Structure & Union', description: 'Structure, Union, Structure VS Union, Example program for each' },
  { id: 'memory-allocation', title: '3. Memory Allocation', description: 'malloc, realloc, calloc, free (with example programs)' },
  { id: 'file-handling', title: '4. File Handling', description: 'File Handling, its modes, file handling functions (with examples for each)' },
  { id: 'matrix-problems', title: '5. Matrix Problems', description: 'Addition, Subtraction, Multiplication, Transpose, Diagonal (programs)' },
  { id: 'enumerated-datatypes', title: '6. Enumerated Datatypes', description: 'Enumerated Datatypes (with syntaxes and examples)' },
  { id: 'tokens-keywords', title: '7. Tokens & Keywords', description: 'Tokens, Keywords, Identifiers, etc (with examples)' },
  { id: 'find-output', title: '8. Find Output Problems', description: 'Problems related to find output (KTU 2024 Programming in C)' },
  { id: 'number-programs', title: '9. Number Programs', description: 'Programs to check whether a number is strong number, prime, armstrong, palindrome' },
  { id: 'string-programs', title: '10. String Programs', description: 'Reverse of a string, string operations(functions)' },
  { id: 'recursion-programs', title: '11. Recursion Programs', description: 'Sum of digits of a number, factorial, reverse of number using recursion' },
  { id: 'sum-of-n', title: '12. Sum of N Numbers', description: 'Sum of n given numbers' },
  { id: 'loops', title: '13. Loops', description: 'Entry and exit controlled loop (with syntax and examples)' },
  { id: 'sorting-searching', title: '14. Sorting & Searching', description: 'Bubble sort, Linear Search Programs' },
  { id: 'structure-programs', title: '15. Structure Programs', description: 'Employee data, student data, book details' },
  { id: 'functions', title: '16. Functions', description: 'Function, function prototype - understanding (with examples)' },
  { id: 'file-programs', title: '17. File Related Programs', description: 'File Related Programs (KTU 2024 Programming in C)' },
];
