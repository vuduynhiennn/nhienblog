import clsx from 'clsx'
import styles from './RightOverview.module.scss'

let RightOverview = () => {
    return (
        <div className={ styles.RightOverview }>
            <div className={ styles.education }>
                <p className={  clsx(styles.textEdu, 'boldText') }>EDUCATION</p>
                
                <div className={ styles.educationCtn }> 
                    <div className={ styles.educationBox }>
                        <span className={ clsx( styles.educationYear, 'boldTextLv2') }>2022</span>
                        <p>Tốt nghiệp THPT Phạm Văn Nghị</p>
                        <p className={ clsx( styles.des, 'italic') }>(điểm thi đại học: 25 điểm khối a01 )</p>
                    </div>
                    <div className={ styles.educationBox }>
                        <span className={ clsx( styles.educationYear, 'boldTextLv2') }>2017</span>
                        <p>Tốt nghiệp THCS Yên Phúc</p>
                        <p className={ clsx( styles.des, 'italic') }>(có kinh nghiệm nhiều năm làm lớp trưởng)</p>

                    </div>

                    <div className={ styles.educationBox }>
                        <span className={ clsx( styles.educationYear, 'boldTextLv2') }>2013</span>
                        <p>tốt nghiệp tiểu học B Yên Phúc </p>
                        <p className={ clsx( styles.des, 'italic') }>( có kinh nghiệm nhiều năm làm lớp trưởng)</p>
                    </div>

                    <div className={ styles.educationBox }>
                        <span className={ clsx( styles.educationYear, 'boldTextLv2') }>2007</span>
                        <p>tốt nghiệp mẫu giáo làng Trúc</p>
                        <p className={ clsx( styles.des, 'italic') }> (rất nhiều phiếu bé ngoan nhưng mà mất hết rồi)</p>

                    </div>
                </div>

            </div>

        </div>
    )
}


export default RightOverview