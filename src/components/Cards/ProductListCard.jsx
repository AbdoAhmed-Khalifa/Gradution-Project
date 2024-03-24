import React, { useState } from 'react';

import { Button, Modal } from 'flowbite-react';


export default function ProductListCard({ id, name, price, image, currency, description }) {
    const [openModal, setOpenModal] = useState(false);
    const [showButton, setShowButton] = React.useState(false);

    const handleMouseEnter = () => setShowButton(true);
    const handleMouseLeave = () => setShowButton(false);
    return (<>
        <div key={id} className='max-w-sm overflow-hidden bg-[#fafafa] m-1 object-contain w-60  duration-150  dark:bg-[#322e3f] dark:text-white rounded-md' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className='relative flex items-center justify-center'>
                <img className="rounded-sm size-40" src={image} alt={name} />
                {showButton && (<Button color="light"
                    className="absolute inset-x-0 bottom-5 left-6 w-52 text-gray-600 bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center border hover:border-gray-300 hover:bg-gray-300"
                    onClick={() => setOpenModal(true)} type="button">Quick Look </Button>

                )}
            </div>
            <div className="px-8 py-8">
                <div className='mb-2'>
                    <span className='relative text-sm font-semibold -translate-y-1/2 bottom-3 dark:text-white'>{currency}</span>
                    <span className="inline-block py-4 text-2xl font-semibold text-black dark:text-white">
                        {price}
                    </span>
                </div>
                <div className="mb-2 text-base font-semibold truncate dark:text-white">{name}</div>
                <div className="mb-2 text-base font-semibold truncate dark:text-white">{description}</div>
                <div className="mb-2 text-sm font-semibold ">⭐⭐⭐⭐⭐</div>

            </div>
        </div>


        {/* here goes the modal */}
        <>

            <Modal show={openModal} size="5xl" popup onClose={() => setOpenModal(false)} >
                <Modal.Header />
                <Modal.Body>
                    <section className='flex flex-col items-center justify-center h-5 p-10 mb-5 bg-gray-200 rounded-md'>
                        <h3 className="text-xl font-medium text-gray-900 "> Quick Look</h3>
                    </section>

                    <section className="flex items-center w-full mb-2 " >
                        <img className="w-2/4 mr-10 rounded-md " src={image} alt="Product" />

                        <div className="mb-2 text-xl font-semibold truncate dark:text-white">{name}
                            <div className='mb-2'>
                            <div className="mb-2 text-xl font-semibold dark:text-white">{description}</div>
                                <span className='relative text-sm font-semibold -translate-y-1/2 bottom-3 dark:text-white'>{currency}</span>
                                <span className="inline-block py-4 text-2xl font-semibold text-black dark:text-white">
                                    {price}
                                </span>
                            </div>
                        </div>
                    </section>

                </Modal.Body>
            </Modal>
        </>


    </>

    );
};