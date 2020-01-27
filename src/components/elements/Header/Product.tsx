import * as React from "react";
import { Link } from "react-router-dom";

import "./header.less";

export function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">TestTask</Link>
        </header>
    )
}