import classes from './checkThePass.module.scss'

function CheckThePass() {
    return <div className={classes.checkThePass}>
        <iframe src="https://transport.mos.ru/gruzoviki/reestr" scrolling="auto">
        </iframe>
    </div>
}

export default CheckThePass