function App() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1>React post form</h1>
					</div>
					<div className="col-12">
						<form>
							<div className="row">
								<div className="col-12 col-lg-6">
									<label htmlFor="" className="form-label">
										Autore
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Autore"
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
									/>
								</div>
								<div className="col-12 col-lg-6">
									<label htmlFor="" className="form-label">
										Autore
									</label>
									<input type="checkbox" className="form-check-input" />
								</div>
								<div className="col-12 col-lg-6">
									<label htmlFor="" className="form-label">
										Testo
									</label>
									<textarea
										name=""
										id=""
										rows="4"
										className="form-control"
										placeholder="Testo"
									></textarea>
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
