import { Fragment } from "react";
import spaceX from '../../assets/image.jpg'
import classes from './Header.module.css'
import MainHeader from "./MainHeader";

const Header = props =>{
 return(
    <Fragment>
        <header className={classes.header}>
        <h1>SpaceX</h1><i style={{paddingTop:'2rem', paddingRight: '2rem'}}>history&payload</i>
        <MainHeader/>
        </header>
        <div className={classes['main-image']}>
        <img src={spaceX} alt='spacex launches'/>
        </div>
    </Fragment>
 )
}

export default Header;