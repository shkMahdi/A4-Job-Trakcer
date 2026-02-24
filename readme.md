1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans 1:
getElementById returns a single element by id.
getElementsByClassName returns a collection of elements by class name.
querySelector returns the first match.
querySelectorAll returns all matches as a node list.


2. How do you create and insert a new element into the DOM?
ans 2:
const div = document.createElement('div');
div.textContent = 'hi';
parent.appendChild(div);


3. What is Event Bubbling? And how does it work?
ans 3:
When you click an element the event fires on that element first, then bubbles up to its parent and then grandparent, all the way up to the document.



4. What is Event Delegation in JavaScript? Why is it useful?
ans 4:
Instead of adding event listeners to each child element, you add one listener to the parent and use event.target to detect which child was clicked. Useful because it's more performant and works for dynamically added elements too.
For example, in this project I've used mainContainer.addEventListener


5. What is the difference between preventDefault() and stopPropagation() methods?
ans 5:
preventDefault() stops the browser's default behavior
stopPropagation() stops the event from bubbling up to parent elements