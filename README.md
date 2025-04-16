# ⚛️ React State Management Playground 🚀

A hands-on project to explore and master state management in React! From basic useState to advanced techniques with reducers and context, this repo is your guide. 🛠️

## 🌟 Features

*   **useState Overview**: Understand the fundamentals of managing state in React.
*   **Reacting to Input with State**: Learn to handle user inputs and update the UI accordingly.
*   **Choosing the Right State Structure**: Best practices for structuring state for optimal performance.
*   **Sharing State Between Components**: Techniques for sharing state efficiently between React components.
*   **Preserving and Resetting State**: Methods to preserve and reset state effectively.
*   **Extracting State Logic into a Reducer**: Simplify complex state logic using reducers.
*   **Passing Data Deeply with Context**: Use React Context to avoid prop drilling.
*   **Scaling Up with Reducer and Context**: Combine reducers and context for scalable state management.

## 💻 Technologies Used

| Technology       | Link                                                                 |
| :--------------- | :------------------------------------------------------------------- |
| React            | [https://react.dev/](https://react.dev/)                             |
| Vite             | [https://vitejs.dev/](https://vitejs.dev/)                           |
| React Router DOM | [https://reactrouter.com/](https://reactrouter.com/)                 |
| ESLint           | [https://eslint.org/](https://eslint.org/)                           |
| use-immer        | [https://github.com/immerjs/use-immer](https://github.com/immerjs/use-immer) |
| Immer            | [https://immerjs.github.io/immer/](https://immerjs.github.io/immer/) |

## 🚀 Usage

### Setting up the project

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/react-state-management.git
    cd react-state-management
    ```
2.  Install dependencies:

    ```bash
    npm install
    ```
3.  Run the development server:

    ```bash
    npm run dev
    ```

### Examples

#### useState Form
```jsx
import React, { useState } from 'react'

const FormState = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === "success") {
        return <h2>That's right!</h2>;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForm(answer);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setError(err);
        }
    }
```

#### useReducer TaskApp

```jsx
import React, { useReducer } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

function taskReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {id: action.id, text: action.text, done: false}];
        }
        case "changed": {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case "deleted": {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw error("Unknown action: " + action.type);
        }
    }
}
```

#### React Context
```jsx
import React from 'react'
import Section from '../components/DataWithContext/Section'
import Heading from '../components/DataWithContext/Heading'
import Page from '../components/DataWithContext/Page'
import ProfilePage from '../components/DataWithContext/ProfilePage'
import Challenge1 from '../components/DataWithContext/Challenge1'

const DataWithContext = () => {
  return (
    <div>
        <h1>Passing Data Deeply with Context</h1>
        <p>In this section, we will learn how to pass data deeply through the component tree using React Context.</p>
        <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
```
