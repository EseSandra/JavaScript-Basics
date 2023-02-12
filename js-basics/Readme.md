Question1 • What runs JavaScript outside the browser? 
 Answer: Node or nodejs

Question2 • Name 5 things Javascript can do?
 Answer:
  1.Add interactive behavior to web pages e.g •Show or hide more information with the click of a button •Change the color of a button when the mouse hovers over it •Slide through a carousel of images on the homepage •Zooming in or zooming out on an image.Displaying a timer or count-down on a website •Playing audio and video in a web page •Displaying animations •Using a drop-down hamburger menu
  2.Creating web(frontend and backend), mobile apps and Desktop Applications.
  3.Building web servers and developing server applications & Write plugins for popular applications. 
  4.Game development, Artificial Intelligence & Data Visualization.
  5.JavaScript as a Serverless Computing Programming Langauge, & Embedded Device Development and IoT.

Question3 • When was ECMAScript first released ? 
Answer:
 The first version of ECMAScript was released in 1997

Question4 • How do you log to the console?
 Answer:
  We can log to the console using our browser or terminal on the JavaScript environment On the browser: To open the browser console, right-click on the page and select Inspect, click Console and type console.log(), input what you want in the parenthesis, then press the enter key on your keybord and you will get the console output. On the the Javascript environment: Using VSCode(ensure you have nodejs installed in your system), create a folder name of your choice or name it 'JavaScript', also create a file name of your choice or name it 'js-basics'. open the file type console.log();, you can create a function or type any output you want to run and input it in parenthesis. click on terminal on your vscode, select new terminal,or press ctrl+shift+' to create a terminal, select gitbash, type node -v to ensure you have nodejs on your system and it wil also display the version you have. on the gitbash terminal type the command: node js-basics then press enter on your keyboard to display the result or output on your console log.

Question5 • List the tech fields that use JavaScript, for example FrontEnd.
 Answer:• BackEnd Development • CLI Development • Mobile Application Development • Desktop Application Development • Game Development • AI and Data Science • IoT and Robotics • Smart Watch Application Development

Question6 • Differentiate between Statically typed and Dynamically typed programming languages and give examples of languages that fall under each category?
 Answer: Statically typed is a programming language characteristic in which variable types are explicitly declared and thus are determined at compiled time. This lets the compiler decide whether a given variable can perform the actions requested from it or not. Statically typed are associates types with variables, not with values. Examples of statically typed programming languages includes: Haskell,FORTRAN,Java,C,C#,C++,Ada,Jade,Pascal,ML,Perl & Scala

Dynamically typed programming languages is a programming language that the type of the variable is determined only during runtime. Due to strong typing, types need to be compatible with respect to the operand (quantity to which the operation is to be done) when performing operations. Examples of Dynamically typed programming languages includes: JavaScript, Objective-C, PHP, Python, Ruby, Lisp, and Tcl.

Question7 • Differentiate between the JavaScript data types ‘null’ and ‘undefined?
 Answer:
  null 
  The JavaScript null — also known as nill, NULL, None in other languages — is a keyword that normally represents the absence of value. Oddly enough using the typeof operator on ‘null’ to identify its data type returns an ‘object’. This is so for legacy reasons and fixing it could unexpectedly break existing sites. Despite this small hiccup it is still useful to think of null as a special object value that denotes ‘no object’, that is sometimes assigned to variables or properties, but it can also be used as a return value in a function to explicitly indicate ‘no value’ or ‘no object’ when nothing is to be returned.

    undefined
undefined is a global property that represents the primitive data value undefined. To be a global property means that its value is accessible anywhere in the program and in this instance, it will be used by the system to express the absence of a value. The MDN documentation indicates three ways a system returns undefined. Firstly, when a variable has not been assigned a value yet. Secondly, when the variable that is being evaluated in a method or statement does not have an assigned value. Thirdly, when a function returns no value. In practical terms, undefined indicates the lack of value the same way as null does. However, differently from null, its data type is ‘undefined’, which means that undefined is the only member of its own type.

Difference and similarities The two data types — null and undefined — are part of JavaScript 7 primitive data types, which include string, number, bigint, boolean, symbol, undefined and null. Primitive data represent the atomic level of the language implementation. All primitive data types are immutable, which implies that they are not objects and therefore have no methods. In this case, neither null nor undefined have any properties or methods.

As already mentioned null is a primitive data type, typically regarded as the sole member of its own type. However, contrastingly to undefined, it is not a global property — accessible anywhere — and therefore has to be intentionally assigned to a variable when required. The null value can be assigned to a variable to indicate ‘no value’ for numbers, strings and objects as well.

The data types undefined and null are similar in many ways and because of that can be easily misused. They both represent the absence of value. However, the nature of this absence is somewhat different. null is used explicitly to purposefully indicate lack of a value, whereas undefined can be returned implicitly by JavaScript to denote an unexpected or error-like absence of value.# JavaScript-Basics