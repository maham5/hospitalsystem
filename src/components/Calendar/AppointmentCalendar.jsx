import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const AppointmentCalendar = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState(''); 
  const [Doctorname ,setDoctorname] =useState('')
  const [Patientname , setpatientname] =useState('')
  const [Gender , setGender ] =useState('')
  const [city , setcity] =useState('')
  const [addresss , setaddress] =useState('')

  const [slotInfo, setSlotInfo] = useState(null); 


  const handleSelectSlot = (slot) => {
    setSlotInfo(slot); 
    setSelectedEvent(null); 
    setNewEventTitle(''); 
    setShowModal(true); 
  };

  
  const handleSelectEvent = (event) => {
    setSelectedEvent(event); 
    setNewEventTitle(event.title); 
    setShowModal(true); 
    setDoctorname(Doctorname.title || ' ')
    setpatientname(Patientname.title || ' ')
    setcity(city.title || ' ')
    setGender(Gender.title || ' ')
    setaddress(addresss.title || ' ')
    
  };

  
  const handleSave = () => {
    if (selectedEvent) {
      
      const updatedEvents = events.map((e) =>
        e === selectedEvent ? { ...e, title: newEventTitle,Doctorname , Patientname, Gender, city , addresss } : e
      );
      setEvents(updatedEvents);
    } else {
      
      setEvents([...events, { start: slotInfo.start, end: slotInfo.end, title: newEventTitle, Doctorname ,Patientname
        , Gender , city, addresss
       }]);
    }

    setShowModal(false); 
    setNewEventTitle('');
    setDoctorname('')
    setpatientname('')
    setGender('')
    setcity('')
    setaddress('')

  };

  
  const handleDelete = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter((e) => e !== selectedEvent);
      setEvents(updatedEvents);
    }

    setShowModal(false); 
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Appointment Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelectSlot} 
        onSelectEvent={handleSelectEvent} 
      />

    
{showModal && (
  <div className="fixed inset-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-4 rounded-lg shadow-lg w-80 h-auto">
      <h2 className="text-lg font-semibold mb-4">
        {selectedEvent ? 'Edit Appointment' : 'New Appointment'}
      </h2>

      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md mb-3"
        placeholder="Appointment Title"
        value={newEventTitle}
        onChange={(e) => setNewEventTitle(e.target.value)}
      />

      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md mb-3"
        placeholder="Doctor Name"
        value={Doctorname}
        onChange={(e) => setDoctorname(e.target.value)}
      />

      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md mb-3"
        placeholder="Patient Name"
        value={Patientname}
        onChange={(e) => setpatientname(e.target.value)}
      />

      <div className="mb-3">
        <label className="block text-sm font-semibold mb-1">Gender</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={Gender === 'Male'}
              onChange={() => setGender('Male')}
              className="mr-1"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={Gender === 'Female'}
              onChange={() => setGender('Female')}
              className="mr-1"
            />
            Female
          </label>
        </div>
      </div>

      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md mb-3"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setcity(e.target.value)}
      />

      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md mb-3"
        placeholder="Enter Address"
        value={addresss}
        onChange={(e) => setaddress(e.target.value)}
      />

      <div className="flex justify-end space-x-4">
        {selectedEvent && (
          <button
            className="bg-red-500 text-white px-3 py-2 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
        <button
          className="bg-blue-500 text-white px-3 py-2 rounded"
          onClick={handleSave}
        >
          {selectedEvent ? 'Save Changes' : 'Add Appointment'}
        </button>
        <button
          className="bg-gray-300 px-3 py-2 rounded"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default AppointmentCalendar;
