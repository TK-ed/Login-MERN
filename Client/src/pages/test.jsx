<div className="form-container sign-up-container">
<form className='login-form' onSubmit={handleSubmit}>
    <h1>Create Account</h1>
    <div className="social-container">
        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
    </div>
    <span>or use your email for registration</span>
    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Name" />
    <input type="email" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Sign Up</button>
</form>
</div>