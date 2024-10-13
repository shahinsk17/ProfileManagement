import React, { useState } from "react";

const AdminPanel = ({ onAddProfile, onDeleteProfile }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    location: "",
    contact: "",
    interests: "",
  });

  const handleChange = (e) => {
    setNewProfile({
      ...newProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const formattedProfile = {
      ...newProfile,
      interests: newProfile.interests
        .split(",")
        .map((interest) => interest.trim()),
    };
    onAddProfile(formattedProfile);
    setNewProfile({
      name: "",
      photo: "",
      description: "",
      location: "",
      contact: "",
      interests: "",
    });
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Admin Panel</h3>
      <div className="grid grid-cols-1 gap-2">
        <input
          name="name"
          value={newProfile.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          name="photo"
          value={newProfile.photo}
          onChange={handleChange}
          placeholder="Photo URL"
          className="border p-2 rounded"
        />
        <input
          name="description"
          value={newProfile.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded"
        />
        <input
          name="location"
          value={newProfile.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 rounded"
        />
        <input
          name="contact"
          value={newProfile.contact}
          onChange={handleChange}
          placeholder="Contact"
          className="border p-2 rounded"
        />
        <input
          name="interests"
          value={newProfile.interests}
          onChange={handleChange}
          placeholder="Interests (comma separated)"
          className="border p-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-900-500 text-white p-2 rounded"
        >
          Add Profile
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
