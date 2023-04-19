class NavBar extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.innerHTML = `
    <style>
    .img {    
        background-image: url(assets/Images/background.jpg);
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: 0;
      }
    
      .nav-menu{
        width: 80%;
        margin: auto;
        border-bottom: 1px solid #E2E8F0;
    }
    
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
    }
    
    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .nav-item {
        /* padding: 4%; */
    }
    
    .hamburger {
        display: none;
    }
    
    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #101010;
    }
    
    .nav-link{
        font-size: 1.6rem;
        font-weight: 400;
        color: #475569;
    }
    
    .nav-link:hover{
        color: green;
    }
    
      .body {
        z-index: 1;
      }
    
      h1 {
        font-size: 7rem;
      }
    
      p {
        font-size: 1.5rem;
        margin: auto;
        padding: 20%;
        padding-top: 0%;
        text-align: center;
      }
      
     .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10%;
      }
    
      .quote {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    
      @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 5rem;
            flex-direction: column;
            background-color: #fff;
            width: 100%;
            border-radius: 10px;
            text-align: center;
            transition: 0.3s;
            box-shadow:
                0 10px 27px rgba(0, 0, 0, 0.05);
        }
    
        .nav-menu.active {
            left: 0;
        }
    
        .nav-item {
            margin: 2.5rem 0;
        }
    
        .hamburger {
            display: block;
            cursor: pointer;
        }
    
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
    
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
    
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    
    }
    
    </style>
    <!-- <div class="img"></div>
    <div class="body">
      <header>
        <nav class="navbar">
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Landscaping</a>
                </li>            
                <li class="nav-item">
                    <a href="#" class="nav-link">Commercial</a>
                </li>            
                <li class="nav-item">
                    <a href="#" class="nav-link">Irrigation</a>
                </li>            
                <li class="nav-item">
                    <a href="#" class="nav-link">Hardscaping</a>
                </li>            
                <li class="nav-item">
                    <a href="#" class="nav-link">Lawn Maintenance</a>
                </li>            
                <li class="nav-item">
                    <a href="./components/about/About.html" class="nav-link">About</a>
                </li>
            </ul>

            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        <h1 class="title">Wilson</h1>
      </header>
    </div> -->
    `
  }
}

customElements.define('navbar-component', NavBar)
