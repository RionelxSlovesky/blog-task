const JobSections = ({ jobs }) => {
  return (
    <div className="flex justify-center flex-wrap gap-8">
      {jobs.map((job) => (
        <div key={job.title}>
          <div
            className="relative overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {job.title}
                </h3>
              </div>
            </div>

            <div className="mt-4">
              <p className="max-w-[40ch] text-sm text-gray-500">
                {job.description}
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Application Deadline</dt>
                <dd className="text-xs text-gray-500">{job.applicationDeadline}</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Joining Date</dt>
                <dd className="text-xs text-gray-500">{job.joiningDate}</dd>
              </div>
            </dl>
            <button className="bg-cyan-300 p-3 mt-4 hover:bg-cyan-500 rounded">Apply Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobSections;
