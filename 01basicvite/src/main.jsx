import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

function myApp() {
    return (
        <div>
            <h1>Custom react app</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.create(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'click me to visit Google',
    username
)

createRoot(document.getElementById("root")).render
(
    <App />
);

