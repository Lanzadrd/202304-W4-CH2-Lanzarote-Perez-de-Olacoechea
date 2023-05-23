export function Form2() {
  return (
    <form aria-label="form">
      <div>
        <label htmlFor="Username">Username</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="Password" id="password" />
      </div>
      <div>
        <label htmlFor="rpassword">Repeat Password</label>
        <input type="password" name="rpassword" id="rpassword" />
      </div>
      <div>
        <label htmlFor="account-type">Account Type</label>
        <select name="account" id="account-type">
          <option value="personal">Personal</option>
          <option value="pro">Pro</option>
          <option value="business">Business</option>
        </select>
      </div>
      <button type="submit">Atrás</button>
      <button type="submit">Siguiente paso</button>
    </form>
  );
}
