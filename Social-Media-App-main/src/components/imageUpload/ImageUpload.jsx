import { supabase } from "../../supabaseInit";
import React, { useState } from "react";
import "./ImageUpload.css";

function ImageUpload({ user }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!user) {
      alert("You must be logged in to upload images.");
      return;
    }

    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    // Reset progress
    setProgress(0);

    // Set a unique filename for the image
    const fileName = `${Date.now()}_${image.name}`;
    try {
      // Attempt to upload the image to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from("images")
        .upload(fileName, image, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload Error Details:", uploadError);
        alert(`Error uploading image: ${uploadError.message}`);
        return;
      }

      // Retrieve the public URL for the uploaded image
      const { data: urlData, error: urlError } = supabase.storage
        .from("images")
        .getPublicUrl(fileName);

      if (urlError) {
        console.error("Error retrieving image URL:", urlError);
        alert(`Error retrieving image URL: ${urlError.message}`);
        return;
      }

      const { error: dbError } = await supabase.from("posts").insert([
        {
          caption: caption,
          image_url: urlData.publicUrl,
          username: user?.username || "Anonymous",
          timestamp: new Date(),
        },
      ]);

      if (dbError) {
        console.error("Database Insert Error:", dbError);
        alert(`Error saving post: ${dbError.message}`);
        return;
      }

      // Set upload completion
      setProgress(100); // Complete
      setCaption("");
      setImage(null);

      // Reset progress after a short delay
      setTimeout(() => setProgress(0), 2000);
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="imageUpload">
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(e) => setCaption(e.target.value)}
        value={caption}
      />
      <progress className="progress" value={progress} max="100" />
      <div className="uploadCapBtn">
        <input className="uploadCap" type="file" onChange={handleChange} />
        <button className="primary__button uploadBtn" onClick={handleUpload}>
          Post
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
