import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState([]);
  const [editingProfile, setEditingProfile] = useState(null);

  const addProfile = (profile) => {
    setProfiles([...profiles, profile]);
  };

  const editProfile = (updatedProfile) => {
    setProfiles(profiles.map((profile) => (profile.id === updatedProfile.id ? updatedProfile : profile)));
    setEditingProfile(null); // Reset editing state
  };

  const deleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ProfileList profiles={profiles} onEdit={setEditingProfile} onDelete={deleteProfile} />
      <ProfileForm profile={editingProfile} onAdd={addProfile} onEdit={editProfile} />
    </div>
  );
};

export default AdminDashboard;
