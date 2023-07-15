import { useMutation } from "react-query";
import { API } from "../../Config/Api";
import { useState } from "react";
// import bootstrap
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap/";

import cssModules from "../../css/RegisterLogin.module.css";

export default function FormRegister({ show, showDaftar }) {
  const handleClose = () => showDaftar(false);

  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    jenis_kelamin: "",
    telepon: "",
    alamat: "",
  });

  const { fullname, username, email, password, jenis_kelamin, telepon, alamat } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/register", form);

      console.log("register success : ", response);

      setForm({
        fullname: "",
        username: "",
        email: "",
        password: "",
        jenis_kelamin: "",
        telepon: "",
        alamat: "",
      });
    } catch (error) {
      console.log("Register failed : ", error);
    }
  });

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Container className={cssModules.container}>
          <form className="text-center mb-5" onSubmit={(e) => handleSubmit.mutate(e)}>
            <div className={cssModules.scroll}>
              <h1 className={cssModules.h1}>Daftar</h1>
              <input type="text" onChange={handleChange} name="fullname" value={fullname} placeholder="Nama Lengkap" className={cssModules.Input} />
              <input type="text" onChange={handleChange} name="username" value={username} placeholder="Username" className={cssModules.Input} />
              <input type="email" onChange={handleChange} name="email" value={email} placeholder="Email" className={cssModules.Input} />
              <input type="password" onChange={handleChange} name="password" value={password} placeholder="Password" className={cssModules.Input} />
              <select value={jenis_kelamin} className={cssModules.Input} onChange={handleChange} name="jenis_kelamin">
                <option selected="selected" disabled>
                  Jenis Kelamin{" "}
                </option>
                <option value="lakilaki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
              <input type="number" onChange={handleChange} name="telepon" value={telepon} placeholder="Telp" className={cssModules.Input} />
              <textarea name="alamat" onChange={handleChange} value={alamat} className={cssModules.textarea} placeholder="Alamat"></textarea>
              <button onClick={handleClose} type="submit" className={cssModules.btn} style={{ marginBottom: "3rem" }}>
                Daftar
              </button>
            </div>
          </form>
        </Container>
      </Modal>
    </div>
  );
}
