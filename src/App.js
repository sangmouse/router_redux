import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import routers from './routers'


class App extends Component {


    showContentMenu = (routers) => {
        var result = null
        if(routers.length > 0){
            result = routers.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path} 
                        exact ={route.exact}
                        render={route.main} 
                    />
                )
            })
          
        }

        return result
    }

    render() {
        
        return (
            <div>
                <Router>
                    <div className="App">
                        <Menu/>

                        <Switch>
                            {this.showContentMenu(routers)}
                        </Switch>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;



