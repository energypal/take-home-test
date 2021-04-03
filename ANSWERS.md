# Take-Home Test (Web Developer)

## Answers to technical questions

1. I spent about 2 hours on implementing the core functionality then 6 hours working on nice to haves: responsiveness, styling, custom form validation and custom styling for form validation errors.
2. With more time I would finish the UX/UI logic of the custom form validation to conform to user expectations: errors should appear when an input field losses focus or the submit button is used. There's a lot of code replication I would separate out the UI elements into a library for reuse.
3. I used TailwindCSS for styling all the elements. Also I used npm to install TailwindCSS so I'm not sure if yarn will load the correct modules on an install.
4. Custom form validation and fetch logic requires client-side javascript enabled to function. Default validation is colliding with custom validation code. More client side validation should be added for first and last name.
