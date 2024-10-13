import React from "react";

const ProfileDetails = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-96">
        <button onClick={onClose} className="text-red-500 mb-2">
          Close
        </button>
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="text-xl font-semibold mt-2">{profile.name}</h2>
        <p>{profile.description}</p>
        <p>
          <strong>Location:</strong> {profile.location}
        </p>
        <p>
          <strong>Contact:</strong> {profile.contact}
        </p>
        <p>
          <strong>Interests:</strong> {profile.interests.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
