import ReactCountryFlag from "react-country-flag";

const getCountryCode = (locale) => {
  if (!locale) return null;
  return locale.split("-")[0];
};

const UserProfile = ({ user, ...rest }) => {
  return (
    <div className="container mx-auto py-8 px-4" {...rest}>
      <div className="flex gap-8 justify-center">
        <div className="bg-gray-500 w-20 h-20 rounded-full ">
          {user.picture && (
            <img
              src={user.picture}
              alt="User Profile"
              className="rounded-full"
            />
          )}
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-5xl flex-1 font-body text-primary font-semibold">
            {`Hi, I'm ${user.name}`}
          </h1>
          <p className="text-xl font-light text-primary pt-4">
            <span className="text-md">
              {user?.locale && (
                <ReactCountryFlag
                  countryCode={getCountryCode(user.locale)}
                  className="mr-2"
                />
              )}
              {user.email
                ? user.email
                : "Please login to let me know a little bit about yourself"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
