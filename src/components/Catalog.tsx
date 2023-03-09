import styles from "@/styles/index.module.scss";
import Link from "next/link";
import Image from "next/image";
import iphone from "../../assets/img/iphone/img_1.webp";
import watch from "../../assets/img/applewatch/watch2.webp";
import mac from "../../assets/img/mac/img_3.webp";
import air from "../../assets/img/airpods/img_4.webp"
import accessory from "../../assets/img/img_5.webp";
import ipad from "../../assets/img/ipad/img_6.webp";

function Catalog() {
    return (
        <section className={styles.sec2}>
            <div className={styles.contain}>

                <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4">
                    <div className="col-span-2 ">
                        <Link href="/catalog/iphone" className={styles.sec2_item1}>
                            <p className={styles.sec2_item_t1}>iPhone</p>
                            <p className={styles.sec2_item_t2}>от 37 990 ₽</p>
                            <Image src={iphone} alt='iphone' className={styles.img1}/>
                        </Link>
                    </div>
                    <div>
                        <Link href='/catalog/Airpods' className={styles.sec2_item2}>
                            <p className={styles.sec2_item_t1}>AirPods</p>
                            <p className={styles.sec2_item_t2}>от 11 990 ₽</p>
                            <div className={styles.sec2_item_bg_img}>
                                <Image src={air} alt='air' className={styles.img2}/>
                            </div>
                        </Link>
                    </div>
                    <div className='row-span-2'>
                        <Link href="/catalog/ipad" className={styles.sec2_item3}>
                            <p className={styles.sec2_item_t1}>iPad</p>
                            <p className={styles.sec2_item_t2}>от 34 990 ₽</p>
                            <div className={styles.sec2_item_bg_img}>
                                <Image src={ipad} alt='ipad' className={styles.img3} />
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-2 ">
                        <Link href="/catalog/appleWatch" className={styles.sec2_item4}>
                            <p className={styles.sec2_item_t1}>Apple Watch</p>
                            <p className={styles.sec2_item_t2}>от 29 990 ₽</p>
                            <div className={styles.sec2_item_bg_img}>
                                <Image src={watch} alt='applewatch' className={styles.img4}/>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href='/catalog/accessory' className={styles.sec2_item5}>
                            <p className={styles.sec2_item_t1}>Аксессуары</p>
                            <p className={styles.sec2_item_t2}>от 1 490 ₽</p>
                            <Image src={accessory} alt='accessory' className={styles.img5}/>
                        </Link>
                    </div>
                    <div className="col-span-2 ">
                        <Link href="/catalog/mac" className={styles.sec2_item6}>
                            <p className={styles.sec2_item_t1}>Mac</p>
                            <p className={styles.sec2_item_t2}>от 89 990 ₽</p>
                            <Image src={mac} alt='mac' className={styles.img6}/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog;