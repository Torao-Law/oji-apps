import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Nav, Navbar, Container } from "react-bootstrap";

import Image from "react-bootstrap/Image";
import { useState, useContext } from "react";

import cssModules from "../css/Navbar.module.css";

import FormLogin from "./Auth/FormLogin";
import FormRegister from "./Auth/FormRegister";
import { UserContext } from "../Context/UserContext";

import { Button } from "react-bootstrap";

function Navigasi(props) {
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowDaftar, setShowDaftar] = useState(false);

  // kondisi logout
  const [state, dispatch] = useContext(UserContext);
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <Navbar className={cssModules.navbar}>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image src="../assets/img/Land Tick1.png" />
              <Image src="../assets/img/train-facing-right 1.png" />
            </Link>
          </Navbar.Brand>
          <Nav>
            {/* kondisi login admin dan user */}
            <>
              {state.status ? (
                <>
                  <p className={cssModules.user}>{state.user.username}</p>
                  <Dropdown>
                    <Dropdown.Toggle style={{ background: "none", border: "none" }}>
                      <Image src="../assets/img/boy 1.png" className="border border-4 rounded-circle" style={{ width: "40px", height: "40px", marginTop: "0.6rem", cursor: "pointer" }} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="/addticket" style={{ display: "flex", textDecoration: "none" }}>
                          <Image src="../assets/img/more 1.png" style={{ width: "40px", height: "40px", marginTop: "0.6rem", cursor: "pointer" }} />
                          <p style={{ marginLeft: "1rem", marginTop: "1rem" }}>Tiket Saya</p>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <hr></hr>
                        <Link to="/" onClick={logout} style={{ display: "flex", textDecoration: "none" }}>
                          <Image src="../assets/img/logout 1.png" style={{ width: "40px", height: "40px", marginTop: "0.6rem", cursor: "pointer" }} />
                          <p style={{ marginLeft: "1rem", marginTop: "1rem" }}>Log Out</p>
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : state.isLogin ? (
                <>
                  <p className={cssModules.user}>{state?.user?.username}</p>
                  <Dropdown>
                    <Dropdown.Toggle style={{ background: "none", border: "none" }}>
                      <Image src="../assets/img/boy 1.png" className="border border-4 rounded-circle" style={{ width: "40px", height: "40px", marginTop: "0.6rem", cursor: "pointer" }} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="/cetak" style={{ display: "flex", textDecoration: "none" }}>
                          <Image src="../assets/img/ticket 1.png" style={{ width: "40px", height: "40px", marginTop: "0.6rem", cursor: "pointer" }} />
                          <p style={{ marginLeft: "1rem", marginTop: "1rem" }}>Tiket Saya</p>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/invoice" style={{ display: "flex", textDecoration: "none" }}>
                          <Image src="../assets/img/bill 1.png" style={{ width: "40px", height: "40px", marginTop: "0.6rem", cursor: "pointer" }} />
                          <p style={{ marginLeft: "1rem", marginTop: "1rem" }}>Payment</p>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <hr></hr>
                        <Link to="/" onClick={logout} style={{ display: "flex", textDecoration: "none" }}>
                          <Image src="../assets/img/logout 1.png" style={{ width: "40px", height: "40px", marginTop: "0.6rem", cursor: "pointer" }} />
                          <p style={{ marginLeft: "1rem", marginTop: "1rem" }}>Log Out</p>
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Button className={cssModules.btnLogin} onClick={() => setShowLogin(true)}>
                      Login
                    </Button>
                  </Nav.Link>
                  <Nav.Link>
                    <Button className={cssModules.btnRegister} onClick={() => setShowDaftar(true)}>
                      Register
                    </Button>
                  </Nav.Link>
                </>
              )}
            </>
          </Nav>
        </Container>
      </Navbar>
      <FormLogin show={ShowLogin} showLogin={setShowLogin} showDaftar={setShowDaftar} />
      <FormRegister show={ShowDaftar} showDaftar={setShowDaftar} />
    </>
  );
}

export default Navigasi;
