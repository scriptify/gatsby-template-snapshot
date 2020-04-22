
    import React, { useEffect } from "react"
    import { Link } from "gatsby"
    import { after, before } from "../util/statikkCompatLayer.js"
    import s0118 from "../assets/images/thumbs/01.jpg"
import s0119 from "../assets/images/thumbs/05.jpg"
import s01110 from "../assets/images/thumbs/09.jpg"
import s01111 from "../assets/images/thumbs/02.jpg"
import s01112 from "../assets/images/thumbs/06.jpg"
import s19 from "../assets/images/thumbs/10.jpg"
import s01113 from "../assets/images/thumbs/03.jpg"
import s01114 from "../assets/images/thumbs/07.jpg"
import jqueryMin2 from "../assets/assets/js/jquery.min.js"
import jqueryPoptroxMin2 from "../assets/assets/js/jquery.poptrox.min.js"
import jqueryScrollyMin2 from "../assets/assets/js/jquery.scrolly.min.js"
import skelMin2 from "../assets/assets/js/skel.min.js"
import util2 from "../assets/assets/js/util.js"
import main5 from "../assets/assets/js/main.js"
import '../assets/assets/css/main.css';


    export default function Index1() {
      useEffect(() => {
        (async () => {
          before();
          if (typeof window !== undefined) {
            jqueryMin2();
jqueryPoptroxMin2();
jqueryScrollyMin2();
skelMin2();
util2();
main5();
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
      <li><Link className="active" to="/"><span className="icon fa-home" /></Link></li>
      <li><Link to="/gallery"><span className="icon fa-camera-retro" /></Link></li>
      <li><Link to="/generic"><span className="icon fa-file-text-o" /></Link></li>
    </ul>
  </nav>
  {
      /* Main */
    }
  <section id="main">
    {
        /* Banner */
      }
    <section id="banner">
      <div className="inner">
        <h1>Hey, I'm Snapshot</h1>
        <p>A fully responsive gallery template by <a href="https://templated.co/">TEMPLATED</a></p>
        <ul className="actions">
          <li><a href="#galleries" className="button alt scrolly big">Continue</a></li>
        </ul>
      </div>
    </section>
    {
        /* Gallery */
      }
    <section id="galleries">
      {
          /* Photo Galleries */
        }
      <div className="gallery">
        <header className="special">
          <h2>What's New</h2>
        </header>
        <div className="content">
          <div className="media">
            <a href="images/fulls/01.jpg"><img src={s0118} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media">
            <a href="images/fulls/05.jpg"><img src={s0119} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media">
            <a href="images/fulls/09.jpg"><img src={s01110} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media">
            <a href="images/fulls/02.jpg"><img src={s01111} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media">
            <a href="images/fulls/06.jpg"><img src={s01112} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media">
            <a href="images/fulls/10.jpg"><img src={s19} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media">
            <a href="images/fulls/03.jpg"><img src={s01113} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media">
            <a href="images/fulls/07.jpg"><img src={s01114} alt="" title="This right here is a caption." /></a>
          </div>
        </div>
        <footer>
          <Link className="button big" to="/gallery">Full Gallery</Link>
        </footer>
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
  