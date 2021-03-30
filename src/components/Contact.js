import React from "react";

const name = "Benoît";
const avatar = "https://i.ibb.co/JqzDbZr/cfc918.jpg";
const isOnline = true;
const online = isOnline ? "online" : "offline";

//**Je crée ma fonction :

function Contact() {
  if (isOnline === true) {
    //** Je crée mon rendu pour IsOnline = TRUE :
    return (
      <div className="Contact">
        <div>
          <img className="avatar" alt="benoît" src={avatar} />{" "}
        </div>
        <div>
          <h3 className="name"> {name} </h3>
          <div className="status">
            <div className="status-online"> </div>
            <p className="status-text"> {online} </p>
          </div>
        </div>
      </div>
    );

    //Je crée mon rendu pour IsOnLine=FALSE :
  } else {
    return (
      <div className="Contact">
        <div>
          {" "}
          <img className="avatar" alt="benoit" src={avatar} />{" "}
        </div>
        <div>
          <h3 className="name"> {name} </h3>
          <div className="status">
            <div className="status-offline"></div>
            <p className="status-text"> {online} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;