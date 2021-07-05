import classes from './navBar.module.scss'
import NavBarMobile from "./navBarMobile/navBarMobile";
import img1 from './../../store/images/logo-1.png'
import img2 from './../../store/images/logo-2.png'

function NavBar() {
    return <div className={classes.ara}>
        <div className={classes.allNavBar}>
            <div className={classes.navBar}>
                <a href='#Главная'>
                    <div className={classes.logo1}>
                        <img src={img1}/>
                    </div>
                    <div className={classes.logo2}>
                        <img src={img2}/>
                    </div>
                </a>
                <ul>
                    <li><a href="#Виды пропусков">Виды пропусков</a></li>
                    <li><a href="#Сотрудничество">Сотрудничество</a></li>
                    <li><a href="#Документы">Документы</a></li>
                    <li><a href="#Информация">Информация</a></li>
                    <li><a href="#Контакты">Контакты</a></li>
                </ul>
                <hr/>
            </div>
        </div>
        <NavBarMobile/>
    </div>
}

export default NavBar