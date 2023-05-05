import poster from "../assets/img/poster1.png";

const Home = () => {
  return (
    <div className="home">
      <h1> New version with continues deployment </h1>
      <div className="p-home-left">
        <h1>Haikkyu Fandom</h1>
        <p>
          Shōyō Hinata, after seeing a volleyball match, aims to become the next "Little Giant" and
          thus joins his middle school volleyball club. After finding new members, he sets out for
          the middle school tournament, where he crosses paths with a formidable school with the
          "King of the Upper Court," Tobio Kageyama. Although his team lost, Hinata is still
          determined to aim for the top and exact revenge on Kageyama. Upon entering high school, he
          receives the biggest surprise: He and Kageyama are in the same high school volleyball
          club!
        </p>
      </div>
      <img src={poster} alt="poster-1" />
    </div>
  );
};

export default Home;
