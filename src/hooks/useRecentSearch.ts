import { useEffect, useState, useCallback } from 'react';
import StorageHelper from '../utils/StorageHelper';

import AppConstants from '../utils/AppConstants';

function useRecentResearch(): [
  string[],
  (keyword: string) => void,
  () => void,
] {
  const [recentSearch, setRecentSearch] = useState<string[]>([]);

  const getRecentSearch = useCallback(async () => {
    const recentSearchList = await StorageHelper.getObject(
      AppConstants.STORAGE_KEYS.RECENT_SEARCH,
    );
    if (recentSearchList) {
      setRecentSearch(recentSearchList);
    }
  }, []);

  useEffect(() => {
    getRecentSearch();
  }, []);

  const pushRecentSearch = useCallback((keyword: string): void => {
    setRecentSearch(prev => {
      if (prev.length < AppConstants.NUMBERS.RECENT_SEARCH_LENGTH) {
        const didAlready = prev.includes(keyword);
        if (!didAlready) {
          return [keyword, ...prev];
        }
      } else {
        const didAlready = prev.includes(keyword);
        if (!didAlready) {
          prev.pop();
          return [keyword, ...prev];
        }
      }
      const index = prev.indexOf(keyword);
      prev.splice(index, 1);
      return [keyword, ...prev];
    });
  }, []);

  const clearRecentSearch = useCallback(() => {
    setRecentSearch([]);
  }, []);

  return [recentSearch, pushRecentSearch, clearRecentSearch];
}

export default useRecentResearch;
