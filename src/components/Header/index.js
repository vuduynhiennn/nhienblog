import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

        const categoriesMenu = document.getElementById('cateMenu');

        const handleAppearMenu = () => {
            categoriesMenu.style.display = 'block';
        }

    return (
        <>
            <div className={styles.header}>

                <div className={styles.categoriesMenu} onClick = { handleAppearMenu }> 
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <ul className={styles.categories} id='cateMenu'>
                    <li>
                        <a href='/'>
                            javascipt
                        </a>
                    </li>
                    <li>html, css</li>
                    <li>reactjs</li>
                    <li>react native</li>
                    <li>express js</li>
                    <li>django</li>
                </ul>
            </div>
        </>
    )
}

export default Header;