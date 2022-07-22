import { Link } from "react-router-dom";
import clsx from 'clsx'
import styles from './RightHeader.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faList, faWineGlass, faShieldCat } from '@fortawesome/free-solid-svg-icons'

let RightHeader = () => {
    return (
        <div className={ styles.RightHeader }>
            <ul className= { styles.menu }>
                <li className={ styles.menuItem }>
                    <Link className={ clsx('link') } to="/overview"> 
                        <p className={ clsx(styles.para)}>

                        <FontAwesomeIcon className= { styles.faBook } icon={ faBook } />
                        Overview 
                        </p>
                    </Link>
                </li>
                <li className={ styles.menuItem }>
                    <Link className={ clsx('link') } to="/project">
                        <p className={ clsx(styles.para, styles.projectNumber) }>
                        <FontAwesomeIcon className= { styles.faList } icon={ faList } />
                        Project
                        </p>
                    </Link>
                </li>
                <li className={ styles.menuItem }>
                    <Link className={ clsx('link') } to="/certificate">
                        <p className={ clsx(styles.para) }>
                        <FontAwesomeIcon className= { styles.faWineGlass } icon={ faWineGlass } />
                        Certificate
                        </p>
                    </Link>
                </li>
                <li className={ styles.menuItem }>
                    <p className={ clsx(styles.para) }>
                    <FontAwesomeIcon className= { styles.faShieldCat } icon={ faShieldCat } />
                    Blog</p>
                </li>
            </ul>
        </div>
    )
}

export default RightHeader