# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Installation and Running

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/cosmochat-ui.git
   cd cosmochat-ui
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the App

To run the app in development mode use:

```sh
npm start
```

This will automatically open the default browser to http://localhost:3000 to view the website.

## Navigating the website

It is composed of the following screens:

1. Dashboard Screen:

   - Contains a brief mock overview of all the user's statistics

2. User Information Screen:

   - A dynamic screen that can isolate one user statistics for clearer and better understanding.

3. Chat Screen with Session History:
   - A user can manage through their history, creating or deleting as they wish. Old sessions could additionally be re-opened and continued on.

## Project Structure

The main directories and files are:

- `src/`: Contains the source code
  - `api/`:
    - Contains the files that interact with the api
  - `componenets/`:
    - Contains the components that were used
  - `constants/`:
    - Contains global constants for ease of tracking
  - `data/`:
    - Contains mock data usde in the app
  - `screens/`:
    - Contains the screens of the app
  - `App.jsx`
  - `index.js`

## Components

### CustomMenuItem

- File: `src/componenets/CustomMenuItem/CustomMenuItem.jsx`
- Description: A customer sidebar menu item that adds the delete item feature

### DeleteMenuItem

- File: `src/componenets/DeleteMenuItem/DeleteMenuItem.jsx`
- Description: Delete button used in the custom menu item

### LineGraph

- File: `src/components/LineGraph/LineGraph.jsx`
- Description: Dynamic line graph used for representing data

### ProgressCircle

- File: `src/components/ProgressCircle/ProgressCircle.jsx`
- Description: Custom progress circle that allows for a visual way to represent completion

### SideBar

- File: `src/components/SideBar/SideBar.jsx`
- Description: Static side bar

### StatBox

- File: `src/components/StatBox/StatBox.jsx`
- Description: Stat-box used for representing data

## Constants

- `Colors.js`: Contains the used colors
- `ConversationDirection.js`: Enumeration of the two different conversation directions
- `Roles.js`: Different roles for chat bot
