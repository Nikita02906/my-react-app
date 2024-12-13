// src/App.js
import React, { useState } from 'react';
import ProfileList from './components/ProfileList'; // Assuming this is where your profile cards are listed
import MapComponent from './components/MapComponent'; // Assuming you are displaying map here
import profilesData from './data/profiles'; // Assuming your initial profiles data is in a separate file
import ProfileForm from './components/ProfileForm'; // Import ProfileForm here

function App() {
  const [profiles, setProfiles] = useState(profilesData); // Manage profiles in state
  const [selectedLocation, setSelectedLocation] = useState(null); // Manage map selection
  const [editingProfile, setEditingProfile] = useState(null); // Track profile being edited

  // Function to show location on the map
  const handleShowLocation = (location) => {
    setSelectedLocation(location);
  };

  // Function to add a new profile
  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  // Function to delete a profile
  const handleDeleteProfile = (profileId) => {
    setProfiles(profiles.filter(profile => profile.id !== profileId));
  };

  // Function to edit a profile
  const handleEditProfile = (updatedProfile) => {
    setProfiles(profiles.map(profile => 
      profile.id === updatedProfile.id ? updatedProfile : profile
    ));
    setEditingProfile(null); // Close the form after editing
  };

  return (
    <div>
      <h1>Profile Mapping Application</h1>

      {/* Optionally render ProfileForm to handle Add/Edit */}
      {editingProfile && (
        <ProfileForm
          profile={editingProfile}
          onAddProfile={handleAddProfile}
          onEditProfile={handleEditProfile}
        />
      )}

      {/* Display ProfileList with the profiles */}
      <ProfileList 
        profiles={profiles}
        onShowLocation={handleShowLocation}
        onDeleteProfile={handleDeleteProfile}
        onEditProfile={setEditingProfile}
      />

      {/* Display the Map Component when a location is selected */}
      {selectedLocation && <MapComponent location={selectedLocation} />}
    </div>
  );
}

export default App;
