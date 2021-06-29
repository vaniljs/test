import classes from './buttonForOrdering.module.scss'

function ButtonForOrdering() {
    return <div className={classes.btn} data-type="diagonal_swipe_left">
        Заказать звонок
    </div>
}

export default ButtonForOrdering