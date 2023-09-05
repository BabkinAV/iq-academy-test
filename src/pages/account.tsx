import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Account = () => {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const handleLogout = () => {
    const token = localStorage.getItem('token');
    if (token) {
      axios<{ name?: string; error?: string }>({
        method: 'get',
        url: 'https://api.iq.academy/api/account/profile',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(resp => {
          if (resp.data.error) {
            throw new Error(resp.data.error);
          }
          localStorage.removeItem('token');
          router.push('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios<{ name?: string; error?: string }>({
        method: 'post',
        url: 'https://api.iq.academy/api/account/profile',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(resp => {
          if (resp.data.name) {
            setUserName(resp.data.name);
            console.log(resp.data.name);
          } else if (resp.data.error) {
            throw new Error(resp.data.error);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="pl-5 pt-5">
      Привет, {userName}!
      <div className="pt-5">
        <button
          className="bg-green-400 inline-block w-[205px] ml-auto rounded-[7px] h-[69px]"
          onClick={handleLogout}
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Account;
