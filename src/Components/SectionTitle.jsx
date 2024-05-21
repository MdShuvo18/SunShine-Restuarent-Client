

const Sectiontitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center md:w-3/12 mx-auto space-y-2">
            <h3 className="text-yellow-600">------{subHeading}------</h3>
            <h2 className="text-3xl uppercase border-y-4 py-2 mb-4">{heading}</h2>
        </div>
    );
};

export default Sectiontitle;