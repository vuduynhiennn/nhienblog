import clsx from 'clsx'
import styles from './Blog.module.scss'
import './Blog.module.scss'
let Blog = () => {
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
                        }>Học lập trình hiệu quả, phải làm thế nào ?</p>                    
                    </a>
                    
                    <p className={
                        styles.descripttion
                    }>lên mạng học e, e lên mạng nó có nhiều cái để học lắm, từ cấu trúc dữ liệu giải thuật rồi hướng đối tượng
                    xong chọn lấy một ngôn ngữ mình thích rồi master nó rồi đi code project kiếm tiền thôi chứ ở nhà mãi ai 
                    nuôi nổi ? ôi nó nhiều thứ phải học lắm, mấy cái thuật toán đau hết cả đầu xong rồi còn hướng đối tượng quần
                    què, sr em hướng đến cuộc sống bình yên thưa ngài, rồi cơ sở dữ liệu quan hệ buốt hết cả não học mấy cái
                    ràng buộc chả hiểu mẹ gì xong rồi cái gì mà cơ sở dữ liệu phân tán nữa ai za cuộc sống này quá khắc nghiệt rồi
                    </p>

                    <div className={
                        clsx(styles.projectItemFirstPL)
                    }>26/07/2022</div>
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

export default Blog
