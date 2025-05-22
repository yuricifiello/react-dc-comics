import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Alert from "./assets/components/Alert";
import comics from "./assets/data/comics.js";
import ComicCard from "./assets/components/ComicCard";

export default function App() {
  return (
    <>
      <Header />

      <Alert
        text="Attenzione! Questa è una notifica importante."
        textColor="#856404"
        backgroundColor="#fff3cd"
      />

      {/* Sezione principale con tutte le comic card */}
      <main className="comics-container">
        {comics.map((comic, index) => (
          <ComicCard
            key={index}
            title={comic.title}
            author={comic.author}
            image={comic.image}
            description={comic.description}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}
