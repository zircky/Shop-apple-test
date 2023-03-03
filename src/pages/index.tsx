import styles from '@/styles/index.module.scss';
import Link from "next/link";
import Image from "next/image";
import iphone from './../../assets/img/iphone/img_1.webp';
import watch from './../../assets/img/watch/watch2.webp';
import mac from './../../assets/img/mac/img_3.webp';


const Index = () => {
    return (
        <main>
            <div className={styles.sec2}>
                <div className={styles.contain}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <Link href="/catalog/iphone" className={styles.sec2_item}>
                                <p className={styles.sec2_item_t1}>iPhone</p>
                                <p className={styles.sec2_item_t2}>от 37 990 ₽</p>
                                <Image src={iphone} alt='iphone' />
                            </Link>
                            <Link href="/catalog/watch" className={styles.sec2_item}>
                                <p className={styles.sec2_item_t1}>Apple Watch</p>
                                <p className={styles.sec2_item_t2}>от 29 990 ₽</p>
                                <Image src={watch} alt='iphone' />
                            </Link>
                            <Link href="/catalog/mac" className={styles.sec2_item}>
                                <p className={styles.sec2_item_t1}>Mac</p>
                                <p className={styles.sec2_item_t2}>от 89 990 ₽</p>
                                <Image src={mac} alt='mac' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Index
