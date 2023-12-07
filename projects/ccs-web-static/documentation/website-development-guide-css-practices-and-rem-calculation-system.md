# Website Development Guide: CSS Practices and REM Calculation System

### Table of Contents

1. Introduction to CSS Pre-processors
2. Understanding `.less` and `.css` Files
3. Workflow for Development and Production
4. Key Practices in Template CSS
   * CSS Custom Properties (Variables)
   * Media Queries
   * Pixel to REM Conversion

***

### Introduction to CSS Pre-processors

CSS pre-processors, like LESS, extend standard CSS capabilities, offering features such as variables, mixins, and nested rules for more dynamic and efficient coding.

***

### Understanding `.less` and `.css` Files

#### Purpose of `.less`

* **Development Efficiency**: Primary file during development, using LESS features for efficient coding.
* **Enhanced Readability**: Nested selectors and variables make code more maintainable.
* **Dynamic Calculations**: Allows mathematical operations, e.g., `1280/16rem`.

#### Purpose of `.css`

* **Browser Compatibility**: Ensures code is interpretable by browsers.
* **Optimized Styles**: Contains finalized styles, with all LESS operations computed.
* **Production Ready**: Used in the production environment for optimal performance.

***

### Workflow for Development and Production

* **Development**: Edit and add styles in the `.less` file.
* **Compilation**: Convert `.less` to `.css` once changes are finalized.
* **Production**: Include the `.css` file in the live website.

***

### Key Practices in Template CSS

#### 1. CSS Custom Properties (Variables)

* **Usage**: Store reusable values like `--sectionPadding`, `--topperFontSize`.
* **Syntax**: `:root { --variableName: value; }`

#### 2. Media Queries

* **Responsiveness**: Set up breakpoints for design adaptation to various screen sizes.
* **Example**: `@media only screen and (min-width: 0em)`

#### 3. Converting Pixel Values to REM

* **Method**: Use calculations like `1280/16rem` for conversion.
* **Why 16?**: Default browser font-size (1rem) is typically 16px.
* **Scalability**: Ensures design remains user-friendly across devices.
* **Example**: `.element { width: 31.25rem; }` for a design value of 500px.

***

### Conclusion

This guide aims to provide clarity on the CSS practices and rem calculation system used in our new website's template. It serves as a reference for both development and debugging processes.
