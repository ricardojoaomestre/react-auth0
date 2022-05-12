const UserProfile = ({ title, subtitle, photo, ...rest }) => {
  return (
    <div className="container mx-auto py-8 px-4" {...rest}>
      <div className="flex gap-8 justify-center">
        <div className="bg-gray-500 w-20 h-20 rounded-full ">
          {photo && (
            <img src={photo} alt="User Profile" className="rounded-full" />
          )}
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-5xl flex-1 font-body text-primary font-semibold">
            {title}
          </h1>
          <div className="text-xl font-light text-primary pt-4">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
