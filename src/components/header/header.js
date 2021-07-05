import classes from './header.module.css'
import Background from "./background/background";

function Header(props) {
    return <div className={classes.header} id='Главная'>
        <Background openModal={props.openModal} checkThePass={props.checkThePass}/>
    </div>
}

export default Header