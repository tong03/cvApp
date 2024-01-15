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
   

# cvApp
