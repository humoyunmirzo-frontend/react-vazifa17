import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <a href="#">WIX</a>
        </div>
        <div className="links-bar">
          <div className="responsive">
            <a href="#">
              <i className="fas fa-desktop active-responsive"></i>
            </a>
            <div className="slash"></div>
            <a href="#">
              <i className="fas fa-mobile mobile"></i>
            </a>
          </div>
          <div className="links">
            <p>Click edit and create your own amazing website</p>
            <a href="#" className="more-link">Подробнее</a>
            <button className="edit-btn">Редактировать</button>
          </div>
        </div>
      </header>
      <main>
        <div className="main-container">
          <div className="author">
            <div className="author-container">
              <div className="author-header">
                <div className="header-author-name"><a href="#">K. Griffith</a></div>
                <div className="author-links">
                  <a href="#">appearances</a>
                  <a href="#">books</a>
                  <a href="#">news</a>
                  <a href="#">about</a>
                  <a href="#">contact</a>
                </div>
              </div>
              <div className="about-author-container">
                <div className="social-links">
                  <a href="#">
                    <img src="https://static.wixstatic.com/media/c4392d634a0148fda8b7b2b0ad98293b.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4392d634a0148fda8b7b2b0ad98293b.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0678ef25486466ba65ef6ad47b559e1.png" alt="" />
                  </a>
                </div>
                <div className="author-image-and-name">
                  <div className="author-image">
                    <img src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" alt="" />
                  </div>
                  <div className="about-author">
                    <div className="author-fullname">Kayla Griffith</div>
                    <div className="text">Award Winning Author</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="new-release-container">
            <div className="release-section">
              <div className="about-release">
                <div className="badge">New Release</div>
                <div className="release-title">The Swan Isle (2035)</div>
                <div className="release-text">
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </div>
                <div className="order">Order Now</div>
                <div className="release-links">
                  <a href="#">Amazon</a>
                  <a href="#">Google</a>
                  <a href="#">ibooks</a>
                </div>
              </div>
              <div className="release-image">
                <img src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_385,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png" alt="" />
              </div>
            </div>
          </div>
          <div className="praise-and-reviews-container">
            <div className="praise-title">Praise & Reviews</div>
            <div className="praises-and-reviews-wrapper">
              <div className="review-item">
                <div className="mark">‘‘</div>
                <div className="review-text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                <div className="bottom-text">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</div>
                <hr />
              </div>
              <div className="review-item">
                <div className="mark">‘‘</div>
                <div className="review-text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                <div className="bottom-text">‘Gripping storytelling’ The Good Read Blog</div>
                <hr />
              </div>
              <div className="review-item">
                <div className="mark">‘‘</div>
                <div className="review-text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                <div className="bottom-text">Grifith’s voice tells the story of all women “The Seattle Post Review”</div>
                <hr />
              </div>
            </div>
          </div>
          <div className="upcoming-appearances-container">
            <div className="appearances-title">See Upcoming Appearances</div>
            <div className="about-appearances">I'm a paragraph. Click here to add your own text and edit me. It's easy.</div>
            <div className="appearances-wrapper">
              <div className="appearance-item">
                <div className="appearance-date">January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</div>
                <a href="#" className="appearance-join-link">Join</a>
              </div>
              <div className="appearance-item">
                <div className="appearance-date">January 31st 2035, The Good Read Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST</div>
                <a href="#" className="appearance-join-link">Join</a>
              </div>
              <div className="appearance-item">
                <div className="appearance-date">March 2nd 2035, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST</div>
                <a href="#" className="appearance-join-link">Join</a>
              </div>
            </div>
            <div className="author-information-container">
              <div className="author-information-wrapper">
              <img src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_177,h_177,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg" alt="" className="author-image" />
              <div className="author-name">About Kayla Griffith</div>
              <div className="about-text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
              <a href="#" className="read-more-link">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>© 2035 by K.Griffith. Powered and secured by <a href="#">Wix</a></p>
      </footer>
    </div>
  );
}

export default App;
