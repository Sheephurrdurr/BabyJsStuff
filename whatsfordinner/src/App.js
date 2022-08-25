// Components
import WhatsForDinner from "./components/whatsForDinner/WhatsForDinner.js";
import HeadsOrTails from "./components/headOrTails/HeadsOrTails.js";

// Layout
import Layout from "./layout/Layout.js";


const App = () => {
  return (
    <>
      <Layout>
        <WhatsForDinner />
        <HeadsOrTails />
      </Layout>
    </>
  );
}

export default App;