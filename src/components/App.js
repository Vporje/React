import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import About from "./About";
import Category from "./Category";
import Error from "./Error";
import RestoMenu from "./RestoMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./Shimmer";
// import Grocery from "./Grocery";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";
import Cart from "./Cart";

/*
const heading = React.createElement(
    'div',
    { id: 'parent' }, [
    React.createElement(
        'div',
        { id: 'child' },
        [
            React.createElement('h2', {}, 'Hello World'),
            React.createElement('h3', {}, 'Namaste React'),
            React.createElement('h6', {}, 'Vikram Porje from Nashik')
        ]
    ),
    React.createElement(
        'div',
        { id: 'child1' },
        [
            React.createElement('h2', {}, 'Hello Vikram Porje'),
            React.createElement('h3', {}, 'Namaste Nashik')
        ]
    )
]
)

const main_root = ReactDOM.createRoot(document.getElementById('root'));

main_root.render(heading);

//React.createElement creates a React Object => object is rendered in browser DOM using render()method and converted to HTML Element 
// React Element
const heading = React.createElement('h2', {'id': 'heading'}, 'Namaste React...')

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(heading)
root.render(heading)

// JSX => it is a HTML like JS syntax, it is not a part of React

const jsxHeading = <h1>Hello..Namaste React using JSX </h1>
console.log(jsxHeading)

root.render(jsxHeading)
----------------------------

// React Element
const Heading1 = <h1 className="header">Namaste React using JSX</h1>;
// const heading2 = <h1 className="header">Namaste React using JSX</h1>;

// Functional component

const Heading2 = () =>{
return <h1 className="header">Namaste React using JSX</h1>
};
const Heading = () => {
  return (
    <div>
      <Heading1 />
      <h1 className="headingcomp" tabIndex={2}>
        Namaste React - Functional component
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
----------
const element = <span>I am from India</span>


const SubFunction = function () {
  return <h2 className="subheading">I am a sub-heading</h2>;
};
const heading = <h1>Hello World..{element}</h1>;

const HeadingComp = () => {
  return (
    <div className="container">
      {10000}
      {heading}
      <h2>{'I am Vikram Porje'}</h2>
      <SubFunction />
      <h2 className="heading">Namaste React..using Component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />);


------------------------------------------------------
// React Element
const heading = <h2>Hello World!!</h2>;
// React Functional Component
const SubHeading = () => {
  return <h2>Hello Vikram Porje</h2>;
};
const HeadingComp = () => {
  return (
      <div>
        <div id="container">
          {heading}
          <SubHeading />
          <h2>Namaste React </h2>
          <h2></h2>
          <p></p>
        </div>
      </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />);

*/

/*
Header
  - logo
  - Nav items
Body
  - search
  - resturantcontainer
    - resturantcard
Footer
  - copyright
  - links
  - contact
  - address
*/

const Grocery = lazy(()=>{
  return import("../components/Grocery") 
})

const AppLayout = () => {

  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:restoId",
        element: <RestoMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
