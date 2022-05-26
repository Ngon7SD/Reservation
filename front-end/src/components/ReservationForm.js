import React from "react";

export default function ReservationForm({
  handleChange,
  submitHandler,
  formData,
  handleCancel,
}) {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="first_name">
        Enter Your First Name:
        <input
          id="first_name"
          name="first_name"
          type="text"
          required
          onChange={handleChange}
          value={formData.first_name}
        />
      </label>
      <label htmlFor="first_name">
        Enter Your Last Name:
        <input
          id="last_name"
          name="last_name"
          type="text"
          required
          onChange={handleChange}
          value={formData.last_name}
        />
      </label>
      <label htmlFor="mobile_number">
        Enter Mobile Number:
        <input
          id="mobile_number"
          name="mobile_number"
          type="text"
          required
          onChange={handleChange}
          value={formData.mobile_number}
        />
      </label>
      <label htmlFor="reservation_date">
        Select Reservation Date:
        <input
          id="reservation_date"
          name="reservation_date"
          type="date"
          required
          onChange={handleChange}
          value={formData.reservation_date}
        />
      </label>
      <label htmlFor="reservation_date">
        Select Reservation Time:
        <input
          id="reservation_time"
          name="reservation_time"
          type="time"
          required
          onChange={handleChange}
          value={formData.reservation_time}
        />
      </label>
      <label htmlFor="reservation_date">
        Set Number of Guests:
        <input
          id="people"
          name="people"
          type="number"
          required
          min={1}
          onChange={handleChange}
          value={formData.people}
        />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}