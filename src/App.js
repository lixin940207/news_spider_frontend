import React, {Component} from 'react';
import './App.less'
import BBCApp from "./news/BBC";
import NYTimesApp from "./news/NYTimes";
import LeMondeApp from "./news/LeMonde";
import LeFigaroApp from "./news/LeFigaro";
import Header from "./components/Header";

class App extends Component{
    render() {
        return (
            <div>
                {/*<BBCApp />*/}
                {/*<NYTimesApp/>*/}
                {/*<LeMondeApp/>*/}
                {/*<LeFigaroApp/>*/}
                <Header/>
            </div>
        );
    }
}

export default App;
