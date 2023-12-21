import { dehydrate, Hydrate } from '@tanstack/react-query';

import GuestBook from '@/Component/GuestBook/GuestBook';
import { getGuestBook } from '@/hooks/useGetGuestBook';
import getQueryClient from '@/utils/getQueryClient';

export default async function HydratedGuestBook() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['guestBook'], getGuestBook);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <GuestBook />
    </Hydrate>
  );
}
