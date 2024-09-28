import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BillingReport() {
   const navigate= useNavigate()

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div onClick={()=>navigate(-1)}>
             <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15 19l-7-7 7-7" 
                />
            </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Billing Report</h2>
            <div className="flex justify-between">
                <div>
                    <p className="text-gray-600">Total Billed:</p>
                    <p className="text-xl font-bold">$50,000</p>
                </div>
                <div>
                    <p className="text-gray-600">Outstanding Amount:</p>
                    <p className="text-xl font-bold">$5,000</p>
                </div>
                <div>
                    <p className="text-gray-600">Paid Amount:</p>
                    <p className="text-xl font-bold">$45,000</p>
                </div>
            </div>
        </div>
    );
}
