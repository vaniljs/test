import './navBarMobile.scss'

function NavBarMobile() {
    return <div className="container">
        <input id="toggle" type="checkbox"/>
            <label className="toggle-container" htmlFor="toggle">
                <span className="button button-toggle"></span>
            </label>
            <nav className="nav">
                <a className="nav-item" href="#Виды пропусков">Виды пропусков</a>
                <a className="nav-item" href="#Информация">Информация</a>
                <a className="nav-item" href="#Документы">Документы</a>
                <a className="nav-item" href="#Контакты">Контакты</a>
            </nav>
    </div>
}

export default NavBarMobile