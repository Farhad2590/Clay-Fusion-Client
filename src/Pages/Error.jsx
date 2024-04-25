import error from '../assets/Error 404.png'
const Error = () => {
    return (
        <div className=' w-full h-full flex flex-col items-center justify-center'>
            <img src={error} alt="" />
            <button className='btn'>Go Back Home</button>
        </div>
    );
};

export default Error;