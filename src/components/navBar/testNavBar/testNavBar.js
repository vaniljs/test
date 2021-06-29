import './testNavBar.scss'

function TestNavBar() {
    return <div className="test">
        <nav className="mobile-menu">
            <input type="checkbox" id="checkbox" className="mobile-menu__checkbox"/>
                <label htmlFor="checkbox" className="mobile-menu__btn">
                    <div className="mobile-menu__icon"></div>
                </label>
                <div className="mobile-menu__container">
                    <ul className="mobile-menu__list">
                        <li className="mobile-menu__item"><a href="#Виды пропусков" className="mobile-menu__link">Виды пропусков</a></li>
                        <li className="mobile-menu__item"><a href="#Информация" className="mobile-menu__link">Информация</a></li>
                        <li className="mobile-menu__item"><a href="#Документы" className="mobile-menu__link">Документы</a></li>
                        <li className="mobile-menu__item"><a href="#Контакты" className="mobile-menu__link">Контакты</a></li>
                    </ul>
                </div>
        </nav>
    </div>
}

export default TestNavBar