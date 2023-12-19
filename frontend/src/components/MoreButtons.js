import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";


// const ThreeDots = React.forwardRef(({ onClick }, ref) => (
//   <i
//     className="fas fa-ellipsis-v"
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   />
// ));

export const EditDeleteButtons = ({ handleEdit, handleDelete }) => {
  return (
    <>
    
    <Button
    variant="link"
    onClick={handleEdit}
    aria-label="edit">
      <i className="fas fa-edit" /> 
      <span>Edit</span>
    </Button>

    <Button
    variant="link"
    onClick={handleDelete}
    aria-label="delete">
      <i className="fas fa-trash-alt" />
      <span>Delete</span>
    </Button>
    </>
  );
};

export const ProfileEditButton = ({ id }) => {
  const history = useHistory();
  return (
    <>
    <Button 
    variant="link"
    onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
          ><i className="fas fa-edit" /> Edit image & Email
    </Button>

    <Button 
    variant="link"
    onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username">
          <i className="far fa-id-card" />
          Change Username
    </Button>

    <Button 
    variant="link"
    onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          Change Password
    </Button>
    </>
  );
};