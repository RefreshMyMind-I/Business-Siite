import React from "react"
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import Services from "./component/Services.js";

function App(){
    return (
        <div className="app-wrapper">
        <Header />
        <Services />
        <Main/>
        <Footer />
        </div>
    );
}
export default App;