import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import EyeIcon from './assets/icons/EyeIcon';
import Spinner from './ui/Spinner';

const LoginForm = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState<Boolean>(false);
  const [errorSubmitting, setErrorSubmitting] = useState('');
  const [inputType, setInputType] = useState<'password' | 'text'>('password');
  const router = useRouter();

  const eyeClickHandler = () => {
    setInputType(previosType => {
      if (previosType === 'text') {
        return 'password';
      } else {
        return 'text';
      }
    });
  };
  const loginFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setIsFormSubmitting(true);
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    let bodyFormData = new FormData();

    bodyFormData.append('phone_or_mail', target.email.value);
    bodyFormData.append('password', target.password.value);

    axios<{ token?: string; error?: string }>({
      method: 'post',
      url: 'https://api.iq.academy/api/account/login',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(resp => {
        if (resp.data.token) {
          localStorage.setItem('token', resp.data.token);
          router.push('/account');
        } else if (resp.data.error) {
          throw new Error(resp.data.error);
        } else throw new Error('Произошла ошибка');
      })
      .catch(err => {
        setErrorSubmitting(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setIsFormSubmitting(false);
      });
  };
  return (
    <form onSubmit={loginFormSubmitHandler}>
      <div className="pb-[30px]">
        <div className="flex items-center gap-[12px] pb-[33px]">
          <p className="text-[30px] leading-normal font-medium text-dimmedGrey inline-block">
            Регистрация
          </p>
          <div className="w-[1px] h-[22px] bg-dimmedGrey inline-block"></div>
          <p className="text-[30px] leading-normal font-medium inline-block">
            Вход
          </p>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="border border-black w-full rounded-[7px] h-[69px] mb-3 px-[21px] py-[22px]"
            placeholder="Введите email или телефон"
            name="email"
            onChange={() => setErrorSubmitting('')}
          />
          <div className="relative">
            <input
              type={inputType}
              className="border border-black w-full rounded-[7px] h-[69px]  px-[21px] py-[22px]"
              placeholder="Придумайте пароль"
              name="password"
              onChange={() => setErrorSubmitting('')}
            />
            <EyeIcon
              className="absolute top-1/2 -translate-y-1/2 right-[30px]"
              type={inputType === 'password' ? 'closed' : 'open'}
              handleEyeClick={eyeClickHandler}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-darkGreen inline-block w-full md:w-[205px] ml-auto rounded-[7px] h-[69px]"
          disabled={isFormSubmitting ? true : false}
        >
          {isFormSubmitting ? <Spinner /> : <>Войти</>}
        </button>
      </div>
      {errorSubmitting && (
        <div className="flex justify-center mt-10">
          <div className="w-[422px] bg-lightRed text-darkRed rounded-[7px] text-sm text-left pl-[25px] py-[26px]">
            {errorSubmitting}
          </div>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
