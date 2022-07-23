import clsx  from 'clsx'
import styles from './RightCertificate.module.scss'

let RightCertificate = () => {
    return (
        <div className={ clsx(styles.RightCertificate) }>
            <div className={ clsx('boldText', styles.myCer) }> My certificate</div>
            <div className={ clsx(styles.gallery, styles.cf) }>
                <div>
                    <img className={ clsx(styles.img) } src='.\img\certificate\onboadrding.png' alt='onboarding' />
                </div>

                <div>
                    <img className={ clsx(styles.img) } src='.\img\certificate\jsbasic.png' alt='jsbasic' />
                </div>

                <div>
                    <img className={ clsx(styles.img) } src='.\img\certificate\jsad.png' alt='javascript advanced' />
                </div>

                <div>
                    <img className={ clsx(styles.img) } src='.\img\certificate\nodejs.png' alt='node js' />
                </div>

                <div>
                    <img className={ clsx(styles.img) } src='.\img\certificate\res.png' alt='res' />
                </div>

                <div>
                    <img className={ clsx(styles.img) } src='.\img\certificate\ubun.png' alt='ubuntu' />
                </div>

            </div>
        </div>
    )
}

export default RightCertificate