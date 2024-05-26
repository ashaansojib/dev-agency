import Image from 'next/image';
import React from 'react';
import bgImg from "../../public/home-mockup.png"
import { FaCheckDouble } from 'react-icons/fa6';

const Featured = () => {
    return (
        <section className='py-20 my-10 bg-gray-100 rounded-tl-full'>
            <div className="my-container grid grid-cols-1 md:grid-cols-2 justify-between">
                <div>
                    <Image src={bgImg} alt='featured' />
                </div>
                <div>
                    <div className='flex gap-3 items-center'>
                    <FaCheckDouble className='text-blue-500' />
                    <h2 className='secondary-title'>Design and UX that ensures your app will be loved</h2>
                    </div>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit ipsa qui delectus labore iusto aliquam nobis harum, illum quibusdam, sed, officiis natus quaerat ratione facere nihil quisquam accusantium consequatur.</p>

                    <div className='flex gap-3 items-center'>
                    <FaCheckDouble className='text-blue-500' />
                    <h2 className='secondary-title'>Enterprise-grade development secures reliability and quality</h2>
                    </div>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit ipsa qui delectus labore iusto aliquam nobis harum, illum quibusdam, sed, officiis natus quaerat ratione facere nihil quisquam accusantium consequatur.</p>

                    <div className='flex gap-3 items-center'>
                    <FaCheckDouble className='text-blue-500' />
                    <h2 className='secondary-title'>A proven and tested process guarantees your success</h2>
                    </div>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit ipsa qui delectus labore iusto aliquam nobis harum, illum quibusdam, sed, officiis natus quaerat ratione facere nihil quisquam accusantium consequatur.</p>

                    <div className='flex gap-3 items-center'>
                    <FaCheckDouble className='text-blue-500' />
                    <h2 className='secondary-title'>Start-to-end app development agency</h2>
                    </div>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit ipsa qui delectus labore iusto aliquam nobis harum, illum quibusdam, sed, officiis natus quaerat ratione facere nihil quisquam accusantium consequatur.</p>
                </div>
            </div>
        </section>
    );
};

export default Featured;