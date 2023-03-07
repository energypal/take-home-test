## 1. About how many hours did you contribute to this project?

<br>

- I spent about **21 hours** in total (around a third of which was research). Detailed breakdown available in the _NOTES.md_ file.

<br>
<br>

## 2. If you had time to add more features or functions, what would you consider doing?

<br>

I would consider adding several things.<br>
In terms of functionality, I would add:

- Accessibility features like the `aria-invalid` and `role` attributes (I haven't studied the topic yet so I decided not to implement them in this project).

- Placeholders for phone number and postal code inputs so the user knows what sort of values are expected before they even start typing.

- More robust email validation, because the regex pattern I used is very general and could allow invalid addresses to pass. However, I learned that no regex pattern would be a perfect solution, and they are also unable to verify whether it's a real, working email address or not.

- More responsive submission process by displaying some type of loading indicator and disabling the form inputs while the request is being made.

- Consider removing the mask from the phone number, i.e. transform from _(123) 456 - 7890_ back to just the numbers depending on what's expected on the back end.

- Validation on each input onBlur, so that a user can be informed of errors right away, instead of getting multiple errors all at once when submitting.

- Persisting input data locally until it's submitted to prevent data loss and frustration in case a user accidentally refreshed or closed the page (more relevant on longer forms).

And in terms of styling, I would add:

- More refined post-submission view with better messaging.

- Visual indication around the fields themselves when validation fails.

- Intermediate layout between small and large layouts using the `md:` breakpoint.

- Dark mode using Tailwind's `dark:` variant.

<br>
<br>

## 3. What libraries did you add if any? What are they used for?

<br>

I added four dependencies:

- Tailwind CSS: a low-level CSS framework that provides single-concern utility classes that map 1:1 to CSS properties.

- @next/font: a Next.js feature that allows automatic self-hosting of web fonts.

- React Hook Form: a lightweight library for managing and validating complex React forms.

- Axios: a library for making HTTP requests.

<br>
<br>

## 4. Are there any limitations to your implementation? (ex: does not work in IE)

These are the limitations I was able to find information on :

- React hook form V7 doesn't support IE11.
- Tailwind CSS doesn't support any version of IE, including IE11.
- Next.js supports IE11 and earlier **with polyfills**
