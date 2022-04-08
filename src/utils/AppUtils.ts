import dayjs from 'dayjs';

export const formatDate = (datetime: string): string => {
  return dayjs(datetime).format('YYYY.MM.DD');
};

export const formatDuration = (startDate: string, endDate: string): string => {
  return `${formatDate(startDate)} ~ ${formatDate(endDate)}`;
};
