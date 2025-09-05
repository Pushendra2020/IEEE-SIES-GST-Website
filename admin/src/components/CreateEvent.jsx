import React, { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePerson = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type } = location.state || {}; // 'create' or 'update'
  const { id } = location.state || {}; // for update

  const [eventName, setEventName] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLink, setEventLink] = useState(null);
  const [eventType, setEventType] = useState(null);
  const [eventState, setEventState] = useState(null);
  console.log("Type:", type)
  console.log("ID:", id)
  //If type is 'update', fetch existing person data
  useEffect(() => {
    if (type === 'update' && id) {
      axios
        .get(`http://localhost:5000/api/v1/event/getEventID/${id}`)
        .then((res) => {
          const event = res.data.data;
          setEventName(event.eventName);
          setEventDescription(event.eventDescription);
          setEventLink(event.eventLink);
          setEventType(event.eventType);
          setEventState(event.eventState);
          // photo is not set here; user can optionally upload new
        })
        .catch((err) => console.error(err));
    }
  }, [type, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('eventName', eventName);
    formData.append('eventDescription', eventDescription);
    formData.append('eventLink', eventLink);
    formData.append('eventType', eventType);
    formData.append('eventState', eventState);
    if (eventImage) formData.append('eventImage', eventImage); // append file only if exists

    try {
      let response;
      if (type === 'update') {
        formData.append('_id', id);
        response = await axios.patch(
          'http://localhost:5000/api/v1/event/updateEvent',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );
        alert('Event updated successfully');
      } else {
        response = await axios.post(
          'http://localhost:5000/api/v1/event/createEvent',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );
        alert('Event created successfully');
      }
      console.log('Response:', response.data);
      navigate('/event'); // redirect to main page after success
    } catch (err) {
      console.error(err.response?.data || err);
      alert('Error: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">
        {type === 'update' ? 'Update Event' : 'Create Event'}
      </h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="EventName"
          placeholder="Enter Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <Input
          type="text"
          name="Description"
          placeholder="Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <Input
          type="text"
          name="EventLink"
          placeholder="EventLink"
          value={eventLink}
          onChange={(e) => setEventLink(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <p>Event Type</p>
        <input type='radio'
          id='previous'
          name="EventType"
          value={eventType}
          onChange={(e) => setEventType('previous')}
          required
        />
        <label for="previous" className='p-2'>Previous Event</label>
        <input type='radio'
          id='current'
          name="EventType"
          value={eventType}
          onChange={(e) => setEventType('current')}
          required
        />
        <label for="current" className='p-2'>Current Event</label>
        <input type='radio'
          id='upcoming'
          name="EventType"
          value={eventType}
          onChange={(e) => setEventType('upcoming')}
          required
        />
        <label for="upcoming" className='p-2'>Upcoming Event</label>

        {/* <Input
          type="text"
          name="EventType"
          placeholder="EventType"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full p-2 border rounded"
          required
        /> */}
        {/* <Input
          type="text"
          name="EventState"
          placeholder="EventState"
          value={eventState}
          onChange={(e) => setEventState(e.target.value)}
          className="w-full p-2 border rounded"
          required
        /> */}

  <p>Event State</p>
        <input type='radio'
          id='previous'
          name="EventState"
          value={eventState}
          onChange={(e) => setEventState('previous')}
          required
        />
        <label for="previous" className='p-2'>Previous Event</label>
        <input type='radio'
          id='current'
          name="EventState"
          value={eventState}
          onChange={(e) => setEventState('current')}
          required
        />
        <label for="current" className='p-2'>Current Event</label>
        <input type='radio'
          id='upcoming'
          name="EventState"
          value={eventState}
          onChange={(e) => setEventState('upcoming')}
          required
        />
        <label for="upcoming" className='p-2'>Upcoming Event</label>


        <Input
          type="file"
          name="eventImage"
          accept="image/*"
          onChange={(e) => setEventImage(e.target.files[0])}
          className="w-full p-2 border rounded"
        />
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {type === 'update' ? 'Update' : 'Create'}
        </Button>
      </form>
    </div>
  );
};

export default CreatePerson;
