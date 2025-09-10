import { useState } from "react";
import axios from "axios";

function App() {
	const [formData, setFormData] = useState({
		author: "",
		title: "",
		public: false,
		body: "",
	});

	const handleChange = (e) => {
		const { value, name, type, checked } = e.target;

		const newFormData = {
			...formData,
			[name]: type == "checkbox" ? checked : value,
		};

		setFormData(newFormData);
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1>React post form</h1>
					</div>
					<div className="col-12">
						<form>
							<div className="row g-4">
								<div className="col-12 col-lg-6">
									<label htmlFor="" className="form-label">
										Autore
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Autore"
										name="author"
										value={formData.author}
										onChange={handleChange}
									/>
								</div>
								<div className="col-12 col-lg-6">
									<label htmlFor="" className="form-label">
										Titolo
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Titolo"
										name="title"
										value={formData.title}
										onChange={handleChange}
									/>
								</div>
								<div className="col-12 col-lg-6">
									<label htmlFor="" className="form-label">
										Testo
									</label>
									<textarea
										name="body"
										value={formData.body}
										id="body"
										rows="4"
										className="form-control"
										placeholder="Testo"
										onChange={handleChange}
									></textarea>
								</div>
								<div className="col-12 col-lg-6">
									<label htmlFor="" className="form-label">
										Pubblico
									</label>
									<div>
										<input
											type="checkbox"
											name="public"
											checked={formData.public}
											className="form-check-input"
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="col-12">
									<button className="btn btn-success">Invia</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
