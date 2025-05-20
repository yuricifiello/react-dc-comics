import mobile from "/src/assets/img/buy-comics-digital-comics.png";
import tshirt from "/src/assets/img/buy-comics-merchandise.png";
import shop from "/src/assets/img/buy-comics-shop-locator.png";
import subscriptions from "/src/assets/img/buy-comics-subscriptions.png";
import power from "/src/assets/img/buy-dc-power-visa.svg";

export default function Main() {
  return (
    <main>
      <section>
        <div className="container">
          <h1>--&gt; Content goes here! &lt;--</h1>
        </div>
      </section>
      <section>
        <div className="container">
          <img src={mobile} alt="Digital Comics" />
          <img src={tshirt} alt="Merchandise" />
          <img src={shop} alt="Locator" />
          <img src={subscriptions} alt="Subscriptions" />
          <img src={power} alt="Card" />
        </div>
      </section>
    </main>
  );
}
