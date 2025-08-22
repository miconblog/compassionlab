'use client';

import { useState } from 'react';
import { ApplicationForm } from './ApplicationForm';
import { InquiryForm } from './InquiryForm';

export const ContactTabs = () => {
  const [activeTab, setActiveTab] = useState<'application' | 'inquiry'>(
    'application'
  );

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='flex border-b border-gray-200 mb-8'>
        <button
          onClick={() => setActiveTab('application')}
          className={`px-6 py-3 text-lg font-medium border-b-2 transition-colors ${
            activeTab === 'application'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          프로그램 신청
        </button>
        <button
          onClick={() => setActiveTab('inquiry')}
          className={`px-6 py-3 text-lg font-medium border-b-2 transition-colors ${
            activeTab === 'inquiry'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          문의하기
        </button>
      </div>

      {activeTab === 'application' && <ApplicationForm />}
      {activeTab === 'inquiry' && <InquiryForm />}
    </div>
  );
};
