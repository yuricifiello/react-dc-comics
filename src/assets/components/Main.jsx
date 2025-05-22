import mobile from "/src/assets/img/buy-comics-digital-comics.png";
import tshirt from "/src/assets/img/buy-comics-merchandise.png";
import shop from "/src/assets/img/buy-comics-shop-locator.png";
import subscriptions from "/src/assets/img/buy-comics-subscriptions.png";
import power from "/src/assets/img/buy-dc-power-visa.svg";

export default function Main() {
  return (
    <main>
      <section className="comics-section">
        <div className="current-series-banner">CURRENT SERIES</div>
        <div className="comics-grid">
          {comics.map((comic, index) => (
            <ComicCard key={index} title={comic.title} image={comic.thumb} />
          ))}
        </div>
        <div className="load-more-container">
          <button className="load-more-btn">LOAD MORE</button>
        </div>
      </section>

      <section className="blue-bar">
        <div className="blue-item">
          <img src={mobile} alt="Digital Comics" />
          <p>DIGITAL COMICS</p>
        </div>
        <div className="blue-item">
          <img src={tshirt} alt="Merchandise" />
          <p>DC MERCHANDISE</p>
        </div>
        <div className="blue-item">
          <img src={subscriptions} alt="Subscription" />
          <p>SUBSCRIPTION</p>
        </div>
        <div className="blue-item">
          <img src={shop} alt="Shop Locator" />
          <p>COMIC SHOP LOCATOR</p>
        </div>
        <div className="blue-item">
          <img src={power} alt="DC Power Visa" />
          <p>DC POWER VISA</p>
        </div>
      </section>
    </main>
  );
}
