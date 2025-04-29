import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import { Theme } from '@/style/Theme';

interface IConfirmModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({ message, onConfirm, onCancel }: IConfirmModalProps) => {
  const modalContent = (
    <ConfirmModalStyle>
      <div className="modal_contents">
        <div className="modal_header">
          <button className="close_button" onClick={onCancel}>
            <FaTimes />
          </button>
        </div>
        <div className="modal_body">
          <p>{message}</p>
        </div>
        <div className="modal_footer">
          <button className="cancel_button" onClick={onCancel}>
            취소
          </button>
          <button className="confirm_button" onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </ConfirmModalStyle>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ConfirmModal;

const ConfirmModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${Theme.zIndex.overlay};

  .modal_contents {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 100%;
    .modal_header {
      display: flex;
      justify-content: flex-end;
      .close_button {
        background: none;
        border: none;
        font-size: 20px;
        color: #888888;
        cursor: pointer;
      }
    }
    .modal_body {
      text-align: center;
      margin: 20px 0;
      font-size: 16px;
    }
    .modal_footer {
      display: flex;
      justify-content: center;
      gap: 20px;
      button {
        padding: 8px 16px;
        cursor: pointer;
        font-size: ${Theme.fontSize.sm};
        border-radius: 8px;
        border: 1px solid #e3e3e3;
      }
      .cancel_button {
        background-color: white;
        color: ${Theme.colors.mainText};
      }
      .confirm_button {
        background-color: ${Theme.colors.primary};
        color: white;
      }
    }
  }
`;
