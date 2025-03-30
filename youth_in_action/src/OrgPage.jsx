import React from "react";
import { Size48 } from "./Size48";
import photo1622737133809D95047B9E6731 from "./photo-1622737133809-d95047b9e673-1.png";
import photo1622737133809D95047B9E6732 from "./photo-1622737133809-d95047b9e673-2.png";
import screenshot20250329134141RemovebgPreview3 from "./screenshot-2025-03-29-134141-removebg-preview-3.png";
import screenshot20250329140217RemovebgPreview2 from "./screenshot-2025-03-29-140217-removebg-preview-2.png";
import "./style.css";

export const OrganizationPage = () => {
  return (
    <div className="organization-page">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <Size48 className="arrow-down" />
          </div>

          <div className="estimated-hours">
            Estimated <br />
            Hours
          </div>

          <p className="location-INSERT">
            Location: INSERT PLACE
            <br />
            <br />
            <br />
            Description/Bio the gap between young changemakers and organizations
            in need. From environmenta bjkahjdkjkdhSJKdsjkhdsjk skahkjh jhaskjhd
            kjsha hjkhajkhsdjda hjahjkdh&nbsp;&nbsp; hjshkdjahjkdhs hkahdjshdjah
            hjsahdjhajdhsa hhsajhdjkahh jhjkahl
            <br />
            <br />
            Requirements: hakdhjsgdjagsjdgdjasjdgjsgdjsag hajkdhjahda da
            <br />
            <br />
            Conatact Phone #<br />
            <br /> FULL DESCRIPTION HERE
            <br />
            <br />
            <br />
            More Information: INSERT LINK
          </p>

          <div className="organization-title">
            Organization
            <br />
            Title
          </div>

          <div className="text-wrapper">24</div>
        </div>

        <div className="overlap-2">
          <img
            className="photo"
            alt="Photo"
            src={photo1622737133809D95047B9E6731}
          />

          <img
            className="img"
            alt="Photo"
            src={photo1622737133809D95047B9E6732}
          />
        </div>

        <div className="task-bar">
          <div className="overlap-group-2">
            <div className="rectangle" />

            <div className="text-wrapper-2">Goal</div>

            <div className="text-wrapper-3">0/100</div>

            <img
              className="screenshot"
              alt="Screenshot"
              src={screenshot20250329134141RemovebgPreview3}
            />

            <div className="overlap-3">
              <div className="text-wrapper-4">Menu</div>

              <img
                className="screenshot-2"
                alt="Screenshot"
                src={screenshot20250329140217RemovebgPreview2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};