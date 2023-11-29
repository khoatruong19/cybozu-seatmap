import React from 'react';
import { UserCircle } from 'lucide-react';
import DefaultAvatar from '../../assets/default-avatar.png';
import Logo from '../../assets/logo.jpg';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      {/* Header */}
      <div className="w-full h-20 px-6 flex items-center justify-between text-secondary border-b border-secondary ">
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            className="w-12 h-12 rounded-full object-cover shadow-sm"
            alt=""
          />
          <h1 className="text-2xl font-semibold italic font-poppins ">
            Cybozu Seatmap
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <img src={DefaultAvatar} className="w-10 h-10 object-cover" alt="" />
          <span className="font-semibold">Truong Huynh Dang Khoa</span>
        </div>
      </div>

      <div className="flex-1">
        {/* Office Title */}
        <h1 className="text-5xl font-semibold text-center mt-10 text-secondary">
          Office 101
        </h1>

        <div className="max-w-4xl mx-auto mt-10 flex items-center gap-2">
          {/* Seat */}
          <div
            draggable
            className="w-12 h-12 rounded-md bg-secondary text-white flex items-center justify-center font-semibold shadow-md"
          >
            A1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
