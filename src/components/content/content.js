import React from "react";
import {connect} from "react-redux";
import classes from './content.module.scss'
import {openModal, closeModal, checkThePass} from "../../store/actions/actions";
import BlockPasses from "./blockPasses/blockPasses";
import Steps from "./steps/steps";
import Info from "./info/info";
import Table from "./table/table";
import Contacts from "./contacts/contacts";

class Content extends React.Component {
    render() {
        return <div className={classes.content}>
            <BlockPasses openModal={this.props.openModal} closeModal={this.props.closeModal} modal={this.props.modal} isCheckThePass={this.props.isCheckThePass}/>
            <Steps openModal={this.props.openModal}/>
            <Table openModal={this.props.openModal}/>
            <Info openModal={this.props.openModal}/>
            <Contacts/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        modal: state.reducer.modal,
        isCheckThePass: state.reducer.isCheckThePass
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),
        checkThePass: () => dispatch(checkThePass())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)