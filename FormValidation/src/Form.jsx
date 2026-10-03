import { useState } from "react";

const ValidationForm = () => {
  const villes = ["Agadir", "Rabat", "Casablanca", "Safi"];
  const listHobbies = ["lecture", "sport", "shopping"];

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    gender: "",
    ville: "",
    hobbies: []
  });

  const [errors, setErrors] = useState({});
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        hobbies: checked
          ? [...formData.hobbies, value]
          : formData.hobbies.filter((item) => item !== value)
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let res = {};
    const regex = /^[a-zA-Z]{2,}$/;

    if (!regex.test(formData.nom.trim())) res.nom = "Nom invalide";
    if (!regex.test(formData.prenom.trim())) res.prenom = "Prénom invalide";
    if (!formData.email.includes("@")) res.email = "Email invalide";
    if (!formData.gender) res.gender = "Genre obligatoire";
    if (!formData.ville) res.ville = "Ville obligatoire";
    if (formData.hobbies.length === 0) res.hobbies = "Choisir au moins 1 hobby";

    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = validate();
    setErrors(res);
    setDisplay(Object.keys(res).length === 0);
  };

  return (
    <div className="container p-3">
      <form onSubmit={handleSubmit}>
        {/* Nom */}
        <div className="mb-3">
          <label>Nom</label>
          <input type="text" name="nom" className="form-control" value={formData.nom} onChange={handleChange} />
          <span className="text-danger">{errors.nom}</span>
        </div>

        {/* Prénom */}
        <div className="mb-3">
          <label>Prénom</label>
          <input type="text" name="prenom" className="form-control" value={formData.prenom} onChange={handleChange} />
          <span className="text-danger">{errors.prenom}</span>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label>Email</label>
          <input type="text" name="email" className="form-control" value={formData.email} onChange={handleChange} />
          <span className="text-danger">{errors.email}</span>
        </div>

        {/* Genre */}
        <div className="mb-3">
          <label>Genre</label>
          <div>
            <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="female" onChange={handleChange} className="ms-2" /> Female
          </div>
          <span className="text-danger">{errors.gender}</span>
        </div>

        {/* Ville */}
        <div className="mb-3">
          <label>Ville</label>
          <select name="ville" value={formData.ville} className="form-select" onChange={handleChange}>
            <option value="">Choisir...</option>
            {villes.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
          <span className="text-danger">{errors.ville}</span>
        </div>

        {/* Hobbies */}
        <div className="mb-3">
          <label>Hobbies:</label>
          {listHobbies.map((h) => (
            <div key={h}>
              <input type="checkbox" name="hobbies" value={h} onChange={handleChange} /> {h}
            </div>
          ))}
          <span className="text-danger">{errors.hobbies}</span>
        </div>

        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>

      {/* Affichage */}
      {display && (
        <ul className="mt-3">
          <li>Nom: {formData.nom}</li>
          <li>Prénom: {formData.prenom}</li>
          <li>Email: {formData.email}</li>
          <li>Genre: {formData.gender}</li>
          <li>Ville: {formData.ville}</li>
          <li>Hobbies: {formData.hobbies.join(", ")}</li>
        </ul>
      )}
    </div>
  );
};

export default ValidationForm;