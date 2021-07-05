import classes from './buttonForOrdering.module.scss'
import React from 'react';

export default class ButtonForOrdering extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isFetching: false,
            sended: false
        };
    }


    sendData = () => {
        this.setState({
            isFetching: true
        })
        console.log(this.props);
        let urlSend = "http://частный-программист.рф/works/sender/sender.php";
        var xhr = new XMLHttpRequest();
        xhr.open('POST', urlSend);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('param=' + JSON.stringify(this.props));
        xhr.addEventListener("readystatechange", () => {
            
            console.log(xhr.response);
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.setState({
                    isFetching: false,
                    sended: true
                })
                setTimeout(() => {
                    this.setState({
                        sended: false
                    })
                }, 2000)
            }
        });
    }



    render() {

        let {isFetching, sended} = this.state;
        let button;

        if (isFetching) {
            button = "Отправляется";
        } else if (sended) {
            button = "Отправлено!";
        } else {
            button = <div className={classes.btn} data-type="diagonal_swipe_left" onClick={this.sendData}>Заказать звонок</div>
        }

        return (
            <React.Fragment>
                {button}
            </React.Fragment>
        )
    }


}