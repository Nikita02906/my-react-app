// src/components/ProfileList.js
import React from 'react';
import ProfileCardCompo from './ProfileCardCompo'; // Assuming ProfileCard is already used here

const ProfileList = ({ profiles, onShowLocation, onDeleteProfile, onEditProfile }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {profiles.map((profile) => (
        <div key={profile.id} style={{ margin: '10px' }}>
          <ProfileCardCompo profile={profile} onShowLocation={onShowLocation} />
          <button onClick={() => onEditProfile(profile)}>Edit</button>
          <button onClick={() => onDeleteProfile(profile.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
