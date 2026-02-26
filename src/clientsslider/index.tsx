// import React from "react";
// import "./index.module.scss";

// const clients = [
//   { name: "Shriram Properties", logo:'src/clientsslider/logos/shriram.png.' },
//   { name: "Hero", logo: "/logos/hero.png" },
//   { name: "Lisha", logo: "/logos/lisha.png" },
//   { name: "VGN", logo: "/logos/vgn.png" },
//   { name: "VST", logo: "/logos/vst.png" },
//   { name: "Maruti Suzuki", logo: "/logos/maruti-suzuki.png" },
//   { name: "Malabar Gold", logo: "/logos/malabar.png" },
//   { name: "Impex", logo: "/logos/impex.png" },
//   { name: "Pepe Jeans", logo: "/logos/pepe-jeans.png" },
//   { name: "SPR City", logo: "/logos/spr-city.png" },
//   { name: "Thangamayil", logo: "/logos/thangamayil.png" },
//   { name: "Kalyan Jewellers", logo: "/logos/kalyan.png" },
//   { name: "Mahindra Lifespaces", logo: "/logos/mahindra.png" },
//   { name: "LG", logo: "/logos/lg.png" },
//   { name: "Metro", logo: "/logos/metro.png" },
// ];

// const ClientsCircle = () => {
//   const radius = 140; 
//   const centerX = 150;
//   const centerY = 150;

//   return (
//     <div className="clients-circle-wrapper">
//       <div className="circle">
//         <div className="center-text">Our Clients</div>
//         {clients.map((client, index) => {
//           const angle = (360 / clients.length) * index;
//           const radian = (angle * Math.PI) / 180;
//           const x = centerX + radius * Math.cos(radian);
//           const y = centerY + radius * Math.sin(radian);

//           return (
//             <div
//               key={client.name}
//               className="client-item"
//               style={{
//                 top: y,
//                 left: x,
//                 transform: "translate(-50%, -50%)",
//               }}
//               title={client.name}
//             >
//               <img src={client.logo} alt={client.name} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ClientsCircle;
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
  const radius = 140; 
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