import { RiFocus3Line } from "react-icons/ri";
import { FaLocationDot, FaChartArea } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Helmet } from "react-helmet-async";
const LandDetails = () => {
    const lands = useLoaderData();
    const { id } = useParams();
    const land = lands.find((item) => item.id == id);
    const {
        title,
        image,
        category,
        description,
        status,
        price,
        location,
        area,
        facilities
    } = land;

    return (
        <div className="my-5 lg:mx-20 lg:my-10">
            <Helmet>
                <title>BdLand | {title}</title>
            </Helmet>
            <h3 className="text-center text-2xl lg:text-3xl font-bold">Details of {category}</h3>
            <div className="flex flex-col lg:card-side bg-base-100 my-5 lg:my-10">
                <figure className="lg:w-full"><img className="w-full h-4/5" src={image} alt="Album" /></figure>
                <div className="card-body">             
                    <div className="space-y-4">
                        <h2 className="card-title px-5">{title}</h2>
                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-24 border-y py-3 lg:px-5'>
                            <div className='flex items-center gap-1'>
                                <FaChartArea className='text-lg' /><span className='text-lg font-bold'>{area}</span>
                            </div>
                            <div className='flex items-center gap-1'><FaLocationDot className='text-lg' /><span className='text-lg font-bold'>{location}</span></div>
                        </div>
                        <h3 className='text-lg font-semibold lg:px-5'>{facilities[0]}, {facilities[1]}</h3>
                        <p className="lg:px-5">{description}</p>
                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-24 border-y py-3 lg:px-5'>
                            <div className='flex items-center gap-3'>
                                <h3 className='text-lg font-semibold'>Price:</h3><span className='text-lg font-bold'>{price} (BDT)</span>
                            </div>
                            <div className='flex items-center gap-1'><RiFocus3Line className='text-lg' /><span className='text-lg font-bold'>For {status}</span></div>
                        </div>
                        <Link to="/" className="card-actions justify-end">
                            <button className="btn btn-primary text-lg"><IoIosArrowBack className="text-xl" /> Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandDetails;