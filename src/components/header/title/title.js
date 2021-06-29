import classes from './title.module.scss'
import ButtonForOrdering from "../../content/elements/buttonForOrdering/buttonForOrdering";

function Title(props) {
    return <div className={classes.allTitle}>
        <div className={classes.title}>
            <div className={classes.ex}><h1>ДОР МСК</h1>
                <h2>Помощь в получении пропусков на дороги москвы</h2>
                <div className={classes.btn} onClick={props.openModal}><ButtonForOrdering/></div>
            </div>
        </div>
    </div>
}

export default Title