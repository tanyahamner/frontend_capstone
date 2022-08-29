function ProjectDescription() {
  return (
    <div className="pdescription">
      <h1>Welcome to Tanya's Brain!</h1>
      <p>
        I am on my second semester here at DevPipeline. This semester we are in
        the Frontend Development. I have learned so much in this second
        semester. The first semester we learned about python. This semester we
        learned html, css, scss, node, and react. We spent most of the last
        trimester with react and learn all the cool things you can use this
        program for.
      </p>
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
        first widget that really helped me grow is the Counter widget from there
        I was able to build a font-size widget. After practicing with these two
        widgets I was able to start playing around to see what all I could make
        with just a few const and props. These two widgets are the start of my
        growth and deserve all the credit.
        <br></br>
        <br></br>
      </p>
      <h1>Counter Widget</h1>
      <br></br>
      <p>
        I created a starting point with the h1 tag at 0. Then I created a add
        and subtract button and set it to onclick so that when it is click it
        would go up by 1 or go down by 1 For this to happen; I had to create a
        state with a variable. I wrapped the variable in brackets to give it two
        arguments. The first variable is a state which I called count and the
        second variable is a function and its job is to update the count which
        is called setCount. I then used a react hook called useState and passed
        the initital value that I wanted to start. So count represents 0. In the
        h1 tag I have count in curly braces which starts at 0. I can change that
        to any number and thats where it will start. To change the value of my
        number I use setCount. To change when the add button is pressed I used
        props with onClick so that anytime it is clicked it does this action. I
        used the setCount to go up by 1. I can change the 1 to 10 or 5 and it
        will go up or down by that.
      </p>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <h1>Font Sizer Widget</h1>
      <br></br>
      <p>
        For this widget I used a piece of state called size and setSize. This
        widget is the same pattern as the counter. It takes the default font
        size at 20. I give the sentence (p) a style at the fontsize and use a
        string to create the 20 px. I made the string into a template string so
        the user can change the size. I took the variable in the state and put
        it in the string in the p tag. With the buttons I used the same idea
        from the counter widget but changed it by 5 px. With the p tag I input
        the state in a normal string to change the whole sentence to what the
        size is changed in the pixels by 5.
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <h1>Show Hide Widget</h1>
        <br></br>
        <p>
          For the show hide widget I used the arrow function with my widget. I
          created a message and a button that would show or hide my message. I
          made a state called show. I used a boolean with the useState. So if
          the boolean show is true it would show on the screen and if its false
          it would hide. I used a logical operator to show the message first. So
          if show is true lets go count sheep will show. If its false then it
          doesnt show the message. Then I tell it if show is true to show hide.
        </p>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <h1>Color Changer Widget</h1>
        <br></br>
        <p>
          This is a step into the advanced code before I take it further. For
          this I used in my const the rgb because as photographer I know that
          when printing anything I need to set the r, the g, and the b.
        </p>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <h1>Weather Widget</h1>
        <br></br>
        <p>
          The weather widget uses the same concepts but gets a little trickier
          and more advanced. With the weather app you will see that I used some
          if else statements to help with boolean. It also uses another api to
          pull data for the inputs.
        </p>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <h1>Swappi Widget</h1>
        <br></br>
        <p>
          This widget is a little more advanced for my memory. It uses a fetch
          system to pull data from another website and input when you use my
          drop down. However, you will see the same style as the counter with
          just a few extra steps to advance this code. I use the res.json to
          create the string and the if statements to retrieve the data.
        </p>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <h1>Footer</h1>
        <br></br>
        <p>
          After learning how to create these widgets, I decided to attempt using
          one in my footer.
        </p>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
      </p>

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

export default ProjectDescription;
