# Design Artifact to HTML Exercise

I spent about 10 hours total working through this exercise, over the course of a few days. My time was split between, in (general) order:

- Parsing out and structuring the data present in the design artifact
- Creating a component structure that reflects the structure in the design artifact, and adding adding content
- Styling the components (over a few rounds) to reflect the design artifact
- Testing styles on different screen sizes
- Checking for accessibility concerns

### Notes

- Most of the responsive design was done [via Tailwind](https://tailwindcss.com/docs/responsive-design)
- I set up a mock "database" with [JSON files in /public/data](https://github.com/dunxtand/pww-scrfa-exercise/tree/main/public/data), that the frontend connects to [via a fetch request](https://github.com/dunxtand/pww-scrfa-exercise/blob/main/src/hooks/useData.tsx).
- I [gave names](https://github.com/dunxtand/pww-scrfa-exercise/blob/main/src/style-variables/colors.ts) to the colors in the color palette.
- I used the live site a guide for some hover states and for grabbing a few asset URLs
- A couple of components, like the menu hamburger and the header, were adapted from code I already had ready from previous projects

### Testing

```
git clone https://github.com/dunxtand/pww-scrfa-exercise.git
cd pww-scrfa-exercise
npm install
npm start
```

### Main Tools

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [create-react-app](https://create-react-app.dev/)
- [styled-components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)

### Improvements

If I had more time to work on this project, I would have:

- Created a caching mechanism for fetching the data, to avoid repeated fetch calls
- Used the design artifact to create a standardized set of components for things like headings, to standardize font sizes, etc
- Made the rest of the components specified but not included in pages shown (i.e., forms)
- Gone further into testing and developing for accessibility
- Added a separate mobile menu with dropdowns for categorized menu items
- Added entry animations and more hover states
