import classes from './heading.module.scss'

function Heading(props) {
    return <div className={classes.pouring}>{props.text}<hr/></div>
}

export default Heading