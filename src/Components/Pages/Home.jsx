import { useLoaderData } from "react-router-dom";
import Land from "../Sections/Land";
const Home = () => {
    const lands = useLoaderData();
    return (
        <div>
            <h1 className="text-3xl text-center">This is Homapage</h1>
            <div className="m-5 lg:mx-20 lg:my-16">
                <h2 className="text-center text-3xl font-semibold">Our Existing Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {
                        lands.map((land) =>
                            <Land
                                key={land.id}
                                land={land}></Land>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;