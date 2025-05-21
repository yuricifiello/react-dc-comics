import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";
import Alert from "./assets/components/Alert";

export default function App() {
  return (
    <>
      <Header />

      {/* ALERT visibile dopo l'header */}
      <Alert
        text="Attenzione! Questa è una notifica importante."
        textColor="#856404"
        backgroundColor="#fff3cd"
      />

      <Main />
      <Footer />
    </>
  );
}
