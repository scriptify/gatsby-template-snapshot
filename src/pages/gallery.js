
    import React, { useEffect } from "react"
    import { Link } from "gatsby"
    import { after, before } from "../util/statikkCompatLayer.js"
    import s010 from "../assets/images/thumbs/01.jpg"
import s011 from "../assets/images/thumbs/05.jpg"
import s012 from "../assets/images/thumbs/09.jpg"
import s013 from "../assets/images/thumbs/02.jpg"
import s014 from "../assets/images/thumbs/06.jpg"
import s13 from "../assets/images/thumbs/10.jpg"
import s015 from "../assets/images/thumbs/03.jpg"
import s016 from "../assets/images/thumbs/07.jpg"
import s14 from "../assets/images/thumbs/11.jpg"
import s017 from "../assets/images/thumbs/04.jpg"
import s018 from "../assets/images/thumbs/08.jpg"
import s15 from "../assets/images/thumbs/12.jpg"
import jqueryMin0 from "../assets/assets/js/jquery.min.js"
import jqueryPoptroxMin0 from "../assets/assets/js/jquery.poptrox.min.js"
import jqueryScrollyMin0 from "../assets/assets/js/jquery.scrolly.min.js"
import skelMin0 from "../assets/assets/js/skel.min.js"
import util0 from "../assets/assets/js/util.js"
import main1 from "../assets/assets/js/main.js"
import '../assets/assets/css/main.css';


    export default function Gallery() {
      useEffect(() => {
        (async () => {
          before();
          if (typeof window !== undefined) {
            jqueryMin0();
jqueryPoptroxMin0();
jqueryScrollyMin0();
skelMin0();
util0();
main1();
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
      <li><a href="#" className="active"><span className="icon fa-camera-retro" /></a></li>
      <li><Link to="/generic"><span className="icon fa-file-text-o" /></Link></li>
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
        /* Gallery */
      }
    <section id="galleries">
      {
          /* Photo Galleries */
        }
      <div className="gallery">
        {
            /* Filters */
          }
        <header>
          <h1>Gallery</h1>
          <ul className="tabs">
            <li><a href="#" data-tag="all" className="button active">All</a></li>
            <li><a href="#" data-tag="people" className="button">People</a></li>
            <li><a href="#" data-tag="place" className="button">Places</a></li>
            <li><a href="#" data-tag="thing" className="button">Things</a></li>
          </ul>
        </header>
        <div className="content">
          <div className="media all people">
            <a href="images/fulls/01.jpg"><img src={s010} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all place">
            <a href="images/fulls/05.jpg"><img src={s011} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all thing">
            <a href="images/fulls/09.jpg"><img src={s012} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all people">
            <a href="images/fulls/02.jpg"><img src={s013} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all place">
            <a href="images/fulls/06.jpg"><img src={s014} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all thing">
            <a href="images/fulls/10.jpg"><img src={s13} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all people">
            <a href="images/fulls/03.jpg"><img src={s015} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all place">
            <a href="images/fulls/07.jpg"><img src={s016} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all thing">
            <a href="images/fulls/11.jpg"><img src={s14} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all people">
            <a href="images/fulls/04.jpg"><img src={s017} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all place">
            <a href="images/fulls/08.jpg"><img src={s018} alt="" title="This right here is a caption." /></a>
          </div>
          <div className="media all thing">
            <a href="images/fulls/12.jpg"><img src={s15} alt="" title="This right here is a caption." /></a>
          </div>
        </div>
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
  