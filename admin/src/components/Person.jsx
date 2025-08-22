import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Input } from './ui/input.jsx'
import { Button } from './ui/button.jsx'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Person = () => {
  const [personData, setPersonData] = useState([])
  const [filteredData, setFilteredData] = useState([]) // ✅ store filtered results
  const [error, setError] = useState('')
  const [some_Count, setSome_Count] = useState(0)
  const [type, setType] = useState('create')
  const [searchTerm, setSearchTerm] = useState('') // ✅ search state

  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure that you want to delete?")) {
        const deleteResponse = await axios.delete(`http://localhost:5000/api/v1/person/deletePerson`, {
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

  const getPersonInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/person/getPerson`)
      console.log(response.data.data)

      if (response.data && response.data.data) {
        setPersonData(response.data.data)
        setFilteredData(response.data.data) // ✅ initialize filtered list
      } else {
        setPersonData([])
        setFilteredData([])
      }
      setError(null)
    } catch (err) {
      console.log("The Error is :", err)
    }
  }

  // fetch once when component mounts or when delete happens
  useEffect(() => {
    getPersonInfo()
  }, [some_Count])

  // ✅ filter when searchTerm changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(personData)
    } else {
      setFilteredData(
        personData.filter(person =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }
  }, [searchTerm, personData])

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
        <p className="text-gray-500 text-center mt-10">No person data found.</p>
      </>
    )
  }

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <Button>
          <NavLink to='create' state={{ type }}>Create</NavLink>
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
        {filteredData.map((person) => (
          <Card
            key={person._id}
            id={person._id}
            name={person.name}
            role={person.role}
            team={person.team}
            photo={person.photo.url}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  )
}

export default Person
