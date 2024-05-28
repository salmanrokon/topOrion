import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-slate-500  relative max-w-2xl md:max-w-7xl lg:max-w-full">
            <div>
                <img src="https://i.ibb.co/g7FFN8g/pic.png" alt="" />
            </div>
            <div className="w-full h-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="absolute top-1/4 left-1/2 tra ">
            <h1 className="text-4xl text-white animate-slide-in-left">Smart Web Solutions </h1>
                <p className=" text-3xl lg:text-9xl font-extrabold animate-slide-in-right">Top Orion</p>
                <hr className="mt-4 h-6 bg-white" />
                <p className='mt-2'>Tongue ribeye bacon swine frankfurter tri-tip andouille prosciutto. <br></br>
                 Meatball chuck jerky chicken pork belly doner ribeye pork loin beef. Pork belly boud</p>
                <div>
                    <button className="bg-red-500 btn hover:bg-indigo-400 text-white font-bold py-4 px-10  mt-4 rounded-none outline-none" >DISCOVERY</button>
                    <button className=" hover:bg-indigo-400 text-white font-bold py-4 px-10  mt-4 ml-4 btn btn-outline rounded-none">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;