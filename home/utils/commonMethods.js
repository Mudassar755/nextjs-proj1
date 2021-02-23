import { logo_categories } from "../constants/logoMaker_content";
import TestService from "../services/Testservice";
let testService = new TestService();
// use selected template
export const useTemplate = (e, pathName, categKey) => {
  let el = e.target.parentNode.parentNode.parentNode.firstChild.src;
  let pngname = el.substring(el.lastIndexOf("/") + 1, el.lastIndexOf("?"));
  if (pathName === "resume") {
    let jsonName = pngname.split("_");
    let j = jsonName[1].split(".");
    let n = Number(j[0]) - 1;
    let s = n.toString();
    let fnjsn = jsonName[0] + "_" + s + ".json";
    window.localStorage.setItem("jn_resume", fnjsn);
    window.localStorage.setItem("cn_resume", categKey);
    //return false
    window.location.href = "/resume-builder/dashboard";
  } else {
    let jsonName = pngname.split("_");
    let j = jsonName[1].split(".");
    let n = Number(j[0]);
    let s = n.toString();
    let fnjsn = jsonName[0] + "_" + s + ".json";
    window.localStorage.setItem(`jn_${pathName}`, fnjsn);
    window.localStorage.setItem(`cn_${pathName}`, categKey);
    //return false
    window.location.href = `/${pathName}-maker/dashboard`;
  }
};

// //Preview selected template
export const previewTemplate = (e, pathName, categKey) => {
  let el = e.target.parentNode.parentNode.parentNode.firstChild.src;
  let pngname = el.substring(el.lastIndexOf("/") + 1, el.lastIndexOf("?"));
  if (pathName === "resume") {
    let jsonName = pngname.split("_");
    let j = jsonName[1].split(".");
    let n = Number(j[0]) - 1;
    let s = n.toString();
    let fnjsn = jsonName[0] + "_" + s + ".json";
    window.localStorage.setItem("jn_resume", fnjsn);
    window.localStorage.setItem("cn_resume", categKey);
  } else {
    let jsonName = pngname.split("_");
    let j = jsonName[1].split(".");
    let n = Number(j[0]);
    let s = n.toString();
    let fnjsn = jsonName[0] + "_" + s + ".json";
    window.localStorage.setItem(`jn_${pathName}`, fnjsn);
    window.localStorage.setItem(`cn_${pathName}`, categKey);
  }
};

export function getAllCategories() {
  return logo_categories.map((category) => {
    return {
      // categories: {
      categories: category,
      // }
    };
  });
}

export async function getCategoryData(id) {
  let ctg = id.includes("_") ? id.split("-")[0] : id;
  let ctgKey = ctg.charAt(0).toUpperCase() + ctg.slice(1);
  await testService.get_thumbs_logo(ctgKey).then((res) => {
    return {
      id,
      data: [...res.data],
    };
  });

  // Combine the data with the id
}

//SWAP elements
export const swap = (node1, node2) => {
  // const afterNode2 = node2.previousElementSibling;
  const parent = node2.parentNode;
  node1.replaceWith(node2);
  parent.insertBefore(node1, node2);
};

//GET Highest z-Index of SVGs
export const highestZIndexRange = (parent) => {
  let highestZ;
  let svgIndex;
  let spanIndex;
  // let SVGs = parent.getElementsByTagName("div");
  const svgList = parent.getElementsByTagName("svg");
  const spanList = parent.getElementsByTagName("SPAN");
  const childsList = svgList.length + spanList.length;
  // for (let n = 0; n < svgList.length; n++) {
  //   // let svgAttr = svgList[n].getAttribute("data-target");
  //   // if (svgAttr !== null) {
  //   // svgAttr = svgAttr.split("_");
  //   // if (svgAttr[0] === "svg") {
  //   if (svgList[n].style.zIndex) {
  //     svgIndex = parseInt(svgList[n].style.zIndex);
  //   }
  //   // }
  //   // }
  // }
  // for (let n = 0; n < spanList.length; n++) {
  //   // let svgAttr = svgList[n].getAttribute("data-target");
  //   // if (svgAttr !== null) {
  //   // svgAttr = svgAttr.split("_");
  //   // if (svgAttr[0] === "svg") {
  //   if (spanList[n].style.zIndex) {
  //     spanIndex = parseInt(spanList[n].length);
  //   }
  //   // }
  //   // }
  // }
  return highestZ;
};

//GET Lowest z-Index of SVGs
export const lowestZIndexRange = () => {
  let lowestZ;
  let ii = [];
  let divs = document.getElementsByTagName("svg");
  const svgList = document.getElementsByTagName("svg");
  const apanList = document.getElementsByTagName("SPAN");
  for (let n = 0; n < svgList.length; n++) {
    let svgAttr = svgList[n].getAttribute("data-target");
    if (svgAttr !== null) {
      svgAttr = svgAttr.split("_");
      if (svgAttr[0] === "svg") {
        if (divs[n].style.position && divs[n].style.zIndex) {
          ii.push(parseInt(divs[n].style.zIndex));
          lowestZ = ii;
        }
      }
    }
  }
  return lowestZ[0];
};

export const isValidURL = (string) => {
  var urlregex = new RegExp(
    "^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$"
  );
  return urlregex.test(string);
};

export const isValidUrl = (string) => {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }

  return true;
};

export const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

export const updatePageRect = (pageContainer, btnsContainer) => {
  let scale = parseFloat(
    pageContainer.style.transform.split("(")[1].split(")")[0]
  );
  let PageBackground = pageContainer.getElementsByClassName("background")[0];
  let HeightPageBackground = retnum(PageBackground.style.height);
  let differencePercentage = calculatePercent(
    HeightPageBackground,
    scale * 100
  );
  let pages = Math.ceil(75 / (scale * 100));

  for (let i = 0; i < btnsContainer.childNodes.length; i++) {
    if (i === 0) {
      btnsContainer.childNodes[i].style.transform = `translate(${0}px, ${
        differencePercentage * i
      }px)`;
    }
    if (i === 1) {
      if (scale === 0.25 || scale === 0.75) {
        btnsContainer.childNodes[i].style.transform = `translate(${0}px, ${
          differencePercentage * i
        }px)`;
      }
      if (scale === 0.5 || scale === 1) {
        btnsContainer.childNodes[i].style.transform = `translate(${0}px, ${
          differencePercentage * i + 25
        }px)`;
      }
      if (scale === 1.25) {
        btnsContainer.childNodes[i].style.transform = `translate(${0}px, ${
          differencePercentage * i + 50
        }px)`;
      }
    }
    if (i >= 2) {
      if (scale === 0.25 || scale === 0.75) {
        for (let j = 0; j < btnsContainer.childNodes.length - 2; j++) {
          btnsContainer.childNodes[i].style.transform = `translate(${0}px, ${
            differencePercentage * i + 75 * (i - 1)
          }px)`;
        }
      }
      if (scale === 0.5 || scale === 1) {
        for (let j = 0; j < btnsContainer.childNodes.length - 2; j++) {
          btnsContainer.childNodes[i].style.transform = `translate(${0}px, ${
            differencePercentage * i + 75 * (i - 1) + 25 * i
          }px)`;
        }
      }

      if (scale === 1.25) {
        for (let j = 0; j < btnsContainer.childNodes.length - 2; j++) {
          btnsContainer.childNodes[i].style.transform = `translate(${0}px, ${
            differencePercentage * i + 75 * (i - 1) + 50 * i
          }px)`;
        }
      }
    }
  }

  for (let i = 0; i < pageContainer.childNodes.length; i++) {
    pageContainer.childNodes[i].style.transform = `translate(${0}px, ${
      (HeightPageBackground + 100 * pages) * i
    }px)`;
  }
};

const retnum = (str) => {
  var num = str.replace(/[^0-9]/g, "");
  return parseInt(num, 10);
};
const calculatePercent = (amount, percent) => {
  const amountDecimals = getNumberOfDecimals(amount);
  const percentDecimals = getNumberOfDecimals(percent);
  const amountAsInteger = Math.round(amount + `e${amountDecimals}`);
  const percentAsInteger = Math.round(percent + `e${percentDecimals}`);
  const precisionCorrection = `e-${amountDecimals + percentDecimals + 2}`; // add 2 to scale by an additional 100 since the percentage supplied is 100x the actual multiple (e.g. 35.8% is passed as 35.8, but as a proper multiple is 0.358)

  return Number(amountAsInteger * percentAsInteger + precisionCorrection);
};

const getNumberOfDecimals = (number) => {
  const decimals = parseFloat(number).toString().split(".")[1];

  if (decimals) {
    return decimals.length;
  }

  return 0;
};

export const compare = (a, b) => {
  // Use toUpperCase() to ignore character casing
  const fontA = a.font.toUpperCase();
  const fontB = b.font.toUpperCase();

  let comparison = 0;
  if (fontA > fontB) {
    comparison = 1;
  } else if (fontA < fontB) {
    comparison = -1;
  }
  return comparison;
};

export const addUniqeObj = (list, data) => {
  let index = -1;

  for (let i = 0; i < list.length; i++) {
    if (list[i].color === data.color) {
      index = i;
    }
  }

  if (index > -1) {
    list[index] = data;
  } else {
    list.push(data);
  }
};
// export const updateRect = (pageContainer, btnsContainer) => {
//     for (let i = 0; i < btnsContainer.childNodes.length; i++) {
//         if (i <= 1) {
//             btnsContainer.childNodes[i].style.transform = `translate(${0}px, ${1440 * i
//                 }px)`;
//         }
//         if (i >= 2) {
//             for (let j = 0; j < btnsContainer.childNodes.length - 2; j++) {
//                 btnsContainer.childNodes[i].style.transform = `translate(${0}px, ${1440 * i + 74 * (i - 1)
//                     }px)`;
//             }
//         }
//     }

//     btnsContainer.childNodes[0].classList.remove("nncopy");
//     for (let i = 0; i < pageContainer.childNodes.length; i++) {
//         pageContainer.childNodes[i].style.transform = `translate(${0}px, ${1514 * i
//             }px)`;
//     }
// };

export const getRandomRgb = () => {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  return "rgba(" + r + ", " + g + ", " + b + ", 0.3" + ")";
};
