import { useState } from "react";
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";

import { ReactComponent as HeaderImg } from "../../assets/svgs/mityalim-money-educ-com.svg";
import { ReactComponent as SuperwomanImg } from "../../assets/svgs/intro-superwoman.svg";
import { ReactComponent as SupermanImg } from "../../assets/svgs/intro-superman.svg";

import { introData } from "../../models/intro.model";

const Introduction: React.FC = () => {
  const navigate = useNavigate();

  const SuperwomanImgString = encodeURIComponent(
    renderToStaticMarkup(<SuperwomanImg />)
  );
  const SupermanImgString = encodeURIComponent(
    renderToStaticMarkup(<SupermanImg />)
  );

  const [intro, setIntro] = useState<introData>({
    header: "מתייעלים",
    text: "הינה יוזמה ללא כוונת רווח, אשר פועלת להנגשת ידע פיננסי וכלים על מנת שכל אחד יוכל לחיות ולבנות את חייהם בצורה בריאה פיננסית",
    img: SuperwomanImgString,
    page: 1,
    position: "right",
  });

  const onContinue = () => {
    if (intro.page < 2) {
      setIntro({
        header: "אפליקציית מתייעלים",
        text: "תסייע לך לסדר את התזרים החודשי על מנת לחסוך יותר, ללמוד ממומחים כיצד להתייעל כלכלית ותזכה אותך בהטבות!",
        img: SupermanImgString,
        page: 2,
        position: "left",
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className="introduction flex jus-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,${intro.img}")`,
        backgroundPosition: intro.position,
      }}
    >
      <div className="intro-container flex flex-col">
        <div className="header-container">
          <div className="intro-cmps-container flex jus-center al-center">
            <HeaderImg />
          </div>
        </div>
        <div className="modal-button-container flex flex-col al-center">
          <div className="modal-timeline-container">
            <div className="intro-modal flex jus-center">
              <div className="text-modal">
                <div className="h1">{intro.header}</div>
                <div className="p1">{intro.text}</div>
              </div>
            </div>
            <div className="timeline-container flex">
              <div
                className={`intro-timeline ${
                  intro.page === 1 ? "active-timeline" : ""
                }`}
              ></div>
              <div
                className={`intro-timeline ${
                  intro.page === 2 ? "active-timeline" : ""
                }`}
              ></div>
            </div>
          </div>
          <div className="intro-cmps-container button-container">
            <button onClick={onContinue} className="green-button">
              המשך
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
