import React from 'react';
import Modal from '@material-ui/core/Modal';


export default function SimpleModal({Hide,open,Content}) {
  

  return (
      <>
      {console.log("open the fkin model")}
      <Modal
        open={open}
        onClose={Hide}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {Content}
      </Modal>
      </>
  );
}