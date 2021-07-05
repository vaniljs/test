import classes from './background.module.css'
import img from "../../../store/images/header2.png"
import cloud1 from './../../../store/images/cloud-01.png'
import cloud2 from './../../../store/images/cloud-02.png'
import cloud3 from './../../../store/images/cloud-03.png'
import cloud4 from './../../../store/images/cloud-04.png'
import nomer from './../../../store/images/nomer.png'
import Title from "../title/title"
import ButtonForCheckPass from "../../content/elements/buttonForCheckPass/buttonForCheckPass";
import ButtonForOrdering from "../../content/elements/buttonForOrdering/buttonForOrdering";

function Background(props) {
    return <div className={classes.background}>
        <div className={classes.cloud}>
            <img src={cloud1} className={classes.cloud1}/>
            <img src={cloud2} className={classes.cloud2}/>
            <img src={cloud3} className={classes.cloud3}/>
            <img src={cloud4} className={classes.cloud4}/>
            <div className={classes.img}>
                <img src={img}/>
            </div>
            <div className={classes.title}>
                <div className={classes.nomer}>
                    <img src={nomer}/>
                </div>
                <div className={classes.titleElem}>
                    <Title openModal={props.openModal} checkThePass={props.checkThePass}/>
                </div>
            </div>
        </div>
        <div className={classes.backgroundMobile}>
            <div className={classes.titleMobile}>
                <div className={classes.ex1}><h2>HELP CARGO</h2></div>
                <h3>ОФИЦИАЛЬНОЕ ОФОРМЛЕНИЕ И СОДЕЙСТВИЕ В ПОЛУЧЕНИИ ТРАНСПОРТНЫХ ДОКУМЕНТОВ</h3>
                <div className={classes.buttons}>
                    <a href='#Контакты'><ButtonForOrdering/></a>
                    <a onClick={props.checkThePass}><ButtonForCheckPass/></a>
                </div>
            </div>
        </div>
    </div>
}

export default Background