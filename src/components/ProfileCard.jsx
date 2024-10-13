// import React from "react";

// const ProfileCard = ({ profile, onSelectProfile, onDeleteProfile }) => {
//   return (
//     <div
//       className="border p-3 rounded-lg shadow-md cursor-pointer"
//       onClick={onSelectProfile}
//     >
//       <img
//         src={profile.photo}
//         alt={profile.name}
//         className="w-full h-40 object-cover rounded"
//       />
//       <h2 className="text-xl font-semibold mt-2">{profile.name}</h2>
//       <p>{profile.description}</p>

//       <button
//         onClick={(e) => {
//           e.stopPropagation(); // Prevent the click event from bubbling up
//           onDeleteProfile(profile.id);
//         }}
//         className="text-red-500 mt-2"
//       >
//         Delete
//       </button>
//     </div>
//   );
// };

// export default ProfileCard;

import React from "react";

const ProfileCard = ({ profile, onSelectProfile, onDeleteProfile }) => {
  return (
    <div
      className="border p-3 rounded-lg shadow-md cursor-pointer"
      onClick={onSelectProfile}
    >
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{profile.name}</h2>
      <p>{profile.description}</p>

      <div className="flex justify-center mt-2">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up
            onDeleteProfile(profile.id);
          }}
          className="bg-red-500 text-white py-2 px-4 rounded transition duration-200 hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
