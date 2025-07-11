import { useEffect } from 'react';

export const useInfiniteScroll = (loadMore: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      console.log(scrollTop, clientHeight, scrollHeight);

      if (scrollTop + clientHeight >= scrollHeight - 4000) { // Ох уж эти магические числа.. Надо подумаь как реализовать такой функционал за счет каоличства видимых карточек
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);
};