const notify = (notification) => {
  const notificationIcon = document.querySelector('.badge');
  notificationIcon.innerHTML = notification;
};

export default notify;
