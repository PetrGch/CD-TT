import * as React from "react";
import { Route, Switch } from "react-router";

import ProductPage from "../pages/ProductPage/ProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { Header } from "../elements/Header/Product";
import { Footer } from "../elements/Footer/Footer";
import EditProductPageContainer from "../pages/EditProductPage/EditProductPage.container";

import "./app.less";
import AddProductPageContainer from "../pages/AddProductPage/addProductPage.container";

export default class App extends React.PureComponent<{}, {}> {
    public render(): React.ReactNode {
        return (
            <>
                <Header/>
                <main className="app_main">
                    <Switch>
                        <Route
                            exact={true}
                            path="/editProduct"
                            component={EditProductPageContainer}
                        />
                        <Route
                            exact={true}
                            path="/addProduct"
                            component={AddProductPageContainer}
                        />
                        <Route
                            exact={true}
                            path="/"
                            component={ProductPage}
                        />
                        <Route
                            path="/"
                            component={NotFoundPage}
                        />
                    </Switch>
                </main>
                <Footer/>
            </>
        )
    }
}