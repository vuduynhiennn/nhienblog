import { Link } from "react-router-dom";
import clsx from 'clsx'
import styles from './RightHeader.module.scss'
import { useLocation } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faList, faWineGlass, faShieldCat } from '@fortawesome/free-solid-svg-icons'


let RightHeader = () => {
    const sampleLocation = useLocation()
    return (
        <div className={ styles.RightHeader }>
            <ul className= { styles.menu }>
                <li className={ clsx(styles.menuItem, {'active': (sampleLocation.pathname === '/overview' || sampleLocation.pathname === '/')})}>
                    <Link className={ clsx('link') } to="/overview"> 
                        <p className={ clsx(styles.para, 'RightHeaderItem')}>

                        <FontAwesomeIcon className= { styles.faBook } icon={ faBook } />
                        Overview 
                        </p>
                    </Link>
                </li>
                <li className={ clsx(styles.menuItem, {'active': (sampleLocation.pathname === '/project')}) }>
                    <Link className={ clsx('link') } to="/project">
                        <p className={ clsx(styles.para, styles.projectNumber, 'RightHeaderItem') }>
                        <FontAwesomeIcon className= { styles.faList } icon={ faList } />
                        Project
                        </p>
                    </Link>
                </li>
                <li className={ clsx(styles.menuItem, {'active': (sampleLocation.pathname === '/certificate')}) }>
                    <Link className={ clsx('link') } to="/certificate">
                        <p className={ clsx(styles.para, 'RightHeaderItem') }>
                        <FontAwesomeIcon className= { styles.faWineGlass } icon={ faWineGlass } />
                        Certificate
                        </p>
                    </Link>
                </li>
                <li className={ clsx(styles.menuItem, {'active': (sampleLocation.pathname === '/blog')}) }>
                    <Link className={ clsx('link') } to="/blog">
                    <p className={ clsx(styles.para, 'RightHeaderItem') }>
                    <FontAwesomeIcon className= { styles.faShieldCat } icon={ faShieldCat } />
                    Blog</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default RightHeader