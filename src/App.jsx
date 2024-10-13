import React, { useState } from "react";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import AdminPanel from "./components/AdminPanel";
import SearchFilter from "./components/SearchFilter";
import profilesData from "./data/profilesData";

const App = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Management</h1>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ProfileList
        profiles={filteredProfiles}
        onSelectProfile={handleSelectProfile}
        onDeleteProfile={handleDeleteProfile} // Pass the delete function here
      />

      {selectedProfile && (
        <ProfileDetails
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
      <AdminPanel
        onAddProfile={handleAddProfile}
        onDeleteProfile={handleDeleteProfile}
      />
    </div>
  );
};

export default App;
