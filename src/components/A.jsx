import React, { useState } from 'react';
import ConfirmationDialog from "../utils/ConfirmationDialog"
 
const A = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleButtonClick = () => {
    setShowDialog(true);
  };

  const handleConfirm = () => {
    // Perform the action or navigate to the specific page/component
    // For example, you can use React Router to navigate to another component/page.
    // Replace this line with your navigation logic.
    alert('Confirmed. Navigating to another page...');
    // After performing the action, close the dialog
    setShowDialog(false);
  };

  const handleCancel = () => {
    // Close the dialog without performing the action
    setShowDialog(false);
  };

  return (
    <div className="App">
      <h1>React Confirmation Dialog Example</h1>
      <button onClick={handleButtonClick}>Open Confirmation Dialog</button>
      <ConfirmationDialog
        isOpen={showDialog}
        message="Do you want to proceed?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default A;
