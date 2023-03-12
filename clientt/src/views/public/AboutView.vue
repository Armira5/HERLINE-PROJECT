<template>
  <head>
<link rel="stylesheet" href="css/style.css">
    <title>About</title>
</head>
<body>


<div class="aboutContainer">
        <h1>HER LINE</h1>
        <h2>Best Online Shopping Site for Women</h2>
        <div class="image">
            <img src="../../assets/HerLineLogo.png" alt="Logo">
        </div>
        <p>Her Line, a brand rooted in history and just as luxurious as it sounds. An internationally renowned brand since 1946, the French fashion house acclaimed for its elegance and timeless femininity. A leading company that has remained at the top of fashion's hierarchy for over 70 years.</p>
        <a href="index.php" class="btn">Get in Touch</a>
   
    </div>

  


</body>
</template>
<style>
body{
    background: url('./img/background.jpg');
    
    font-family: 'Popins',sans-serif;
}
.aboutContainer{
    max-width:1100px;
    margin:0 auto;
    padding: 0 3rem;
    margin-top: 4rem;
    text-align: center;
}
h1{
    color: #d6037e;
    font-weight: 700;
    letter-spacing: 8px;
    margin-bottom: 2rem;
}
h2{
    color: rgb(117, 49, 49);
   font-weight: 400;

}
.image{
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: 25rem;
    
}
p{
    font-size: 1rem;
    color: rgb(238, 123, 123);
    line-height: 3rem;
    margin: 3rem 3rem 5rem 5rem;
}
.btn{
    display: inline-block;
    margin-bottom: 3rem;
    padding: 1rem 3rem;
    background:#c6a2a2;
    text-decoration: none;
    color: #b13888;
    border-radius: 10px;
    transition: background 0.5s;
}
.btn:hover{
    background:#dadada;
}
@media only screen and (max-width:375px){
  #aboutContaine{
      text-align: center;
  }
  #aboutContaine h1{
      font-size: 22px;
  }

  #aboutContaine h2 {
      font-size: 15px;
  }
  #aboutContaine image {
    max-width: 350px;
  }
  
}
</style>
