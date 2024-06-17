import React, { useState } from "react";
const Register = () => {
  // State pour stocker les valeurs des champs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [job, setJob] = useState("");

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mettez ici la logique pour soumettre le formulaire
    console.log("Formulaire soumis !");
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="sex" className="form-label">
                  Sex
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sex"
                  placeholder="Enter your sex"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  placeholder="Enter your description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label htmlFor="photo" className="form-label">
                  Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="photo"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>
              <div className="my-3">
                <label htmlFor="job" className="form-label">
                  Job
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="job"
                  placeholder="Enter your job"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              </div>
              
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
