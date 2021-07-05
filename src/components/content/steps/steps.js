import classes from './steps.module.scss'
import img1 from './../../../store/images/step-one.png'
import img2 from './../../../store/images/step-two.png'
import img3 from './../../../store/images/step-three.png'
import ButtonForOrdering from "../elements/buttonForOrdering/buttonForOrdering";
import Heading from "../elements/heading/heading";

function Steps(props) {

    function converttime(day) {
        const arrMonths = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября']
        let D = new Date()
        D.setDate(D.getDate() + day)
        D.setMonth(D.getMonth())
        D.setFullYear(D.getFullYear())
        if (D.getDate() < 10) var curr_date = "0" + D.getDate(); else var curr_date = D.getDate()
        if (D.getMonth() < 10) {
            var curr_month = D.getMonth() + 1
        } else var curr_month = D.getMonth() + 1
        let curr_year = D.getFullYear()
        return curr_date + " " + arrMonths[curr_month] + " " + curr_year
    }

    const date = converttime(20)

    return <div className={classes.steps} id='Сотрудничество'>
        <div className={classes.heading}>
            <Heading text={'ПЛАН СОТРУДНИЧЕСТВА'}/>
        </div>
        <div className={classes.stepOne}>
            <div className={classes.titleStep}>
                <div className={classes.title}><h2>ШАГ 1</h2></div>
            </div>
            <div className={classes.elems}>
                <div className={classes.description}>
                    <p>Оставляете заявку на сайте или по номеру телефона</p>
                    <a className={classes.button} href='#Контакты'>
                        <ButtonForOrdering/>
                    </a>
                </div>
                <div className={classes.phone}>
                    <img src={img1}/>
                    <a className={classes.loader} href='#Контакты'>
                        <div className={classes.circle}></div>
                        <div className={classes.circle}></div>
                        <div className={classes.circle}></div>
                    </a>
                </div>
            </div>
        </div>
        <hr className={classes.hrHorizontalGradientToRight}/>
        <div className={classes.stepTwo}>
            <div className={classes.titleStep}>
                <div className={classes.title}><h2>ШАГ 2</h2></div>
            </div>
            <div className={classes.elems}>
                <div className={classes.documents}>
                    <img src={img2}/>
                </div>
                <div className={classes.description}>
                    <p>Оформляем документы и временный пропуск</p>
                    <p className={classes.end}>В тот же день мы подготовим документы в Департамент транспорта и
                        оформляем временный пропуск</p>
                </div>
            </div>
        </div>
        <hr className={classes.hrHorizontalGradientToLeft}/>
        <div className={classes.stepThree}>
            <div className={classes.titleStep}>
                <div className={classes.title}><h2>ШАГ 3</h2></div>
            </div>
            <div className={classes.elems}>
                <div className={classes.description}>
                    <p>Подаём заявку на ваш персональный пропуск</p>
                    <p className={classes.end}>Через 14 дней ваш персональный менеджер оповестит вас о готовности пропуска.</p>
                </div>
                <div className={classes.calendar}>
                    <img src={img3}/>
                </div>
            </div>
        </div>
        <hr className={classes.hrHorizontalGradientToRight}/>
        <div className={classes.stepFour}>
            <div className={classes.titleStep}>
                <div className={classes.title}><h2>ШАГ 4</h2></div>
            </div>
            <div className={classes.elems}>
                <div className={classes.result}>
                    <div className={classes.ramka}>
                        <p>ВАШ ПРОПУСК БУДЕТ ГОТОВ<br/><span>{date}</span></p>
                    </div>
                </div>
                <div className={classes.description}>
                    <p>Оформляем документы и временный пропуск</p>
                    <p className={classes.end}>Вам остаётся только внести оплату</p>
                </div>
            </div>
        </div>
    </div>
}

export default Steps