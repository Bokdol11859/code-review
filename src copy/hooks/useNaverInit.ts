'use client';

import { useCallback, useEffect } from 'react';

import { Environment } from '@/utils/envorinments';

const useNaverInit = () => {
  const handleNaverInit = useCallback(() => {
    const naver = window.naver;

    const naverLogin = new naver.LoginWithNaverId({
      clientId: Environment.naverID, //ClientID
      callbackUrl: Environment.naverCallback,
      callbackHandle: true,
      isPopup: false, // 팝업 형태로 인증 여부
      loginButton: {
        color: 'green', // 색상
        type: 1, // 버튼 크기
        height: '60', // 버튼 높이
      }, // 로그인 버튼 설정
    });
  }, []);

  useEffect(() => {
    handleNaverInit();
  }, [handleNaverInit]);
};

export default useNaverInit;
