function Login () {
	return (
		<div className="login">
			<button className='login__showform-button' onClick={showForm}></button>
			<form className="login__form hidden">
				<button className="login__form-close" onClick={hideForm}>+</button>
				<p className="login__form-text">login</p>
				<input type="text" className="login__input" />
				<p className="login__form-text">password</p>
				<input type="text" className="login__input" />
				<div className="login__button-group">
					<button className="login__form-button">Sign in</button>
					<button className="login__form-button">Sign up</button>
				</div>
			</form>
		</div>
	)
}

function showForm (e) {
	e.preventDefault();
	const form = document.querySelector('.login__form');
	const button = document.querySelector('.login__showform-button');

	form.classList.toggle('hidden');
	button.classList.toggle('hidden');
}

function hideForm (e) {
	e.preventDefault();

	const form = document.querySelector('.login__form');
	const button = document.querySelector('.login__showform-button');

	form.classList.toggle('hidden');
	button.classList.toggle('hidden');
}

export default Login;