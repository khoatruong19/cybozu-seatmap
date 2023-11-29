import { User, Lock } from 'lucide-react';

const Auth = () => {
  return (
    <main className="w-screen h-screen bg-login-background bg-center bg-cover flex items-center justify-center	">
      <form className="w-[420px] bg-transparent border-2 border-white backdrop-blur-[20px] shadow-lg text-white rounded-xl py-8 px-10">
        <h1 className="text-4xl font-semibold text-center mb-10">Login</h1>

        <div className="flex items-center px-4 h-12 border-2 border-white rounded-3xl">
          <input
            type="text"
            placeholder="Email"
            className="flex-1 outline-none bg-transparent h-full placeholder:text-white font-semibold text-[16px]"
          />
          <User fill="#fff" />
        </div>

        <div className="flex items-center px-4 h-12 border-2 border-white rounded-3xl mt-8">
          <input
            type="password"
            placeholder="Password"
            className="flex-1 outline-none bg-transparent h-full placeholder:text-white font-semibold text-[16px]"
          />
          <Lock strokeWidth={3} />
        </div>

        <button className="w-full h-12 bg-white text-black rounded-3xl my-6 text-lg font-bold hover:opacity-80">
          Login
        </button>
      </form>
    </main>
  );
};

export default Auth;
