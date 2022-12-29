# Scroll Event and Intersection observer

This script demonstrates the use of both a scroll event and an intersection observer to enable a "accept" button on a page.

The script first defines a function called scrollToAccept that performs the following tasks:

It gets references to three elements on the page: the element with the class "terms-and-conditions__content", the element with the class "watch", and the "accept" button.

It defines a callback function called obCallback that will be executed when the intersection observer's threshold is crossed. This callback function checks the intersection ratio of the observed element, and if it is equal to 1 (meaning that the element is fully intersecting with the viewport), the "accept" button is enabled and the observer is stopped.

It creates an intersection observer that watches the last child element of the "terms-and-conditions__content" element, and executes the obCallback function when its threshold is crossed.

It attaches an event listener to the "terms-and-conditions__content" element that listens for the "scroll" event.

It calls the scrollToAccept function.

Finally, at the bottom of the script, the scrollToAccept function is called to start the process.
