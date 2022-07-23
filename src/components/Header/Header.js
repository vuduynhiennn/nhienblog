import styles from "./Header.module.scss"
import "../GlobalStyle/GlobalStyle.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faMoon} from '@fortawesome/free-solid-svg-icons'

let Header = () => {
    return (
            <div className={ styles.header }>
                <div className={ styles.first}> 
                    <a href="/">
                        <img className= { styles.logo } src="./img/logo.png" alt="logo"/>
                    </a>
                    <input className={ styles.search } type={'text'} placeholder="Search something..." />
                </div>

                <div className={ styles.last }>
                    <FontAwesomeIcon className= { styles.faMoon } icon={ faMoon } />
                </div>

            </div>
    )
}


export default Header