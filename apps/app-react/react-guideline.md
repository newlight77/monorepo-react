# React Development - Guideline

There are best practices in building a React application, to make it clean, modular and scalable.

## Principles 

- Modular : Keep a component small and focused
- Separation of concerns : one component is responsible for one thing
- Flexibility : component can do what is meant for and be changed for that same reason
- Reusability : a component should be reusable

## Folder Structure

```

```

## Naming convention

- For components, use PascalCase (like UserProfile.js)
- For variables and functions, use camelCase (like getUserData())
- And for constants, use UPPERCASE_SNAKE_CASE (like API_URL)

## Components

In React, there are two types of components:

- Pages (container components)
- Presentation components

Pages are for interactions behavior, while presentation components are to render UI elements and display data. By separating these responsibilities, we can create more modular and reusable components.

### Pages

Pages handle tasks like fetching data from external sources (like APIs), managing state and logic, and passing data down to the presentational components using props.

### Presentation Components

Meanwhile, presentational components are responsible for rendering UI elements and displaying data that they get from their props passed as arguments down from their parent components.

