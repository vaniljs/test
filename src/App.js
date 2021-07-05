import classes from './App.module.css';
import React from "react";
import {connect} from "react-redux";
import {openModal, checkThePass} from "./store/actions/actions";
import Header from "./components/header/header";
import NavBar from "./components/navBar/navBar";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";

class App extends React.Component {
    render() {
        return <div className={classes.App}>
            <Header openModal={this.props.openModal} checkThePass={this.props.checkThePass}/>
            <NavBar/>
            <Content/>
            <Footer/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        isCheckThePass: state.reducer.isCheckThePass
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: () => dispatch(openModal()),
        checkThePass: () => dispatch(checkThePass())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
