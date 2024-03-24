import React from 'react'
import ProductListCard from '../../../components/Cards/ProductListCard';
import { Link } from 'react-router-dom';

export default function TVs() {



    const imgs = [
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Eid_Sale/xcm_banners_in-bau-440x150-q19z9-9de95_440x150_eg-ar.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Eid_Sale/xcm_banners_in-bau-440x150-q19z9-efe60_440x150_eg-ar.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Eid_Sale/xcm_banners_in-bau-440x150-q19z9-tne47_440x150_eg-ar.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/tvsrevamp/brand_sonyxsz.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Eid_Sale/xcm_banners_in-bau-440x150-q19z9-utw6e_440x150_eg-ar.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Eid_Sale/xcm_banners_in-bau-440x150-q19z9-ceept_440x150_eg-ar.jpg",

    ]

    const imgAndTitles = [

        { title: 'LCD & LED TVs', img: 'https://images.samsung.com/is/image/samsung/p6pim/eg/ua50cu7000uxeg/gallery/eg-crystal-uhd-cu7000-ua50cu7000uxeg-535967698?$1300_1038_PNG$' },
        { title: 'QLED TVs', img: 'https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/qled-4k-tvs/10242023/Q70C_85_75_70_65_55_50_43.jpg?$product-details-jpg$' },

        { title: 'OLED TVs', img: 'https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/oled-tvs/03082024/S90D.jpg?$product-details-jpg$' },

        { title: '4K TVs', img: 'https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/qled-4k-tvs/10242023/QN85C.jpg?$product-details-jpg$' },

        { title: '8K TVs', img: 'https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/neoqled-4k/03112023/QN90D.jpg?$product-details-jpg$' }

    ]

    const tvProducts = [
        {
            brand: 'Sony',
            title: 'Sony Bravia X900H 65-Inch TV',
            price: 1399.99,
            rating: 4.5,
            description: 'The Sony Bravia X900H is a high-quality 4K HDR TV with excellent picture quality and smooth motion handling.',
            image: 'https://www.elarabygroup.com/media/iopt/catalog/product/cache/34632140a06eef31e4c72368460b7d49/image/35398e77/sony-hd-led-tv-32-inch-2-hdmi-1-usb-inputs-kdl-32r300e.jpg'
        },
        {
            brand: 'Sony',
            title: 'Sony A8H 55-Inch OLED TV',
            price: 1899.99,
            rating: 4.8,
            description: 'The Sony A8H OLED TV delivers stunning picture quality with deep blacks and vibrant colors, thanks to its OLED panel technology.',
            image: 'https://www.elarabygroup.com/media/iopt/catalog/product/cache/34632140a06eef31e4c72368460b7d49/image/35402339/sony-fhd-led-tv-40-inch-2-hdmi-1-usb-inputs-kdl-40r350e.jpg'
        },
        {
            brand: 'Sony',
            title: 'Sony X950H 75-Inch TV',
            price: 2799.99,
            rating: 4.7,
            description: 'The Sony X950H is a premium 4K LED TV with impressive brightness and contrast, making it ideal for both movies and gaming.',
            image: 'https://www.elarabygroup.com/media/iopt/catalog/product/cache/34632140a06eef31e4c72368460b7d49/image/4669eda0/sony-fhd-smart-led-tv-50-inch-built-in-receiver-kdl-50wf665.jpg'
        },
        {
            brand: 'Sony',
            title: 'Sony X800H 65-Inch TV',
            price: 999.99,
            rating: 4.4,
            description: 'The Sony X800H offers excellent value for its price, featuring good picture quality and a wide range of smart TV features.',
            image: 'https://www.elarabygroup.com/media/iopt/catalog/product/cache/34632140a06eef31e4c72368460b7d49/image/3845f8bc/sony-4k-smart-led-tv-55-inch-with-android-system-wi-fi-connection-4-hdmi-and-3-usb-inputs-kd-55x8000g.jpg'
        },
        {
            brand: 'Samsung',
            title: 'Samsung Q90T 75-Inch QLED TV',
            price: 3499.99,
            rating: 4.9,
            description: 'The Samsung Q90T QLED TV delivers superb picture quality with excellent contrast and color accuracy, perfect for home theater enthusiasts.',
            image: 'https://images.samsung.com/is/image/samsung/p6pim/eg/qa85qn800cuxeg/gallery/eg-qled-qn800c-qa85qn800cuxeg-536261703?$1300_1038_PNG$'
        },
        {
            brand: 'Samsung',
            title: 'Samsung TU8000 55-Inch TV',
            price: 599.99,
            rating: 4.3,
            description: 'The Samsung TU8000 is a budget-friendly 4K TV that offers good picture quality and smart TV features, making it a great choice for casual viewing.',
            image: 'https://images.samsung.com/is/image/samsung/p6pim/eg/qa65s95cauxeg/gallery/eg-oled-s95c-qa65s95cauxeg-thumb-536261508?$252_252_PNG$'
        },
        {
            brand: 'Samsung',
            title: 'Samsung Q60T 65-Inch QLED TV',
            price: 1199.99,
            rating: 4.6,
            description: 'The Samsung Q60T QLED TV combines stunning visuals with smart features, providing an immersive entertainment experience for any room.',
            image: 'https://images.samsung.com/is/image/samsung/p6pim/eg/qa65q70cauxeg/gallery/eg-qled-q70c-qa65q70cauxeg-thumb-536261273?$252_252_PNG$'
        },
        {
            brand: 'Samsung',
            title: 'Samsung The Frame 55-Inch TV',
            price: 1499.99,
            rating: 4.7,
            description: 'The Samsung Frame TV doubles as a work of art when not in use, displaying customizable artworks or your own photos, while still delivering exceptional picture quality.',
            image: 'https://images.samsung.com/is/image/samsung/p6pim/eg/qa65s90cauxeg/gallery/eg-oled-s90c-459482-qa65s90cauxeg-thumb-536557408?$252_252_PNG$'
        }
    ];
    return (
        <div className=' dark:text-white dark:bg-[#15141c] py-10' >
            <div className='ml-5'>


                <h1 className='pt-5 Heading'>TVs</h1>
                <hr />

                <h1 className='pt-10 Heading'>Shop by brand</h1>

                <div className='grid grid-cols-6 gap-1 pt-4 rounded-md'>

                    {imgs.map((img, index) => (
                        <img className='rounded-lg object-fit ' src={img} alt="" key={index} />
                    ))}
                </div>

                <h1 className='pt-10 Heading'>Featured categories</h1>


                <div className='grid grid-cols-5 gap-4 pt-16'>
                    {imgAndTitles.map((item, index) =>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='bg-[#f5f5f5] rounded-full inline-block text-center p-8 dark:bg-[#322e3f]' key={index}>
                                <img className='mx-auto mb-2 rounded-md object-fit w-44' src={item.img} alt="" />
                            </div>
                            <h1 className='text-lg font-semibold '>{item.title}</h1>
                        </div>
                    )}
                </div>


                {/*  */}
                <section className='inline-block pb-3 align-baseline'>

                    <h1 className='inline-block pt-10 mr-6 Heading'>Hot new releases </h1><h6 className='inline-block text-lg text-semibold'> See More </h6>
                </section>

                <div className='grid grid-cols-8'>

                    {tvProducts.map((item, index) => (
                        <ProductListCard id={index} name={item.title} price={item.price} image={item.image} currency={'EGY'} rating={item.rating} description={item.description} />
                    ))}
                </div>

                {/*  */}
                <section className='inline-block pb-3 align-baseline '>

                    <h1 className='inline-block pt-10 mr-6 Heading'>Most Wished For </h1><h6 className='inline-block text-lg text-semibold'> See More </h6>
                </section>
                {/*  */}
                <div className='grid grid-cols-8 gap-0'>

                    {tvProducts.map((item, index) => (
                        <ProductListCard id={index} name={item.title} price={item.price} image={item.image} currency={'EGY'} rating={item.rating} description={item.description} />
                    ))}
                </div>
                {/*  */}

                <section className='h-70 bg-[#f9b46a] flex justify-center items-start py-20 my-10' >
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/CE/Storedesigns/buying_guide_web1.jpg" alt="" />


                </section>

                {/*  */}

                <section className='inline-block pb-3 align-baseline '>

                    <h1 className='inline-block pt-10 mr-6 Heading'>Recommended  For You</h1><h6 className='inline-block text-lg text-semibold'> See More </h6>
                </section>


                <div className='grid grid-cols-8'>

                    {tvProducts.map((item, index) => (
                        <ProductListCard id={index} name={item.title} price={item.price} image={item.image} currency={'EGY'} rating={item.rating} description={item.description} />
                    ))}
                </div>

                <section className='inline-block pb-3 align-baseline '>

                    <h1 className='inline-block pt-10 mr-6 Heading'>Best Seller </h1><h6 className='inline-block text-lg text-semibold'> See More </h6>
                </section>


                <div className='grid grid-cols-8'>

                    {tvProducts.map((item, index) => (
                        <ProductListCard id={index} name={item.title} price={item.price} image={item.image} currency={'EGY'} rating={item.rating} description={item.description} />
                    ))}
                </div>

                <div className='my-5 h-16 bg-[#eeeeee] rounded-md flex items-center justify-center '>
                    <Link to='SeeMore' className='text-2xl font-semibold text-[#485769] hover:text-red-600 hover:underline'> See More</Link>
                </div>

                
            </div>
        </div>
    )
}
