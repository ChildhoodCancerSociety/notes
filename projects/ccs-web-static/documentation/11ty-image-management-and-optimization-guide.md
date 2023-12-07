# 11ty Image Management and Optimization Guide

### Table of Contents

1. Image Storage in 11ty
2. Optimizing Images with 11ty Plugin
3. Shortcode Calling Process
4. Adding Images to Landing Section
5. Gallery Images Implementation
6. Managing Favicon Images
7. Handling Logo Images
8. [Additional Resource: Detailed Guide on Image Optimization](https://docs.google.com/document/d/1qNBENnLrB1DwmkNqFuCVKjQ7GX44yPbbjt91bhQUWes/edit?usp=sharing)

***

### 1. Image Storage in 11ty

#### `src/images`

* **Usage**: Store images to be optimized using the eleventy image plugin.
* **Output**: Images are saved in the `/public` folder.
* **Examples**: Responsive images like company logos.

#### `assets/images`

* **Usage**: Store images that do not require optimization by eleventy.
* **Examples**: Favicon images.

***

### 2. Optimizing Images with 11ty Plugin

*   **Method**: Use the following code format for image optimization:

    `{% image 'DIRECT IMAGE PATH', 'ALT TEXT', 'PICTURE ELEMENT CLASS', 'LAZY/EAGER LOADING', 'IMG MEDIA QUERY' %}`
* **Example**: `{% image './src/images/landing.png', 'mountains', 'cs-picture', 'eager', '(max-width: 400px) 400px, (max-width: 850px) 850px, 1920px' %}`
* **Note**: The path should be prefixed with `./src`, and all information must be included, except for the media query (defaults to `.eleventy.js` settings).

***

### 3. Shortcode Calling Process

* **Process**: The image is moved to `/public/images` and renamed according to the structure in `.eleventy.js`: `{name}-{width}w.{format}`.
* **Example**: `picture.jpg` at 400px wide → `picture-400w.jpg`.
* **Usage**: Use the optimized name in URLs, e.g., for CSS background styling: `background-image: url(/images/picture-400w.jpg)`.

***

### 4. Adding Images to Landing Section

* **Steps**:
  1. Copy the image to the `src/images` folder.
  2. Create the optimized image using the shortcode.
  3. Include appropriate image attributes and media queries for optimal loading and performance.

***

### 5. Gallery Images Implementation

* **Storage**: Save images in the `src/images` folder.
* **Usage**: Use a similar shortcode format as landing images.
* **Layout Management**: Use specific CSS classes to manage the layout and responsiveness of gallery images.

***

### 6. Managing Favicon Images

* **Location**: Store in `assets/favicons`.
* **Integration**: Use in `base.html`. No optimization needed.
*   **Example HTML Tags**:

    ```html
    htmlCopy code<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
    ```

***

### 7. Handling Logo Images

* **Location**: Store in `assets/images`.
* **Usage**: Include in `base.html` and `header.html` with specified dimensions.
* **Dark Mode Adaptability**: Optionally, use different images for light and dark modes.
