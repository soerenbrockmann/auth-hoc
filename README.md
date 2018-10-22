# React Authentication with Higher Order Components (HOC)

Restricting routes in React is a common pattern. However, checking each protected route would result in repetitive code. A more elegant solution is to use a higher order component which checks authorization and redirects the user to the correct route. This simple project creates a navigation with two links and a button. The home link is open for everyone and the resource link restricted. The button logges in or out a user. Depending on the state of authetication the content of the resource link is only visible for authenticated users. Others will be redirected to the home route. The routing is done by React Router and State Management by React Redux.  

To get started developing right away:

* clone or fork project
* install all project dependencies with `npm install`
* npm run start

## Important

The project's focus here is on functionality rather than design.