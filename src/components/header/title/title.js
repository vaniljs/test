import classes from './title.module.scss'
import ButtonForOrdering from "../../content/elements/buttonForOrdering/buttonForOrdering";
import ButtonForCheckPass from "../../content/elements/buttonForCheckPass/buttonForCheckPass";
import whatsapp from './../../../store/images/whatsapp.png'
import telegramm from './../../../store/images/telegramm.png'

function Title(props) {
    return <div className={classes.title}>
        <a href='#Контакты' className={classes.btn}><ButtonForOrdering/></a>
        <div onClick={props.checkThePass} className={classes.btn2}><ButtonForCheckPass/></div>
        <div className={classes.messengers}>
            <a href="tel:74952086494" alink="#aaa" className={classes.number}><span>+7 495 208 64 94</span></a>
            <a href="mailto:info@helpcargo.ru" className={classes.mail}><span>info@helpcargo.ru</span></a>
            <div className={classes.icons}>
                <a href="#"><img src={whatsapp}/></a>
                <a href="#"><img src={telegramm}/></a>
            </div>
        </div>
    </div>
}

export default Title