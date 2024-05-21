import Sectiontitle from "../../../Components/SectionTitle";
import './Featured.css'


const Featured = () => {
    return (
        <div className="background-image bg-fixed text-white"> 
            <Sectiontitle
                subHeading={"check it out"}
                heading={"from our menu"}
            >

            </Sectiontitle>

            <div className="grid grid-cols-2 gap-4 justify-items-center py-20 px-16 mt-10 mb-10">
                <div>
                    <img className="w-[400px] h-[200px]" src="https://i.ibb.co/QnGY17K/farhad-ibrahimzade-Kp-Ol9j-V2a-JM-unsplash.jpg" alt="" />
                </div>
                <div className="space-y-2">
                    <p>March 20, 2022</p>
                    <h2>Where Can I Get Some</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatem, accusamus ut quidem facere aspernatur in nemo, qui eos possimus nulla ipsa sapiente perferendis iste vero corrupti praesentium reiciendis quasi?</p>
                    <button className="btn btn-outline text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;