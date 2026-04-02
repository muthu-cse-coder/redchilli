import React from "react";
import "./index.module.scss";

const clients = [
  "Shriram Properties",
  "Hero",
  "Lisha",
  "VST",
  "Maruti Suzuki",
  "Malabar Gold",
  "Impex",
  "Pepe Jeans",
  "SPR City",
  "Thangamayil",
  "Kalyan Jewellers",
  "Mahindra Lifespaces",
  "LG",
  "Metro",
];

const ClientsCircle = () => {
  const radius = 140; 3
  const centerX = 150;
  const centerY = 150;

  return (
    <div className="clients-circle-wrapper">
      <div className="circle">
        <div className="center-text">Our Clients</div>
        {clients.map((client, index) => {
          const angle = (360 / clients.length) * index;
          const radian = (angle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(radian);
          const y = centerY + radius * Math.sin(radian);

          return (
            <div
              key={client}
              className="client-item"
              style={{
                top: y,
                left: x,
                transform: "translate(-50%, -50%)",
              }}
              title={client}
            >
              <div className="yellow-circle"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientsCircle;