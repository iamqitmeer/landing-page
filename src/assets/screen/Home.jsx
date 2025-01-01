import React from "react";

function Home() {
  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img
              src="assets/img/logo-up.png"
              className="img-fluid"
              alt="logo Header Art Developer"
            />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li className="dropdown">
                <a href="javascript:void(0);">
                  <span>Services</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="#">Performance Advertising</a>
                  </li>
                  <li>
                    <a href="#">Marketplace Optimization</a>
                  </li>
                  <li>
                    <a href="#">Social Media Management</a>
                  </li>
                  <li>
                    <a href="#">Website Development</a>
                  </li>
                  <li>
                    <a href="#">Web Application Programs</a>
                  </li>
                  <li>
                    <a href="#">Digital Product Design</a>
                  </li>
                  <li>
                    <a href="#">Logo Branding Design</a>
                  </li>
                  <li>
                    <a href="#">Graphic Design Services</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Study Case</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
          {/* .navbar */}
          <div className="btn-nav d-flex align-items-center">
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li className="login-nav">
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </div>
      </header>
      {/* End Header */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Art Developer Digital Agency ™
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="img-offcanvas col-lg-12">
            <img src="assets/img/about/1.png" className="img-fluid" alt="" />
          </div>
          <p>
            Art Developer hadir untuk membangun bisnis anda menjadi lebih
            berkembang, membimbing anda sepenuh hati layaknya Team anda sendiri.
            Kami mampu bersaing dengan Agensi digital lainnya karena kami Mampu
            dan anda yang Mempercayakan Layanan kami Sepenuhnya
          </p>
          <p>
            Art Developer menghadirkan solusi terkini untuk anda yang sedang
            menghadapi dunia bisnis yang telah berkembang pesat. Kami Hadirkan
            Layanan yang sudah banyak digandrungi di Dunia Digital
          </p>
        </div>
      </div>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5 justify-content-between" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>
                Kami Hadir Sebagai Partner <span>Expert</span> Anda
              </h2>
              <p>
                Tanpa anda sadari teknologi sekarang semakin berkembang, untuk
                bisa menguasai dibidang digital anda harus bisa menyesuaikan
                semua sistem untuk bisa membangun kerajaan bisnis yang Relevan.
                Namun kesulitan apa yang anda hadapi untuk bisa membuat bisnis
                anda menjadi bertumbuh ?
              </p>
              <div className="justify-content-center justify-content-lg-start">
                <a href="#layanan-kita" className="btn-get-started btn-block">
                  Lihat Layanan
                </a>
                <a
                  href="#"
                  className="btn-watch-video btn-block"
                  onclick="ATC()"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>
            <div className="hero-img col-lg-5 order-1 order-lg-2">
              <img
                src="assets/img/index/3.png"
                className="img-fluid"
                alt="artdev-official-img"
                data-aos="fade-in"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
      <main id="main" className="mobile-view">
        {/* ======= Services Section ======= */}
        <section id="boxes-hero" className="boxes-hero">
          <div className="container">
            <header className="section-header">
              <p>Why Us</p>
              <h3>Upaya kami untuk Memberikan Layanan Digital di Indonesia</h3>
            </header>
            <div className="row icon-boxes">
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch mb-3 mb-lg-0"
                data-aos="fade-in"
              >
                <div className="icon-box">
                  <div className="icon">
                    <img
                      className="img-fluid"
                      src="assets/img/index/a.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h4 className="title">Membantu Bertumbuh</h4>
                  <p className="description">
                    Memberikan Pendapat dan Solusi untuk anda sehingga bisnis
                    bisa Mendapatkan Hasil yang Maksimal dan menjadi Semakin
                    Bertumbuh dan Relevan
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch mb-3 mb-lg-0"
                data-aos="fade-in"
              >
                <div className="icon-box">
                  <div className="icon">
                    <img
                      className="img-fluid"
                      src="assets/img/index/b.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h4 className="title">Memberikan Impact</h4>
                  <p className="description">
                    Bisnis yang sehat mampu memberikan dampak yang Luar biasa
                    terhadap Operasional, hal ini bertujuan untuk berkembang
                    dalam melakukan inovasi
                  </p>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-4 d-flex align-items-stretch mb-3 mb-lg-0"
                data-aos="fade-in"
              >
                <div className="icon-box">
                  <div className="icon">
                    <img
                      className="img-fluid"
                      src="assets/img/index/c.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h4 className="title">Market yang Tepat</h4>
                  <p className="description">
                    Bisnis Tanpa Strategi yang tepat tentu bisnis anda bisa
                    dibilang akan <i>berjalan ditempat</i> karena mereka terlalu
                    sering menebak-nebak dalam penargetan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section - Home Page */}
        <section id="about-append" className="about-append">
          <div className="container" data-aos="fade-in">
            <div className="row align-items-xl-center gy-5 justify-content-between">
              <div className="col-xl-5 content">
                <p>We Serve You Better</p>
                <h2>Layanan Digital terbaik untuk Bisnis Anda</h2>
                <p>
                  Kami layanan digital berpusat di kota medan yang berfokus pada
                  strategi digital untuk setiap tujuan bisnis tentunya dengan
                  menjangakau banyak customer potensial secara online.
                </p>
                <p className="clamp">
                  Berpengalaman lebih dari 5 tahun,kami selalu melakukan analisa
                  target market yang tepat &amp; meningkatkan konversi. Selain
                  itu kami selalu berfokus menemukan <i>Unique-Value</i> dari
                  bisnis / brand anda agar bisa bersaing bahkan mengalahkan
                  Kompetitor
                </p>
                <a href="#" className="read-more">
                  Pelajari Lebih
                </a>
              </div>
              <div className="col-xl-6">
                <div className="row gy-2 gx-2 gy-lg-3 gx-lg-3 icon-boxes">
                  <div className="col-md-6 col-6" data-aos="fade-in">
                    <div className="icon-box">
                      <div className="icon">
                        <img
                          src="assets/img/index/index-01.svg"
                          className="img-fluid"
                          alt="artdev-official-img"
                        />
                      </div>
                      <h3>Berpengalaman</h3>
                      <p>
                        Dengan lebih dari 5 tahun pengalaman, kami membantu
                        Perusahaan besar &amp; Startup
                      </p>
                    </div>
                  </div>{" "}
                  {/* End Icon Box */}
                  <div className="col-md-6 col-6" data-aos="fade-in">
                    <div className="icon-box">
                      <div className="icon">
                        <img
                          src="assets/img/index/index-02.svg"
                          className="img-fluid"
                          alt="artdev-official-img"
                        />
                      </div>
                      <h3>Hemat Waktu</h3>
                      <p>
                        Kami disini untuk memecahkan masalah dan membantu
                        perjalanan anda menuju Goals Anda
                      </p>
                    </div>
                  </div>{" "}
                  {/* End Icon Box */}
                  <div className="col-md-6 col-6" data-aos="fade-in">
                    <div className="icon-box">
                      <div className="icon">
                        <img
                          src="assets/img/index/index-03.svg"
                          className="img-fluid"
                          alt="artdev-official-img"
                        />
                      </div>
                      <h3>Komunikasi</h3>
                      <p>
                        Tukarkan Ide dan Sharing dengan kami. Kami akan memandu
                        anda untuk Memcahkan Masalah
                      </p>
                    </div>
                  </div>{" "}
                  {/* End Icon Box */}
                  <div className="col-md-6 col-6" data-aos="fade-in">
                    <div className="icon-box">
                      <div className="icon">
                        <img
                          src="assets/img/index/index-04.svg"
                          className="img-fluid"
                          alt="artdev-official-img"
                        />
                      </div>
                      <h3>Ide Inovatif</h3>
                      <p>
                        Tim Art Developer siap memberikan ide dan Masukan yang
                        Base on Data dan Out of the Box
                      </p>
                    </div>
                  </div>{" "}
                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Why Us Section ======= */}
        <section id="layanan-kita" className="layanan-kita">
          <div className="container" data-aos="fade-in">
            <header className="section-header">
              <p>Our Services</p>
              <h3>
                Temukan Layanan Digital yang cocok untuk Kebutuhkan Bisnis anda
              </h3>
            </header>
            <div className="row gy-3 gx-2 gx-lg-3 gy-lg-3 item">
              <div className="col-lg-4 col-md-6" data-aos="fade-in">
                <div className="service-item position-relative">
                  <div className="icon">
                    <img
                      src="assets/img/services/service-1.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Performance Advertising</h3>
                  <p>
                    Beriklan menjadi menyenangkan menggunakan Platform populer
                    seperti Facebook, Instagram, Google dan Tiktok
                  </p>
                  <a href="#">
                    Selengkapnya &nbsp;
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-in">
                <div className="service-item position-relative">
                  <div className="icon">
                    <img
                      src="assets/img/services/service-2.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Marketplace Optimization</h3>
                  <p>
                    Naikkan produk kamu dan jangkau audience potensial dengan
                    Beriklan menggunakan Marketplace Favoritmu
                  </p>
                  <a href="#">
                    Selengkapnya &nbsp;
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-in">
                <div className="service-item position-relative">
                  <div className="icon">
                    <img
                      src="assets/img/services/service-3.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Social Media Management</h3>
                  <p>
                    Buat Awerness dari brand kamu menjadi lebih berkembang
                    dengan Menggunakan Content management dari Kami
                  </p>
                  <a href="#">
                    Selengkapnya &nbsp;
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-in">
                <div className="service-item position-relative">
                  <div className="icon">
                    <img
                      src="assets/img/services/service-4.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Website Development</h3>
                  <p>
                    Buat bisnis &amp; Produkmu lebih dikenal oleh Audience untuk
                    mendapatkan Traffic yang lebih Berkembang dan Sales
                  </p>
                  <a href="#">
                    Selengkapnya &nbsp;
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-in">
                <div className="service-item position-relative">
                  <div className="icon">
                    <img
                      src="assets/img/services/service-5.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Web Application</h3>
                  <p>
                    Butuh Strategi dalam menerapkan Sistem informasi ? kami bisa
                    membantu anda untuk menemukan solusi untuk Anda
                  </p>
                  <a href="#">
                    Selengkapnya &nbsp;
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-in">
                <div className="service-item position-relative">
                  <div className="icon">
                    <img
                      src="assets/img/services/service-7.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Digital Product Design</h3>
                  <p>
                    Buat rancangan produk digital kami sesuai dengan interface
                    pengguna demi menciptakan sebuah eksperience yang lebih baik
                  </p>
                  <a href="#">
                    Selengkapnya &nbsp;
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-in">
                <div className="service-item position-relative">
                  <div className="icon">
                    <img
                      src="assets/img/services/service-8.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Logo Branding Design</h3>
                  <p>
                    Punya usaha namun bingung membuat branding yang lebih
                    dikenal ? kami memberikan layanan untuk{" "}
                  </p>
                  <a href="#">
                    Selengkapnya &nbsp;
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-in">
                <div className="service-item position-relative">
                  <div className="icon">
                    <img
                      src="assets/img/services/service-6.svg"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Graphic Design Services</h3>
                  <p>
                    Buat design yang berkualitas untuk brand dan bisnis kamu
                    sehingga mudah mendapatkan ekspresi audience
                  </p>
                  <a href="#">
                    Selengkapnya &nbsp;
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Why Us Section */}
        <section id="about-3" className="about-3">
          <div className="container" data-aos="fade-in">
            <div className="row no-gutters justify-content-between">
              <div
                className="col-lg-6 video-box justify-content-center"
                data-aos="fade-in"
              >
                <img
                  src="assets/img/index/4.png"
                  className="img-fluid"
                  alt="artdev-official-img"
                />
              </div>
              <div className="col-lg-5 d-flex flex-column d-flex justify-content-center about-content">
                <div className="section-title-new" data-aos="fade-in">
                  <p>Find Your Strategy</p>
                  <h2>Kami Membantu untuk Menemukan Strategi</h2>
                  {/* <h4>Ayo ceritakan apa yang menjadi kendala di Bisnis digital anda, biarkan ARTDEV yang kasih Solusi!</h4> */}
                  <p>
                    Jangan sampai kamu lewatkan. Dengan berjuta ide kreatif
                    kami, Art Developer selalu bisa menemukan sesuatu yang beda
                    dan unik di bisnis kamu. Menganalisis dan selalu mengikuti
                    apa yang menjadi kesukaan dan dicari oleh audiens. Dengan
                    menjadi unik dan beda bisnis kamu akan sangat mudah bersaing
                    dan dilirik oleh banyak audiens
                  </p>
                </div>
                <a href="#">
                  Lihat Study Case Kami <i className="bi bi-arrow-right" />
                </a>
                <div className="about-3-quote" data-aos="fade-in">
                  <div className="content">
                    <blockquote>
                      <p>
                        Gilasih mau percaya atau enggak, tapi Service mereka
                        bener-bener Luar biasa. Yang biasanya Omset Sehari cuman
                        3jt an, Sekarang bisa sampe 2x Lipat bahkan 3x lipat..
                        Bener-bener Profesional banget Art Developer
                      </p>
                      <h5>Iqbal Ramadhan</h5>
                      <p>Owner CV Creative Youth Vision</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Counts Section =======  */}
        <section id="counts-new" className="counts-new">
          <div className="container">
            <div className="row justify-content-end">
              <div
                className="col-lg-3 col-md-5 d-md-flex align-items-md-stretch"
                data-aos="fade-in"
              >
                <div className="count-box">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={136}
                    data-purecounter-duration={12}
                    className="purecounter"
                  />
                  <p>Bussiness Partner</p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-5 d-md-flex align-items-md-stretch"
                data-aos="fade-in"
              >
                <div className="count-box">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={185}
                    data-purecounter-duration={12}
                    className="purecounter"
                  />
                  <p>Project Result</p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-5 d-md-flex align-items-md-stretch"
                data-aos="fade-in"
              >
                <div className="count-box">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={67}
                    data-purecounter-duration={12}
                    className="purecounter"
                  />
                  <p>Support Consultant</p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-5 d-md-flex align-items-md-stretch"
                data-aos="fade-in"
              >
                <div className="count-box">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={12}
                    data-purecounter-duration={12}
                    className="purecounter"
                  />
                  <p>Professionals Team</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Counts Section*/}
        <section id="about-4" className="about-4">
          <div className="container" data-aos="fade-in">
            <div className="row align-items-xl-center gy-5">
              <div className="col-lg-12 d-flex flex-column justify-conten-center about-content">
                <div className="section-title-new" data-aos="fade-in">
                  <p>Bussiness Flow</p>
                  <h2>Kami Mewujudkan Flow Bisnis yang Sehat dan Relevan</h2>
                </div>
                <div
                  className="row gy-lg-3 gx-lg-3 gy-3 gx-2"
                  data-aos="fade-in"
                  data-aos-delay={100}
                >
                  <div className="col-lg-6 col-md-6 d-md-flex align-items-md-stretch">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img
                          src="assets/img/index/index-learn.svg"
                          alt="artdev-official-img"
                        />
                      </div>
                      <h3>Kami Mempelajari</h3>
                      <p>
                        Kami mempelajari dari model bisnis anda dari Flow hingga
                        Produk Sehingga kami melihat goal yang ingin anda capai
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 d-md-flex align-items-md-stretch">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img
                          src="assets/img/index/index-analys.svg"
                          alt="artdev-official-img"
                        />
                      </div>
                      <h3>Analisa Kebutuhan</h3>
                      <p>
                        Kami menganalisa setiap kebutuhan bisnis, setiap bisnis
                        memiliki konsep yang berbeda termasuk model bisnis anda
                      </p>
                    </div>
                  </div>
                  {/* End Service Item */}
                  <div className="col-lg-6 col-md-6 d-md-flex align-items-md-stretch">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img
                          src="assets/img/index/index-strategy.svg"
                          alt="artdev-official-img"
                        />
                      </div>
                      <h3>Strategi Bisnis</h3>
                      <p>
                        Memberikan model Strategi yang tepat untuk Kinerja
                        bisnis anda karena membutuhakan data yang Matang &amp;
                        Efesien
                      </p>
                    </div>
                  </div>
                  {/* End Service Item */}
                  <div className="col-lg-6 col-md-6 d-md-flex align-items-md-stretch">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img
                          src="assets/img/index/index-data.svg"
                          alt="artdev-official-img"
                        />
                      </div>
                      <h3>Data Eksekusi</h3>
                      <p>
                        Data mencakup keseluruhan dari konsep bisnis anda untuk
                        menemukan Goal yang akurat dan Relevan
                      </p>
                    </div>
                  </div>
                  {/* End Service Item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-3" className="about-3">
          <div className="container" data-aos="fade-in">
            <div className="row no-gutters justify-content-between">
              <div
                className="col-lg-6 video-box justify-content-center order-lg-2 order-1"
                data-aos="fade-in"
              >
                <img
                  src="assets/img/index/6.png"
                  className="img-fluid"
                  alt="artdev-official-img"
                />
              </div>
              <div className="col-lg-5 d-flex flex-column d-flex justify-content-center about-content order-lg-1 order-2">
                <div className="section-title-new" data-aos="fade-in">
                  <p>Client Progress</p>
                  <h2>Kami Dipercaya untuk Membantu Bisnis Mereka Bertumbuh</h2>
                  <p>
                    Kami hadir untuk membantu bisnis anda dengan memberikan
                    strategy bisnis yang relevan mengedepankan layanan dan hasil
                    yang Nyata. Banyak agensi diluar sana yang hanya manis
                    didepan saja, namun hasil yang diberikan tidak sebanding
                    dengan apa yang telah kita bayar.
                  </p>
                </div>
                <div className="about-3-quote" data-aos="fade-in">
                  <div className="content">
                    <blockquote>
                      <p>
                        Seandainya dari dulu tau agency ini, bisnis saya mungkin
                        gak bakal down kekgini. Apalagi pandemi tahun lalu bikin
                        usaha makin down, terpaksa saya handel iklan sendiri
                        jadi makin gabisa fokus
                      </p>
                      <h5>Hendra Yudianto</h5>
                      <p>Owner Zivva Body Wear</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End About Us Section */}
        <section id="boxes" className="boxes">
          <div className="container" data-aos="fade-in">
            <div className="section-title-new" data-aos="fade-in">
              <p>Bussiness Focus</p>
              <h2>
                Bersama kami anda cuman Fokus dengan Bisnis bukan Hal Teknis
              </h2>
            </div>
            <div className="row icon-boxes gy-lg-3 gx-lg-3 gy-3 gx-2">
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch mb-0 mb-lg-0"
                data-aos="fade-in"
              >
                <div className="icon-box">
                  <img
                    className="img-fluid"
                    src="assets/img/index/investor.svg"
                    alt="artdev-official-img"
                  />
                  <h4 className="title">Melakukan Pitching Dengan Investor</h4>
                  <p className="description">
                    Untuk mendapatkan lebih banyak sokongan dana yang dapat
                    membuat perusahaan lebih stabil dan menjadi lebih dikenal
                    oleh investor
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch mb-0 mb-lg-0"
                data-aos="fade-in"
              >
                <div className="icon-box">
                  <img
                    className="img-fluid"
                    src="assets/img/index/operation.svg"
                    alt="artdev-official-img"
                  />
                  <h4 className="title">Memastikan Operasional Tetap Stabil</h4>
                  <p className="description">
                    Dengan Digital agensi anda bisa tetap memantau seluruh
                    proses bisnis anda tetap berjalan dengan semestinya tanpa
                    hambatan sedikitpun
                  </p>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-4 d-flex align-items-stretch mb-0 mb-lg-0"
                data-aos="fade-in"
              >
                <div className="icon-box">
                  <img
                    className="img-fluid"
                    src="assets/img/index/team.svg"
                    alt="artdev-official-img"
                  />
                  <h4 className="title">Memantau Performa Divisi Lainnya</h4>
                  <p className="description">
                    Memastikan Divisi lain bekerja lebih baik sehingga Performa
                    lain bisa lebih maksimal dan semua pencapaian company anda
                    terwujud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Call To Action Section ======= */}
        <section id="hero-2" className="hero-2">
          <div className="container text-center" data-aos="fade-in">
            <h1>Get Started Now ?</h1>
            <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              Art Developer Membantu anda dalam mengembangkan Bisnis dan kami
              memberikan Solusi dan Strategi yang tepat untuk Bisnis anda
            </p>
            <a className="btn-get-started-2 btn-block" href="#layanan-kita">
              Lihat Layanan
            </a>
            <a
              className="btn-get-started-bot btn-block"
              href="#"
              onclick="ATC()"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
        {/* End Call To Action Section */}
      </main>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="footer-top" data-aos="fade-in">
          <div className="container">
            <div className="row justify-content-between">
              <div
                className="col-lg-3 col-md-6 footer-contact"
                data-aos="fade-in"
              >
                <img src="assets/img/logo-down.png" alt="" />
                <p>
                  Medan, Sumatera Utara
                  <br />
                  Indonesia
                  <br />
                  <strong>Phone :</strong>{" "}
                  <a href="https://api.whatsapp.com/send?text=Halo%20ArtDev,%20Saya%20ingin%20Konsultasi%20Layanan%20Dengan%20Anda%20&phone=6281260779669">
                    0812-6077-9669
                  </a>
                  <br />
                  <strong>Email :</strong>{" "}
                  <a href="mailto:artdeveloper.tech@gmail.com?subject=Halo ArtDev, saya ingin konsultasi">
                    artdeveloper.tech@gmail.com
                  </a>
                  <br />
                </p>
                <div className="social-links">
                  <a href="#" className="facebook" target="_blank">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="instagram" target="_blank">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="linkedin" target="_blank">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="#" className="tiktok" target="_blank">
                    <i className="bi bi-tiktok" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-6 footer-links"
                data-aos="fade-in"
              >
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href="#">Performance Ads</a>
                  </li>
                  <li>
                    <a href="#">Website Development</a>
                  </li>
                  <li>
                    <a href="#">Digital Design Branding</a>
                  </li>
                  <li>
                    <a href="#">Marketplace Advertising</a>
                  </li>
                  <li>
                    <a href="#">Website App</a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-2 col-md-6 footer-links"
                data-aos="fade-in"
              >
                <h4>Links</h4>
                <ul>
                  <li>
                    <a href="#">Tentang Art Developer</a>
                  </li>
                  <li>
                    <a href="#">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-blog" data-aos="fade-in">
                <h4>Our Popular Article</h4>
                <ul>
                  <li>
                    <img src="assets/img/blog/blog-01/banner.webp" alt="" />
                    <a href="#">
                      Pentingnya Digital Marketing untuk Bisnis di Era Pandemi
                    </a>
                  </li>
                  <li>
                    <img src="assets/img/blog/blog-02/banner.webp" alt="" />
                    <a href='#"'>
                      Brand Guide penentu Bisnis anda dikenal oleh masyarakat
                    </a>
                  </li>
                  <li>
                    <img src="assets/img/blog/blog-03/banner.webp" alt="" />
                    <a href="#">Ciri-ciri Website yang Telah di Optimalisasi</a>
                  </li>
                  <li>
                    <img src="assets/img/blog/blog-04/banner.webp" alt="" />
                    <a href="#">
                      Cara Menggunakan SEO untuk Menaikkan Rangking Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright 2022 Art Developer™ - All Rights Reserved
          </div>
        </div>
      </footer>
      {/* End Footer */}
      {/* End Footer */}
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}

export default Home;
