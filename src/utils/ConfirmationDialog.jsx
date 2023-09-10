import React from 'react';

const ConfirmationDialog = ({ isOpen, message, onConfirm, onCancel }) => {
  return (
    <div className={`confirmation-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-content">
        <p>{message}</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
