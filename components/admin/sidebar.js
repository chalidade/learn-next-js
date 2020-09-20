import Link from "next/link";

const Sidebar = () => (
  <aside className="main-sidebar sidebar-light-primary margin-top--60">
    <a href="index3.html" className="brand-link">
      <img
        src="../../dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-1"
      />
      <span className="brand-text font-weight-light">Lerero</span>
    </a>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            src="../../dist/img/user2-160x160.jpg"
            className="img-circle elevation-1"
            alt="User Image"
          />
        </div>
        <div className="info">
          <Link href="../admin/user/profile">
            <a className="d-block">Alexander Pierce</a>
          </Link>
        </div>
      </div>

      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Active Page</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Inactive Page</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <Link href="../admin/user/login">
              <a class="nav-link">
                <i class="nav-icon fa fa-sign-out-alt"></i>
                <p>Logout</p>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);

export default Sidebar;
