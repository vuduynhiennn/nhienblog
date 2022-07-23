import styles from "./Header.module.scss"
import "../GlobalStyle/GlobalStyle.scss"

let Header = () => {
    return (
            <div className={ styles.heading }>
                <div className={ styles.heading.first}> 
                    <a href="/">
                        <img className= { styles.logo } src="./img/logo.png" alt="logo"/>
                    </a>
                </div>
            </div>
    )
}


export default Header