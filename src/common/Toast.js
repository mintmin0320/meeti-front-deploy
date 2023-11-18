import { toast } from 'react-toastify';

const Toast = () => {
  const options = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const showToast = {
    info: (message) => toast.info(message, options),
    success: (message) => toast.success(message, options),
    error: (message) => toast.error(message, options),
    warning: (message) => toast.warning(message, options),
    default: (message) => toast(message, options)
  };

  return showToast;
};

export default Toast;
