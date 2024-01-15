'use client';

import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Input, InputBox } from '@/Component/Input';
import usePostGuestBook from '@/hooks/mutations/useGuestBookMutation';
import useInput from '@/hooks/useInput';
import { getGuestBook } from '@/services/GuestBook';

const GuestBookList = styled.section`
  min-height: 700px;
`;

export default function GuestBook() {
  const guestBookInput = useInput('', (e) => e.target.value.length <= 150);
  const { data, refetch } = useQuery({
    queryFn: getGuestBook,
    queryKey: ['guestBook'],
    refetchInterval: false,
    retry: 0,
    refetchOnMount: true,
    enabled: false,
  });

  const { mutate } = usePostGuestBook();

  const handleSubmitGuestBook = () => {
    mutate(
      {
        comment: guestBookInput.value,
      },
      {
        onSuccess: () => {
          refetch();
          guestBookInput.setValue('');
        },
      }
    );
  };

  return (
    <main>
      <GuestBookList>
        {data &&
          data.guestbook &&
          Array.from(Object.values(data.guestbook)).map((value) => (
            <div key={uuidv4()}>{value.comment}</div>
          ))}
      </GuestBookList>

      <InputBox width="300px">
        <Input {...guestBookInput} />
      </InputBox>
      <button type="button" onClick={handleSubmitGuestBook}>
        쓰기
      </button>
    </main>
  );
}
