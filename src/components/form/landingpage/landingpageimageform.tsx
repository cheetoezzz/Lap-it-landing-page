'use client'

import React, { useState, ChangeEvent } from 'react';

const ImageUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; // Use optional chaining to handle null or undefined
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch('/api/landingpagecontent/uploadimages', { // Corrected endpoint URL
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setImageUrl(data.imageUrl);
      } else {
        console.error('Error uploading image:', data.error);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
      {imageUrl && (
        <div>
          <h3>Uploaded Image URL:</h3>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;