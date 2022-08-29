function AboutProject() {
  return (
    <div className="aboutpage">
      <h1>Welcome to Tanya's Brain!</h1>
      <br></br>
      <br></br>
      <p>
        For this project I render a login from another website. With my
        userprovider page it checks the authorization from the other site to
        make sure the user has the correct credentials and can log in. It also
        has a logout function to erase the log in credentials. Once you are
        logged in you are able to use the router and switch components to go to
        the different pages like this page. The app.js allows the non credential
        users to see the home page. The loggin page is directed to the default
        container and that allows the routes to each link page. This site has
        multiple scss style sheets to run the different sections with one main
        section that works globally.
      </p>
      <br></br>
      <br></br>
      <p>
        The Wizards page is made up of a few different widgets. I practiced and
        learned more about how react works with two easy widgets. I feel these
        two widgets have a huge part in my learning and should be shown. The
        first widget that really helped me grow is the FontSize widget. This
        widget allows the font sentence to change as you hit grow and it also
        shows what size it is. I feel that this widget is super important so you
        dont have to guess to see what size font you should use. You will notice
        with each widget I use const and pass in the elements throughout the
        code. I use functions with hooks to create some magic on the whole site.
        I used props to pass in different sections to retrieve the props from
        other parameters.
        <br></br>
        <br></br>
        <h1>Counter Widget</h1>
        <br></br>
        <p>
          I create a starting point with the h1 tag at 0. Then I created a add
          and subtract button and set it to onclick so that when it is click it
          would go up by 1 or go down by 1 For this to happen; I had to create a
          state with a variable. I wrapped the variable in brackets to give it
          two arguments. The first variable is a state which I called count and
          the second variable is a function and its job is to update the count
          which is called setCount. I then used a react hook called useState and
          passed the initital value that I wanted to start. So count represents
          0. In the h1 tag I have count in curly braces which starts at 0. I can
          change that to any number and thats where it will start. To change the
          value of my number I use setCount. To change when the add button is
          pressed I used props with onClick so that anytime it is clicked it
          does this action. I used the setCount to go up by 1. I can change the
          1 to 10 or 5 and it will go up or down by that.
        </p>
      </p>
      <br></br>
      <br></br>
      <p>
        I am on my second semester here at DevPipeline. This semester we are in
        the Frontend Development. I have learned so much in this second
        semester. The first semester we learned about python. This semester we
        learned html, css, scss, node, and react. We spent most of the last
        trimester with react and really learning all the cool things you can use
        this program for.
      </p>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <ul>
        ~ I have learned how to make a list with bullet points. Learned how to
        style with css and scss, however, scss is the death of me!
        <br></br> <br></br>~ I learned how to make grid templates out of the
        page and when it works it is great. However, the operator error just
        keeps happening. You can use the grid system in any program. The easiest
        way to use the grid system is using the fraction and letting the
        computer do the math. On the home page, I use a grid system for the 2
        columns with a 1fr and 2fr.
        <br></br> <br></br>~ With react I have learned how to fetch data to pull
        data from other sites and put on my site. You can also use this for
        logging into a site and logging into another site. The fetch system is
        often used with different weather apps.
        <br></br> <br></br>
        There is a lot I have learned but its still over my head and I need to
        learn how to fully apply it all together.
      </ul>
    </div>
  );
}

export default AboutProject;
