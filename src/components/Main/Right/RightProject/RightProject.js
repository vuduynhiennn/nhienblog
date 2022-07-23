import clsx from 'clsx'
import styles from './RightProject.module.scss'
import './RightProject.module.scss'
let RightProject = () => {
    return (
        <div className={
            styles.RightProject
        }>
            <div className={
                styles.projectCtn
            }>
                <div className={
                    clsx(styles.projectItemFirst)
                }>  
                    <a className='link' href="/">
                        <p className={
                            clsx(styles.projectName)
                        }>Là cái trang web này á</p>                    
                    </a>
                    
                    <p className={
                        styles.descripttion
                    }>trang này e sử dụng react js ạ, bên back dùng express js, db dùng mongodb
                    </p>
                    <div className={
                        clsx(styles.projectItemFirstPL)
                    }>
                        React js
                    </div>
                </div>
                <a className='link' href='/'>
                    <div className={
                        styles.projectItemLast
                    }>
                        view
                    </div>
                </a>
            </div>

            {/* <div className={
                clsx('line')
            }></div> */}

        </div>
    )
}

export default RightProject
