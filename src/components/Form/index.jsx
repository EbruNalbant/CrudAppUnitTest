const Form = ({ addUser }) => {
  // formun gönderilmesinde çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    // formdaki inputlara girilen değerlerden bir obje oluşturma
    const form = new FormData(e.target);
    const user = Object.fromEntries(form.entries());
    // kullanıcıyı listeye ekleme
    addUser(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="mt-4" htmlFor="name">
          Name
        </label>
        <input
          name="name"
          className="form-control"
          id="name"
          type="text"
          placeholder="e.g.: Ada"
        />
      </div>
      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="form-control"
          id="email"
          type="text"
          placeholder="e.g.: ada@gmail.com"
        />
      </div>
      <div className="my-4">
        <label htmlFor="age">Age</label>
        <input
          name="age"
          className="form-control"
          id="age"
          type="number"
          placeholder="e.g.: 25"
        />
      </div>
      <button className="btn btn-primary">Add User</button>
    </form>
  );
};

export default Form;
