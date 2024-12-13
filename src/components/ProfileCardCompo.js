// src/components/ProfileCardCompo.js
import React from 'react';
import { FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons
import './ProfileCardCompo.css'; // Import CSS for custom styles

const ProfileCardCompo = ({ profile, onShowLocation }) => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={profile.photo} alt={profile.name} />
      </div>
      <div className="profile-info">
        <h3>{profile.name}</h3>
        <p>{profile.description}</p>
        <h4>Interests:</h4>
        <ul>
          {profile.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <div className="social-links">
          <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} style={{ marginRight: '10px' }} />
          </a>
          <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
        </div>
        <div className="button-container">
          <button
            className="location-btn"
            onClick={() => onShowLocation(profile.address)}
          >
            <FaMapMarkerAlt style={{ marginRight: '5px' }} />
            Show on Map
          </button>
          <button
            className="summary-btn"
            onClick={() => onShowLocation(profile.address)}
          >
            Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardCompo;
