import Head from "next/head";
import styles from "@/styles/catalog/airports.module.scss"
import Link from "next/link";
import Image from "next/image";
import airpods from "@/types/airpods";

const Airpods = () => {
    return (
        <main>
            <Head>
                <title>AirPods</title>
            </Head>
            <section className="md:container">
                <div className='grid justify-items-center'>
                    <div className="grid grid-cols-5 gap-5">
                        {airpods.map((item, idx) => (
                            <div className='m-5'>
                                <Link href={item.link}>
                                    <Image src={item.imageSrc} alt={item.imageAlt} />
                                </Link>
                                <div className='mt-2'>
                                    <div className='h-[72px]'>
                                        <Link href={item.link}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </div>
                                    <div className='h-0' />
                                    <div className='mt-5 font-bold h-[22px]'>{item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Airpods