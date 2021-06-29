import classes from './header.module.css'
import Background from "./background/background";

function Header(props) {
    return <div className={classes.header}>
        <Background openModal={props.openModal}/>
    </div>
}

export default Header