

const Sports = ({topic}) => {

  return (
    <div className="md:px-6">
      <div className="md:w-[100%]">
        <div className="md:flex gap-3">
          {topic?.slice(0, 2).map((topic) => (
            <div
              key={topic?.image}
              className="relative
            mb-3 w-[100%] h-80 "
            >
              <img
                className="mb-3 w-[100%] h-80 object-cover"
                src={topic?.image}
              ></img>
              <div
                className="absolute top-0 py-12 px-10 bg-black opacity-75 text-white
                w-[100%] h-80
                "
              >
                <div>
                  <h4 className="text-xl">{topic?.title}</h4>
                  <h4 className="text-lg text-gray-200">{topic?.author}</h4>
                  <h4 className="text-sm text-gray-200">{topic?.date}</h4>
                  <p>{topic?.description} ...read more</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-[100%]">
        <div className="md:flex gap-3">
          {topic?.slice(2).map((topic) => (
            <div
              key={topic?.image}
              className="relative
            mb-3 w-[100%] h-80 "
            >
              <img
                className="mb-3 w-[100%] h-80 object-cover"
                src={topic?.image}
              ></img>
              <div
                className="absolute top-0 py-12 px-10 bg-black opacity-75 text-white
                w-[100%] h-80
                "
              >
                <div>
                  <h4 className="text-xl">{topic?.title}</h4>
                  <h4 className="text-lg text-gray-200">{topic?.author}</h4>
                  <h4 className="text-sm text-gray-200">{topic?.date}</h4>
                  <p>{topic?.description} ...read more</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
