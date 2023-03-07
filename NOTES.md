# Tasks

### [x] Build page structure

### [x] Insert custom EnergyPal colours

### [x] Place footer at the bottom of page

### [x] Add padding to inputs

### [x] Style and make responsive

### [x] Fix large layout shifting when form is submitted

### [x] Fix validation messages displacing grid layout (large)

### [x] Implement form validation

### [x] Add autocomplete attribute to inputs

### [x] Implement phone number and postal code input masks

### [x] Handle form submission and display result

### [x] Check form payload delivery

<br>

# Timekeeping

## Total hours:

Day 1

- Learning about Next.js: 2h

Day 2

- Learning about Next.js: 1h
- Initial set up: 0.5h
- Building html structure: 0.5h
- Installing Tailwind CSS, importing web font: 1h
- Styling and responsiveness: 2h

Day 3

- Learning React Hook Form: 0.5h
- Implementing form with RHF: 2.5h
- Adjusting style and responsiveness: 0.5h

Day 4

- Adjusting Layout and responsiveness: 0.5h
- Implementing form submission: 1.5h
- Styling post submission dialog: 1h
- Working on form: 1h

Day 5

- Working on form: 0.5h
- Researching RHF \<Controller/> and trying to implement input mask: 2h

Day 6

- Researching react-input-mask and trying to implement input mask: 0.5h
- Implementing input masks with custom onChange functions: 3h

<br>

# Dependencies

- TailwindCSS
- @next/font
- React Hook Form
- axios

# Improvement Ideas

- Intermediate layout between small and large layouts

- Dark mode using Tailwind's _dark:_ variant

- Placeholders for phone number and postal code inputs

- More robust email validation? Regex cannot cover all possible email addresses and cannot determine if it's a real address

- Accessibility: attributes like _aria-invalid_ and _role_

- More responsive submission process such as loading indicator on button and disabled forms while request is being made

- More refined post-submission view, better messaging

- Visual indication on fields themselves when input values are not valid

- Validate onBlur, so that a user can be informed of errors in real-time, instead of getting multiple errors all at once when submitting

- On a longer form, persisting input data locally until it's submitted can prevent data loss and frustration when a user accidentally refreshes or closes the page

- Remove the mask from the phone number, i.e. reverse to just the numbers depending on what's expected at the back end

# Limitations

- react-hook-form V7 does not support IE11
- Tailwind CSS doesn't support any version of IE, including IE11
