function Login () {
	return (
		<div className="login">
			<label htmlFor="login__checkbox" className="login__label"></label>
			<input type="checkbox" className="login__checkbox" name="login__checkbox" id="login__checkbox" />
			<form className="login__form">
				<button className="login__form-close">+</button>
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

export default Login;