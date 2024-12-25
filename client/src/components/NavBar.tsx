import { navBarBG, primaryText } from "../constants/colors";

export default function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ padding: 0 }}
        id="navigationBar"
      >
        <div
          className="container-fluid"
          style={{ backgroundColor: navBarBG, padding: "8px" }}
        >
          <a
            className="navbar-brand d-lg-none"
            href="#"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={"assets/logoText.png"} alt="hortiverse" width={"130px"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-theme="dark"
            style={{
              borderColor: "white",
              borderWidth: "2px",
              boxShadow: "none",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex"
            id="navbarSupportedContent"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {/* me-auto  */}
            <ul className="navbar-nav mb-2 mb-lg-0 d-lg-flex align-items-lg-center">
              <li
                className="nav-item"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  className="navbar-brand d-lg-flex d-none"
                  href="#"
                  style={{
                    // display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={"assets/logoText.png"}
                    alt="hortiverse"
                    width={"130px"}
                  />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: primaryText }}
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: primaryText }}
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: primaryText }}
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: primaryText }}
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: primaryText }}
                >
                  On Sale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: primaryText }}>
                  New Arrivals
                </a>
              </li>

              <li className="nav-item me-4">
                <a className="nav-link" href="#" style={{ color: primaryText }}>
                  Brands
                </a>
              </li>
              <div className="d-lg-flex flex-row d-none justify-content-center align-items-center">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{
                      borderRadius: "200px",
                      minWidth: "300px",
                      height: "35px",
                    }}
                  />
                  <img
                    src="/assets/search.png"
                    alt=""
                    width={"25px"}
                    height={"25px"}
                    className="my-auto me-4"
                  />
                </form>
                <div
                  className="navbar-nav mb-2 mb-lg-0 my-lg-0 my-3"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    className="me-3"
                    src="/assets/shopping-cart.png"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                  />
                  <img
                    src="/assets/trackorder.png"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
            </ul>
            <div className="d-lg-none d-block">
              <form className="d-flex mx-1" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ borderRadius: "200px", minWidth: "250px" }}
                />
                <img
                  src="/assets/search.png"
                  alt=""
                  width={"20px"}
                  height={"20px"}
                  className="my-auto"
                />
              </form>
              <div
                className="navbar-nav mb-2 mb-lg-0 my-lg-0 my-3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  className="me-3"
                  src="/assets/shopping-cart.png"
                  alt=""
                  style={{ width: "35px", height: "35px" }}
                />
                <img
                  src="/assets/trackorder.png"
                  alt=""
                  style={{ width: "100px" }}
                />
              </div>
            </div>
            {/* <div className="navbar-nav mb-2 mb-lg-0">
              <img src="/assets/trackorder.png" alt="" style={{width:"100px"}} />
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}
