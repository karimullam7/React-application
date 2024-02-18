import React, { useState } from "react";

function Accordion() {
  const [ShowInfo, setShowInfo] = useState(false);
  const [Questions, setQuestion] = React.useState([
    {
      id: 1,
      title: "Do I have to allow the use of cookies?",
      info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      showed: false,
    },
    {
      id: 2,
      title: "How do I change my My Page password?",
      info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
      showed: false,
    },
    {
      id: 3,
      title: "What is BankID?",
      info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
      showed: false,
    },
    {
      id: 4,
      title: "Whose birth number can I use?",
      info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
      showed: false,
    },
    {
      id: 5,
      title: "When do I recieve a password ordered by letter?",
      info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
      showed: false,
    },
  ]);

  return (
    <div className="d-flex">
      <div>
        <h1>Question And Answers About Login</h1>
      </div>
      <div>
        {Questions.map((a) => {
          return (
            <div className=" m-3 p-4 shadow">
              <div className="d-flex justify-content-between">
                <div>
                  <h6>
                    <b>{a.title}</b>
                  </h6>
                </div>
                <div className="d-flex gap-3">
                  <button
                    className="btn"
                    onClick={() => setShowInfo(!ShowInfo)}
                  />
                  {ShowInfo ? (
                    <i class="bi bi-dash-circle" i />
                  ) : (
                    <i class="bi bi-plus-circle"></i>
                  )}
                </div>
              </div>
              {<p className="d">{a.info}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordion;
