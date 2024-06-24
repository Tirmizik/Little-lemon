import React, { useState } from 'react';
const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form data:', formData);
      // Perform the booking logic here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="form-group">
        <label className="form-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name && 'is-invalid'}`}
          />
        </label>
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email && 'is-invalid'}`}
          />
        </label>
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label className="form-label">
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`form-control ${errors.date && 'is-invalid'}`}
          />
        </label>
        {errors.date && <span className="error-message">{errors.date}</span>}
      </div>
      <div className="form-group">
        <label className="form-label">
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`form-control ${errors.time && 'is-invalid'}`}
          />
        </label>
        {errors.time && <span className="error-message">{errors.time}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Book Now</button>
    </form>
  );
};

export default ReservationForm;
