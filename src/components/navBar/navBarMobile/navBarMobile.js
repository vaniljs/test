import './navBarMobile.scss'
import call from './../../../store/images/call.png'
import whatsapp from './../../../store/images/whatsapp.png'
import telegramm from './../../../store/images/telegramm.png'

function NavBarMobile() {
    return <div className="test">
        <nav className="mobile-menu">
            <div className="images">
                <img src={telegramm}/>
                <img src={whatsapp}/>
                <a href="tel:74952086494"><img src={call}/></a>
            </div>
            <div className="number">
                <a href="tel:74952086494" alink="#aaa"><span>+7 495 208 64 94</span></a>
            </div>
            <input type="checkbox" id="checkbox" className="mobile-menu__checkbox"/>
                <label htmlFor="checkbox" className="mobile-menu__btn">
                    <div className="mobile-menu__icon"></div>
                </label>
                <div className="mobile-menu__container">
                    <ul className="mobile-menu__list">
                        <li className="mobile-menu__item"><a href="#Виды пропусков">Виды пропусков</a></li>
                        <li className="mobile-menu__item"><a href="#Сотрудничество">Сотрудничество</a></li>
                        <li className="mobile-menu__item"><a href="#Документы">Документы</a></li>
                        <li className="mobile-menu__item"><a href="#Информация">Информация</a></li>
                        <li className="mobile-menu__item"><a href="#Контакты">Контакты</a></li>
                    </ul>
                </div>
        </nav>
    </div>
}

export default NavBarMobile