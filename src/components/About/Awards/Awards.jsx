import React from "react";
import AwardBox from "../../SubComponents/AwardBox/AwardBox";
import executive from "../../../assets/awards/executive.jpg";
import hero from "../../../assets/awards/unsung_hero.jpg";
import ceo from "../../../assets/awards/ceo.jpg";
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
  ];
  return (
    <div className="awards">
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
    </div>
  );
};

export default Awards;
