/*
# 👁️ Most Asked Questions in HTML for Freshers and Entry-Level Jobs 🧑‍💻  

## Note 🤚  

> This is for Interview Preparation purposes, not for learning HTML from scratch. Make sure you first learn HTML.  

> I have covered the Most Frequently asked HTML questions and Concepts for Entry-Level and Fresher job interviews. Since HTML is only a small part of most interviews, I’ve focused on the Most Important topics and Question. This should be sufficient for entry-level roles and for job interviews.  

-- 💻 Total Questions : 18

# 1) How to apply comment in html ?
Ans :

Syntax: <!-- Your comment goes here -->
Anything inside the `<!--    -->` tags is treated as a comment, meaning it won't be rendered on the webpage.>


# 2) What is the different between HTML(Hyper Text Markup language) and HTM5 (HTM5 is the Latest Version of HTML)?
Ans :

 1)
 HTML: Uses a long and complex doctype declaration. : <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
 HTML5: A simplified, shorter doctype declaration. : <!DOCTYPE html>
 2)
 HTML: Does not have dedicated semantic tags, leading to overuse of div tags.
 HTML5: Introduced semantic elements like <header>, <footer>, <section>, <article>, etc which improve code
 readability and SEO.
 3)
 HTML: Requires third-party plugins like Flash for multimedia (audio, video).
 HTML5: Natively supports multimedia with the <audio> and <video> tags.
 4) 
 HTML: Limited input types (text, password, etc.).
 HTML5: New input types like date, email, number, range, etc., making form validation easier.
 HTML5 introduced new input types (like tel, email, date, etc.) that are optimized for mobile devices. 
 For example, the tel input type brings up the numeric keypad on mobile devices, making it easier for users to enter phone numbers.
 <input type="tel" placeholder="Enter your phone number">

--List of HTML5 Input Types Introduced in HTML5 (Not Present in Previous Versions):

1. `<input type="email">`
2. `<input type="url">`
3. `<input type="tel">`
4. `<input type="number">`
5. `<input type="range">`
6. `<input type="search">`
7. `<input type="time">`
8. `<input type="datetime-local">`
9. `<input type="month">`
10. `<input type="week">`
11. `<input type="date">`
12. `<input type="color">`

 5)
 Mobile Optimization in HTML5 
 Html:HTML was not designed with the increasing use of mobile phones in mind, leading
 to poor experiences on mobile devices (like having to zoom in to read text).  
 HTML5:HTML5 introduced elements and attributes (like <meta> tags) that made it easier to create responsive layouts. 
Responsive design ensures that websites adapt to different screen sizes and orientations.

<meta name="viewport" content="width=device-width, initial-scale=1.0"> -- 🤚This 

--Controls the layout of the page on mobile browsers. It tells the browser how to scale the page, making it responsive.

1. Setting the Width: It makes the page’s width match the device’s screen width, so the site fits properly on any screen size.
  
2. Adjusting Zoom Level: The `initial-scale=1.0` part ensures that the page is not zoomed in or out on mobile, making it easier to read without manually resizing.


# 3)What is the diffrent between HTML and XHTML ?
Ans:

XHTML stands for Extensible Hypertext Markup Language. It’s a combination of HTML and XML (Extensible Markup Language). 
It was developed to make HTML more strict and well-structured, like XML. It enforces strict rules, like:

- Tags must always be properly closed (e.g., `<br />` instead of `<br>`).
- Elements must be written in lowercase.
- Attributes must be enclosed in double quotes (e.g., `type="text"`).
- Built-in support for audio, video in html5, No built-in multimedia support in xhtml, requires plugins like Flash

-- Differences Between HTML5 and XHTML:

| Feature                  | HTML5                                         | XHTML                                         |
|--------------------------|---------------------------------------------------|---------------------------------------------------|
| Syntax Rules          | More flexible, you can skip closing some tags    | Very strict, all tags must be closed properly     |
| Case Sensitivity      | Tag names are not case-sensitive (`<DIV>` = `<div>`) | Tag names must be in lowercase (`<div>`, not `<DIV>`) |
| Error Handling        | More forgiving, browsers try to fix your errors  | Very strict, browsers won't display pages with errors |
| Doctype Declaration   | Simple and short: `<!DOCTYPE html>`              | Complex and longer: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">` |
| Multimedia Support    | Built-in support for audio, video, and canvas    | No built-in multimedia support, requires plugins like Flash. |
| Browser Compatibility | Designed to be compatible with modern browsers and mobile devices | Limited Browser Support older browsers.     |

XHTML was developed before HTML5. XHTML, short for Extensible Hypertext Markup Language, was introduced in 2000 as an 
effort to make HTML more strict and compatible with XML and HTML5 came later, officially introduced in 2014.

# 4)What is the role of DOCTYPE in HTML and What if we remove the <!DOCTYPE html> from the HTML ?
Ans:

The `DOCTYPE` declaration is used to tell the browser which version of HTML you are using in your document. 
It is important because it helps the browser render the page acc to current version of HTML.

In simpler terms, the `DOCTYPE` acts like a signal to the browser to handle your HTML code in a proper 
and consistent way.

HTML5 Simplified: The DOCTYPE declaration for HTML5 is very simple: 
   ```html
   <!DOCTYPE html>
   ```
   This one line tells the browser you're using HTML5, and it's backward compatible with older HTML versions, so you don’t have to 
   worry much about browser inconsistencies.

--Other version example , just for the Knowledge  :  

XHTML 1.0 Strict: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
XHTML 1.0 Transitional:<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
HTML 4.01 Frameset:<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
HTML5 (Simple & Clean):<!DOCTYPE html>

>What if we remove it ?

If we remove <!DOCTYPE html> from an HTML document, the browser can still render the webpage. However, without the doctype, the browser 
will switch to "Quirks mode", where it uses outdated rendering rules from older versions of HTML. This can cause several issues:

1. CSS and JavaScript may not work properly: Modern CSS and JavaScript features might behave unexpectedly or fail to work.   
2. SEO-related issues: Search engines may not interpret the page correctly, leading to poor rankings.   
3. Cross-browser compatibility issues: The page may render differently across browsers, causing inconsistencies.   

# 5)What is the Differences between head and body in html and where to place JS link reference ?
Ans:

    The<head> element is where you place meta-information (information about the document) are present.
    For example, <title>, <meta>, <link>, <script> , <style> are normally kept under head element.
       
    The <body> element is where you place the actual
    content of your HTML web page. For example,
    <div>, <h1>, <p>, <img>, <a> are normally kept
    under body element. 

>Two way to add JS Link 

1. In the `<head>` section (before the closing `</head>` tag)
   - This ensures that the script is loaded before the page content is rendered. However, this can delay the display of the page, especially if the script is large or slow to load.
   - You can use the `defer` attribute to avoid blocking the page rendering:

    <head>
      <script src="your-script.js" defer></script>
    </head>
     
   - The `defer` attribute ensures that the script is executed after the HTML has been fully parsed.

2. Before the closing `</body>` tag
   - Placing the script here ensures that the HTML is loaded first, so the page content displays before the JavaScript is executed. 
     This is a common practice to prevent blocking the page rendering.
     <body>
       <!-- Your page content -->
       <script src="your-script.js"></script>
     </body>
     
> Where to Place JavaScript in HTML (Industry Practice)

- Place JavaScript Links: Just before the closing `</body>` tag.
  
- Reasons:
  1. Improves Page Load Speed: HTML content loads first, making the page appear faster.
  2. Enhances User Experience: Content is visible and interactive sooner.
  3. Prevents Blocking: Avoids "render-blocking" issues caused by JavaScript in the `<head>`.

- Exception: `async`/`defer`
   - `async`:  When you add the async attribute, the script is downloaded in the background while the rest of the page continues to load. Once the script is fully downloaded, it will execute immediately,potentially before the page is fully loaded.
   - `defer`: The defer attribute also downloads the script in the background, but it waits to execute the script until the entire page has finished loading. This ensures that the script runs after the page content is fully available.

For most cases, placing JavaScript just before `</body>` remains the preferred industry practice.

# 6)What is title tag and it's important?
Ans:

=>For adding title 
  Seo:search engine us the title as the main heading for search results.
  Bookmarks/Favorites: When a user bookmarks or adds a webpage to favorites, the <title> tag is used as the default name.

# 7)What is meta tag and tell me some names ?
Ans:

A meta tag is an HTML element used to provide metadata (information about the webpage) to browsers and search engines. Meta tags 
are placed inside the <head> section of an HTML document and help control how the webpage is displayed.

    <meta charset="UTF-8">`
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A brief description of the webpage.">
    <meta name="keywords" content="HTML, CSS, JavaScript, Web Development">

1. `<meta charset="UTF-8">`
Purpose: Specifies the character encoding for the HTML document. UTF-8 is the most widely used character encoding that supports
almost all characters and symbols from different languages.

Use: Ensures that special characters like "é", "ü", "😊" are displayed correctly.

2. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
Purpose: Controls the layout of the page on mobile browsers. It tells the browser how to scale the page, 
making it responsive.

3. `<meta name="description" content="A brief description of the webpage.">`
Purpose: Provides a short description of the webpage. Search engines like Google use this meta tag to display a summary in search results.
Use: Improves SEO by helping search engines understand what your page is about and can increase click-through rates.

4. `<meta name="keywords" content="HTML, CSS, JavaScript, Web Development">`
Purpose: Lists keywords relevant to the content of the page. Search engines can use these keywords to understand the context of the
page, though it’s less significant in modern SEO.
Use: Provides a way to target specific search terms for SEO purposes (though modern SEO relies less on this).


# 8)What is tags , content and Element in HTML ?
Ans:

                  Opening Tag        Closing Tag  
                     |                   | 
                     |                   | 
                     <p> Interview Happy </p>
                     |  |______________| |           
                     |      Content      |   
                     |                   |
                     |___________________|     
                          HTML Element 
  (A combination of an opening tag, closing tag and content is called an HTML element.)                       
         
# 9) What is block and inline tag and what is div and span tag ?
Ans:

Block tags : Block tags take up the full width of their container by default.
Inline tags only take up as much space as required by their content and do not start on a new line.

Div:
Div a block-level element,it is used for grouping elements. It often acts as a container for other HTML elements. 
Div takes up the full width of its container.

Span:
Span is an inline element, It only occupies as much space as its content requires, making it useful for styling or
manipulating small pieces of content within other elements.

--IMP
We can set the height and width of block elements but we can not set height and width of inline element.

However, if you need to set width and height on an inline element, you can change its display property to
inline-block or block. This allows inline elements to behave like block elements in terms of layout properties.

> Examples of Block Elements

1. `<div>` - Generic container for block content.
2. `<p>` - Paragraph tag.
3. `<header>` - Header section of a page or section.
4. `<footer>` - Footer section of a page or section.
5. `<section>` - Defines a section in a document.
6. `<article>` - Defines self-contained content, like a blog post.
7. `<nav>` - Container for navigation links.
8. `<aside>` - Sidebar content, often for related or supplementary information.
9. `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` - Headings, each with decreasing size.
10. `<ul>` - Unordered list, typically for bullet points.

> Examples of Inline Elements

1. `<span>` - Generic inline container for text.
2. `<a>` - Hyperlink to navigate to other pages or locations.
3. `<strong>` - Makes text bold for emphasis.
4. `<em>` - Italicizes text for emphasis.
5. `<img>` - Embeds an image within the text.
6. `<label>` - Associates labels with form inputs.
7. `<input>` - User input element (e.g., text box, radio button).
8. `<abbr>`(Abbreviation) - An abbreviation is a shortened form of a word or phrase.
--  eg:1.<abbr title="HyperText Markup Language">HTML</abbr>
--     2.<p>The official standards are maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.</p>
9. `<code>` - Displays code snippets inline.
10. `<i>` - Italicizes text (often used for stylistic purposes). 

# 10)What is anchor tag ?
Ans:

With the help of the **anchor (`<a>`) tag, we can create hyperlinks using the `href` attribute, which is placed 
inside the anchor tag to specify the link’s destination. If we want to open the link in a new tab, we can also use 
the `target attribute with the value `"_blank"`, which is also placed inside the anchor tag.

Example:

<a href="https://www.example.com" target="_blank">Visit Example in New Tab</a>


# 11)About em , hr and img tag
Ans:

- `<em>`(emphasis): Makes text italic to show it’s important.

 -- <p>This is <em>very important</em> information.</p>
 
- hr>`: Adds a horizontal line to separate sections of content.
--
  <p>First Section</p>
  <hr>
  <p>Second Section</p>
--
- `<img>`: with the help if img we can display an image use src attribue and and use alt attribute we can display the image 
description, which appears if the image fails to load.
 
 -- <img src="image.jpg" alt="A description of the image">

# 12)What is semantic tags ?
Ans:

A semantic element clearly describes its meaning to both the Browser and the Developers.
- These tags help organize the structure of a webpage.
- Make code easier to read improve accessibility for screen readers. 
- Play an important role in SEO also.

 Semantic Tags Examples :

- `<header>`: Defines the top section of a webpage, typically where navigation links, logos, or the page title are placed.

- `<footer>`: Marks the bottom part of a webpage, usually containing copyright information, links, or contact details.

- `<article>`: Wraps around independent content that can stand alone, like blog posts, news stories, or articles. Each `<article>` is a complete piece of content.

- `<section>`: Groups related content into sections, like chapters or different topics on a page, helping to organize the layout.

- `<nav>`: Contains navigation links for the website, such as menus, so users can easily find and move to different pages.

- `<aside>`: Holds side content that’s related but not essential to the main content, like ads, links, or extra info that supports the main text.

- `<main>`: Represents the primary content of the page that is unique to that page.It doesn’t include repeated parts like headers, footers, or sidebars.

- `<address>`: Used for providing contact information, like an address, phone number, or email, often about the author or site owner.

- `<details>`: Creates a collapsible section where users can click to show or hide additional information, like FAQs or extra details.

# 13)Headin Tag ?
Ans:

There are a total of 6 heading tags, from <h1> to <h6>. <h1> has the largest size, followed by <h2>, which is 
slightly smaller, and then <h3>, <h4>, <h5>, and finally <h6>, which has the smallest size. These tags are used 
to define headings on a page, with the main heading usually placed in <h1>. Proper use of heading tags also has 
an impact on SEO, as search engines give more importance to the content in <h1> for understanding the page’s main 
topic.
 
# 14)Empty and Self closing tags ?
Ans:

In HTML5, empty tags and self-closing tags are the same and can simply be written without a closing slash.

<img src="image.jpg" alt="An image">
<br>
<hr>
<meta charset="UTF-8">
<link> - Links to external resources, like stylesheets : <link rel="stylesheet" href="styles.css">
<source> - Specifies media resources for <audio> or <video>.
--
<video controls>
    <source src="video.mp4" type="video/mp4">
</video>
--

In XML (and XHTML), tags must follow stricter rules, so empty tags need a self-closing format with a slash 
at the end:

<img src="image.jpg" alt="An image" />
<br />
<hr />

So, while they serve the same purpose, XML and XHTML require the closing slash to meet syntax rules,
while HTML5 does not.

# 15)Absolute and Relative URL.
Ans:

--Absolute URL:
A complete URL that includes the full path, starting with "http://" or "https://",
Best use case for external links, ensuring that they work from any location or directory on the site.  

--Relative URL:
A URL that is relative to the current page or directory. It doesn't start with "http://" or "https://";
Ideal for internal links within the same website, making it easier to move files
or folders without updating URLs. 

# 16)Base Element .
Ans:

The `<base>` element specifies the base URL for all relative URLs on a page, usually placed within the 
`<head>`. When used, it sets a starting point for links and resources, so all relative URLs will build off this base.

- Example:

  <head>
      <base href="https://www.example.com/folder/">
  </head>

  - If you add a link like `<a href="page2.html">Page 2</a>`,....it will be 
  resolved to `https://www.example.com/folder/page2.html`.

Note 🤚 :

The <base> element works only with relative URLs. It sets the base URL to which relative paths will be appended. 
For example:
<base href="https://example.com/">
<a href="page1.html">Page 1</a>

=>The link will resolve to https://example.com/page1.html.  

In Absolute URLs already include the full path (e.g., https://example.com/page1.html) and do not depend on the <base> tag. 
>>Therefore, the <base> element has no effect on absolute URLs.
  
# 17)Lists in HTML.
Ans:

1.Ordered List (`<ol>`)*
   - Displays items in a numbered order.
   <ol>
       <li>Step 1</li>
       <li>Step 2</li>
       <li>Step 3</li>
   </ol>

2. Unordered List (`<ul>`)
   - Displays items with bullets, without specific order.

   <ul>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
   </ul>

3. Description List (`<dl>`)
   - Pairs terms with their definitions.
   - `<dl>` stands for Description List
   - `<dt>` stands for Description Term
   - `<dd>` stands for Description Definition

   <dl>
       <dt>HTML</dt>
       <dd>Hypertext Markup Language</dd>
       <dt>CSS</dt>
       <dd>Cascading Style Sheets</dd>
   </dl>

# 18) About Table
Ans:

>Crisp Notes on Table (How to create table)

1. `<table>`: - Defines a table structure.

2. `<thead>`, `<tbody>`, `<tfoot>`:  - Groups the header, body, and footer content in the table.

3. `<caption>`: - Adds a title to the table.

3. `<tr>`: - Defines a row in the table.

4. `<th>`: - Defines a header cell (bold and centered).

4. `<td>`: - Defines a regular data cell.

5. `rowspan`: - Allows a cell to span across multiple rows.

6. `colspan`: - Allows a cell to span across multiple columns.

Note 🤚: you cannot use rowspan and colspan in internal CSS (or any CSS). These attributes are part of HTML and are used directly
in the markup within table elements (<td> or <th>). CSS is used for styling elements, whereas rowspan and colspan are structural
attributes that define how table cells span across rows or columns.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Grades Table</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table, th, td {
      border: 1px solid black;
    }
    th, td {
      padding: 8px;
      text-align: center;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>

  <h2>Student Grades Table (Class 10 - 2024)</h2>
  
  <table>
    <caption>Class 10 - 2024</caption>
    <thead>
      <tr>
        <th rowspan="2">Name</th>
        <th colspan="2">Subjects</th>
      </tr>
      <tr>
        <th>Math</th>
        <th>Science</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Prany</td>
        <td>90</td>
        <td>85</td>
      </tr>
      <tr>
        <td>Sujal</td>
        <td>78</td>
        <td>88</td>
      </tr>
      <tr>
        <td>Rahul</td> <!-- Indian student's name -->
        <td>85</td>
        <td>89</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total Students: 3</td>
      </tr>
    </tfoot>
  </table>

</body>
</html>

*/
