import { Routes, Route, Link } from "react-router-dom" 
import styles from './Right.module.scss'
import RightCertificate from "./RightCertificate/RightCertificate"
import RightHeader from './RightHeader/RightHeader'
import RightOverview from './RightOverview/RightOverview'
import RightProject from "./RightProject/RightProject"

let Right = () => {
    return (
        <div className={ styles.right }> 
            <RightHeader /> 
            <Routes>
                <Route index element={<RightOverview />} />
                {/* <RightOverview /> */}
                <Route path="overview" element={ <RightOverview /> }/>
                <Route path="project" element={ <RightProject /> }/>
                <Route path="certificate" element={ <RightCertificate /> }/>
            </Routes> 
        </div>
    )
}

export default Right