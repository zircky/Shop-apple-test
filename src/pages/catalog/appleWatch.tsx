import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import applewatch from "@/types/Applewatch";

const appleWatch = () => {
    return (
        <main>
            <Head>
                <title>Apple Watch</title>
            </Head>
            <section className='container'>
                <div className='bg-white'>
                    <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Apple Watch</h2>
                        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                            {applewatch.map((watch) => (
                                <div key={watch.id} className='group-active: relative'>
                                    <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                                        <Image src={watch.imageSrc} alt={watch.imageAlt}/>
                                    </div>
                                    <div className='mt-4 flex justify-between'>
                                        <div>
                                            <h3 className='text-sm text-gray-700'>
                                                <Link href={watch.link}>
                                                    <span aria-hidden='true' className='absolute inset-0'/>
                                                    {watch.title}
                                                </Link>
                                            </h3>
                                            <p className='mt-1 text-sm font-medium text-gray-900'>{watch.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default appleWatch;