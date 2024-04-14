import PropTypes from 'prop-types';
import { RiFocus3Line } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Land = ({ land }) => {
    const { id, title, image, category, status, description } = land
    return (
        <div className="card card-compact bg-base-100 border hover:shadow-xl" data-aos="fade-up"
            data-aos-duration="1000">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex lg:gap-12'>
                    <div className='flex items-center gap-1'>
                        <BiCategoryAlt className='text-lg' /><span className='text-lg font-bold'>{category}</span>
                    </div>
                    <div className='flex items-center gap-1'><RiFocus3Line className='text-lg' /><span className='text-lg font-bold'>For {status}</span></div>
                </div>
                <p>{description.slice(0, 90)}...</p>
                <Link to={`/Lands.json/${id}`} className="card-actions justify-end">
                    <button className="btn btn-primary">View Property</button>
                </Link>
            </div>
        </div>
    );
};

Land.propTypes = {
    land: PropTypes.object.isRequired
};

export default Land;