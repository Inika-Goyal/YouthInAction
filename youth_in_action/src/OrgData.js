import org1 from "./assets/lights-and-cubes.png";//TODO: import all org images here
import techCorpImage from './assets/tech-corp.png';
import financeCorpImage from './assets/finance_corp.png'; 
import designImage from './assets/design-studio.png';
import animalImage from './assets/animal.png';
import nyc311 from './assets/nyc311.png'; 

// TODO: Fill with all data Example org data
export const organizationsData = [
    {
     id: 1,
      title: "Youth Sports Science",
      hours: 2,
      description: "develop and deliver high-quality, immersive learning experiences that bridge the gap between theoretical knowledge and practical applications.",
      imageUrl: techCorpImage,
      imageName: "techCorpImage", 
      field: "Sports",
      location: "Chicago", 
      applicationLink: " https://www.yssichi.org/",
      status: "None",
      saved: 1,
      completion: 0,
    },
    {
      id: 2,
      title: "MakeAWish",
      hours: 3,
      description: "help make the wishes of children with critical illnesses",
      imageUrl: financeCorpImage,
      imageName: "financeCorpImage",
      field: "Community",
      location: "Chicago",
      applicationLink: "https://wish.org/illinois/volunteer",
      status: "Declined",
      saved: 1,
     completion: 0,
    },
    {
      id: 3,
      title: "Central Texas Food Bank",
      hours: 4,
      description: "Helping distribute food, providing cheerful service to clients, and assisting with set-up and teardown at the distribution site",
      imageUrl: designImage,
      imageName: "designImage",
      field: "Community",
      location: "Austin",
      applicationLink: "https://www.centraltexasfoodbank.org/get-involved/volunteer",
      status: "Accepted",
      saved: 1,
      completion: 0,
    },
   {
      id: 4,
      title: "The Animal Foundation",
      hours: 4,
      description: "Give abandoned animals food, shelter, medical care, exercise, socialization, mental stimulation, and training.",
      imageUrl: animalImage,
      imageName: "animalImage",
      field: "Wildlife",
      location: "Las Vegas",
      applicationLink: "https://animalfoundation.com/volunteer/about-volunteering",
      status: "Pending",
      saved: 1,
      completion: 0,
    },
   {
      id: 5,
      title: "311 NYC",
      hours: 3,
      description: " Volunteer in homeless shelters and food pantries through NYC. ",
      imageUrl: nyc311 ,
      imageName: "nyc311", 
      field: "Hospitality",
      location: "NYC",
      applicationLink: "https://portal.311.nyc.gov/article/?kanumber=KA-01390",
      status: "Pending",
      saved: 1,
     completion: 0,
    },
  ];
  
  
  // TODO: fill with all data, Organization List image map: CHANGE once all pngs are found
  export const imageMap = {
    "SOMENAME.png": org1,
    "financeCorpImage": financeCorpImage, 
    "techCorpImage": techCorpImage, 
    "designImage": designImage,  
    "animalImage": animalImage, 
    "nyc311": nyc311,
  };