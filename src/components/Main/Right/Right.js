import styles from './Right.module.scss'

import RightHeader from './RightHeader/RightHeader'
import RightOverview from './RightOverview/RightOverview'

let Right = () => {
    return (
        <div className={ styles.right }> 
            <RightHeader /> 
            <RightOverview />
        </div>
    )
}

export default Right