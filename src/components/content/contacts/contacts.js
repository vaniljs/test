import classes from './contacts.module.scss'
import BottomForm from "./bottomForm/bottomForm";
import Map from "./map/map";

function Contacts() {
    return <div className={classes.contacts} id="Контакты">
        <BottomForm/>
        <Map/>
    </div>
}

export default Contacts