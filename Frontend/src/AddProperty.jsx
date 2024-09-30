import React, { useState } from 'react';

const AddProperty = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    address: '',
    price: '',
    description: '',
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    console.log(propertyDetails, image);
    // Reset form
    setPropertyDetails({
      title: '',
      address: '',
      price: '',
      description: '',
    });
    setImage(null);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-center mb-4">Add Property</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            value={propertyDetails.title}
            onChange={handleChange}
            placeholder="Property Title"
            className="w-full p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="address"
            value={propertyDetails.address}
            onChange={handleChange}
            placeholder="Property Address"
            className="w-full p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
            required
          />
          <input
            type="number"
            name="price"
            value={propertyDetails.price}
            onChange={handleChange}
            placeholder="Property Price"
            className="w-full p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
            required
          />
          <textarea
            name="description"
            value={propertyDetails.description}
            onChange={handleChange}
            placeholder="Property Description"
            className="w-full p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
            rows="4"
            required
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full p-2 bg-[#8ecae6] text-gray-900 rounded hover:bg-[#7cc4d7]"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
