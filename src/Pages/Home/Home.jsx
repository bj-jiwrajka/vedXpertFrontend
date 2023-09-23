import { Landing, Explore, Register } from "../../Components";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <Landing />
      <Explore />
      <Register />
    </main>
  );
};

export default Home;
