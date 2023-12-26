import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";


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
          ><i className="fas fa-edit" /> 
          <span>Edit image & Email</span>
    </Button>

    <Button 
    variant="link"
    onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username">
          <i className="far fa-id-card" />
          <span>Change Username</span>
    </Button>

    <Button 
    variant="link"
    onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          <span>Change Password</span>
    </Button>
    </>
  );
};