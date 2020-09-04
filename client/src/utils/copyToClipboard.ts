import { message } from 'antd';

export default (successMsg: string, text: string): boolean => {
  if (!document.execCommand) {
    message.warning('error');
    return false;
  }
  const input = document.createElement('textarea');
  window.document.body.appendChild(input);
  input.value = text;
  input.select();
  document.execCommand('copy');
  input.remove();
  input.blur();

  if (successMsg) {
    message.config({
      top: 100,
      duration: 2,
    });
    message.success(successMsg);
  }

  return true;
};