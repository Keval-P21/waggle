import React from 'react';
import '../Css/components/Modal.css';

function MessageCardModal({
  setOpenModal,
  handleModalConfirm,
  openModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalConfirm: React.MouseEventHandler<HTMLButtonElement>;
  openModal: boolean;
}) {
  if (!openModal) return null;
  return (
    <div className='modalBackground'>
      <div className='modalContainer --narrow'>
        <div className='titleCloseBtn'>
          <button
            className='titleCloseBtn__btn --round'
            onClick={() => {
              setOpenModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className='modalBody'>
          <button
            name='unmatch'
            className='modalFooter__unmatch-button --pop'
            onClick={handleModalConfirm}
          >
            Unmatch
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageCardModal;
