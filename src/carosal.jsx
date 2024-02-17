import React from "react";

function Imageslide() {
  var [CurrentI, setCurrentI] = React.useState(0);

  const reviews = [
    {
      id: 1,
      name: "Prabhas Raju",
      job: "The Boss",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_z5nd2nGsk16tj6SeXzGGsmrmIn0AyGHUFQ&usqp=CAU",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Hrithik Babu",
      job: "web designer",
      image: "https://goldandhra.com/wp-content/uploads/2024/01/Hrithik-Roshan-Next-Act-Exploring-Situational-Comedy.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Mahesh",
      job: "Intern",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMua8HQJaqtcmrKvAUB194ErS_FlJHDiYEbQ&usqp=CAU",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Pawan kalyan",
      job: "Web Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfZ3KHtRWILM0b0FoVmMT06vWhasQ6cAI4A&usqp=CAU",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  function PrevRvw() {
    CurrentI === 0
      ? setCurrentI(CurrentI + (reviews.length - 1))
      : setCurrentI(CurrentI - 1);
  }
  function NextvRvw() {
    CurrentI === reviews.length - 1
      ? setCurrentI(CurrentI - (reviews.length - 1))
      : setCurrentI(CurrentI + 1);
  }

  return (
    <div className="main">
      <div className="sub1">
        <h1>Edupoly Students</h1>
      </div>
      <div className="li">
        <li>
          <img className="img" src={reviews[CurrentI].image}></img>
        </li>
        <li className="a">{reviews[CurrentI].name}</li>
        <li className="b">{reviews[CurrentI].job}</li>
        <li className="c">{reviews[CurrentI].text}</li>
        <div className="spb">
          <i className="bia bi-arrow-left-circle" onClick={PrevRvw}></i>
          <i className="bib bi-arrow-right-circle" onClick={NextvRvw}></i>
        </div>
        <div>
          <i className="btn btn-primary">Suprice Me</i>
        </div>

      </div>
      <div className="sub">
        <div></div>
        
      </div>
    </div>
  );
}

export default Imageslide;
