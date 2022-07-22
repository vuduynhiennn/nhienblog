import Left from './Left/Left'
import Right from './Right/Right'
import styles from './Main.module.scss'

let Main = () => {
    return (
        <div className={ styles.main }>
            <Left />
            <Right />
        </div>
    )
}


export default Main