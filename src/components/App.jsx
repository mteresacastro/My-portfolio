import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import IntroSection from './IntroSection';
import Footer from './Footer';
import MainContact from './MainContact';
import MainAboutMe from './MainAboutMe';


function App() {
  const [menuShow, setMenuShow] = useState(false);

  function toggleMenu() {
    setMenuShow(!menuShow);
  }

  return (
    <div id="mainIntro">
      <Header toggleMenu={toggleMenu} menuShow={menuShow} />
      <main>
        <IntroSection />
        <section className="mainProjects" id="mainProjects">
          <h2>Proyectos</h2>
          <h3>&lt;h3&gt; Cada línea de código te acerca un paso más a tu <span>meta</span> &lt;/h3&gt;</h3>
          <article>
            <img src="" alt="" />
            <h4>Título proyecto</h4>
            <ul>
              <li><img src="../src/images/css-100.png" alt="logo css"></img></li>
              <li><img src="" alt=""></img></li>
              <li><img src="" alt=""></img></li>
              <li><img src="" alt=""></img></li>
            </ul>
          </article>
          <article>
            <img src="" alt="" />
            <h4>Título proyecto 2</h4>
            <ul>
              <li><img src="../src/images/css-100.png" alt="logo css"></img></li>
              <li><img src="" alt=""></img></li>
              <li><img src="" alt=""></img></li>
              <li><img src="" alt=""></img></li>
            </ul>
          </article>
        </section>
        <section className="mainSkills" id="mainSkills">
          <h2>Habilidades</h2>
          <h3>Más centrada en el Front, pero siempre con una mirada al Back</h3>
          <div className="mainSkills__box">
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
          </div>
        </section>
        <MainAboutMe />
        <MainContact />
      </main>
      <Footer />
    </div >
  );
}

export default App;
