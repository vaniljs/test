import classes from './background.module.css'
import img from "../../../store/images/header.jpg";
import Title from "../title/title";

function Background(props) {
    return <div className={classes.background}>
        <img src={img}/>
        <div className={classes.title}>
            <div className={classes.titleElem}>
                <Title openModal={props.openModal}/>
            </div>
        </div>
    </div>
}

export default Background