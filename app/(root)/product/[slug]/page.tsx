import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PRODUCT_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { PortableText } from '@portabletext/react'

const Page = async ({ params }: { params: Promise<{ slug: string}> }) => {
    const slug = await (await params).slug;

    const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });
    if (!product) return notFound();

    const {
        name,
        description,
        descriptionLong,
        price,
        stock,
        categories,
        image
    } = product;

    const categoriesList = categories.split(',').map((item: string) => item.trim());

    return (
        <>
            <section className='green_container !min-h-[230px]'>
                <div className=' md:flex md:justify-evenly my-10 w-full'>
                    <Image 
                        src={urlFor(image).url()} 
                        alt="Product image"
                        width={400}
                        height={400}
                        className="w-[600px] h-[400px] rounded-[10px] object-cover"
                    />
                    <div className='flex-col justify-between'>
                        <p>{stock} Remaining</p>
                        <h1>{name}</h1>
                        <h3>{description}</h3>
                    </div>
                </div>
                

                <PortableText 
                    value={descriptionLong}
                    components={{
                        block: {
                            normal: ({children}) => <p className="mb-4">{children}</p>,
                        }
                    }}
                />

            
                <div className="flex-between gap-3 mt-5">
                    {(categoriesList?.length > 0 && (
                        <ul className="flex justify-start space-x-4">
                        {categoriesList.map((category: string, index: number) => (
                            <li key={index}>
                            <Link href={`/?query=${category.toLowerCase()}`}>
                                <span className="font-semibold">{category}</span>
                            </Link>
                            </li>
                        ))}
                        </ul>
                    ))}
                </div>

                <div className="flex-between gap-3 mt-5 w-full max-w-150">
                    <span className="text-26-semibold">${price}</span>
                    <Button className="product-card_btn">Add to Cart</Button>
                </div>

            </section>
        </>
    )
}

export default Page;