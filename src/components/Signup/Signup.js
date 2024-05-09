import React, { useState } from "react";
import styles from "./Signup.module.css";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie files/loginAnimation.json";
import UnstrokeEye from "../../assets/images/unstrokeeye.svg";
import StrokeEye from "../../assets/images/strokeeye.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      // Passwords match, proceed with signup logic
    } else {
      setPasswordMatch(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleConfirmPasswordChange = (e) => {
    setPasswordMatch(true);
    setConfirmPassword(e.target.value);
    //  setPasswordMatch(e.target.value === password);
  };

  return (
    <div className={styles.container}>
      <section className={styles.formSection}>
        <div className={styles.formBox}>
          <h1>Hello! Welcome</h1>
          <h2>Signup here</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label htmlFor="username" className={styles.label}>
                Your email
              </label>
              <input
                type="email"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.passwordInput}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <img src={UnstrokeEye} alt="Hide Password" />
                  ) : (
                    <img src={StrokeEye} alt="Show Password" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.passwordInput}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={styles.input}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <img src={UnstrokeEye} alt="Hide Password" />
                  ) : (
                    <img src={StrokeEye} alt="Show Password" />
                  )}
                </button>
              </div>
              {!passwordMatch && (
                <p className={styles.error}>Passwords do not match</p>
              )}
            </div>
            <button type="submit" className={styles.submitButton}>
              Sign in
            </button>
            <p className={styles.signupText}>
              Don't have an account?{" "}
              <a href="/signup" className={styles.signupLink}>
                Sign up now
              </a>
              , it's free
            </p>
          </form>
        </div>
      </section>
      <div className={styles.animationSection}>
        <Lottie
          animationData={loginAnimation}
          loop
          autoplay
          style={{ width: "110%", height: "110%", marginTop: "-50px" }}
        />
      </div>
    </div>
  );
};

export default Signup;
