import { useQuery } from '@tanstack/react-query';

import { getGuestBook } from '@/services/GuestBook';

export default function useGetGuestBook() {
  return useQuery({
    queryFn: getGuestBook,
    queryKey: ['guestBook'],
    refetchInterval: false,
    retry: 0,
    refetchOnMount: false,
  });
}
