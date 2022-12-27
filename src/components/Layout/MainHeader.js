import {Link} from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader =()=>{
    return (
        <header className={classes.header}>
          <nav>
            <ul>
                <li>
                  <Link to='/?tab=History'>History</Link>
                </li>
                <li>
                  <Link to='/?tab=Payload'>Payload</Link>
                </li>
            </ul>
          </nav>
        </header>
    )
}

export default MainHeader;