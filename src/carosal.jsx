import React from "react";

function Imageslide() {
  const reviews = [
    {
      id: 1,
      name: "Prbhas Raju",
      job: "The Boss",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7OcFQzYmBT8JTx3EcCmWg1BmH1AZm3fSo59WjKDmRfrp8mPEio7mRishPr1Y9qnJUYw&usqp=CAU",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Hrithik Babu",
      job: "web designer",
      image: "https://pbs.twimg.com/media/GEXj084bwAAbG9l.jpg",
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

  return (
    <div className="main">
      <div className="sub1">
        <h1>Edupoly Students</h1>
      </div>

      <div className="sub">
        {reviews.map((a) => {
          return (
            <ul className="ul">
              <li className="name">{a.name}</li>
              <li className="name1">{a.job}</li>
              <li>{<img className="img" src={a.image}></img>}</li>
              <li>{a.text}</li>
              <li class="bia bi-arrow-left-circle"></li>
              <li class="bib bi-arrow-right-circle"></li>
              <li className="btn btn-primary">Suprice Me</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Imageslide;
