import discount from "../../assets/discount-offer.png"
import customerSupport from "../../assets/customer-support.png"
import financial from "../../assets/financial-tools.jpg"
import property from "../../assets/property-manage.jpg"

const Services = () => {
    return (
        <div className="lg:mx-32 lg:my-10">
            <h2 className="text-center text-3xl font-semibold">Our Services</h2>
            <div className="flex flex-col items-center-center gap-7">
            <div className="flex flex-col lg:flex-row gap-7 mt-10">
                <div className="animate__animated animate__fadeInLeft bg-[#00d16926] flex items-center flex-col lg:flex-row hover:bg-orange-600 hover:text-white transition duration-300 hover:ease-in gap-7 p-7">
                    <img className="rounded-full w-40 h-40" src={discount} alt="" />
                    <div>
                        <h3 className="font-bold text-2xl mb-5">Special Discount</h3>
                        <p>Our land register discounts provide a 30% reduction in fees for digital land registration, encouraging cost-effective and efficient property transactions while promoting the adoption of digital platforms.</p>
                    </div>
                </div>
                <div className="animate__animated animate__fadeInTopRight bg-[#F8FAFC] flex items-center flex-col lg:flex-row hover:bg-blue-800 hover:text-white transition duration-300 hover:ease-in gap-7 p-[25px]">
                    <img className="rounded-full w-40 h-40" src={financial} alt="" />
                    <div>
                        <h3 className="font-bold text-2xl mb-5">Financial Tools</h3>
                        <p>Our financial tools provide users with resources such as mortgage calculators and investment trackers, enabling them to manage finances, plan for the future, and make informed decisions.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-7">
                <div className="animate__animated animate__fadeInLeft bg-[#F8FAFC] flex items-center flex-col lg:flex-row hover:bg-blue-800 hover:text-white transition duration-300 hover:ease-in gap-7 p-[25px]">
                    <img className="rounded-full w-40 h-40" src={property} alt="" />
                    <div>
                        <h3 className="font-bold text-2xl mb-5">Property Management</h3>
                        <p>Our property management simplifies tasks like rent collection, lease management, and maintenance requests, empowering landlords with efficient tools to oversee properties and communicate with tenants effectively.</p>
                    </div>
                </div>
                <div className="animate__animated animate__fadeInTopRight bg-[#00d16926] flex items-center flex-col lg:flex-row hover:bg-orange-600 hover:text-white transition duration-300 hover:ease-in gap-7 p-7">
                    <img className="rounded-full w-40 h-40" src={customerSupport} alt="" />
                    <div>
                        <h3 className="font-bold text-2xl mb-5">Customer Support</h3>
                        <p>Our customer support delivers assistance via digital channels like live chat and email, offering prompt responses and solutions to inquiries and issues, enhancing customer satisfaction and experience</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;