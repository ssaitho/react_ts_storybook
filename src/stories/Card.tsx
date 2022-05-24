import React from 'react';
import '../index.css';

type User = {
  name: string;
};

interface CardProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Card = ({ user }: CardProps) => (
  <div className='w-full bg-white rounded-md shadow text-xs'>
    <div className='border-b border-gray-200 border-solid px-8 py-5 font-bold'>
      headerテキスト
    </div>
    <div className='p-8'>
      bodyテキスト
    </div>
  </div>
);