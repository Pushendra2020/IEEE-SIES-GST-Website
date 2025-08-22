import React, { useEffect, useState } from 'react'
import EventCard from './EventCard.jsx'
import { Input } from './ui/input.jsx'
import { Button } from './ui/button.jsx'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Event = () => {
  const [eventData, setEventData] = useState([])
  const [filteredData, setFilteredData] = useState([]) // ✅ store filtered results
  const [error, setError] = useState('')
  const [some_Count, setSome_Count] = useState(0)
  const [type, setType] = useState('create')
  const [searchTerm, setSearchTerm] = useState('') // ✅ search state

  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure that you want to delete?")) {
        const deleteResponse = await axios.delete(`http://localhost:5000/api/v1/event/deleteEvent`, {
          data: { id },
          headers: { "Content-Type": "application/json" }
        })
        console.log(deleteResponse)
        setSome_Count(some_Count + 1)
      }
    } catch (error) {
      console.log("The Error is : ", error)
    }
  };

  const getEventInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/event/getEvent`)
      console.log(response.data.data)

      if (response.data && response.data.data) {
        setEventData(response.data.data)
        setFilteredData(response.data.data) // ✅ initialize filtered list
      } else {
        setEventData([])
        setFilteredData([])
      }
      setError(null)
    } catch (err) {
      console.log("The Error is :", err)
    }
  }
useEffect(() => {
  getEventInfo()
},[some_Count])
  // ✅ filter when searchTerm changes
  useEffect(() => {
    
    if (searchTerm.trim() === "") {
      setFilteredData(eventData)
    } else {
      setFilteredData(
        eventData.filter(event =>
          event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }
  }, [searchTerm, eventData])

  if (filteredData.length === 0) {
    return (
      <>
        <div className="flex justify-center p-4">
          <Input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <p className="text-gray-500 text-center mt-10">No Event data found.</p>
      </>
    )
  }

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <Button>
          <NavLink to='createEvent' state={{ type }}>Create</NavLink>
        </Button>

        {/* ✅ search bar */}
        <Input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {filteredData.map((event) => (
         <EventCard
    key={event._id}
    id={event._id}
    eventName={event.eventName}
    eventImage={event.eventImage.url}
    eventDescription={event.eventDescription}
    eventLink={event.eventLink}
    eventType={event.eventType}
    eventState={event.eventState}
    onDelete={handleDelete}
  />
        ))}
      </div>
    </>
  )
}

export default Event
