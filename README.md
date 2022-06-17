# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

## You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Exercise 1

The code starts with a function called App.

- This is the root component of our application.

- (**_Line 5 - 10_**) It has two state variables, total and cost, which are initialized to 0 and false respectively.

- (**_Line 12 - 14_**)The useEffect() call in this code sets up an event handler that will be triggered when the user clicks on the any checkbox input field.

- (**_Line 16 - 21_**)The handleOnChange() function takes one argument: an event object containing information about what changed (e.g., name).

- (**_Line 25_**)In this case, we're interested in whether or not the website checkbox was checked by clicking it or if it was unchecked by clicking it again; so we compare its value to 500 (the default) using === .

- If they match, then we set newCost equal to { ...cost } , where cost is whatever's stored in cost at that point in time - either true for website or false for everything else.

- We also update newTotal with a new value based on how much money each service costs.

- Finally, we update total with a new value as well.

- The code is a React component that calculates the total cost of services based on user input.

- The rendering part has three inputs, one for each service and a checkbox to set the state value of each input.
