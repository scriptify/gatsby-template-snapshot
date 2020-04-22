
    import React, { useEffect } from "react"
    import { Link } from "gatsby"
    import { after, before } from "../util/statikkCompatLayer.js"
    import pic05 from "../assets/images/pic01.jpg"
import pic06 from "../assets/images/pic02.jpg"
import jqueryMin1 from "../assets/assets/js/jquery.min.js"
import jqueryPoptroxMin1 from "../assets/assets/js/jquery.poptrox.min.js"
import jqueryScrollyMin1 from "../assets/assets/js/jquery.scrolly.min.js"
import skelMin1 from "../assets/assets/js/skel.min.js"
import util1 from "../assets/assets/js/util.js"
import main3 from "../assets/assets/js/main.js"
import '../assets/assets/css/main.css';


    export default function Generic() {
      useEffect(() => {
        (async () => {
          before();
          if (typeof window !== undefined) {
            jqueryMin1();
jqueryPoptroxMin1();
jqueryScrollyMin1();
skelMin1();
util1();
main3();
          }
          after();
        })();
      }, []);

      return (
        <div>
        <div className="page-wrap">
  {
      /* Nav */
    }
  <nav id="nav">
    <ul>
      <li><Link to="/"><span className="icon fa-home" /></Link></li>
      <li><Link to="/gallery"><span className="icon fa-camera-retro" /></Link></li>
      <li><a href="#" className="active"><span className="icon fa-file-text-o" /></a></li>
    </ul>
  </nav>
  {
      /* Main */
    }
  <section id="main">
    {
        /* Header */
      }
    <header id="header">
      <div>Snapshot <span>by TEMPLATED</span></div>
    </header>
    {
        /* Section */
      }
    <section>
      <div className="inner">
        <header>
          <h1>Generic</h1>
        </header>
        <p>Faucibus parturient mus phasellus vestibulum suspendisse dui vel ridiculus nibh diam placerat tellus scelerisque facilisi mus vestibulum arcu mus praesent in blandit. Conubia ullamcorper cum rhoncus vitae dapibus venenatis integer in donec egestas lacus nibh vestibulum habitasse accumsan parturient malesuada sociis auctor scelerisque vehicula urna eu proin euismod. Id facilisi suspendisse parturient leo mus condimentum natoque scelerisque ullamcorper odio tristique ultricies arcu ac condimentum facilisi scelerisque class commodo. Scelerisque sagittis magna mi duis iaculis id erat pharetra vestibulum condimentum hac suspendisse tempor leo aliquet penatibus parturient donec parturient parturient. Vehicula suspendisse sem a adipiscing est ad donec ultricies senectus magnis convallis a fringilla adipiscing vulputate dui elementum diam ipsum eleifend condimentum placerat facilisi viverra mollis scelerisque. Commodo cum vestibulum hendrerit sit condimentum at rutrum vulputate scelerisque erat convallis himenaeos consequat a hac ultrices nam vel suspendisse nascetur dictum vulputate sed at.</p>
        <h2>Ultricies Senectus Magnis</h2>
        <p>Scelerisque sagittis magna mi duis iaculis id erat pharetra vestibulum condimentum hac suspendisse tempor leo aliquet penatibus parturient donec parturient parturient. Vehicula suspendisse sem a adipiscing est ad donec ultricies senectus magnis convallis a fringilla adipiscing vulputate dui elementum diam ipsum eleifend condimentum placerat facilisi viverra mollis scelerisque. Commodo cum vestibulum hendrerit sit condimentum at rutrum vulputate scelerisque erat convallis himenaeos consequat a hac ultrices nam vel suspendisse nascetur dictum vulputate sed at.</p>
        <section className="columns double">
          <div className="column">
            <span className="image left special"><img src={pic05} alt="" /></span>
            <h3>Parturient Consequat Neque</h3>
            <p>
              Adipiscing dis a mus a convallis condimentum molestie penatibus iaculis pulvinar vestibulum enim lacus suscipit mi dictumst hendrerit sit condimentum at rutrum vulputate vestibulum habitasse nam fusce a nascetur. Ut ullamcorper suspendisse malesuada tempus vestibulum commodo habitasse suspendisse magnis.
            </p>
          </div>
          <div className="column">
            <span className="image left special"><img src={pic06} alt="" /></span>
            <h3>Ridiculus Torquent Quam Accumsan</h3>
            <p>
              At sem phasellus elit class dapibus lectus posuere donec morbi in cras commodo faucibus ipsum vehicula fringilla. Risus hendrerit sit condimentum at rutrum vulputate fringilla dis curae metus ipsum imperdiet vulputate sapien dolorem ligula sapien curae consequat vestibulum urna. Nulla vulputate cum augue non arcu.
            </p>
          </div>
        </section>
      </div>
    </section>
    {
        /* Contact */
      }
    <section id="contact">
      {
          /* Social */
        }
      <div className="social column">
        <h3>About Me</h3>
        <p>Mus sed interdum nunc dictum rutrum scelerisque erat a parturient condimentum potenti dapibus vestibulum condimentum per tristique porta. Torquent a ut consectetur a vel ullamcorper a commodo a mattis ipsum class quam sed eros vestibulum quisque a eu nulla scelerisque a elementum vestibulum.</p>
        <p>Aliquet dolor ultricies sem rhoncus dolor ullamcorper pharetra dis condimentum ullamcorper rutrum vehicula id nisi vel aptent orci litora hendrerit penatibus erat ad sit. In a semper velit eleifend a viverra adipiscing a phasellus urna praesent parturient integer ultrices montes parturient suscipit posuere quis aenean. Parturient euismod ultricies commodo arcu elementum suspendisse id dictumst at ut vestibulum conubia quisque a himenaeos dictum proin dis purus integer mollis parturient eros scelerisque dis libero parturient magnis.</p>
        <h3>Follow Me</h3>
        <ul className="icons">
          <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
      </div>
      {
          /* Form */
        }
      <div className="column">
        <h3>Get in Touch</h3>
        <form action="#" method="post">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" placeholder="Name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" placeholder="Email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={6} placeholder="Message" defaultValue={""} />
          </div>
          <ul className="actions">
            <li><input defaultValue="Send Message" className="button" type="submit" /></li>
          </ul>
        </form>
      </div>
    </section>
    {
        /* Footer */
      }
    <footer id="footer">
      <div className="copyright">
        © Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images: <a href="https://unsplash.com/">Unsplash</a>.
      </div>
    </footer>
  </section>
  </div>
  {
    /* Scripts */
  }

      </div>
      );
    }
  