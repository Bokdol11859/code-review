
import { dehydrate } from '@tanstack/react-query';

import Hydrate from '@/Component/Common/Hydrate';
import GuestBook from '@/Component/GuestBook/GuestBook';
import { getGuestBook } from '@/services/GuestBook';
import getQueryClient from '@/utils/getQueryClient';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['guestBook'], getGuestBook);
  const dehydratedState = dehydrate(queryClient, {
    shouldDehydrateQuery: () => true,
  });
  return (
      <Hydrate state={dehydratedState}>
        <GuestBook />
      </Hydrate>
  );
}
