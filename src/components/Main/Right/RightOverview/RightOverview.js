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
                        <p className={ clsx( styles.des, 'italic') }>(học lực không có gì xuất sắc, cũng không có năng lực gì đặc biệt, em chỉ có niềm đam mê, sự yêu nghề và kiên trì đến cùng hoy. Những thứ đó có thể bù đắp lại những thiếu xót được không ạ ? thưa các nhà tuyển dụng )</p>
                        <div className={ clsx(styles.tableCtn) }>
                            <p className={ clsx( styles.hanhkiemtot, 'boldTextLv2', 'textCenter') }> HẠNH KIỂM TỐT</p>
                            <table className={ clsx('tableFinalContest') }>
                                <thead>
                                    <tr>
                                        <th>Toán</th>
                                        <th>Văn</th>
                                        <th>Anh</th>
                                        <th>Lí</th>
                                        <th>Hóa</th>
                                        <th>Sinh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>7.80</td>
                                        <td>7.10</td>
                                        <td>9.10</td>
                                        <td>7.50</td>
                                        <td>6.20</td>
                                        <td>8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className={ styles.educationBox }>
                        <span className={ clsx( styles.educationYear, 'boldTextLv2') }>2017</span>
                        <p>Tốt nghiệp THCS Yên Phúc</p>
                        <p className={ clsx( styles.des, 'italic') }>(học không quá xuất sắc nhưng cũng không phải là dạng ngu không dạy được)</p>

                    </div>

                    <div className={ styles.educationBox }>
                        <span className={ clsx( styles.educationYear, 'boldTextLv2') }>2013</span>
                        <p>tốt nghiệp tiểu học B Yên Phúc </p>
                        <p className={ clsx( styles.des, 'italic') }>(học không quá xuất sắc nhưng cũng không phải là dạng ngu không dạy được)</p>
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