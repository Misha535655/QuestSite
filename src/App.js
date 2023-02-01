import {
  CallBack,
  Description,
  Footer,
  FullQuest,
  Graphik,
  Header,
} from "./components/importer";
import "./styles/main.css";
import store from "./info.json";
function App() {
  return (
    <div className="App">
      <CallBack />

      <Header />
      <FullQuest quests={store} />
      <Description />
      <Graphik quests={store} />
      <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1673939900889!5m2!1sru!2sua"></iframe>
      <Footer />
    </div>
  );
}

export default App;
