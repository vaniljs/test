import classes from './App.module.css';
import React from "react";
import {connect} from "react-redux";
import {openModal} from "./store/actions/actions";
import Header from "./components/header/header";
import NavBar from "./components/navBar/navBar";
import Content from "./components/content/content";

class App extends React.Component {
    render() {
        return <div className={classes.App}>
            <Header openModal={this.props.openModal}/>
            <NavBar/>
            <Content/>
        </div>
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: () => dispatch(openModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
