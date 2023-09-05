import LoginForm from '@/components/LoginForm';
import Adornments from '@/components/assets/images/Adornments';
import robotImage from '../components/assets/images/robot-image.png';

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-[45%_55%] h-screen bg-lightGrey md:bg-white relative overflow-hidden">
      <div className="md:bg-lightGrey">
        <div className="w-full h-full flex flex-col justify-between md:relative static">
          <div className="pt-10 ml-[50px] relative -left-[21px] top-[10px] z-50">
            <div className="flex items-center">
              <img src="/Logo.svg" alt="Logo" className="mr-3" />
              <span className="text-2xl font-semibold">iq.academy</span>
            </div>
            <div className="flex flex-col  pb-5 md:mt-7 text-[18px] font-normal text-dimmedGrey leading-7 mt-2">
              <span>Learning</span>
              <span className="pl-10">Management</span>
              <span>System</span>
            </div>
          </div>
          <Adornments className="md:w-auto mr-[10px] rotate-180 md:rotate-0 absolute md:static bottom-[600px] overflow-x-clip" />
          <img
            src={robotImage.src}
            className="absolute  -top-[22vw] lg:top-[60px] md:-right-[70px] md:top-[200px] -right-[120px] scale-[50%] md:scale-100 sm:scale-[40%] sm:-top-[180px]"
            alt="robot-image"
          />
        </div>
      </div>

      <div className="md:max-w-[450px] lg:ml-[103px] md:ml-[60px] md:pt-[148px] px-5 pt-[80px]">
        <p className=" text-[46px] leading-[54px] font-medium mb-[72px] hidden md:block">
          Настоящий мастер - это вечный ученик
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
