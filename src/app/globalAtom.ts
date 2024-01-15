import type { ThemeType } from '@/@types/ThemeType';

import { atom } from 'recoil';

import POST_CONSTANT from '@/constants/POST';

export const themeState = atom<ThemeType>({
  key: 'THEME_STATE',
  default: 'light',
});

export const postSearchModalState = atom<boolean>({
  key: 'POST_SEARCH_MODAL_STATE',
  default: false,
});

export const postCurPage = atom<number>({
  key: 'POST_PAGE_STATE',
  default: POST_CONSTANT.end,
});
