import LoginPage from "./LoginPage";

function Home() {
  return (
    <div className="homepage">
      <div className="leftcolumn">
        <LoginPage />
      </div>
      <div className="rightcolumn">
        <h1>
          Welcome to Tanya Hamner's capstone final project for Front End
          Development
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="h2">
          This site has many magical wizards working it. These little magical
          creatures run the page like the elfs at Santa's workshop.
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="h3">
          To see what magic the wizards are making, log in and you will get to
          see the team!
        </h3>
      </div>
    </div>
  );
}

export default Home;
