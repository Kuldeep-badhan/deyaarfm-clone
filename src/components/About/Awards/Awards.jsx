import React from "react";
import AwardBox from "../../SubComponents/AwardBox/AwardBox";
import executive from "../../../assets/awards/executive.jpg";
import hero from "../../../assets/awards/unsung_hero.jpg";
import ceo from "../../../assets/awards/ceo.jpg";
import manager from "../../../assets/awards/manager.jpg";
import innovation from "../../../assets/awards/innovation.png";
import asset from "../../../assets/awards/asset.jpg";
import innovation19 from "../../../assets/awards/innovation19.jpg";
import facilityofyear from "../../../assets/awards/facilityofyear.png";
import "./Awards.scss";
const Awards = () => {
  const awardsArr = [
    {
      id: 1,
      title: "FM Executive of the Year",
      desc: "CEO of Deyaar Facilities Management, Mohamad Abou Laban won “FM Executive of the Year” at the Facilities Management Awards 2021. This award recognizes the individual’s excellence, strengths, and success. He was awarded for his achievements and contributions towards the ongoing success of the facilities management industry. The award was presented to the outstanding performer in the region’s FM sector which was selected by the jury among a contending list of nine other industry leaders.",
      imgSrc: executive,
    },
    {
      id: 2,
      title: "Unsung Hero of the Year",
      desc: "Mohammed Afzal Ali of Deyaar Facilities Management won “Unsung Hero of the Year” award at the Facilities Management Awards 2021. He was awarded for his selfless and heroic actions which helped in containing fire within the building and ensuring safety of the tenants.",
      imgSrc: hero,
    },
    {
      id: 3,
      title: "CEO of the Year",
      desc: "CEO of Deyaar Facilities Management, Mohamad Abou Laban won “CEO of the Year” at the Innovation in Facilities Management Awards 2021 held by Construction Business News ME. At Deyaar FM, Mohamad’s responsibilities include continuously improving the quality of services delivered across the seven Emirates, as well as growing and developing the business.      ",
      imgSrc: ceo,
    },
    {
      id: 4,
      title: "Young Facilities Manager of the Year",
      desc: "Jean Paul from Deyaar Facilities Management was highly commended under the “Young Facilities Manager of the Year” category at the Innovation in Facilities Management Awards 2021 which went towards his hard work. The Innovation in FM awards 2021 is one of the leading events applauding the achievements of the FM professionals. The awards strive to recognize individual’s excellence and project success.",
      imgSrc: manager,
    },
  ];

  const awardsArr2020 = [
    {
      id: 5,
      title: "Best Technology and Innovation Award",
      desc: "In November 2020, Deyaar Facilities Management won the prestigious Innovation in Construction & FM Awards.This award is considered to be one of the leading awards applauding the achievements of the region’s FM professionals. The award was presented to DFM for its incorporation of technology and innovation within its services that not only benefitted the company in reducing costs and improving its internal infrastructure, but also enabled DFM to have one of the best technology integration in the region.",
      imgSrc: innovation,
    },
    {
      id: 6,
      title: "Best Asset Management Company Of The Year",
      desc: "In November 2020, Deyaar Facilities Management won the Best Asset Management Company Of The Year category for the prestigious Innovation in Construction & FM Awards.This award applauds the achievements of the region’s facilities management companies, as such the award was presented to DFM in recognition of their asset management capabilities and their bespoke solutions that saves costs to their clients and appreciate their assets value.",
      imgSrc: asset,
    },
  ];
  const awardsArr2019 = [
    {
      id: 7,
      title: "Best Technology and Innovation Award",
      desc: "In October 2019, Deyaar Facilities Management won the prestigious award under the Best in Technology and Innovation in the FM category.The Construction Innovation Awards is one of the leading events applauding the achievements and strives to recognize individual excellence, corporate strengths, and project success.",
      imgSrc: innovation19,
    },
  ];
  const awardsArr2017 = [
    {
      id: 8,
      title: "Facilities Management Company of the Year",
      desc: "In October 2017, Deyaar Facilities Management has won the Construction Innovation Awards under the Category of FM Company Of The Year. The award recognizes individual excellence, corporate strengths, and project success.The award for the Facilities Management Company of the Year was presented to the outstanding performer in the region’s FM sector which was based on strong evidence of growth, expansion during this period, delivery of quality service, innovation, and use of new technology.",
      imgSrc: facilityofyear,
    },
  ];
  return (
    <div className="awards">
      <div className="year">
        <p>2021</p>
        <hr />
      </div>
      {awardsArr.map((award) => {
        return (
          <AwardBox
            title={award.title}
            desc={award.desc}
            img={award.imgSrc}
            key={award.id}
          />
        );
      })}
      <div className="year">
        <p>2020</p>
        <hr />
      </div>

      {awardsArr2020.map((award) => {
        return (
          <AwardBox
            title={award.title}
            desc={award.desc}
            img={award.imgSrc}
            key={award.id}
          />
        );
      })}
      <div className="year">
        <p>2019</p>
        <hr />
      </div>
      {awardsArr2019.map((award) => {
        return (
          <AwardBox
            title={award.title}
            desc={award.desc}
            img={award.imgSrc}
            key={award.id}
          />
        );
      })}
      <div className="year">
        <p>2017</p>
        <hr />
      </div>

      {awardsArr2017.map((award) => {
        return (
          <AwardBox
            title={award.title}
            desc={award.desc}
            img={award.imgSrc}
            key={award.id}
          />
        );
      })}
    </div>
  );
};

export default Awards;
