1. The Difference Between Element Selection Methods
getElementById(): Selects a single element by its unique id. It's the fastest method.

getElementsByClassName(): Selects multiple elements by their shared class name. It returns a live HTMLCollection.

querySelector(): Selects the first element that matches a CSS selector.

querySelectorAll(): Selects all elements that match a CSS selector. It returns a static NodeList.



2. Creating and Inserting a New Element
Create the element using document.createElement().

Add content or attributes ( textContent).

Insert it into a parent element in the DOM using methods like appendChild() or prepend().



3. Event Bubbling
Event bubbling is the process where an event, after being triggered on an element, "bubbles up" to its parent, then its parent's parent, and so on, all the way to the top of the DOM. This is the default behavior.





4. Event Delegation
Event delegation is a technique that uses event bubbling. Instead of adding a listener to every element, you add a single listener to a parent element. The parent's listener then handles events for all its children, which is great for performance and for elements added dynamically.




5. preventDefault() vs. stopPropagation()
preventDefault() prevents the default action of an event ( a link from navigating, a form from submitting).

stopPropagation() prevents the event from bubbling up the DOM tree to parent elements.
