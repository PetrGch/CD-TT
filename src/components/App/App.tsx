import * as React from "react";
import { Route, Switch } from "react-router";

import ProductPage from "../pages/ProductPage/ProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { Header } from "../elements/Header/Product";
import { Footer } from "../elements/Footer/Footer";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import EditProductPageContainer from "../pages/EditProductPage/EditProductPage.container";

import "./app.less";

export default class App extends React.PureComponent<{}, {}> {
    public render(): React.ReactNode {
        return (
            <>
                <Header/>
                <main className="app_main">
                    <Switch>
                        <Route exact path="/editProduct" component={EditProductPageContainer}/>
                        <Route exact path="/addProduct" component={AddProductPage}/>
                        <Route exact path="/" component={ProductPage}/>
                        <Route path="/" component={NotFoundPage}/>
                    </Switch>
                </main>
                <Footer/>
            </>
        )
    }
}