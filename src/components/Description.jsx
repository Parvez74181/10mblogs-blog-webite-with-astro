import "../styles/description.scss";
import parse from "html-react-parser";
import { useEffect } from "react";

const Description = ({ description }) => {
  useEffect(() => {
    //  add target='_blank' after 1.5s
    let descFullLinks = document.querySelectorAll("#desc-full a");

    descFullLinks.forEach((link) => {
      if (
        link.parentNode.parentNode.nodeName === "OL" ||
        link.parentNode.parentNode.nodeName === "UL"
      )
        return; // don't need to add blank to the table-of-content of ul tag
      link.target = "_blank";
    });

    // Scroll to the heading when a link is clicked
    // i did this cause when i submit my blog to server, the table of content takes me here:https://www.10mblogs.xyz/admin/create-post#heading1

    const links = document.querySelectorAll("#table-of-content a");

    links.forEach((link) => {
      const targetHeadingId = link.getAttribute("href").split("#")[1];
      link.href = `#${targetHeadingId}`;
      link.removeAttribute("target");
    });
  }, []);

  return (
    <div
      id="desc-full"
      className="desc-full my-5 mt-0 font-normal tracking-wider leading-8 text-gray-700"
    >
      {parse(description)}
    </div>
  );
};

export default Description;
