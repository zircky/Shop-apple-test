import styles from "@/styles/index.module.scss";
import Link from "next/link";
import Image from "next/image";
import iphone from "/assets/img/iphone/img_1.webp";
import watch from "/assets/img/watch/watch2.webp";
import mac from "/assets/img/mac/img_3.webp";
import air from "/assets/img/airpods/img_4.webp"
import accessory from "/assets/img/img_5.webp";
import ipad from "/assets/img/ipad/img_6.webp";

function Catalog() {
    return (
        <section className={styles.sec2}>
            <div className={styles.contain}>
                {/*<div className={styles.row}>*/}
                {/*    <div className={styles.col}>*/}
                {/*        <Link href="/catalog/iphone" className={styles.sec2_item}>*/}
                {/*            <p className={styles.sec2_item_t1}>iPhone</p>*/}
                {/*            <p className={styles.sec2_item_t2}>от 37 990 ₽</p>*/}
                {/*            <Image src={iphone} alt='iphone' />*/}
                {/*        </Link>*/}
                {/*        <Link href="/catalog/watch" className={styles.sec2_item}>*/}
                {/*            <p className={styles.sec2_item_t1}>Apple Watch</p>*/}
                {/*            <p className={styles.sec2_item_t2}>от 29 990 ₽</p>*/}
                {/*            <Image src={watch} alt='iphone' />*/}
                {/*        </Link>*/}
                {/*        <Link href="/catalog/mac" className={styles.sec2_item}>*/}
                {/*            <p className={styles.sec2_item_t1}>Mac</p>*/}
                {/*            <p className={styles.sec2_item_t2}>от 89 990 ₽</p>*/}
                {/*            <Image src={mac} alt='mac' />*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*    <div className={styles.col}>*/}
                {/*        <div className={styles.row}>*/}
                {/*            <div className={styles.col}>*/}
                {/*                <div className={styles.row}>*/}
                {/*                    <div className={styles.col}>*/}
                {/*                        <Link href='/catalog/airpods' className={styles.sec2_item}>*/}
                {/*                            <p className={styles.sec2_item_t1}>AirPods</p>*/}
                {/*                            <p className={styles.sec2_item_t2}>от 11 990 ₽</p>*/}
                {/*                            <Image src={air} alt='air'/>*/}
                {/*                        </Link>*/}
                {/*                        <Link href='/catalog/accessory' className={styles.sec2_item}>*/}
                {/*                            <p className={styles.sec2_item_t1}>Аксессуары</p>*/}
                {/*                            <p className={styles.sec2_item_t2}>от 1 490 ₽</p>*/}
                {/*                            <Image src={accessory} alt='accessory' />*/}
                {/*                        </Link>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className={styles.col}>*/}
                {/*                <Link href="/catalog/ipad" className={styles.sec2_item}>*/}
                {/*                    <p className={styles.sec2_item_t1}>iPad</p>*/}
                {/*                    <p className={styles.sec2_item_t2}>от 34 990 ₽</p>*/}
                {/*                    <Image src={ipad} alt='ipad' />*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="grid grid-cols-4 grid-rows-4 gap-4">
                    <div className="col-span-2 ">
                        <Link href="/catalog/iphone" className={styles.sec2_item}>
                            <p className={styles.sec2_item_t1}>iPhone</p>
                            <p className={styles.sec2_item_t2}>от 37 990 ₽</p>
                            <Image src={iphone} alt='iphone' />
                        </Link>
                    </div>
                    <div>
                        <Link href='/catalog/airpods' className={styles.sec2_item}>
                            <p className={styles.sec2_item_t1}>AirPods</p>
                            <p className={styles.sec2_item_t2}>от 11 990 ₽</p>
                            <Image src={air} alt='air'/>
                        </Link>
                    </div>
                    <div className='row-span-3'>
                        <Link href="/catalog/ipad" className={styles.sec2_item}>
                            <p className={styles.sec2_item_t1}>iPad</p>
                            <p className={styles.sec2_item_t2}>от 34 990 ₽</p>
                            <Image src={ipad} alt='ipad' />
                        </Link>
                    </div>
                    <div className="col-span-2 ">
                        <Link href="/catalog/watch" className={styles.sec2_item}>
                            <p className={styles.sec2_item_t1}>Apple Watch</p>
                            <p className={styles.sec2_item_t2}>от 29 990 ₽</p>
                            <Image src={watch} alt='iphone' />
                        </Link>
                    </div>
                    <div>
                        <Link href='/catalog/accessory' className={styles.sec2_item}>
                            <p className={styles.sec2_item_t1}>Аксессуары</p>
                            <p className={styles.sec2_item_t2}>от 1 490 ₽</p>
                            <Image src={accessory} alt='accessory' />
                        </Link>
                    </div>
                    <div className="col-span-3 ">
                        <Link href="/catalog/mac" className={styles.sec2_item}>
                            <p className={styles.sec2_item_t1}>Mac</p>
                            <p className={styles.sec2_item_t2}>от 89 990 ₽</p>
                            <Image src={mac} alt='mac' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Catalog