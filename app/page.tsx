export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&subset=devanagari,latin-ext"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
      </head>
      <body>
        {/* Navbar */}
        <header className="top-area">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                Portfolio
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#education">Education</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Hire</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="welcome-hero" className="welcome-hero text-center py-5">
          <div className="container">
            <h2>
              Hi, I am <br /> Paramveer Singh
            </h2>
            <p>Java / Full-stack Developer</p>
            <a
              href="https://drive.google.com/file/d/1neoqhVGjE9O3dGw1i2jXdBnUQvu8kQIh/view?usp=drive_link"
              className="btn btn-primary"
            >
              Download Resume
            </a>
          </div>
        </section>
      </body>
    </html>
  );
}
