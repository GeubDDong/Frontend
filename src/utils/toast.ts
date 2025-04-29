import { toast } from 'react-toastify';

export type ToastType = 'success' | 'error' | 'info';

export const showToast = (type: ToastType, message: string) => {
  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
  };

  toast(`${icons[type]} ${message}`, { toastId: message });
};
