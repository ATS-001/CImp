export const content = `
## Math Prototype in C

To perform complex mathematical operations in C, we include the \`<math.h>\` header file. It provides a wide collection of built-in mathematical functions.

*Note: In Linux/GCC, you often need to compile programs using \`math.h\` with the \`-lm\` flag (e.g., \`gcc program.c -lm\`).*

### Function Prototypes in \`<math.h>\`
Most functions in \`<math.h>\` take \`double\` arguments and return a \`double\` value.

Here are the most commonly used math functions:

#### 1. Power and Root Functions
*   \`double pow(double base, double exponent);\`: Returns the base raised to the power of exponent.
*   \`double sqrt(double x);\`: Returns the square root of \`x\`. (x must be non-negative).
*   \`double cbrt(double x);\`: Returns the cube root of \`x\`.

#### 2. Rounding Functions
*   \`double ceil(double x);\`: Rounds UP to the nearest integer. (e.g., \`ceil(3.2)\` becomes \`4.0\`).
*   \`double floor(double x);\`: Rounds DOWN to the nearest integer. (e.g., \`floor(3.8)\` becomes \`3.0\`).
*   \`double round(double x);\`: Rounds to the absolute nearest integer (normal rounding).

#### 3. Absolute Value Functions
*   \`int abs(int x);\`: Found in \`<stdlib.h>\`. Returns the absolute value of an integer.
*   \`double fabs(double x);\`: Found in \`<math.h>\`. Returns the absolute value of a floating-point number.

#### 4. Trigonometric Functions
*(Note: Angles passed to these functions must be in Radians, not Degrees)*
*   \`double sin(double x);\`: Returns the sine of an angle.
*   \`double cos(double x);\`: Returns the cosine of an angle.
*   \`double tan(double x);\`: Returns the tangent of an angle.

#### 5. Logarithmic and Exponential Functions
*   \`double exp(double x);\`: Returns e raised to the power of x.
*   \`double log(double x);\`: Returns the natural logarithm (base e) of x.
*   \`double log10(double x);\`: Returns the common logarithm (base 10) of x.

---

### Example Program

\`\`\`c
#include <stdio.h>
#include <math.h>

int main() {
    double x = 9.0;
    double pt_val = 3.6;

    printf("Square root of %.2f is %.2f\\n", x, sqrt(x)); // 3.00
    printf("3 raised to power 4 is %.2f\\n", pow(3, 4)); // 81.00
    printf("Ceil of %.2f is %.2f\\n", pt_val, ceil(pt_val));   // 4.00
    printf("Floor of %.2f is %.2f\\n", pt_val, floor(pt_val)); // 3.00
    printf("Absolute value of -10.5 is %.2f\\n", fabs(-10.5)); // 10.50

    return 0;
}
\`\`\`
`;
