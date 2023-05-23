export function Form1() {
  return (
    <form aria-label="form">
      <div>
        <label htmlFor="Name">Nombre</label>
        <input type="text" name="Name" id="Name" required />
      </div>
      <div>
        <label htmlFor="LastName">Apellido</label>
        <input type="text" name="LastName" id="LastName" />
      </div>
      <div>
        <label htmlFor="BirthDate">Fecha de nacimiento</label>
        <input type="date" name="BirthDate" id="BirthDate" />
      </div>
      <div>
        <p>Género</p>

        <input type="radio" id="Gender1" name="Gender" value="male" />
        <label htmlFor="male">Male</label>

        <input type="radio" id="Gender2" name="Gender" value="female" />
        <label htmlFor="female">female</label>

        <input type="radio" id="Gender3" name="Gender" value="other" />
        <label htmlFor="Gender3">other</label>

        <input
          type="radio"
          id="Gender4"
          name="Gender"
          value="prefer not to mention"
        />
        <label htmlFor="Gender4">prefer not to mention</label>
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" id="Email" />
      </div>
      <div>
        <label htmlFor="Newsletter">
          ¿Desea recibir información de nuestra newsletter?
        </label>
        <input type="checkbox" name="Newsletter" id="Newsletter" />
      </div>
      <button type="submit">Siguiente paso</button>
    </form>
  );
}
