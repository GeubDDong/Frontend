import MyPageModel from '@/models/myPage.model';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { fetchMypageInfo } from '@/api/myPage.api';

const useMyPage = () => {
  const [myPageInfo, setMyPageInfo] = useState<MyPageModel | null>(null);
  const { isLogin } = useAuth();

  useEffect(() => {
    if (!isLogin) return;
    const fetchApi = async () => {
      try {
        const data = await fetchMypageInfo();
        setMyPageInfo(new MyPageModel(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchApi();
  }, []);

  return { myPageInfo };
};

export default useMyPage;
