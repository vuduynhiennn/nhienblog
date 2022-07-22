import clsx from 'clsx'
import styles from './Left.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

let Left = () => {
    return (
        <div className={ styles.left }>
            <img className={ styles.logo } src='./img/logo.png' alt='logo'/>
            <h1 className={ styles.name }> Vũ Duy Nhiên</h1>
            <div className={ styles.social }> 
                 <FontAwesomeIcon className= { styles.faInstagram } icon={ faInstagram } />        
                 <FontAwesomeIcon className= { styles.faFacebook } icon={ faFacebook } />
                 <FontAwesomeIcon className= { styles.faYoutube } icon={ faYoutube } />        
                 <FontAwesomeIcon className= { styles.faTwitter } icon={ faTwitter } />        
            </div>
            <div className={ styles.line }></div>
            <h1 className={ clsx(styles.name, styles.headings2) }>Đôi chút về Nhiên</h1>

            <p className={ styles.intro }> 
                 Nhiên tự học lập trình web từ năm 17 tuổi, Nhiên thấy công việc lập trình khá thú vị, ngoài lập trình Nhiên còn biết nhiều kĩ năng khác cũng khá thú vị, xem chi tiết tại trang skills
                 <br/>
                 <br/>  
                 Nhiên thích xem phim, lập trình, ngủ. Nhiên đang tìm cách thích đọc sách và tập thể thao
             </p>
        </div>
    )
}

export default Left