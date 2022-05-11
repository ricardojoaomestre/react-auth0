import "./user-profile.css";

const UserProfile = ({ user, ...rest }) => {
  console.log(user);
  return <div className="container" {...rest}></div>;
};

export default UserProfile;
