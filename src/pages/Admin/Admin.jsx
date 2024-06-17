import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [houses, setHouses] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    type: '',
    location: '',
    rooms: '',
    price: '',
    dimensions: '',
    description: '',
    images: [],
    owner: {
      name: '',
      sex: '',
      age: '',
      job: '',
      ownerDescription: '',
      ownerImage: ''
    }
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch('/houses.json');
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };

    fetchHouses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('owner.')) {
      setFormData({
        ...formData,
        owner: { ...formData.owner, [name.split('.')[1]]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'owner.ownerImage') {
      setFormData({
        ...formData,
        owner: { ...formData.owner, ownerImage: URL.createObjectURL(files[0]) }
      });
    } else {
      setFormData({ ...formData, images: Array.from(files).map(file => URL.createObjectURL(file)) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setHouses(houses.map(house => house.id === formData.id ? formData : house));
    } else {
      const newHouse = { ...formData, id: Date.now() };
      setHouses([...houses, newHouse]);
    }
    setEditing(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: null,
      title: '',
      type: '',
      location: '',
      rooms: '',
      price: '',
      dimensions: '',
      description: '',
      images: [],
      owner: {
        name: '',
        sex: '',
        age: '',
        job: '',
        ownerDescription: '',
        ownerImage: ''
      }
    });
  };

  const handleEdit = (house) => {
    setFormData(house);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setHouses(houses.filter(house => house.id !== id));
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container my-3 py-3">
        <h1 className="text-center">Admin Page</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <h2>{editing ? 'Edit' : 'Add'} House</h2>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <input
              type="text"
              name="type"
              className="form-control"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Number of Rooms</label>
            <input
              type="number"
              name="rooms"
              className="form-control"
              value={formData.rooms}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Dimensions</label>
            <input
              type="text"
              name="dimensions"
              className="form-control"
              value={formData.dimensions}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Images</label>
            <input
              type="file"
              name="images"
              className="form-control"
              multiple
              onChange={handleFileChange}
            />
          </div>
          <h3>Owner Information</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="owner.name"
              className="form-control"
              value={formData.owner.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Sex</label>
            <input
              type="text"
              name="owner.sex"
              className="form-control"
              value={formData.owner.sex}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="owner.age"
              className="form-control"
              value={formData.owner.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Job</label>
            <input
              type="text"
              name="owner.job"
              className="form-control"
              value={formData.owner.job}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="owner.ownerDescription"
              className="form-control"
              value={formData.owner.ownerDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Owner Image</label>
            <input
              type="file"
              name="owner.ownerImage"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            {editing ? 'Update' : 'Add'} House
          </button>
        </form>
        <hr />
        <h2>Your Houses</h2>
        <div className="row">
        {houses.map((house) => (
  <div className="col-md-4 col-sm-6 mb-3" key={house.id}>
    <div className="card h-100">
      {house.images && house.images[0] ? (
        <img
          className="card-img-top img-fluid"
          src={house.images[0]}
          alt={house.title}
        />
      ) : (
        <img
          className="card-img-top img-fluid"
          src="defaultImageUrl.jpg"
          alt={house.title}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{house.title}</h5>
        <p className="card-text">{house.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => handleEdit(house)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(house.id)}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
))}

            
         
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AdminPage;
