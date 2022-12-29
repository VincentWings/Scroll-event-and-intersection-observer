// Define a function that checks for the existence of the terms and conditions element on the page
function scrollToAccept() {
    // Get a reference to the element with the class "terms-and-conditions__content"
    const terms = document.querySelector('.terms-and-conditions__content');

    // Get a reference to the element with the class "watch"
    const watch = document.querySelector('.watch');

    // Get a reference to the "accept" button
    const btnAccept = document.querySelector('.btn-accept');

    // Define a callback function that will be executed when the intersection observer's threshold is crossed
    function obCallback(payload) {
        // If the intersection ratio of the observed element is 1, enable the "accept" button and stop observing
        if (payload[0].intersectionRatio === 1) {
            btnAccept.disabled = false;
            // stop observing
            ob.unobserve(terms.lastElementChild);
        }

        // Uncomment the following lines to enable the "accept" button only when the observed element is intersecting with the viewport
        // else {
        //   btnAccept.disabled = true;
        // }
    }

    // Create an intersection observer that will watch the last child element of the terms element and execute the obCallback function when its threshold is crossed
    const ob = new IntersectionObserver(obCallback, {
        root: terms,
        treshold: 1,
    });

    // Start observing the "watch" element
    //ob.observe(watch);

    // Start observing the last child element of the terms element
    ob.observe(terms.lastElementChild);

    // If the element does not exist, return early
    if (!terms) {
        return;
    }

    // Attach an event listener to the terms element that listens for the "scroll" event
    terms.addEventListener('scroll', function (e) {
        // When the scroll event is triggered, log the current scroll position of the terms element
        //console.log(e.currentTarget.scrollTop);

        // Log the total height of the scrollable content within the terms element
        //console.log(e.currentTarget.scrollHeight);
    });
}

// Call the scrollToAccept function
scrollToAccept();