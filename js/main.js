// const num= Math.floor(Math.random()*4);

// document.getElementById('css_sheet').setAttribute('href',`${num}.css`);
const num = 0;

function GetCssSheet(num) {
  if (num === 0) {
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const medialink = `<link href="./style/0/media0.css" rel="stylesheet">`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", medialink);
    const name = "Dev Daftari";
    const container = document.getElementsByClassName("container")[0];
    const heading = document.getElementById("heading");

    const iconlink = `<link rel="icon" href="./style/0/icon1.png" type="image/icon type">`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", iconlink);


    // Person name set

    document.getElementById("logo").innerHTML = "DEV";

    // Setting title

    document.getElementsByTagName("title")[0].innerHTML = `${name} - Personal Website`;

    // Setting footer

    document.getElementById("footer").innerHTML = `&copy 2021 ${name} - All rights reserved.`;

    // Setting h1 tag text according to the person
    const text = "Hello, I'm <span>Dev</span>";
    // heading.insertAdjacentHTML(text);
    document.getElementById("heading").innerHTML = "Hello, I'm Dev";

    // Creating a div containing the profile picture of the person 

    const division = document.createElement("div");
    division.setAttribute("id", "imgdiv")
    const image = document.createElement("img");
    image.setAttribute("src", "./style/0/icon2.png");
    division.appendChild(image);
    container.appendChild(division);

    // Creating description para inside flex container

    const descdiv = document.createElement("div");
    descdiv.setAttribute("id", "description");
    container.insertBefore(descdiv, container.childNodes[0]);
    descdiv.appendChild(heading);
    // const para = `<h2 id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla facilis veritatis, nobis libero perferendis, obcaecati, beatae ab ipsa sunt ex? Nesciunt veritatis, adipisci dicta, expedita, temporibus aut voluptas quaerat corrupti eveniet tenetur enim similique</h2>`;
    const para = `<h2 id="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>`;
    descdiv.insertAdjacentHTML("beforeend", para);

    // Delay appearing of img and para 

    // setTimeout(function(){
    //     document.getElementById('para').style.visibility = "visible";
    //     },3000);



    // About Page


    document.querySelector("#about h1").innerHTML = "A B O U T";

    // Creating animate on scroll 
    // document.getElementsByTagName("script")[0].insertAdjacentHTML("afterend",`<script src="https://unpkg.com/aos@next/dist/aos.js">AOS.init()</script>`);
    // document.querySelector("#about h1").setAttribute("data-aos","fade-left");
    const div_about = document.createElement("div");
    div_about.setAttribute("id", "abt_main");
    document.querySelector("#about").appendChild(div_about);
    const divs = `<div class="abt_div" id="box1">` +
      `<img src="./style/0/home.png">` +
      `<div class="img_overlay">` +
      `<div class="img_title">From` +
      `</div>` +
      `<p class="img_para">Rajkot, Gujarat</p>` +
      `<p class="img_para">ICSE</p>` +
      `<p class="img_para">27-Nov</p>` +
      `</div>` +
      `</img>` +
      `</div>` +
      `<div class="abt_div" id="box2">` +
      `<img src="./style/0/study.png">` +
      `<div class="img_overlay">` +
      `<div class="img_title">B.Tech '24` +
      `</div>` +
      `<p class="img_para">Electrical Enginnering</p>` +
      `<p class="img_para">from</p>` +
      `<p class="img_para">IIT Indore</p>` +
      `</div>` +
      `</img>` +
      `</div>` +
      `<div class="abt_div" id="box3">` +
      `<img src="./style/0/interests.png">` +
      `<div class="img_overlay">` +
      `<div class="img_title">Interests` +
      `</div>` +
      `<p class="img_para">Web Developement</p>` +
      `<p class="img_para">Designing</p>` +
      `<p class="img_para">Competitive Programming</p>` +
      `</div>` +
      `</img>` +
      `</div>`;
    document.querySelector("#about div").insertAdjacentHTML("beforeend", divs);

    // Portfolio section  

    document.querySelector("#portfolio h1").innerHTML = "P O R T F O L I O";



    // Contact section 

    document.querySelector("#contact h1").innerHTML = "C O N T A C T";
    const div_cont = document.createElement("div");
    div_cont.setAttribute("id", "cont_main");
    document.querySelector("#contact").appendChild(div_cont);
    const contdivs = `<div class="phone">` +
      `<img src="./style/0/phone.png"></img>` +
      `<div class="phone_overlay">` +
      `<a class="app" id="app1" href="https://github.com/Dev-Daftari" target="_blank">` +
      `<img src="./style/0/github.png" class="img1"></img>GitHub` +
      `</a>` +
      `<a class="app" id="app2" href="https://www.instagram.com/devdaftari/" target="_blank">` +
      `<img src="./style/0/instagram.png" class="img2"></img>Instagram` +
      `</a>` +
      `<a class="app" id="app3" href="https://in.linkedin.com/in/dev-daftari-50a358206" target="_blank">` +
      `<img src="./style/0/linkedin.png" class="img3"></img>LinkedIn` +
      `</a>` +
      `<a class="app" id="app4" href="https://mail.google.com" target="_blank">` +
      `<img src="./style/0/mail.png" class="img4"></img>me@gmail` +
      `</a>` +
      `<a class="app" id="app5" href="">` +
      `<img src="./style/0/call.png" class="img5"></img>98765 43210` +
      `</a>` +
      `</div>` +
      `</div>` +
      `<div class="formdiv">` +
      `<img src="./style/0/ipad.png"></img>` +
      `<div class="tab_overlay">` +
      `<div class="formtitle">Reach out to Me` +
      `</div>` +
      `</div>` +
      `</div>`;
    document.querySelector("#contact div").insertAdjacentHTML("beforeend", contdivs);
    const form_cont = `<form action="" class="contform">` +
      `<div>` +
      `<input type="text" placeholder="First Name" id="first_name" required>` +
      `<input type="text" placeholder="Last Name" id="last_name">` +
      `</div>` +
      `<div>` +
      `<input type="email" placeholder="Enter Your E-mail" id="email" required>` +
      `</div>` +
      `<div>` +
      `<textarea name="text" id="formtxt" placeholder="Enter your thoughts"></textarea>` +
      `</div>` +
      `<div id="lstfrm">` +
      `<button type="submit" id="subbtn">Submit</button>` +
      `<button type="reset" id="resbtn">Reset</button>` +
      `</div>` +
      `</form>`;
    document.querySelector(".formtitle").insertAdjacentHTML("beforeend", form_cont);


    // Scroll to top button    

    const but = `<button id="scrolltotop">` +
      `<i class="material-icons">arrow_upward</i>` +
      `</button>`;
    document.querySelector("#home").insertAdjacentHTML("afterbegin", but);

    const buttop = document.querySelector("#scrolltotop");
    window.addEventListener("scroll", function () {
      buttop.classList.toggle("active", window.scrollY > 200)
    })
    buttop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth"
      })
    })

    const googlink = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", googlink);




    // MAKING COLOR PICKER 


    const codeclr = `<div class="colorpick">
    <div class="picker">
        <div id="col1" class="cols"></div>
        <div id="col2" class="cols"></div>
        <div id="col3" class="cols"></div>
        <div id="col4" class="cols"></div>
    </div>
    <div class="clicker"><img src="./style/0/color.png"></img></div>
</div>`;
    document.querySelector(".whole").insertAdjacentHTML("afterbegin", codeclr);
    const whole = document.querySelector(".whole");
    const col = document.querySelector(".clicker");
    const pick = document.querySelector(".picker");
    col.addEventListener("click", function () {

      if (pick.style.display === "none") {
        pick.style.display = "block";
      }
      else {
        pick.style.display = "none";
      }
    })

    const blue = document.querySelector("#col1");
    blue.addEventListener("click", function () {
      let r = document.querySelector(":root");
      r.style.setProperty("--theme-color", "#0088a9");
    })

    const red = document.querySelector("#col2");
    red.addEventListener("click", function () {
      let r = document.querySelector(":root");
      r.style.setProperty("--theme-color", "#fd3d3d");
    })

    const green = document.querySelector("#col3");
    green.addEventListener("click", function () {
      let r = document.querySelector(":root");
      r.style.setProperty("--theme-color", "#10a502");
    })

    const purple = document.querySelector("#col4");
    purple.addEventListener("click", function () {
      let r = document.querySelector(":root");
      r.style.setProperty("--theme-color", "#a121b8");
    })


    //   var toggleVisibility = function(element) {
    //     if(element.style.display=='visible'){
    //         element.style.display='none';
    //     } else {
    //         element.style.display='visible';
    //     }
    // };



    // Slider
    const slid = `<!--image slider start-->
        <div class="slider">
            <div class="slides">
              <!--radio buttons start-->
              <input type="radio" name="radio-btn" id="radio1">
              <input type="radio" name="radio-btn" id="radio2">
              <input type="radio" name="radio-btn" id="radio3">
              <input type="radio" name="radio-btn" id="radio4">
              <!--radio buttons end-->
              <!--slide images start-->
              <div class="slide first">
                <img src="./style/0/1.jpg" alt="">
              </div>
              <div class="slide">
                <img src="./style/0/2.jpg" alt="">
              </div>
              <div class="slide">
                <img src="./style/0/3.jpg" alt="">
              </div>
              <div class="slide">
                <img src="./style/0/4.jpg" alt="">
              </div>
              <!--slide images end-->
              <!--automatic navigation start-->
              <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
              </div>
              <!--automatic navigation end-->
            </div>
            <!--manual navigation start-->
            <div class="navigation-manual">
              <label for="radio1" class="manual-btn"></label>
              <label for="radio2" class="manual-btn"></label>
              <label for="radio3" class="manual-btn"></label>
              <label for="radio4" class="manual-btn"></label>
            </div>
            <!--manual navigation end-->
          </div>
          <!--image slider end-->`;

    document.querySelector("#portfolio h1").insertAdjacentHTML("afterend", slid);

    var counter = 1;
    setInterval(function () {
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 5000);


  }
  else if (num === 1) {
    document.getElementsByTagName("title")[0].innerHTML = `Ashish Agrawal - Personal Website`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = `   <div class="scroll-up-btn">
    <i class="fas fa-angle-up"></i>
</div>
<nav class="navbar">
    <div class="max-width">
        <div class="logo"><a href="#"><span>ASHISH </span> AGRAWAL.</a></div>
        <ul class="menu">
            <li><a href="#home" class="menu-btn">Home</a></li>
            <li><a href="#about" class="menu-btn">About Me</a></li>
            <li><a href="#skills" class="menu-btn">Portfolio</a></li>
            <li><a href="#contact" class="menu-btn">Contact Me</a></li>
        </ul>
        <div class="menu-btn">
            <i class="fas fa-bars"></i>
        </div>
    </div>
</nav>

<!-- home section start -->
<section class="home" id="home">
    <div class="max-width">
        <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Ashish Agrawal</div>
            <div class="text-3">And I'm a <span class="typing"></span></div>
            <a href="#">Wanna Offer a job</a>
        </div>
    </div>
</section>

<!-- about section start -->
<section class="about" id="about">
    <div class="max-width">
        <h2 class="title">ABOUT ME</h2>
        <div class="about-content">
            <div class="column left">
                <img src="./style/1/icon3.png" >
            </div>
            <div class="column right">
                <div class="text">I'm Ashish and I'm a <span class="typing-2"></span></div>
                    <p>I am a Front-end Web Developer, Game Developer, Hacker and Designer. Currently, I am doing my undergraduation from Indian Institute of Technology Indore in the discipline of Electrical Engineering. I have interest in Web Developement .Recently, I have contributed in many projects of Web Developement. I am a very good learner and I can learn the concepts much easily in a friendly manner. </p>
                <a href="#">RESUME</a>
            </div>
        </div>
    </div>
</section>

<!-- services section start -->
<section class="services" id="services">
    <div class="max-width">
        <h2 class="title">SERVICES</h2>
        <div class="serv-content">
            <div class="card">
                <div class="box">
                    <i class="fas fa-code"></i>
                    <div class="text">Web Design</div>
                    <p>I have done many projects in the web developement such as making of website for a gym, online shop for goods, online fruit selling, restaurant etc.</p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <i class="fas fa-copyright"></i>
                    <div class="text">Hacking</div>
                    <p>I am a beginner in this field and learning the new commands daily.</p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <i class="fas fa-user"></i>
                    <div class="text">Game Design</div>
                    <p>I am a beginner in this field and learning the new commands daily.</p>
                </div>
            </div>
           </div>
        </div>
    </div>
</section>

<!-- skills section start -->
<section class="skills" id="skills">
    <div class="max-width">
        <h2 class="title">SKILLS</h2>
        <div class="skills-content">
            <div class="column left">
                <div class="text">My creative skills & experiences.</div>
                <p>I am learning HTML, CSS and Javascript for making of creative and interactive website and its designs. I have 80% knowledge of HTML and approximately 60% knowledge of both CSS and Javascript.Later on I will focus on the concepts related to back-end of the website.</p>
                <a href="#">Read more</a>
            </div>
            <div class="column right">
                <div class="bars">
                    <div class="info">
                        <span>HTML</span>
                        <span>80%</span>
                    </div>
                    <div class="line html"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>CSS</span>
                        <span>60%</span>
                    </div>
                    <div class="line css"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>JavaScript</span>
                        <span>60%</span>
                    </div>
                    <div class="line js"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Portfolio section start -->
<section class="portfolio" id="portfolio">
    <div class="max-width">
        <h2 class="title">PORTFOLIO</h2>
        <div class="portfolio-content">
            <div class="gallery">
                <img src="./style/1/service1.PNG" alt="" >
                <img src="./style/1/service2.PNG" alt="" >
                <img src="./style/1/service3.PNG" alt="" >
                <img src="./style/1/service4.PNG" alt="" >
                <img src="./style/1/service5.PNG" alt="" >
                <img src="./style/1/service6.PNG" alt="" >
            </div>
        </div>
    </div>

</section>

<!-- contact section start -->
<section class="contact" id="contact">
    <div class="max-width">
        <h2 class="title">CONTACT ME</h2>
        <div class="contact-content">
            <div class="column left">
                <div class="text">Wanna know More</div>
                <p>You can contact me through the below given details. I will always be available for any type of help. </p>
                <div class="icons">
                    <div class="row">
                        <i class="fas fa-user"></i>
                        <div class="info">
                            <div class="head">Name</div>
                            <div class="sub-title">Ashish Agrawal</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="info">
                            <div class="head">Address</div>
                            <div class="sub-title">Patna, Bihar</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fas fa-envelope"></i>
                        <div class="info">
                            <div class="head">Email</div>
                            <div class="sub-title">ee200002013@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column right">
                <div class="text">Message me</div>
                <form action="#">
                    <div class="fields">
                        <div class="field name">
                            <input type="text" placeholder="Name" required>
                        </div>
                        <div class="field email">
                            <input type="email" placeholder="Email" required>
                        </div>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="Subject" required>
                    </div>
                    <div class="field textarea">
                        <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                    </div>
                    <div class="button-area">
                        <button type="submit">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- footer section start -->
<footer>
    <span>Created By <a href="file:///C:/Users/91700/Desktop/Ashish2/index.html#">Ashish Agrawal</a>  | <span class="far fa-copyright"></span> 2020 All rights reserved.</span>
</footer>`;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    document.querySelectorAll(".navbar")[1].remove();
    document.querySelector(".whole").remove();
    document.querySelector("#footer").remove();


    $(document).ready(function () {
      $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
          $('.navbar').addClass("sticky");
        } else {
          $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
          $('.scroll-up-btn').addClass("show");
        } else {
          $('.scroll-up-btn').removeClass("show");
        }
      });

      // slide-up script
      $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
      });

      $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
      });

      // toggle menu/navbar script
      $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
      });

      // typing text animation script
      var typed = new Typed(".typing", {
        strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });

      var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Game Developer", "Hacker", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });

      // owl carousel script
      $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false
          }
        }
      });
    });
  }
  else {
    document.getElementById('css_sheet').setAttribute('href', `${num}.css`);
  }

}
GetCssSheet(num);
