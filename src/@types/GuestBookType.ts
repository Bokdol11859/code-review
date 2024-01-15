export type GuestBook = {
  guestbook: {
    [key: string]: {
      comment: string;
      commentTime: string;
    };
  };
};
