import mobile from "/src/assets/img/buy-comics-digital-comics.png";
import tshirt from "/src/assets/img/buy-comics-merchandise.png";
import shop from "/src/assets/img/buy-comics-shop-locator.png";
import subscriptions from "/src/assets/img/buy-comics-subscriptions.png";
import power from "/src/assets/img/buy-dc-power-visa.svg";

export default function Main() {
  return (
    <main>
      <main>
        <div className="content-placeholder">
          --&gt; Content goes here &lt;--
        </div>
        <section className="blue-bar">
          <div className="blue-item">
            <img src={mobile} alt={mobile} />
            <p>DIGITAL COMICS</p>
          </div>
          <div className="blue-item">
            <img src={tshirt} alt="Merch" />
            <p>DC MERCHANDISE</p>
          </div>
          <div className="blue-item">
            <img src={subscriptions} alt="Subscription" />
            <p>SUBSCRIPTION</p>
          </div>
          <div className="blue-item">
            <img src={shop} alt="Locator" />
            <p>COMIC SHOP LOCATOR</p>
          </div>
          <div className="blue-item">
            <img src={power} alt="Visa" />
            <p>DC POWER VISA</p>
          </div>
        </section>
      </main>
    </main>
  );
}
