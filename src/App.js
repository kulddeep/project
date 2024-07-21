import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactForm from "./components/ContactForm.jsx";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { Auth0Provider } from '@auth0/auth0-react';


const Applayout = () => {
    return (
        <Auth0Provider
            domain="dev-xda46y5bpfcryuda.us.auth0.com"
            clientId="ct73qaBGSxYDY2n8kL8QVgy4Nb8f51IY"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <Provider store={appStore}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </Provider>
        </Auth0Provider>
    )
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <ContactForm />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />
    }

]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={appRouter} />);
