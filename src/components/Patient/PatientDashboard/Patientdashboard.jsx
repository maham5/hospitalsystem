import React from 'react'
import BillingReport from '../BiilingReport/BillingReport';

export default function Patientdashboard() {
    return (

    
        <div className="flex h-screen  bg-gray-100">
            
            <div className=" max-w-[750px] bg-blue-800 p-6 text-white">
                <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
                <nav>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-white hover:text-blue-300">Patient Login</a></li>
                        <li><a href="#" className="text-white hover:text-blue-300"></a></li>
                        <li><a href="#" className="text-white hover:text-blue-300">Patients</a></li>
                    </ul>
                </nav>
            </div>
            <div className="w-3/4 p-8">
               
                <BillingReport />
              
            </div>
        </div>
    );
}



       



