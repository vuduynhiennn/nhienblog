import  styles from './Footer.module.scss';
import VDNimg from '../../assets/img/vuduynhien.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    console.log(VDNimg);

    return (
        <>
            <div className={styles.container}>

                <div className={styles.footer_left}>    
                    <h4 className={styles.footer_text}> 
                        Bài viết mới nhất 
                    </h4>

                    <ul className={styles.newpost_ctn}>

                        <li className={styles.post}>
                            <a href='./' rel="noreferrer">
                                <p> bài viết 1 đây là 1 bài viết demo cho mọi người cùng xem xem khi lên trang web nó sẽ như thế nào</p>
                            </a>
                        </li>

                        <li className={styles.post}>
                            <a href='./' rel="noreferrer">
                                <p> bài viết 1 đây là 1 bài viết demo cho mọi người cùng xem xem khi lên trang web nó sẽ như thế nào</p>
                            </a>
                        </li>

                        <li className={styles.post}>
                            <a href='./' rel="noreferrer">
                                <p> bài viết 1 đây là 1 bài viết demo cho mọi người cùng xem xem khi lên trang web nó sẽ như thế nào</p>
                            </a>
                        </li>

                        <li className={styles.post}>
                            <a href='./' rel="noreferrer">
                                <p> bài viết 1 đây là 1 bài viết demo cho mọi người cùng xem xem khi lên trang web nó sẽ như thế nào</p>
                            </a>
                        </li>                        
                    </ul>
                </div>

                <div className={styles.footer_right}>
                    
                    <div className={styles.footer_infor}>

                        <h4 className={styles.footer_text}> 
                            Vũ Duy Nhiên 
                        </h4>

                        <a href='https://www.facebook.com/vuduynhiennn' target='_blank' rel="noreferrer">
                            <img className={styles.VdnImg} src={ VDNimg } alt='Vu Duy Nhien' />
                        </a>

                        <div>
                            <a className={styles.iconNe}  href='https://www.facebook.com/vuduynhiennn/' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon className={`${styles.socialIcon} ${styles.fbIcon}`} icon={faFacebook} />
                            </a>

                            <a className={styles.iconNe} href='https://www.facebook.com/vuduynhiennn/' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon className={`${styles.socialIcon}  ${styles.githubIcon}`} icon={faGithub} />
                            </a>

                            <a className={styles.iconNe} href='https://www.facebook.com/vuduynhiennn/' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon className={`${styles.socialIcon}  ${styles.igIcon}`} icon={faInstagram} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.footer_xaoLon}>
                        <h4 className={styles.footer_text}> 
                            About me
                        </h4>
                        <p>
                            Tạm thời chưa biết viết gì ở đây sau này sẽ xạo l ra vài câu nói giơi thiệu hay hay, chứ giờ ngoo có biết cái gì đâu. hoặc có thể sau này đi dạy hoc bán khóa học các thứ thì sẽ có ở đây nhé :)))
                        </p>
                    </div>
                </div>  

            </div>
        </>
    )
}


export default Footer;