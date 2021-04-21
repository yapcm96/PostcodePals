import style from "../styles/pagesStyles/homepage.module.scss";

const HomePage = () => {
  return (
    <div className={style.home}>
      <h1>About us</h1>
      <p>
        Postcode Pals started to help connect people to need a helping hand, to
        those wanting to help others in and around their community.{" "}
      </p>
      <p>
        Postcode Pals was originally called Neighborhood Heroes, and was founded
        by Beth, Mahbub and Asel. After producing a cutting edge back end for
        the site, they handed over to the front end team: Issy, Issy, Harriette
        and Johnny.
      </p>{" "}
      <p>
        {" "}
        We want hope to eventually build a nation-wide support platform, so that
        everyone gets the help they need.
      </p>
      <div className={style.imgbox}>
        <img src="https://images.unsplash.com/photo-1553531889-56cc480ac5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <img src="https://images.unsplash.com/photo-1438109382753-8368e7e1e7cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <img src="https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" />
      </div>
    </div>
  );
};

export default HomePage;
