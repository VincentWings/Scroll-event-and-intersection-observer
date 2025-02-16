# Scroll Event and Intersection Observer - Dynamic Button Activation  

[Live Demo](https://vincentwings.github.io/Scroll-event-and-intersection-observer/)  

This project demonstrates how to use both a scroll event and an Intersection Observer to dynamically enable an "Accept" button when users have fully viewed the terms and conditions.  

## Features  

- **Scroll-Based Activation**: The "Accept" button remains disabled until users scroll through the entire content.  
- **Intersection Observer**: Detects when the last section of the terms and conditions is fully visible.  
- **Optimized Event Handling**: Uses modern web APIs to improve performance and reduce unnecessary event listeners.  

## Technologies Used  

- **HTML5**: Page structure.  
- **CSS3**: Styling for layout and button states.  
- **JavaScript (Vanilla)**: Implements scroll event listeners and the Intersection Observer API.  

## How It Works  

1. The script retrieves key elements:  
   - The terms and conditions container.  
   - A "watch" element at the end of the content.  
   - The "Accept" button.  

2. An **Intersection Observer** monitors the last child of the terms and conditions content.  
   - When this element is fully visible in the viewport (intersection ratio = 1), the "Accept" button is enabled, and the observer stops.  

3. A **scroll event listener** ensures the observer properly tracks when users navigate through the content.  

## Skills Demonstrated  

- **JavaScript Event Handling**: Efficient use of scroll events.  
- **Intersection Observer API**: Modern approach for detecting element visibility.  
- **Progressive Interaction**: Ensuring user engagement before enabling actions.  

This project showcases a practical approach to user experience improvement, ensuring that users interact with content before proceeding. 🚀  
