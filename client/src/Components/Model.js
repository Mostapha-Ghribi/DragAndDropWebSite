import React from 'react';
import {Modal} from '@material-ui/core';


export default function SimpleModal({Hide,open,Content}) {
  

  return (
      <>
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