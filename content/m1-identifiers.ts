export const content = `
# Identifiers & Rules in C

An **Identifier** is a name given to entities such as variables, functions, arrays, and structures. These are user-defined names that allow the programmer to refer to specific memory locations or routines.

## Rules for Naming Identifiers

To ensure code compiles correctly, C enforces strict rules for forming valid identifiers:

1. **Permissible Characters**: Identifiers can only contain **alphabets** (uppercase and lowercase), **digits**, and the **underscore** (_) character.
2. **First Character**: The first character **must** be an alphabet or an underscore. It cannot be a digit.
3. **No Keywords**: You cannot use C keywords (like \`int\`, \`float\`, \`if\`, \`while\`) as identifier names.
4. **No Special Symbols**: Characters like \`$\`, \`@\`, \`#\`, \`%\`, or spaces are not allowed within identifiers.
5. **Case Sensitivity**: C is case-sensitive. \`Mark\`, \`mark\`, and \`MARK\` are three different identifiers.
6. **Length Limit**: Standard C compilers typically recognize up to 31 characters, though many modern compilers support longer names.

## Valid vs. Invalid Identifiers

Based on KTU examination patterns, here are common examples:

| Identifier | Validity | Reason |
| :--- | :--- | :--- |
| \`mark1\` | ✅ Valid | Contains only letters and numbers; starts with a letter. |
| \`_123\` | ✅ Valid | Starts with an underscore; contains numbers. |
| \`Xyz\` | ✅ Valid | Standard uppercase/lowercase combination. |
| \`$price\` | ❌ Invalid | Contains the special character \`$\`. |
| \`rank list\`| ❌ Invalid | Contains a space. |
| \`-name\` | ❌ Invalid | Contains a hyphen (\`-\`), which is an operator. |
| \`2ndRow\` | ❌ Invalid | Starts with a digit (\`2\`). |
| \`float\` | ❌ Invalid | It is a reserved keyword in C. |

## Best Practices
* Use **meaningful names** that describe the purpose of the variable (e.g., \`student_age\` instead of \`s_a\`).
* Use **underscores** (\`snake_case\`) or **CamelCase** for readability in long identifiers.
* Avoid starting with an underscore unless necessary (like in system libraries) to prevent conflicts with internal names.
`;
