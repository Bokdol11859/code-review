'use server';
import type { GuestBook } from '@/@types/GuestBookType';

import { get } from '@/utils/axiosClient';

export const getGuestBook = async () => {
  const guestBook = await get('/api/guestbook');
  const guestBookJson = (await guestBook.data) as Promise<GuestBook>;
  return guestBookJson;
};
