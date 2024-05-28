import './paralax.css'

const Paralax = () => {
    return (
        <div>
            <div className="featured-item bg-fixed pt-8 my-20">
                <div className='py-72'>
                <p className='text-9xl font-extrabold text-center text-white'>UNIQUE EXPERIENCE</p>
                <p className='text-2xl text-white text-center'>Awesome theme & customize functions for user</p>
                <div className=' text-center mt-6 space-x-3'>
                    <button className='btn btn-secondary px-12'>GET START</button>
                    <button className='btn btn-outline px-12 outline-offset-2 text-white outline-slate-50'>PURCHASE NOW</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Paralax;