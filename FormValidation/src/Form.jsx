import {useState} from "react";


const FormValidation =()=>{
    const [formData,setFormData]=useState({
        Nom:"",
        Prenom:"",
        Email:"",
        Genre:"",
        Ville:"",
    })
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    const handleReset=()=>{
        setFormData({
            Nom:"",
            Prenom:"",
            Email:"",
            Genre:"",
            Ville:"",
        });
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nom">Nom:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nom"
                        value={formData.Nom}
                        onChange={handleChange}
                        error={formData.Nom.length < 3 ? "Nom must be at least 3 characters long" : ""}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prenom">Prenom:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="prenom"
                        value={formData.Prenom}
                        onChange={handleChange}
                        error={formData.Prenom.length < 3 ? "Prenom must be at least 3 characters long" : ""}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formData.Email}
                        onChange={handleChange}
                        error={!/\S+@\S+\.\S+/.test(formData.Email) ? "Email is invalid" : ""}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre:</label>
                    <select
                        className="form-control"
                        id="genre"
                        value={formData.Genre}
                        onChange={handleChange}
                        error={formData.Genre === "" ? "Genre is required" : ""}
                    >
                        <option value="">Select a genre</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="ville">Ville:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ville"
                        value={formData.Ville}
                        onChange={handleChange}
                        error={formData.Ville.length < 3 ? "Ville must be at least 3 characters long" : ""}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleReset}>
                    Reset
                </button>
            </form>
        </div>
    )
}


export default FormValidation;