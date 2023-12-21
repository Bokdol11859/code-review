import { useMutation } from '@tanstack/react-query';

import { post } from '@/utils/axiosClient';
export const postGuestBook = async ({ comment }: { comment: string }) => {
  return await post('api/guestbook', {
    comment,
    time: new Date().toUTCString(),
  });
};

const usePostGuestBook = () => {
  return useMutation({
    mutationFn: postGuestBook,
  });
};

export default usePostGuestBook;
