import React, { useState, useEffect } from 'react';
import { FaCamera, FaMapMarkerAlt, FaLink } from 'react-icons/fa'; // Icons for UI

// Custom styles
import './ProfileForm.css'; // Make sure to create and apply CSS styles

const ProfileForm = ({ profile, onAddProfile, onEditProfile }) => {
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    description: '',
    address: { lat: '', lng: '' },
    interests: [],
    socialLinks: { linkedin: '', twitter: '' },
  });

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address')) {
      const [key] = name.split('.');
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [key]: value,
        },
      });
    } else if (name.startsWith('socialLinks')) {
      const [key] = name.split('.');
      setFormData({
        ...formData,
        socialLinks: {
          ...formData.socialLinks,
          [key]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profile) {
      onEditProfile(formData);
    } else {
      onAddProfile(formData);
    }
    setFormData({
      name: '',
      photo: '',
      description: '',
      address: { lat: '', lng: '' },
      interests: [],
      socialLinks: { linkedin: '', twitter: '' },
    });
  };

  return (
    <div className="profile-form-container">
      <h2>{profile ? 'Edit Profile' : 'Add New Profile'}</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter profile name"
            required
          />
        </div>

        <div className="form-group">
          <label>Profile Photo URL:</label>
          <input
            type="url"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short description"
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <div className="address-fields">
            <input
              type="number"
              name="address.lat"
              value={formData.address.lat}
              onChange={handleChange}
              placeholder="Latitude"
              required
            />
            <input
              type="number"
              name="address.lng"
              value={formData.address.lng}
              onChange={handleChange}
              placeholder="Longitude"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Interests:</label>
          <input
            type="text"
            name="interests"
            value={formData.interests.join(', ')}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value.split(', ') })}
            placeholder="Enter interests (comma separated)"
          />
        </div>

        <div className="form-group">
          <label>Social Links:</label>
          <div className="social-links">
            <input
              type="url"
              name="socialLinks.linkedin"
              value={formData.socialLinks.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
            />
            <input
              type="url"
              name="socialLinks.twitter"
              value={formData.socialLinks.twitter}
              onChange={handleChange}
              placeholder="Twitter URL"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="submit-btn">
            {profile ? 'Update Profile' : 'Add Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
