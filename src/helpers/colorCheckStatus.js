export const checkStatus = statusValue => {
  let statusColor;
  let backgroundColor;
  switch (true) {
    case statusValue === 'paid':
      statusColor = '#33D69F';
      backgroundColor = 'rgba(51, 214, 159,0.1)';
      break;
    case statusValue === 'pending':
      statusColor = 'rgba(255, 143, 0,1)';
      backgroundColor = 'rgba(255, 143, 0,0.1)';
      break;
    case statusValue === 'draft':
      statusColor = '#373B53';
      backgroundColor = 'rgb(55, 59, 83,0.1)';
      break;
    default:
      statusColor = 'red';
      backgroundColor = 'rgba(255, 143, 0,0.1)';
      break;
  }
  return [statusColor, backgroundColor];
};
