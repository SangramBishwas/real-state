import PropTypes from 'prop-types';
import { RiFocus3Line } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
const Land = ({ land }) => {
    const { title, image, category, status, description } = land
    return (
        <div className="animate__animated animate__fadeInUp card card-compact bg-base-100 border hover:shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex gap-10'>
                    <div className='flex items-center gap-1'>
                        <BiCategoryAlt className='text-lg' /><span className='text-lg font-bold'>{category}</span>
                    </div>
                    <div className='flex items-center gap-1'><RiFocus3Line className='text-lg' /><span className='text-lg font-bold'>{status}</span></div>
                </div>
                <p>{description.slice(0, 90)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Property</button>
                </div>
            </div>
        </div>
    );
};

Land.propTypes = {
    land: PropTypes.object.isRequired
};

export default Land;