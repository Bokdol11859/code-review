import type { GuestBook } from '@/@types/GuestBookType';

import { useQuery } from '@tanstack/react-query';

export const getGuestBook = async () => {
  const guestBook = await fetch('/api/guestbook', {
    cache: 'no-store',
  });
  return guestBook.json() as Promise<GuestBook>;
};

export default function useGetGuestBook() {
  return useQuery({
    queryFn: getGuestBook,
    queryKey: ['guestBook'],
    refetchInterval: false,
    retry: 0,
    refetchOnMount: false,
  });
}
