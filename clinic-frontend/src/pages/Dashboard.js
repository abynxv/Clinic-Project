import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [showFormId, setShowFormId] = useState(null);
  const [formData, setFormData] = useState({ age: '', appointment_date: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get('doctors/').then(res => setDoctors(res.data));
    api.get('appointments/').then(res => setAppointments(res.data));
  }, []);

  const logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/');
  };

  const toggleForm = (id) => {
    setShowFormId(showFormId === id ? null : id);
    setFormData({ patient_name: '', age: '', appointment_date: '' });
    setError('');
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e, doctorId) => {
    e.preventDefault();
    const payload = {
      ...formData,
      doctor: doctorId,
    };

    try {
      await api.post('appointments/create/', payload);
      const updatedAppointments = await api.get('appointments/');
      setAppointments(updatedAppointments.data);
      setShowFormId(null);
    } catch (err) {
      setError('Error: ' + Object.values(err.response.data).join(', '));
    }
  };

  return (
    <div className="dashboard">
      <h2>Welcome to the Clinic Dashboard</h2>
      <button onClick={logout} className="logout-btn">Logout</button>

      <div className="section">
        <h3>Doctors</h3>
        {doctors.map(doc => (
          <div key={doc.id} className="card">
            <p><strong>{doc.full_name}</strong> - {doc.speciality}</p>
            <button onClick={() => toggleForm(doc.id)}>
              {showFormId === doc.id ? 'Cancel' : 'Book Appointment'}
            </button>
            {showFormId === doc.id && (
              <form onSubmit={(e) => handleSubmit(e, doc.id)} className="appointment-form">
                <input name="patient_name" type="char" placeholder="Patient Name" value={formData.patient_name} onChange={handleChange} required />
                <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} required />
                <input name="appointment_date" type="datetime-local" value={formData.appointment_date} onChange={handleChange} required />
                <button type="submit">Confirm</button>
                {error && <p className="error-msg">{error}</p>}
              </form>
            )}
          </div>
        ))}
      </div>

      <div className="section">
        <h3>My Appointments</h3>
        {appointments.map(app => (
          <div key={app.id} className="card">
            <p><strong>Doctor:</strong> {app.doctor_name || `Dr. ${app.doctor}`}</p>
            <p><strong>Date:</strong> {new Date(app.appointment_date).toLocaleString()}</p>
            <p><strong>Age:</strong> {app.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;