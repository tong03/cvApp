# CV Application

This project aims to create a dynamic CV Builder by appying React concepts into practice.

![Alt Text](https://github.com/tong03/cvApp/blob/main/cvApp%20demo.png?raw=true)

## React Context API Usage

This project leverages the power of React Context API to manage and share **global state** across various components efficiently. The Context API eliminates the need for prop drilling by allowing components to access shared data without passing it through intermediary components.

### How it Works

1. **Context Providers:** The project uses context providers (`InfoContextProvider`, `EducationContextProvider`, etc.) to wrap groups of components that require access to specific shared data.

2. **State Management:** With the help of the Context API, state variables (`infoData`, `edData`, etc.) are defined and updated within their respective context providers.

3. **Context Consumers:** Components consuming the shared data access the values from the context using the `useContext` hook. This ensures that the components always have the latest data without explicitly passing it through each level of the component tree.

```jsx
// Example of using useContext in a component
import React, { useContext } from "react";
import { InfoContext } from "../contexts/InfoContext";

const ExampleComponent = () => {
  const { infoData, setInfoData } = useContext(InfoContext);

  // Access and update infoData as needed
  // ...
};
```

By adopting the React Context API, this project promotes a clean and scalable architecture, making it easier to manage and share state across different parts of the application. This results in more maintainable and modular code.

### State Dynamics with useState

In the cvApp project, React's useState hook is strategically employed for efficient component-level state management, ensuring dynamic user interactions.

```jsx
// Example of using useState in a component
const Work = () => {
  const [open, setOpen] = useState(false);
  const [displayedWork, setDisplayedWork] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [localFormValues, setLocalFormValues] = useState({ ...workData });

  // Other component logic...
};
```
1. open State: Manages form visibility, toggling between active and inactive states.

2. displayedWork State: Controls the display of submitted work data.

3. editMode State: Tracks the component's edit mode status.

4. localFormValues State: Preserves local form values during edit mode.

### Effective Props for Communication

Alongside state management, React props play a pivotal role in facilitating communication between components.

1. Enable access and updates to global information data.

2. Communicate submission status, triggering actions based on submission.

3. Local State Management: Utilizes useState for effective local state handling within each component.

By combining useState for state dynamics and props for seamless communication, cvApp achieves a scalable and modular architecture, enhancing code maintainability and promoting an efficient CV Builder application.

# cvApp
