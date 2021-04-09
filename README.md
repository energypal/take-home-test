# Take-Home Test (Web Developer)

## Overview
This is the take-home test for the Web Developer position role at EnergyPal.

The test consists of two parts:
1. [A coding test](#coding-test)
2. [A few technical questions](#technical-questions)

### Coding Test

The objective is to create a fully-functioning landing page with a web form to collect customer interest in solar quotes. 

Feel free to solve the problems howver you see fit, using any publicly available libraries you think are appropriate.

To get started, fork this repository, clone it locally, and work through the [requirements](#requirements) (see below).

The project is setup as a vanilla [Next.js](https://nextjs.org/) app with some custom styling to get you going.

When you are finished, submit your work as a `pull request` back to this repository.

### Requirements

1. Update a web form found at `pages/index.js` according to best practices with fields for first name, last name, email, phone and US zip code (5 numeric digits).
2. Style the web page & form to look like `design.png` (feel free to borrow styles found at [1](https://energypal.com/#start), [2](https://energypal.com/company-brand-assets)).
3. Add validation to the form to prevent invalid values from being submitted.
4. Submit the form submissions via HTTP POST to `/api/submissions`.
5. Let the user know if the form was submitted successfully or not.

### Running the Project

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Help

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Technical Questions

Please answer the following questions in a markdown file called `ANSWERS.md`.

1. About how many hours did you contribute to this project?
2. If you had time to add more features or functions, what would you consider doing?
3. What libraries did you add if any? What are they used for?
4. Are there any limitations to your implementation? (ex: does not work in IE)
