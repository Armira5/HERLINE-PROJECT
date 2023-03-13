<template>

    

    <div class="fillimi">
    <div class="col2">
      <h1 style="font-size: 2em;">Give yourself new clothes!</h1>
         <p class="paragraph">LIFE IS SHORT <br>Make every outfit count</p>
         <button class="btn">Explore Now &#8594;</button>
     </div>
    <div class="pic">
        <img src="../../assets/pink.png" width=300px>
    </div>
   </div>
   
  
   <div class="slider-container">
  <img src="../../assets/n1.jpg" alt="Image 1" class="slider-image">
  <img src="../../assets/n2.jpg" alt="Image 2" class="slider-image">
  <img src="../../assets/n3.jpg" alt="Image 3" class="slider-image">
  <img src="../../assets/n4.jpg" alt="Image 4" class="slider-image">
  <img src="../../assets/n5.jpg" alt="Image 4" class="slider-image">
  <img src="../../assets/n6.jpg" alt="Image 4" class="slider-image">
  <h2 class="slider-header">
      Welcome to our online store! We are thrilled to have you here and can't wait to show you all the amazing products we have to offer. Our ecommerce platform is designed to make shopping online easy and convenient, so you can find what you need quickly and easily.

Whether you're looking for fashion items, tech gadgets, home decor, or gifts for loved ones, we have it all. 
    </h2>
  
</div>


   <h2 class="title">Latest Products</h2>
                  <div class="col-4">
                    <div class="prd1">
                        <img src="../../assets/pinky1.jpg" height="260px" width="180">
                        <h4>Pink Polka Dot Dress</h4>
                        
                    </div>
                    <div class="prd1">
                        <img src="../../assets/pinky2.jpg" height="260px" width="180">
                        <h4>V-neck Mini Dress</h4>
                        
                   </div>
                   <div class="prd1">
                        <img src="../../assets/pinky3.jpg" height="260px" width="180">
                         <h4>Bottom Ruffle Dress</h4>
                       
                  </div>
                   <div class="prd1"> 
                       <img src="../../assets/pinky4.webp" height="260px" width="180">
                        <h4>Shirt Dress</h4>
                        
                </div>
            </div>
         
            <div class="col-5">
                <div class="prd1">
                     <img src="../../assets/shoresy5.webp" height="260px" width="180">
                     <h4>Hot Pink Block Sandals</h4>
                    
                </div>
               <div class="prd1">
                    <img src="../../assets//shoesy2.webp" height="260px" width="180">
                    <h4>Block Heeled Sandals</h4>
                   
               </div>
              <div class="prd1">
                    <img src="../../assets/shoresy3.webp" height="260px" width="180">
                    <h4>Baby Pink Lace Up Stiletto</h4>
                   
              </div>
               <div class="prd1"> 
                   <img src="../../assets/shoresy4.webp" height="260px" width="180">
                   <h4>Pink Lace Up Square Toe Heels</h4>
               
            </div>
            </div>
            

  


</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
import { getAuth, signOut } from '@firebase/auth';

export default {
  data() {
    return {
      role: '',
     
    };
  },
  name: "HomeView",
  methods: {
    ...mapActions(['getUserRole'])
  },
  computed: {
    ...mapState(['userRole']),
    ...mapState(["posts"]),
    ...mapState(['user']),
    ...mapGetters(['username', 'currentUserEmail']),
  },
  created() {
    this.getUserRole().then(() => {
      this.role = this.userRole === 'admin' ? 'admin' : 'user';
      // console.log(this.role); // logs the user's role (e.g. 'admin' or 'user')
    });
  },
  mounted(){
    const images = document.querySelectorAll('.slider-image');
let currentImage = 0;

function nextImage() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}

setInterval(nextImage, 5000);
  }
 /* mounted() {
    
    // get the slider element
    const slider = document.querySelector('.slider');

    // initialize variables
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let currentIndex = 0;

    // get the slides
    const slides = slider.querySelectorAll('.slide');
    let currentSlide = 0;

    // add event listeners
   slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('touchstart', onTouchStart);
   // slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('touchend', onTouchEnd);
    //slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mousemove', onMouseMove);
    slider.addEventListener('touchmove', onTouchMove);

    // function to handle user interaction
   /* function onMouseDown(event) {
      startPosition = event.pageX;
      isDragging = true;
      animationID = requestAnimationFrame(animation);
    }

    function onTouchStart(event) {
      startPosition = event.touches[0].pageX;
      isDragging = true;
      animationID = requestAnimationFrame(animation);
    }

   /* function onMouseUp() {
      isDragging = false;
      cancelAnimationFrame(animationID);
      const movedBy = currentTranslate - prevTranslate;

      if (movedBy < -100 && currentIndex < 3) {
        currentIndex++;
      }

      if (movedBy > 100 && currentIndex > 0) {
        currentIndex--;
      }

      setPositionByIndex();
    }

    function onTouchEnd() {
      isDragging = false;
      cancelAnimationFrame(animationID);
      const movedBy = currentTranslate - prevTranslate;

      if (movedBy < -100 && currentIndex < 3) {
        currentIndex++;
      }

      if (movedBy > 100 && currentIndex > 0) {
        currentIndex--;
      }

      setPositionByIndex();
    }

   /* function onMouseLeave() {
      isDragging = false;
    }

    function onMouseMove(event) {
      if (isDragging) {
        const currentPosition = event.pageX;
        currentTranslate = prevTranslate + currentPosition - startPosition;
      }
    }

    function onTouchMove(event) {
      if (isDragging) {
        const currentPosition = event.touches[0].pageX;
        currentTranslate = prevTranslate + currentPosition - startPosition;
      }
    }

    // function to animate the slider
    function animation() {
      currentTranslate = currentTranslate - (currentTranslate - currentIndex * -100) * 0.1;
      setPosition();
      animationID = requestAnimationFrame(animation);
    }

    // function to move to the next slide
    function nextSlide() {
      // Remove the active class from the current slide 
      slides[currentSlide].classList.remove('active');
      // Increment the current index and update the current slide
      if (currentIndex === slides.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex= slides.length - 1;;
      }
      currentSlide = currentIndex;
      // Add the active class to the new current slide
      slides[currentSlide].classList.add('active');
      // Set the position of the slider to show the new current slide
      currentTranslate = currentIndex * -100;
      setPosition();
    }

    // function to move to the previous slide
    function prevSlide() {
      // Remove the active class from the current slide
      slides[currentSlide].classList.remove('active');
      // Decrement the current index and update the current slide
      if (currentIndex === 0) {
        currentIndex = slides.length - 1;
      } else {
        currentIndex--;
      }
      currentSlide = currentIndex;
      // Add theactive class to the new current slide
      slides[currentSlide].classList.add('active');
      // Set the position of the slider to show the new current slide
      currentTranslate = currentIndex * -100;
        setPosition();

          }
              setInterval(() => {
               nextSlide();
                 }, 2000);
                 // Set the position of the slider to show the current slide
function setPosition() {
  slider.style.transform = `translateX(${currentTranslate}%)`;
}

// Set the position of the slider to show the slide at the given index
function setPositionByIndex() {
  currentTranslate = currentIndex * -100;
  setPosition();
}

// Call the mounted function when the DOM is ready
document.addEventListener('DOMContentLoaded', mounted);
  },*/
};
</script>
<style>
  .fillimi{
    display: flex;
    flex-direction:row ;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top:70px ;
    
    }
.col2{
        flex-basis:50%;
        min-width: 300px;
      
    } 
.pic img{
         max-width:100%;
         padding:50px 0;
         box-shadow:0rem 2rem 6rem rgb(160, 56, 74) ;
    }
h1{
    color:rgb(229, 149, 176);
    font-size: 50px;
    font-family:  'Poppins', sans-serif;
    line-height: 50px;
    margin-left: 3%;
    letter-spacing: 2px;
}
.col-4{
  display: flex;
  flex-direction: row;
  margin-left: 15%;
  padding:10px;
  min-width:200px;
  font-size:small;
  font-family: 'Poppins', sans-serif;
  color: rgb(54, 53, 53);
 
}
.title{
  text-align:center;
  margin-top: 0;
  margin-right:8%;
  position: relative;
  line-height:60px;
  color: #555;
}
.title::after{
  content:'';
  background:#ff523b;
  width:80px;
  height:5px;
  border-radius:5px;
  position: absolute;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
}
.prd1{
  margin:15px;
  color:rgb(150, 119, 140);
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
}
.prd1:hover{
  transform: translateY(-5px);
}
.col-5{
  display: flex;
  margin:6px;
  padding:10px;
  min-width:200px;
  min-height: 270px;
  margin-bottom:5%;
  margin-left:15%;
  font-size:small;
  font-family: 'Poppins', sans-serif;
  color: rgb(54, 53, 53);
}
.col-4{
  display: flex;
  margin:6px;
  padding:10px;
  min-width:200px;
  min-height: 270px;
  margin-bottom:5%;
  margin-left:15%;
  font-size:small;
  font-family: 'Poppins', sans-serif;
  color: rgb(54, 53, 53);
}
#a{
  width:360px;
}
/* .slider-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.slider {
  display: flex;
  width: calc(100% * 3);
  position: relative;
  left: 0;
  transition: left 1s ease-in-out;
}

.slide {
  width: calc(100% / 3);
}

.slide img {
  width: 100%;
  height: auto;
}
*/
.slider-container {
  display: flex;
  position: relative;
  width: 50%;
  height: 800px;
  overflow: hidden;
  margin-left: 100px;
}


.slider-container h2 {
  background-color: #ffc0cb;
  background-position: 12px;
  box-shadow: #ffc0cb;
   top: 12px;
   left: 300px;
   align-items: right;
   position: absolute;
   float: right;
 
}    



/* .slider-header {
  align-items: left;
  float: right;
  /* margin-left: 10px; */
/* } */ 


.slider-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 80%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  box-sizing: border-box;
  box-shadow: 
  0px 4px 4px rgba(117, 38, 87, 0.25),
  0px -4px 4px rgba(194, 89, 133, 0.25),
  4px 0px 4px rgba(105, 33, 83, 0.25),
  -4px 0px 4px rgba(99, 29, 84, 0.25);

 
}

.slider-image:first-child {
  opacity: 1;
}

.slider-image.active {
  opacity: 1;
}


@media (max-width: 768px) {
  /* Adjust height of slider container */
  .slider-container {
    height: 500px;
    width: 500px;
  }
}

/* Media query for even smaller screens */
@media (max-width: 576px) {
  /* Adjust height and font size of slider container */
  .slider-container {
    height: 200px;
    font-size: 14px;
  }
}
</style>

