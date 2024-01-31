import React, { useState } from "react";

const BookTicketForm = ({
  onClose,
  onSubmit,
  defaultMovieName,
  showDetails,
}) => {
  const [formData, setFormData] = useState({
    movieName: defaultMovieName,
    movieType: showDetails?.type,
    language: showDetails?.language,
    genres: showDetails?.genres,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => onSubmit(e, formData)}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.movieName}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Type
        </label>
        <input
          type="text"
          name="type"
          value={formData.movieType}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Language
        </label>
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Genres
        </label>
        <input
          type="text"
          name="genres"
          value={formData.genres}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={onClose}
        className="bg-gray-500 text-white py-2 px-4 rounded-md ml-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default BookTicketForm;
