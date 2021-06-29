import classes from './navBar.module.css'
import TestNavBar from "./testNavBar/testNavBar";

function NavBar() {
    return <div className={classes.ara}>
        <div className={classes.allNavBar}>
            <div className={classes.navBar}>
                <ul>
                    <li><a href="#Виды пропусков">Виды пропусков</a></li>
                    <li><a href="#Информация">Информация</a></li>
                    <li><a href="#Документы">Документы</a></li>
                    <li><a href="#Контакты">Контакты</a></li>
                </ul>
                <hr/>
            </div>
        </div>
        <TestNavBar/>
    </div>
}

export default NavBar