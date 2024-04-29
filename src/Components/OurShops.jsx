import shop1 from '../assets/shop1.jpg'
import shop2 from '../assets/shop2.jpg'
import shop3 from '../assets/shop3.jpg'
import shop from '../assets/market.png'

const OurShops = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-semibold text-[#a86a60]">Our Shop Locations</h1>
            <div className='flex w-full gap-5'>
                <div className='relative w-[40%]'>
                    <img src={shop} alt="" className="w-full h-full" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
                        <h1 className="text-3xl font-bold">Wellcome to Clay-Fusion</h1>
                        <p className="text-center font-bold text-lg">From 11am - 08pm Clay-Fusion is open in follwing locations.</p>
                    </div>
                </div>

                <div className="w-[60%] join join-vertical">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            <div className='flex items-center gap-5'>
                                <img src={shop1} className='rounded-full' alt="" />
                                <div>
                                    <p>Factory and showroom</p>
                                    <h1 className="text-4xl">Bangladesh Shop</h1>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-content flex gap-10">
                            <div>
                                <p className='font-bold'>LOCATION</p>
                                <p className='w-40'>I.S.C. International Service Company srl, Viale Edison 61 , 20099 Sesto S.Giovanni - Milano</p>
                            </div>
                            <div>
                                <p className='font-bold'>CONTACT INFORMATION</p>
                                <p>Phone: +880123456789</p>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            <div className='flex items-center gap-5'>
                                <img src={shop2} className='rounded-full' alt="" />
                                <div>
                                    <p>Factory and showroom</p>
                                    <h1 className="text-4xl">Switzerland Shop</h1>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-content flex gap-10">
                            <div>
                                <p className='font-bold'>LOCATION</p>
                                <p className='w-40'>BGH sa
                                    Via Cattori 3.6900 Paradiso</p>
                            </div>
                            <div>
                                <p className='font-bold'>CONTACT INFORMATION</p>
                                <p>Phone: + 41 91.980.37.51</p>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            <div className='flex items-center gap-5'>
                                <img src={shop3} className='rounded-full' alt="" />
                                <div>
                                    <p>Factory and showroom</p>
                                    <h1 className="text-4xl">Greece Shop</h1>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-content flex gap-10">
                            <div>
                                <p className='font-bold'>LOCATION</p>
                                <p className='w-40'>13, Agion Saranda Street
                                    156 69 Papagou
                                    Athens – GREECE</p>
                            </div>
                            <div>
                                <p className='font-bold'>CONTACT INFORMATION</p>
                                <p>Phone: +30 694 4 51 8790</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurShops;