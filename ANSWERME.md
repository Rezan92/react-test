1. What React components does your app have and what is the responsibility of each component?
(_TIP: We've filled in the App component for you, add the rest of the components in a similar manner_)

`App` - Functions as the entry point for the whole application. Renders the app container component.
`ModulesContainer` - Render all the `Module` component and contain the state for each input.
also responsible for handling the changes to the global state.

`Module` - Responsible for rendering each input and handle the changes for each input.
`Nav` - Contain two button when you click them it will take you to different routes useing Link methode from react-rout-dom .
`Context` - Contain the global state, which is array of all the input values.
`Bar` - Render the bar chart.
`Radar` - Render the Radar chart.


2. Let's say your product owner asks you to define what you need to change to also validate that the user can only enter a number between 1 and 10. Write down (do NOT implement) in short steps what you would need to do.
(_TIP: Write down if you would add a component or hook. Or what components need what alterations_)
(_TIP: For example, if the new feature was to add an option to change the color of the radar graph it would be:_
- I will check if the value of the input 
  if it is > 10 I will set it to 10 
  if < 0 I will set it to 0


- Create a color picker component
- Add the color picker component to the radar graph page
- Add a paremeter to the `getRadarChartUrl` to set the color
- Update the `getRadarChartUrl` function to pass the color to the API
)


