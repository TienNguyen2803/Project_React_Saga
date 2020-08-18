import { toast } from 'react-toastify';

export const toastError = (err) => {
  let message = null;
  if(typeof err === 'object' && err.message  ){
    message = err.message
  }
  if(message !== null &&  message !== 'undefined' &&  message !== ''){
    toast.error(message)
  }
}
