import React, { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePerson = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type } = location.state || {}; // 'create' or 'update'
  const { id } = location.state || {}; // for update

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [team, setTeam] = useState('');
  const [photo, setPhoto] = useState(null);
console.log("Type:",type)
console.log("ID:",id)
  //If type is 'update', fetch existing person data
  useEffect(() => {
    if (type === 'update' && id) {
      axios
        .get(`http://localhost:5000/api/v1/person/getPersonID/${id}`)
        .then((res) => {
          const person = res.data.data;
          setName(person.name);
          setRole(person.role);
          setTeam(person.team);
          // photo is not set here; user can optionally upload new
        })
        .catch((err) => console.error(err));
    }
  }, [type, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !role || !team) {
      alert('Name, Role, and Team are required');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('role', role);
    formData.append('team', team);
    if (photo) formData.append('photo', photo); // append file only if exists

    try {
      let response;
      if (type === 'update') {
        formData.append('_id', id);
        response = await axios.patch(
          'http://localhost:5000/api/v1/person/updatePerson',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );
        alert('Person updated successfully');
      } else {
        response = await axios.post(
          'http://localhost:5000/api/v1/person/createPerson',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );
        alert('Person created successfully');
      }
      console.log('Response:', response.data);
      navigate('/'); // redirect to main page after success
    } catch (err) {
      console.error(err.response?.data || err);
      alert('Error: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">
        {type === 'update' ? 'Update Person' : 'Create Person'}
      </h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

          <p>Role</p>
        <input type='radio'
          id='teacher'
          name="role"
          value={role}
          onChange={(e) => setRole('teacher')}
          required
        />
        <label for="teacher" className='p-2'>Teacher</label>
        <input type='radio'
          id='jc'
          name="role"
          value={role}
          onChange={(e) => setRole('jc')}
          required
        />
        <label for="jc" className='p-2'>JC</label>
        <input type='radio'
          id='sc'
          name="role"
          value={role}
          onChange={(e) => setRole('sc')}
          required
        />
        <label for="sc" className='p-2'>SC</label>
        {/* <Input
          type="text"
          name="role"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border rounded"
          required
        /> */}
        <Input
          type="text"
          name="team"
          placeholder="Team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <Input
          type="file"
          name="photo"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
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
