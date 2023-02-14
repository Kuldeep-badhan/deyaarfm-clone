import React from "react";
import "./PressRelease.scss";
import certifyachieve from "../../../assets/certifyachieve.jpg";
import logo from "../../../assets/deyaar-logo.svg";
import PressBox from "../../SubComponents/PressBox/PressBox";
const PressRelease = () => {
  const PressBoxData = [
    {
      id: 1,
      title:
        "Deyaar Shares Facilities Management Expertise at IFMA 2017, Dubai",
      date: "18 May 2017",
      desc: "Deyaar Shares Facilities Management Expertise at IFMA 2017, Dubai  Dubai – UAE, 18 May, 2017: Deyaar Development PJSC, one of UAE’s leading property development and real estate services...",
      imgSrc: logo,
    },
    {
      id: 2,
      title:
        "Deyaar achieves multiple certificates for high professional standards",
      date: "13 November 2016",
      desc: "Deyaar achieves multiple certificates for high professional standards Deyaar Facilities Management and Deyaar Owners Association Management recognised for quality across three categories Dubai, UAE,...",
      imgSrc: certifyachieve,
    },
    {
      id: 3,
      title:
        "Deyaar’s Facilities Management Division successfully transitions to a stand-alone company",
      date: "01 August 2016",
      desc: "Deyaar’s Facilities Management Division successfully transitions to a stand-alone  company Following a positive period of growth, the move will deliver a greater focus on facilities management...",
      imgSrc: logo,
    },
  ];
  return (
    <div className="press_release">
      {PressBoxData.map((item) => {
        return (
          <>
            <PressBox
              title={item.title}
              key={item.id}
              date={item.date}
              desc={item.desc}
              imgSrc={item.imgSrc}
            />
            <hr />
          </>
        );
      })}
      <p>
        {" "}
        <i>Page 1 of 1</i>{" "}
      </p>
    </div>
  );
};

export default PressRelease;
