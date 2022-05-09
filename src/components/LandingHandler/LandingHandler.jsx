import {Carousel1} from '../Carousel/carousel'
//import {Carousel2} from '../Carousel/carousel2'
import {Carousel3 }from '../Carousel/carousel3'
import './Landing.css';
import {Footer} from '../footer/footer'

export const Landing = ()=>{


  const div1data = [
    {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/callout_img1.jpg",
    title : "SPORTS",
    para : "A huge collection of running shoes and sports equipments",
    b1 : "BADMINTON",
    b2 : "FOOTBALL",
    b3 : "TENNIS",
  },
  {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/callout_img2.jpg" ,
    title : "FITNESS",
    para : "A large selection of gym shoes & gym wear designed to keep you cool and dry whilst looking good in the gym.",
    b1 : "GYM ACCESSORIES",
    b2 : "RUNNING",
    b3 : "STRENGTH TRAINING",
  },
  {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/callout_img3.jpg",
    title : "SHOES",
    para : "Looking for Hiking Boots, Walking Shoes, Sandals or Outdoor Wear? Choose from a large range today.",
    b1 : "SHOES-SQUASH",
    b2 : "FOOTBALL",
    b3 : "RUNNING",
  }
  ]



  const div3data = [
    {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/victor-offer.jpg" , title : "VICTOR SHOES"},
    {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Slinger.jpg"  , title : "SLINGER GRAND SLAM PACK"},
    ]


  return (
    <div className='homeDivMain'>
       <Carousel1></Carousel1>

    <div className='homeDiv1 overlay-sec'>

    {div1data.map((e) => (
              <div className='overlay-img-box'>
                <img src={e.image} alt=""  className='home_imgg'></img>
                
                <div className="img-overlay">
                <h5 className="img-title">{e.title}</h5>
                <p className="overlay-img-desc">{e.para}</p>
                <button>{e.b1}</button>
                <button>{e.b2}</button>
                <button>{e.b3}</button>
                </div>
              
              </div>
            ))}



    </div>



    <div className='homeDiv2'>
    <h1>OUR CUSTOMIZED SERVICES</h1>
  
    </div>




    <div className='homeDiv3'>

    {div3data.map((e) => (
              <div className='homeDiv3inner'>
              <>
                <img src={e.image} alt="" className='home_imgg' ></img>
                 <h5>{e.title}</h5>
              </>
              </div>
            ))}
    </div>



    <div className='homeDiv4'>
      <img  className='home_imgg'  src='https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/asics-tennis-shoes.jpg'  ></img>
    </div>
    <div className='homeDiv5'>

      {/* <Carousel2></Carousel2> */}
   
    </div>





    <div className='homeDiv6'>
      <div  className='homeDiv3inner'>
          <img className='home_imgg' src='https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bta-store.jpg'></img>
      </div>
      <div  className='homeDiv3inner  homeDivinneright'>
          <h3>ABOUT SPORTSJAM</h3>
          <p>Let’s get going to dig out the best products in your game & make ‘em available right at your doorstep.
             We will be glad to serve you in any city in India & speedily, so that you enjoy your product in the coming weekend! All this, 
             with no shipping charges if you purchase above Rs.1000. Scout through your favourite brands with latest technologies.
            Just click & be its proud owner, at the best available price in the market. Come, help us help you to fly high with your new &
           improved game with high quality sportsgear!</p>
           <button  class="home-btn">FIND OUR STORE</button>
      </div>
    </div>


    <div className='homeDiv7'>
      <Carousel3 ></Carousel3>
    </div>


    <div className='homeDiv8'>
    <h2>Testimonials</h2>
    <p>Amazing products and Excellent Service. Whenever I have called, I have got professional, prompt and consistent
        reply. Even during giving the free tshirt, you guys called to know the size, but unfortunately the size is large
        on me. Any chances I can exchange with M size. Although I am loving my new racquet. - <b>Rajnish, New Delhi</b>
    </p>
    <a class="home-btn">View All</a>    
    </div>



    <div className='homeDiv9'>
      <Footer></Footer>
    </div>



    </div>
  )
  

  
    
  
}