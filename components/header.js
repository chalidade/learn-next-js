import Navbar from "../components/navbar";
const Header = () => (
  <>
    <header>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Lerero Project</title>
      <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
      <link rel="stylesheet" href="dist/css/adminlte.min.css" />
      <link rel="stylesheet" href="dist/css/custom.css" />
      <link href="dist/css/google-font.css" rel="stylesheet" />
      <script src="plugins/jquery/jquery.min.js"></script>
      <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="dist/js/adminlte.min.js"></script>
    </header>
    <Navbar />
  </>
);

export default Header;
