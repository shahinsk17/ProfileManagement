import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles, onSelectProfile, onDeleteProfile }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onSelectProfile={() => onSelectProfile(profile)}
          onDeleteProfile={onDeleteProfile}
        />
      ))}
    </div>
  );
};

export default ProfileList;
