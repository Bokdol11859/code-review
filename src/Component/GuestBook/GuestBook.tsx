'use client';

import styled from 'styled-components';

import { Input, InputBox } from '@/Component/Input';
import useGetGuestBook from '@/hooks/useGetGuestBook';
import useInput from '@/hooks/useInput';
import usePostGuestBook from '@/hooks/usePostGuestBook';

const GuestBookList = styled.section`
  min-height: 700px;
`;

export default function GuestBook() {
  const guestBookInput = useInput('', (e) => e.target.value.length <= 150);
  const { data } = useGetGuestBook();
  const { mutate } = usePostGuestBook();

  const handleSubmitGuestBook = () => {
    mutate({
      comment: guestBookInput.value,
    });
  };
  return (
    <main>
      <GuestBookList></GuestBookList>

      <InputBox width="300px">
        <Input {...guestBookInput} />
      </InputBox>
      <button type="button" onClick={handleSubmitGuestBook}>
        쓰기
      </button>
    </main>
  );
}
