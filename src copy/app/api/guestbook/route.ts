import { ref, get, push } from 'firebase/database';
import { NextResponse, NextRequest } from 'next/server';

import { DB } from '../../firebase';

export async function GET() {
  const guestbookRef = ref(DB, '/guestbook');
  const snapShot = await get(guestbookRef);

  if (snapShot.exists()) {
    return NextResponse.json(
      {
        guestbook: await snapShot.val().comments,
      },
      {
        status: 200,
      }
    );
  }

  return new Response(
    JSON.stringify({
      error: 'firebase 설정 에러',
    }),
    {
      status: 502,
    }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  await push(ref(DB, '/guestbook'), {
    comment: body.comment,
    commentTime: body.time,
  })
    .then((val) => {
      return NextResponse.json(
        {
          guestBook: val,
        },
        {
          status: 200,
        }
      );
    })
    .catch((e) => {
      return NextResponse.json(
        {
          e,
        },
        {
          status: 502,
        }
      );
    });
}
