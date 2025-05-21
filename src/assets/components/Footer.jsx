import logoxl from "/src/assets/img/dc-logo-bg.png";

export default function Footer() {
  return (
    <footer>
      <img src={logoxl} alt={logoxl} className="footer-watermark" />

      <div className="footer-columns">
        <div>
          <h4>DC COMICS</h4>
          <ul>
            <li>Characters</li>
            <li>Comics</li>
            <li>Movies</li>
            <li>TV</li>
            <li>Games</li>
            <li>Videos</li>
            <li>News</li>
          </ul>
        </div>
        <div>
          <h4>DC</h4>
          <ul>
            <li>Terms Of Use</li>
            <li>Privacy policy (New)</li>
            <li>Ad Choices</li>
            <li>Advertising</li>
            <li>Jobs</li>
            <li>Subscriptions</li>
            <li>Talent Workshops</li>
            <li>CPSC Certificates</li>
            <li>Ratings</li>
            <li>Shop Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4>SITES</h4>
          <ul>
            <li>DC</li>
            <li>MAD Magazine</li>
            <li>DC Kids</li>
            <li>DC Universe</li>
            <li>DC Power Visa</li>
          </ul>
        </div>
      </div>
      <div className="sign-up">
        <button>SIGN-UP NOW!</button>
      </div>
      <div className="social">
        <p>FOLLOW US</p>
        <img
          src="https://img.icons8.com/ios-filled/24/facebook-new.png"
          alt="Facebook"
        />
        <img
          src="https://img.icons8.com/ios-filled/24/twitter.png"
          alt="Twitter"
        />
        <img
          src="https://img.icons8.com/ios-filled/24/youtube-play.png"
          alt="YouTube"
        />
        <img
          src="https://img.icons8.com/ios-filled/24/pinterest.png"
          alt="Pinterest"
        />
        <img
          src="https://img.icons8.com/ios-filled/24/instagram-new.png"
          alt="Instagram"
        />
      </div>
    </footer>
  );
}
