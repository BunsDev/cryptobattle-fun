const Stamp = ({ address }) => {
  return (
    <div key={address} className="bg-white">
      <div className="py-6 -mt-1 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <img
              className="hidden h-40 w-40 rounded-full sm:block"
              src={`https://cdn.stamp.fyi/avatar/${address}?s=256`}
              alt={address}
            />
            <div>
              <div className="flex items-center">
                <img
                  className="h-32 w-32 rounded-full sm:hidden"
                  src={`https://cdn.stamp.fyi/avatar/${address}`}
                  alt={address}
                />
                <h2 className="ml-3 text-base sm:text-base font-normal sm:font-semibold leading-7 text-gray-900 sm:leading-9 truncate">
                  {address}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stamp;
