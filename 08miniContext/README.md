# Context API

### State Management in React

Steps:

1. Create a file in src directory to store all context files.
2. Create React.createContext() variable and export.
3. You can create a JSX file to export jsx data with the context i.e states e.g user, setUser
4. In your components take useContext hook to either access the context user or update user(setUser)
5. Now you can use these states in any component of your react project(even if it is nested by multiple components) with useContext()

Context is a provider, which acts as top level component.
