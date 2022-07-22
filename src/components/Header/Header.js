import clsx from "clsx"
import styles from "./Heading.module.scss"
import "../GlobalStyle/GlobalStyle.scss"

let Heading = () => {
    return (
        <>
            <div className={ styles.heading }>
                <div className={ styles.heading.first}> 
                    <a href="/">
                        <img className= { styles.logo } src="./img/logo.png"/>
                    </a>
                </div>
            </div>
        </>
    )
}


export default Heading