/*
# 👁️ Most Asked Questions in CSS for entry-level and fresher jobs 🧑‍💻


# Note (Very important)🤚  

> This is for interview preparation purposes, not for learning CSS from scratch. Make sure you First Learn CSS.  
> This section covers the most commonly asked CSS interview Questions and Concepts for Entry-level and Fresher jobs.
> For CSS, regular practice is essential—just reading and understanding concepts is not enough. So, ensure you Practice properly.  

--Total : 26 Questions

# 1) How To add css in hmtl ?

There are three main ways to add CSS to HTML:

1. Inline CSS
   - CSS styles are applied directly to HTML elements using the `style` attribute.
   - Useful for applying quick, one-time styles to specific elements but not ideal for large-scale styling.

   ```html
   <h1 style="color: blue; font-size: 24px;">Hello World</h1>
   ```

2. Internal CSS
   - CSS rules are placed inside a `<style>` tag within the `<head>` section of the HTML document.
   - Useful for styling a single page without needing an external stylesheet.
   ```html
   <head>
       <style>
           h1 {
               color: blue;
               font-size: 24px;
           }
       </style>
   </head>
   ```


3. External CSS
   - CSS rules are stored in a separate `.css` file, which is linked to the HTML document using the `<link>` tag inside the `<head>`.
   - Best for larger projects, as it separates design and content, making the CSS reusable across multiple pages.
   ```html
   <head>
       <link rel="stylesheet" href="styles.css">
   </head>
   ```

--Using External CSS is the preferred choice for most cases due to better maintainability and reusability.

# 2) What is specificity in CSS, and which CSS rule has higher precedence ?

---CSS specificity Youtube Video Link (Lang : English) (cltr + click 👆): https://youtu.be/CHyPGSpIhSs?si=aoeiBrvZxUkGzs-2  [🤚 Watch this video first ]

CSS specificity determines which CSS rule is applied when multiple rules target the same element.
It’s basically a priority system that decides which style wins in case of a conflict.

Specificity in CSS means how the browser decides which CSS rule to apply when more than one rule targets the same element.Think of it like a priority system — whichever rule has higher specificity, that one wins.

The order of precedence is: !important` > Inline styles > ID selectors > Class/attribute/pseudo-class selectors > Element selectors

# 3) Cascade Algorithm in CSS ?

The cascade algorithm in CSS is the process the browser uses to decide which CSS rule should be applied when multiple rules target the same HTML element.

--Rules:

1.Order and Position: 
   - If the same selector is used multiple times with different styles, the one written last will be applied. 
   - Example:
     p { color: blue; }
     p { color: red; }  This rule is applied because it's last.
 

2. Priority of Selectors:
   CSS follows a specific priority order to resolve conflicts:
   - `!important`: Always takes the highest priority, regardless of where it is used.
   - Inline styles: Written directly in the HTML using `style=""`.
   - ID selectors: `#id`.
   - Class selectors, attributes, and pseudo-classes: `.class`, `[attr=value]`, `:hover`.
   - Element and pseudo-element selectors: `p`, `::before`.
   - Universal selector: `*` (lowest priority).

   Priority pattern:
   
--🤚Specificit👇

=> !important > ID Selector > Class/Attribute/Pseudo-class Selector > Element/Pseudo-element Selector > Universal Selector
=> Inline css > Internal css > External CSS
  
3. Predefined Browser Styles:
   - Browsers have their own default styles (called user agent stylesheets), but these have 
   lower priority than developer-defined styles.

4.Specificity numbers
The specificity numbers are calculated based on the types of selectors in CSS.

- Inline styles: 1000 ------->(e.g., `style="color: red;"`)  
- IDs: 100 -------> (e.g., `#header`)  
- Classes, attributes, pseudo-classes: 10 -------> (e.g., `.btn`, `[type="text"]`, `:hover`)  
- Elements and pseudo-elements: 1 -------> (e.g., `div`, `p`, `::before`)  
- Universal selector (`*`): 0 -------> (no specificity).

# 4)Box Model

---CSS Box Youtube Video Link (Lang : Eng) (cltr + click 👆) : https://youtu.be/nSst4-WbEZk?si=lTfz75tuk8UIdJIt  [🤚 Watch this video first ]

The cascade algorithm in CSS is the process the browser uses to decide which CSS rule should be applied when multiple rules target the same HTML element.

1)Content
2)Padding
3)Border
4)Margin

                 Margin
  +-------------------------------------+  --->Border
  |                                     |
  |                                     |
  |                                     |
  |             Padding                 |
  |      +---------------------+        |
  |      |      Content        |        |
  |      +---------------------+        |
  |                                     |
  |                                     | 
  |                                     |
  +-------------------------------------+

# 5)Position Property In CSS ?

---Position Property Youtube Video Link (Lang : Eng) (cltr + click 👆) : https://youtu.be/MxEtxo_AaZ4?si=-RflCAOCy4FFIOp_  [🤚 Watch this video first ]

  position: static (Default);
  position: relative;
  position: absolute;
  position: fixed;
  position: sticky;
  
There are Four Main Postion Property :

1. `static` (Default):  
   - This is the default position for elements.  

2. `relative`:  
   - You can move it using properties like top, right, bottom, or left.

3. `absolute`:  
   - The element moves based on its nearest parent with a position set (like `relative`)**.  
   - If there’s no such parent, it moves based on the whole page (`body`). 
   - absolute relies on a relative parent; otherwise, it uses the body.
 
5. `sticky`:  
   - The element sticks in place while you scroll within it's nearest parent container.  
   - You have to give something like "top:0px" working it , if you just write postion:sticky so it will no work.
   - It's stops sticking once it reaches the parent's boundary.
   
4. `fixed`:  
   - The element stays in a fixed spot on the screen, no matter how much you scroll.  
   - If top, bottom, left, or right are used, the element is positioned relative to the 
   direct viewport(browser window/body) not to nearest parent , no realtive like thing is 
   working her like with absolute. 
   
   --Key Differences Between Fixed and Sticky :

| Property         | `fixed`                           | `sticky`                            |
|------------------|-----------------------------------|-------------------------------------|
| Reference        | Viewport                          | Parent container boundaries         |
| Scroll Behavior  | Always stays fixed                | Becomes fixed within a boundary     |
| Common Use       | Navigation bars, floating buttons | Table headers, sticky sections      |



# 6)About flex box.

---Flex Box Youtube Video Link (Lang : English)(cltr + click 👆) : https://youtu.be/phWxA89Dy94?si=Q79vSketdYYc4TKy  [🤚 Watch this video first  ]

--Quick Revision About flex box

In simple language, flexbox helps you design layouts and arrange items within a container according to our
needs and it also helps us to creating reponsive design.

> justify-content: justify-content helps aligns flex items along the x axis (Horizontally/row by default) or y axis vertical if `flex-direction` is column.
> align-items: align-items helps aligns flex items along the y-axis (vertical/colum by default) or x-axis horizontal if flex-direction is set to row.
> space-between: The space is only between the items no space on the edges (left and right).
> space-around: Equal space around items, but on edges (left and right) spaces are smaller.  
> space-evenly: Equal space everywhere —between items and at the edges.  
> basline: When you use align-items: baseline, it aligns the text of all items so that their baseline (the line where text sits) is aligned horizontally.
> align-self: The align-self property specifies the alignment for the selected item inside the flexible container.
> align-content in CSS is used to control the spacing between multiple rows of items in a flex container. It works only when the container has multiple rows (using flex-wrap: wrap).
  --Works only: When the flex container has multiple lines (enabled by flex-wrap: wrap or wrap-reverse),Does not affect ,Single-line flex containers.

>Note 🤚: 

If flex-wrap is not set to wrap (or is set to its default value, nowrap), the align-content property will not work, 
even if the container has more than one line of content.
This is because align-content only applies when the flex container allows items to wrap into multiple rows or 
columns.

1. `flex-direction:`  
   - `row`, `row-reverse`, `column`, `column-reverse`.

2. `justify-content:`  
   - `flex-start`, `flex-end`, `center`, `space-around`, `space-between`, `space-evenly`.

3. `align-items:`  
   - `flex-start`, `flex-end`, `center`, `stretch`(this is default), `baseline`.

4. `align-content:`  
   - `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch (this is default)`.

5. `gap` / `row-gap` / `column-gap:`  
   - examples: `10px`, `1rem`, `5%`.

6. `align-self (for child) (It doesn’t affect the main-axis/x-axis ):`  
   - `auto`(Default), `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

7. `order (for child):`  
   - Numeric values to define item order. Default: `0`.  
   - We can change the order of the items.

8. `flex-grow (for child):`  
   - Specifies how much space an item should take relative to others. Default is `0`.

9. `flex-shrink (for child):`  
   - Specifies how much an item should shrink when space is limited. Default is `1`. 

10. flex-basic ( for child );
   - we can set the width of flex item width 

11.flex-wrap
  -wrap , wrap-reverse   

 >Note (V.V IMP)

 =>
- If you use `width`: It will set a fixed width for the item, and `flex-grow` or `flex-shrink`
won’t affect it. The item will stay at that width.

- If you use `flex-basis`: It will set the initial size for the item, and `flex-grow` and 
`flex-shrink` will work based on that starting size. The item can grow or shrink depending on
 available space in the container.


# 7) About Grid

---Grid Youtube Video Link (Lang : English) (cltr + click 👆) : https://youtu.be/EiNiSFIPIQE?si=64u3vOQwbkieHFux  [🤚 Watch this video first  ]

>> Parent (Grid Container) Properties :

--1. For Creating Grid

- grid-template-rows:  1rem 1rem 1rem  or  1fr 1fr 1fr  or  repeat(3, 1fr)  or repeat(3, minmax(2rem, 1fr))  or  repeat(auto-fit, minmax(2rem, 1fr))
- grid-template-colums:  1rem 1rem 1rem  or  1fr 1fr 1fr  or  repeat(3, 1fr)  or repeat(3, minmax(2rem, 1fr))  or  repeat(auto-fit, minmax(2rem, 1fr))


---2. For Creating Gaps

- gap:1rem; (Applies to both rows and columns)  
- row-gap: 1rem;
- column-gap:  1rem;
- gap: 1rem 2rem;  (rows,columns)


---3. For Handling Whole Grid Positioning (Aligning the entire grid within its container)  

- `justify-content`:  - `start`, `end`, `center`, `stretch`, `space-between`, `space-around`, `space-evenly`  
- `align-content`:  - `start`, `end`, `center`, `stretch`, `space-between`, `space-around`, `space-evenly`


---4. For Handling Items from the Parent (Aligning grid items as a group)

- `justify-items`:  - `start`, `end`, `center`, `stretch`  

- `align-items`:  - `start`, `end`, `center`, `stretch`


--5. For Defining Named Areas (Optional)

- `grid-template-areas`:  
  'header header'  
  'main main'  
  'footer footer';
 
  - This property is used to assign names to specific sections of the grid, which can be referred to by grid items.


>>Child (Grid Item) Properties

---1. For Row and Column Spanning

- grid-row: 1 / 2 or span 2 (Defines the start and end of the row or how many rows to span)  

- grid-column: 1 / 2 or span 2 (Defines the start and end of the column or how many columns to span)

- grid-area: row-start / col-start / row-end / col-end  ( Shorthand for Grid Positioning  )

---3. For Aligning Individual Grid Items

- justify-self: `start`, `end`, `center`, `stretch` (Aligns the grid item horizontally within its cell)  

- align-self: `start`, `end`, `center`, `stretch` (Aligns the grid item vertically within its cell)

--Key Notes

# Difference Between Grid and Flexbox:  

- Flexbox is for 1-dimensional layouts (either row or column).  
- Grid is for 2-dimensional layouts (rows and columns).  
- Flexbox is item-based, while Grid is container-based.  
- Parent Properties like `justify-content` and `align-content` handle the entire grid.  
- Child Properties like `justify-self` and `align-self` handle individual items.


# 8) What is the color of Box Two? (Look carefully at the code 👁️)

--HTML Code

<body>
  <div class="wrapper">
    <div class="boxOne">
      <div class="boxTwo" id="boxTwO"></div>
    </div>
  </div>
</body>

--CSS Code

.boxOne{
  width: 300px;
  height: 300px;
  background-color: green;
  border: 2px solid yellowgreen;
  position: relative;

}

#boxTwo{
  background-color: red;
}

.boxTwo{
  width: 130px;
  height: 130px;
  border: 2px solid skyblue;
  background-color: skyblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
}

#boxTwo{
  background-color: white;
}

--------Code End

# 9) What is the color of Box Two (It's a diff question) ? (Look carefully at the code 👁️)

--HTML Code

<body>
  <div class="wrapper">
    <div class="boxOne">
      <div class="boxTwo" id="boxTwo"></div>
    </div>
  </div>
</body>

--CSS Code

.boxOne{
  width: 300px;
  height: 300px;
  background-color: green;
  border: 2px solid yellowgreen;
  position: relative;

}

#boxTwo{
  background-color: red;
}

.boxTwo{
  width: 130px;
  height: 130px;
  border: 2px solid skyblue;
  background-color: skyblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
}

#boxTwo{
  background-color: white;
}

--------Code End

# 10) Shorthand Property 

Margin/Padding : 1rem 1rem 1rem 1rem ( Top , Right , Bottom , Left )
Margin/Padding : 1rem 1rem 1rem      ( Top , Left & Right , Bottom )
Margin/Padding : 1rem 1rem           ( Top & Bottom , Left & Right )
Margin/Padding : 1rem                ( Apply on All Direction      )


# 11) What is CSS preprocessor ?

In simple language, we can say that CSS preprocessors help us write CSS in a better and more flexible way. 
CSS preprocessors add features that aren't available in regular CSS. After writing the preprocessor code, it gets compiled
(converted) into standard CSS.

Top CSS Preprocessor :

1.SCSS/SASS (SASS for CSS and SCSS for CSS3)
2.LESS
3.Stylus

Features of CSS Preprocessor :

- Variables: Store reusable values like colors and fonts, we can use variable in normal css but However, 
  CSS preprocessors (like Sass) allow you to define variables with more advanced feature manner.
- Nesting: Write CSS in a way that visually mirrors the HTML structure.
- Mathematical Operations: Perform calculations, useful in responsive design.
- Mixins : A mixin is a reusable block of CSS code 
- Functions : Functions allow you to perform operations, transformations, or calculations on CSS values and return the result.


# 12)What is border size border box ?

When you use `box-sizing: border-box` in CSS, adding padding or borders won’t change the actual height and  width of an element. The total size remains as you set it (e.g., 500px height and 500px width).  

Without `box-sizing: border-box` padding and borders will increase the total height and width, making the element larger than what you initially set.  

By default, `box-sizing` is set to `content-box`.

--box-sizing:border-box; --We have to use this
--box-sizing:content-box;(By default)


# 13)About Margin collapsing ?

In simple words, margin collapsing is a behavior in CSS where the vertical margins of two elements "combine" or 
"merge" into one margin instead of adding up. This happens with block-level elements (like div, p, etc.) and 
only for vertical margins (top and bottom), not horizontal margins.

--When Does Margin Collapsing Happen? 🕵️‍♀️

1. Adjacent Elements (Sibling Elements) 
   Margins of two sibling elements that touch each other vertically will collapse.  
   - Example:  
     
     <div class="box1"></div>
     <div class="box2"></div>

     If `.box1` has `margin-bottom: 20px` and `.box2` has `margin-top: 30px`, only 30px margin will be applied 
     between them.

2. Parent and First/Last Child 
   Margins of a parent element and its first or last child can collapse if there's no padding, border, 
   or content between them.

   - Example:  

     <div class="parent">
         <div class="child"></div>
     </div>
    
     If `.child` has `margin-top: 20px`, it push the `.parent` , as the margins collapse.

3. Empty Elements*
   If a block-level element has no content, no padding, and no border, its top and bottom margins may 
   collapse into one.

-- Why Does CSS Do This? 😅  

Margin collapsing is a CSS feature designed to avoid unnecessary extra space between elements. 
It simplifies layout rendering by not stacking up margins.


-- Key Points to Remember:

1. Margin collapsing only happens for vertical margins (top and bottom) and for block level element.  
2. The larger margin wins, and the smaller one disappears.  
3. Horizontal margins never collapse.


-- Example to Visualize:

<style>
  .box1 {
    background: lightblue;
    height: 50px;
    margin-bottom: 20px;
  }
  .box2 {
    background: lightgreen;
    height: 50px;
    margin-top: 30px;
  }
</style>

<div class="box1"></div>
<div class="box2"></div>

What happens ?
- Instead of 50px (20px + 30px) spacing between the boxes, you’ll only see 30px.


>Solutions to Margin Collapsing

1. Add Padding  
   - Add padding to the parent element nearest element.  
   - Padding creates a "buffer" that prevents margins from collapsing.  
   ```css
   .parent {
       padding-top: 10px; Prevents collapsing 
      }

   
   2. Add Borders  
      - Even a transparent border will stop the collapse.  
      ```css
      .parent {
          border: 1px solid transparent; Stops margin collapsing 
      }

   
   3. Use Overflow Property  
      - Set `overflow` to `hidden`, `auto`, or `scroll` on the parent element to contain the child margins.  
      ```css
      .parent {
          overflow: hidden; Stops margin collapse 
      }

   
   4. Use Display Properties  
      - Change the display type of the parent to `inline-block`, `flex`, or `grid`.  
      - These properties naturally prevent margin collapsing.  
      ```css
      .parent {
          display: flex;  Flexbox stops collapsing 
      }
  
   Summary:  
   The most common and practical methods are padding and overflow: hidden. These are widely used in the 
   industry to handle collapsing margins effectively. Keep it clean and efficient.


# 14)What is Pseudo Elements ?

With the help of pseudo-elements, we can use CSS to style specific parts of an element or add extra 
content without modifying the HTML or using JavaScript.

--syntax : 

selector::pseudo-element {
  property: value;
}

Some Examples of Pseudo-elements 

1. `::first-letter`**: Styles the first letter of a block of text.  
2. `::selection`**: Styles the part of text selected by the user.  
3. `::before`**: Adds content before an element's content.  
4. `::after`**: Adds content after an element's content.  
5. `::marker`**: is used to style the markers of list items in ordered (<ol>) or unordered (<ul>) 
lists, such as bullets or numbers.

# 15)Tell me what is colors codes and how to use them (How to give colors in css)?

>1. Named Colors :

Normal colors names , CSS supports 140 predefined color names, such as:  
- `red`  
- `blue`  
- `green`  
- `black`  
- `white` 

--Example:  

color: red;


>2)RGB (red,blue,green)

In CSS colors are primarily defined using the RGB color model, which stands for Red, Green, and Blue. These three 
primary colors combine in various intensities (from 0 to 255) to create a wide range of colors for use in digital 
designs.

CSS uses RGB because it's suited for screens, which display colors by emitting light. By adjusting the intensity 
of each color channel (R, G, B), you can form millions of colors, making RGB perfect for digital environments.

-- Syntax:

rgba(red, green, blue)

--Examples :

rgb(255, 0, 0): Pure red (maximum red, no green or blue).
rgb(0, 255, 0): Pure green.
rgb(0, 0, 255): Pure blue.
rgb(255, 255, 255): White (all colors at full intensity).
rgb(0, 0, 0): Black (no light emitted from any channel).


>3)RGBA (red,blue,green,alpha)

RGBA in CSS is an extension of the RGB color model. It adds an alpha channel to specify the color's 
opacity (transparency). While RGB focuses solely on the intensity of red, green, and blue, RGBA 
lets you control how transparent  color is.

-- Syntax:

rgba(red, green, blue, alpha)

--Examples :

background-color: rgba(255, 0, 0, 0.5);  A semi-transparent red 


- `red`, `green`, and `blue`: These define the intensity of the primary colors, ranging from 0 to 255.
- `alpha`: Defines the transparency level, ranging from 0 (completely transparent) to 1 (completely opaque).



> 4). Hexadecimal (Hex) Codes

Hex codes are 6-character values representing the intensities of red, green, and blue (RGB) in a color
and they start with a hashtag (#).

Hexadecimal codes are a way to define colors in CSS. These codes use a combination of numbers (0–9) and letters (A–F) to 
represent the intensity of the red, green, and blue (RGB) components of a color. A hexadecimal code consists of 6 characters 
grouped into three pairs: the first two represent red, the next two represent green, and the last two represent blue. 
You can use only numbers, only letters, or a mix of both in these pairs.

-- Examples:  

  - `#FF0000` → Red  
  - `#00FF00` → Green  
  - `#0000FF` → Blue  
  - `#000` → Black (short form)  
  - #05abcd
  - #cdabcd
  - #FF5733
  - #000000

>5. HSL Colors (Hue, Saturation, Lightness)

HSL specifies colors based on hue (0-360°), saturation (0-100%), and lightness (0-100%).  
 
--Syntax

hsl(hue/colors, saturation, lightness);

-- Example:  

color: hsl(2, 100%, 50%);  A shade of orange 
color: hsl(240, 100%, 50%);  Bright blue 
color: hsl(0, 100%, 50%);    Bright red 
color: hsl(90, 100%, 50%);

>6. HSLA Colors (with Transparency)

HSLA adds an alpha channel for transparency, just like `rgba()`.  
- Format: `hsla(hue, saturation, lightness, alpha)`

-- Example:  

color: hsla(30, 100%, 50%, 0.5);  50% transparent orange 


>7. CSS Custom Properties (Variables)

Colors can be defined as variables for reuse.  

-- Example:  

:root {
  --main-color: #FF5733;
}
p {
  color: var(--main-color);
}


# 16) What is CSS combinator ?

With the help of CSS combinators, we can style elements in a more precise and efficient way.


There are four main types:

-- Note 🤚 : 

- Space ( ) and > → Child combinators (parent-child relationships).
- ~ and + → Sibling combinators (relationships between elements on the same level).

---1. Descendant Combinator (Space)

- What it does: Styles all elements inside another element, no matter how deeply nested.  
- Example: `div p`  
  - This means: Style all `<p>` tags that are inside a `<div>`.  

 
```html

<div class="container">

  <p>Styled paragraph</p> <!-- This will be styled -->

  <div>
    <p>Nested styled paragraph</p> <!-- This will also be styled -->
  </div>

<p>Styled paragraph</p> <!-- This will be styled -->

</div>

```  
  
```css
div p {
  color: blue;
}
```  
- Result: All `<p>` tags inside `<div>` will have blue text.  


--2. Child Combinator (`>`)

- What it does: Styles only the direct children of an element.  
- Example: `div > p`  
  - This means: Style only `<p>` tags that are directly inside a `<div>`.  


```html

<div class="container">

  <p>Direct child paragraph</p> <!-- This will be styled -->

  <div>
    <p>Nested paragraph</p> <!-- This will NOT be styled -->
  </div>

    <p>Direct child paragraph</p> <!-- This will be styled -->

</div>

```  

```css
div > p {
  color: green;
}
```  
- Result: Only the first `<p>` inside the `<div>` will have green text.  


-- 3. General Sibling Combinator (`~`)

- What it does: Styles all siblings (on the same level) after a specific element.  
- Example: `h1 ~ p`  
  - This means: Style all `<p>` tags that come after an `<h1>` in the same parent.  


```html

<h1>Main Heading</h1>
<p>First paragraph</p> <!-- This will be styled -->
<p>Second paragraph</p> <!-- This will also be styled -->
<h1>Another Heading</h1>
 <div>
    <p>Third paragraph</p> <!-- NOT styled because it is not a sibling of the first <h1> -->  
  </div>

```  

```css

h1 ~ p {
  color: red;
}

```  
- Result: All `<p>` tags that are siblings after an `<h1>` will have red text.  


---4. Adjacent Sibling Combinator (`+`)

- What it does: Styles only the next immediate sibling after a specific element.  
- Example: `h1 + p`  
  - This means: Style only the first `<p>` tag that comes right after an `<h1>`.  

```html

<h1>Main Heading</h1>
<p>First paragraph</p> <!-- This will be styled -->
<p>Second paragraph</p> <!-- This will NOT be styled -->

```  

```css
h1 + p {
  font-weight: bold;
}
```  
- Result: Only the first `<p>` tag after `<h1>` will be bold.  


--  Key Difference Between `~` and `+`:  

- `~` (General Sibling): Styles all siblings after a specific element.  
- `+` (Adjacent Sibling): Styles only the first sibling immediately following an element.  


# 17)Box shadow

--Syntax :

box-shadow: offset-x offset-y blur-radius spread-radius color;

Examples :

Simple : box-shadow: 10px 10px 5px gray;
Spread Effect : box-shadow: 10px 10px 5px 2px rgba(0, 0, 0, 0.5);
Inset Shadow (Adds a shadow inside the element. Use the inset keyword.) : box-shadow: inset 5px 5px 10px black;


# 18) What is css variable and how to use them ?

 CSS variables (also called custom properties) are a way to store reusable values in CSS, making your code more efficient and 
 easier to maintain. They are particularly useful when you want to define values like colors, fonts, or spacing that you might
 use in multiple places.

 CSS variables allow you to declare a value once and use it throughout your CSS. They are defined 
 using -- followed by a name (e.g., --main-color).

--Syntax

Defining a variable: Use the --variable-name syntax inside a :root or a selector.

:root {
    --main-color: #3498db;
    --font-size: 16px;
}

:root is a pseudo-class that represents the document's root element. Variables defined here are global.

--useCases 

h1 {
   color: var(--main-color);
   font-size: var(--font-size);
}
   
Why Use CSS Variables?

Reusability: Change a value in one place, and it updates everywhere.
Maintainability: Your CSS is easier to read and modify.
Theming: Easily implement themes by switching variable values.

# 19) Tell me which is the better approach in developemt and Why ?
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

, ::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

Ans : second approach because:  

1. * (Universal Selector):
🔹 This applies styles to all elements on the page.
🔹 It removes default margins & paddings and ensures box-sizing: border-box applies globally.
🔹 However, it does not affect ::before and ::after pseudo-elements.

2.::before and ::after :
🔹 This applies styles to all elements AND their pseudo-elements (::before and ::after).
🔹 It ensures everything, including pseudo-elements, follows the same box-sizing model.
🔹 More consistent layout handling, especially for UI elements that use ::before and ::after (buttons, tooltips, animations, etc.).

1. It applies styles to both elements and pseudo-elements (`::before`, `::after`), ensuring consistency across all parts of your design.  
2. Pseudo-elements sometimes have default styles in browsers that can cause unexpected layout issues. The second approach resets those styles too.  
3. It’s the standard practice used by industry experts and frameworks, making your code more professional and future-proof. 

In short: The second approach avoids hidden bugs caused by pseudo-elements and ensures your layout is consistent everywhere.

# 20) Image (img) is a inline element so why we can able to set widht and height of <img> tag (We can set height & widht on inline element) ?

The `<img>` tag is an inline element, but since it contains external content (the image), 
the browser allows us to set its `height` and `width`. This is because the `<img>` tag is specifically 
designed to handle images, making it a special inline element that supports dimensions for proper display.

# 21) Float and Clear 

--Before flex box and grid we was using Float and Clear 

Float:
The float property is used to position elements to the left or right within their container, allowing text or 
other elements to wrap around them.

Clear:
The clear property is used to stop elements from wrapping around floated elements. It ensures the element starts
below the floated elements.

In simple language:
When you use float on an element (like an image), other elements (like text) can move around it and The clear 
property tells the browser:"Stop wrapping content around the floated element and start below it."


# 22)About CSS untis 

---CSS units Video Link (Lang : English) : https://youtu.be/fzZTvLmmTzM?si=ez-WddNN-JNDefco  [🤚 Watch this video first  ]


>>>There are a total of 30+ CSS units, but we use 99% of the time: em, rem, %, vw, vh, ch, and px.

--1. px (Pixels)
- Key point: Doesn’t scale with screen size or parent elements,not recommended at all.
- px (pixels) is considered an absolute unit in CSS because it represents a fixed value,it does not change based on parent elements or the root font size.
- 1 px = one dot on the screen.  

--2. em  
- Relative to the "font size" of its nearest parent element.   
- Usage: For scalable designs, padding, margins, etc.  

--3. rem (Root em) 
- Relative to the root font size (html root element). Most modern browsers typically 
  have a default root font size of 16px.
- Usage: most commonly used For scalable designs and sizing.

--4. vw (Viewport Width)
- It's relative to directly to main screen (Viewport Width). 
- `1vw` = 1% of the screen’s width.  
- Usage: For responsive designs like full-width banners or layouts.  

--5. vh (Viewport Height) 
- It's relative to directly to main screen (Viewport Height).    
- `1vh` = 1% of the screen’s height.  
- Usage: For elements like fullscreen sections.  

--6. % (Percentage)  
- Relative to the size of the nearest parent element.    

--7. ch (Character Width) 
- Based on the width of the character `0` in the current font.  
- `10ch` = width of 10 `0` characters.  
- 45ch to 75ch: Ideal for readable paragraphs.
- Usage: Best for setting widths for text-heavy elements like inputs or text blocks. 
- 🤚 Even if you don’t understand everything, no worries! Just remember to use ch for setting 
paragraph widths, and keep the value between 45-75 for optimal readability that's it's.

Example : 
p {
  width: 60ch;  ---->> Creates a text container that fits approximately 60 characters in a line 
  margin: 0 auto; -----> Centers the paragraph 
}

# 23)Calculated font size for the `<li>` element ? Assume the root font size (default for HTML) is `16px`. 

body { 
  font-size: 1.5em;
}
.container {
  font-size: 2em;
}
ul {
  font-size: 1em;
}
li {
  font-size: 2em;
}


# 24)About media query 

>Watch video direcly on youtube about media query atleast watch minimum Two videos

English : https://youtu.be/K24lUqcT0Ms?si=eL4f53v2J8LFVknv
Hindi : https://youtu.be/eHye3PxH4jU?si=qkRLpAbZ69x8NfEe

>>Tips for Using Media Querie

 1. Start Mobile-First: Define base styles for smaller screens, then override for larger screens.
 2. Use Relative Units: Use `em` or `rem` for breakpoints to maintain scalability.
 3. Avoid Too Many Breakpoints: Stick to essential breakpoints for maintainability.
 4. Test Responsiveness: Always test your website on multiple devices and orientations.


>> Media Query Breakpoints Template

---Custom CSS Breakpoints

Extra Small Devices (Mobile) 

@media (max-width: 480px) {
    Your styles 
 }
 

Small Devices (Tablets) 

 @media (min-width: 481px) and (max-width: 768px) {
    Your styles 
 }
 

Medium Devices (Laptops) 

 @media (min-width: 769px) and (max-width: 1024px) {
    Your styles 
 }
 
Large Devices (Desktops) 

 @media (min-width: 1025px) and (max-width: 1200px) {
    Your styles 
 }
 
Extra Large Devices (Widescreens) 

 @media (min-width: 1201px) {
    Your styles 
 }
 
 
--- Tailwind CSS Breakpoints

 In Tailwind CSS, you don't write `@media` queries manually. Instead, use these classes:
 
 | Breakpoint        | Prefix            | Pixels               |
 |-------------------|-------------------|--------------------- |
 | Extra Small (xs)  | `N/A`             | Default/mobile-first |
 | Small (sm)        | `sm:`             | `640px`              |
 | Medium (md)       | `md:`             | `768px`              |
 | Large (lg)        | `lg:`             | `1024px`             |
 | Extra Large (xl)  | `xl:`             | `1280px`             |
 | 2XL               | `2xl:`            | `1536px`             |
 
 Example:

 <div class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
   Responsive text!
 </div>
 

#25)About Animation and Transition.

--Transition

Transition is like a smooth change from one state to another. It works when something happens 
(like hover, click, or focus), A transition needs an action (like hover or click) to trigger the change.

--Rules/Syntax 

-transition-property : Specifies the name of the CSS property the transition effect is for.

-transition-delay : Specifies a delay (in seconds) for the transition effect.

-transition-duration : Specifies how many seconds or milliseconds a transition effect takes to complete. (e.g., 2s or 500ms).

-transition-timing-function : Specifies the speed curve of the transition effect.
  -ease : slow start, then fast, then end slowly (this is default)
  -linear : same speed from start to end
  -ease-in : effect with a slow start
  -ease-in-out :  effect with a slow start and end
  -cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

-transition : A shorthand property for setting the four transition properties into a single property.
  -(e.g., transition: all 0.3s ease).

>Syntax 🤚: transition: property duration timing-function delay;

--About "all"

In simple language, when we use "all," all the properties will be applied, and we don't need to specify 
the name of a particular property.  

---Example 1:

div {
  transition-property: width;
  transition-delay: 1s;
  transition-duration: 2s;
  transition-timing-function: linear;

  transition: property duration delay timing-function; //Shorthand property
  transition :width 1s 2s linear
}

--Example 2 :

 - Second Example (individual properties with shorthand): You get the same result but with more control 
 over which properties transition, while still using shorthand for efficiency. 
 
 .button {
   display: inline-block;
   padding: 10px 20px;
   font-size: 16px;
   color: white;
   background-color: #3498db;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; // Shorthand for each property 
 }
 
 .button:hover {
   background-color: #2980b9;  // Change background color 
   transform: translateY(-5px); // Move the button 
   box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); // Add shadow 
 }

---Example 3:

- Third Example (`all`): Applies the transition to all properties that change, and it's much simpler.

.button {
   display: inline-block;
   padding: 10px 20px;
   font-size: 16px;
   color: white;
   background-color: #3498db;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: all 0.3s ease;  // Transition for all changing properties with shorthand 
 }
 
 .button:hover {
   background-color: #2980b9;  // Change background color 
   transform: translateY(-5px); // Move the button 
   box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); // Add shadow 
 }


--Animation 

Animation" is about creating movement or changes that happen automatically (without any trigger). 
It keeps running for a specified time or loops continuously.

>Animation Syntax : animation: animationName duration timing-function delay(optional) iteration-count;


--There are two main ways to define animations in CSS:

1. Using the `from` and `to` syntax: This is the simplest form of keyframes where you specify the start (`from`) and end (`to`) states.

 
   @keyframes animation-name {
     from {
        starting styles 
      }
      to {
        ending styles 
      }
    }
    
 
 2. Using percentage-based keyframes:This allows you to define more granular control over the animation's progression by specifying multiple points along the way.
 
    @keyframes animation-name {
      0% {
         start styles 
      }
      50% {
        middle styles 
      }
      100% {
         end styles 
      }
    }

-- Example 1: Grow from Small to Full Size

This animation will make the element smoothly grow from a small size to a full size, while also rounding 
its corners during the process.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grow from Small to Full Size</title>
  <style>
    .grow {
      width: 100px;
      height: 100px;
      background-color: #e74c3c;
      animation: growAnimation 2s ease-in-out forwards infinite;    }

     @keyframes growAnimation {
      from {
        transform: scale(0);  Start from small size 
        border-radius: 0;  Start with no border-radius 
      }
      to {
        transform: scale(1); Grow to normal size 
        border-radius: 5rem;  Add rounded corners 
      }
    }
  </style>
</head>
<body>
  <div class="grow"></div>
</body>
</html>


--Explanation:

1.animation: growAnimation 2s ease-in-out forwards infinite;: This applies the animation, makes it smooth with ease-in-out, and loops infinitely.
2.border-radius: 0 to 5rem: This makes the element gradually become more rounded as it grows.

 
--Example 2:Rotating an Element Using Percentage-based Keyframes
 
 In this example, we rotate an element in a full circle using percentage-based keyframes.

 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Rotation Animation</title>
   <style>
     .rotate {
       width: 100px;
       height: 100px;
       background-color: #3498db;
       animation: rotateAnimation 4s linear infinite;
     }
 
     @keyframes rotateAnimation {
       0% {
         transform: rotate(0deg);  Initial state 
       }
       50% {
         transform: rotate(180deg);  Half rotation 
       }
       100% {
         transform: rotate(360deg);  Full rotation 
       }
     }
   </style>
 </head>
 <body>
   <div class="rotate"></div>
 </body>
 </html>

 
 Explanation:
 - The `@keyframes` uses percentages to define the rotation at different stages.
   - `0%` starts the rotation at `0deg` (no rotation).
   - `50%` rotates it halfway (to `180deg`).
   - `100%` completes the full rotation (`360deg`).
 - The animation lasts for `4 seconds` and runs infinitely with a smooth continuous rotation.


 
> Key Points:
- `from` and `to`: Simplifies animation with just two states (start and end).
- Percentage-based: Allows more detailed control of the animation's progress by specifying intermediate points like `50%`, `75%`, etc.
 

# 26) The most awaited question: How to center a div 😂 😂 ? 

1. Using Flexbox (Recommended for modern browsers)
<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div>Centered Content</div>
</div>

2. Using Grid (Alternative method)
<div style="display: grid; place-items: center; height: 100vh;">
    <div>Centered Content</div>
</div>

3. Using Margin Auto (for horizontal centering)
<div style="width: 200px; margin: 0 auto;">
    Centered Content
</div>

4. Using Absolute Positioning
<div style="position: relative; height: 100vh;">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"> --- 🤚🖖 We are applying on child not parent so we if need to center the box acc to parent so we have to use transform: translate(-50%, -50%); without that it will not center acc to parent ( Please do it Pratically 🧑‍💻)
        Centered Content
    </div>
</div>

>>In a real-world scenario, Flexbox or Grid is generally preferred because of their simplicity and flexibility.

#27) What is Inheritance in css ?

Inheritance in CSS means that some CSS properties applied to a parent element are automatically passed (inherited) to its child elements.

In simple words —
if you style a parent element with certain properties, the children “inherit” those styles unless you override them.

<body>
  <p>This is a <span>paragraph</span>.</p>
</body>

body {
  color: blue;
  font-family: Arial;
}

p {
  font-size: 16px;
}

✅ The <span> inside the <p> will also be blue and use the Arial font,
even though we didn’t write any CSS for <span>.

That’s because color and font-family are inheritable properties.

⚙️ Properties That Are Inheritable

Not all CSS properties are inherited automatically.Here are some common ones that are:

-color
-font-family, font-size, font-style, font-weight
-line-height
-visibility
-cursor

🚫 Properties That Are Not Inherited Automatically

Layout and box-related properties such as padding, margin, border, and background are not inherited because they directly affect the box model and could break the layout if passed to child elements.

*/
