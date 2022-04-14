import dayjs from 'dayjs';
import AppConstants from './AppConstants';

export const formatDate = (datetime: string): string => {
  return dayjs(datetime).format('YYYY.MM.DD');
};

export const formatDuration = (startDate: string, endDate: string): string => {
  return `${formatDate(startDate)} ~ ${formatDate(endDate)}`;
};

export const pushRecentSearch = (
  recentSearch: string[],
  keyword: string,
): string[] => {
  const searchedAlready = recentSearch.includes(keyword);
  if (searchedAlready) {
    const index = recentSearch.indexOf(keyword);
    recentSearch.splice(index, 1);
  }
  if (recentSearch.length >= AppConstants.NUMBERS.RECENT_SEARCH_LENGTH) {
    recentSearch.pop();
  }
  return [keyword, ...recentSearch];
};
