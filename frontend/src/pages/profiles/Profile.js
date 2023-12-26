// import React from "react";
// import styles from "../../styles/Profile.module.css";
// // import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import { Link } from "react-router-dom";
// import Avatar from "../../components/Avatar";

// const Profile = (props) => {
//   // const { profile, imageSize = 55 } = props;
//   const { profile } = props;
//   const { id, image, owner } = profile;

//   // const currentUser = useCurrentUser();
//   // const is_owner = currentUser?.username === owner;

//   return (
//     <div
//       className={`my-3 d-flex align-items-center`}
//     >
//       <div>
//         <Link className="align-self-center" to={`/profiles/${id}`}>
//           <Avatar src={image} height={50} />
//         </Link>
//       </div>
//       <div className={`mx-2 ${styles.WordBreak}`}>
//         <strong>{owner}</strong>
//       </div>
//     </div>
//   );
// };

// export default Profile;