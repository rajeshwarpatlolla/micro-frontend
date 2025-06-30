# Micro Frontend Platform

This project demonstrates a modern micro-frontend architecture using React and Vite. It consists of a shell application and two independent micro frontends (App1 and App2), each developed and deployed separately but integrated seamlessly at runtime.

## Project Structure

```
micro-frontend/
  shell/   # The main container (host) application
  app1/    # Micro frontend application one
  app2/    # Micro frontend application two
```

- **shell/**: The main host app that provides the overall layout, navigation, and application switcher. It loads and displays the micro frontends dynamically.
- **app1/**: The first micro frontend, demonstrating independent UI and logic.
- **app2/**: The second micro frontend, also fully independent.

## What is a Micro-Frontend?

Micro-frontends extend the microservices concept to the frontend, allowing teams to develop, deploy, and scale parts of the UI independently. Each micro-frontend can use its own tech stack, be deployed separately, and be integrated into a host (shell) app at runtime.

## Features
- Modular architecture for independent development and deployment
- Seamless integration of micro frontends into the shell
- Modern UI with Tailwind CSS
- Application switcher for easy navigation
- Example cards for each app on the shell home page

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Install Dependencies
Run the following in the root and in each app directory:

```
cd shell && npm install
cd ../app1 && npm install
cd ../app2 && npm install
```

### Running the Apps
Open three terminals and run each app:

```
# Terminal 1
cd shell && npm run dev

# Terminal 2
cd app1 && npm run biuld && npm run preview

# Terminal 3
cd app2 && npm run biuld && npm run preview
```

- The shell app will be available at [http://localhost:3000](http://localhost:3000).
- App1 and App2 will run on their respective ports 3001 & 3002 (see their configs).

### Usage
- Visit the shell app in your browser.
- Use the application switcher in the header or the cards on the home page to navigate to App1 or App2.
- Each micro frontend runs independently but is loaded into the shell for a seamless user experience.

## License
MIT
