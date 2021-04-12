import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";

class Main extends Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <Section />
                <Footer/>

            </div>
        );
    }
}

export default Main;