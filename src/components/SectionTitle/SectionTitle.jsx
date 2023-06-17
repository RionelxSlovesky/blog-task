

const SectionTitle = ({title}) => {
    return (
        <>
            <h2 className="text-4xl text-center pb-5
            md:text-6xl"><span className="relative
            after:content-['']
            after:absolute after:w-full after:border-t-4 after:border-red-600 after:left-0 after:bottom-[-18px] md:after:bottom-[-16px] after:rounded-[50%] after:h-[25px]">{title}</span></h2>
        </>
    );
};

export default SectionTitle;