import img2 from "../../assets/department_images/ME/2.png";
import img3 from "../../assets/department_images/ME/3.png";
import img7 from "../../assets/department_images/ME/7.png";
import img8 from "../../assets/department_images/ME/8.png";
import img10 from "../../assets/department_images/ME/10.png";
import img15 from "../../assets/department_images/ME/15.png";

const MecahnicalEventData = [
  {
    event_id: 1201,
    name: "FreeZone",
    description: "Anti drugs awareness workshop with a magic show.",
    event_type: "Workshop",
    fee: "0",
    student1: "Sayooj Rajan",
    s1_phone: "6235068016",
    student2: "Abhijith K",
    s2_phone: "7909215662",
    staff: "Appu Kurian, Ryne PM",
    prize: false,
    dept: "me",
    reg: true,
    group: false,
    venue: "ME Block",
    time: "9:30",
    event_image: img2,
  },
  {
    event_id: 1202,
    name: "Agni",
    description: "A mock fire drill by the fire force team.",
    event_type: "Demonstration",
    fee: "0",
    student1: "Sayandh Vk",
    s1_phone: "6235068016",
    student2: "Mirwaiz",
    s2_phone: "7025093887",
    staff: "Shamin Muth KK, Aji Augustine",
    prize: false,
    dept: "me",
    reg: false,
    group: false,
    venue: "Open Area",
    time: "9:30",
    event_image: img3,
  },
  {
    event_id: 1203,
    name: "Arena",
    description: "Gaming events.",
    event_type: "Competition",
    fee: "100",
    student1: "Safwan Thailakkandy",
    s1_phone: "9400301951",
    student2: "Abin J Prasad",
    s2_phone: "8590314971",
    staff: "Arunlal MP, Dr Sridharan",
    prize: true,
    dept: "me",
    reg: true,
    group: false,
    venue: "ME Block",
    time: "9:30",
    event_image: img15,
  },
  {
    event_id: 1204,
    name: "Vayu Workshop",
    description: "Workshop on drone design and applications.",
    event_type: "Workshop",
    fee: "0",
    student1: "Vishnu T V",
    s1_phone: "7902646173",
    student2: "Abhinav K V",
    s2_phone: "6238980356",
    staff: "Biju KJ, Dilin Dinesh",
    prize: false,
    dept: "me",
    reg: true,
    group: true,
    venue: "ME Block",
    time: "9:30",
    event_image: img2,
  },
  {
    event_id: 1205,
    name: "Efficycle Bike Ride and SAE Vehicle Demo",
    description: "Demonstration of efficycle and SAE vehicle functionality.",
    event_type: "Demonstration",
    fee: "0",
    student1: "Edwin k Jiji",
    s1_phone: "6238447833",
    student2: "Shaheen",
    s2_phone: "9526488202",
    staff: "Dilin Dinesh, Mejo Francis",
    prize: false,
    dept: "me",
    reg: false,
    group: false,
    venue: "ME Block",
    time: "9:30",
    event_image: img7,
  },
  {
    event_id: 1206,
    name: "Lift",
    description: "Drone show by IEEE RAS chapter.",
    event_type: "Demonstration",
    fee: "0",
    student1: "Vishnu C",
    s1_phone: "7994615199",
    student2: "Avinash C",
    s2_phone: "7511114010",
    staff: "Shamin Muth KK, Aji Augustine",
    prize: false,
    dept: "me",
    reg: false,
    group: false,
    venue: "Outdoor Arena",
    time: "9:30",
    event_image: img8,
  },
  {
    event_id: 1207,
    name: "MechaniX",
    description: "Robotics stall by IEEE RAS.",
    event_type: "Exhibit",
    fee: "0",
    student1: "Abhinav C k",
    s1_phone: "9309176143",
    student2: "Yadhukrishna",
    s2_phone: "9544573354",
    staff: "Mejo Francis, Ryne PM",
    prize: false,
    dept: "me",
    reg: false,
    group: true,
    venue: "Outdoor Arena",
    time: "9:30",
    event_image: img8,
  },
  {
    event_id: 1208,
    name: "ReForge",
    description: "Scrap art competition",
    event_type: "Competition",
    fee: "50",
    student1: "Muhsin M P",
    s1_phone: "9947544242",
    student2: "Adyuth Rajeev",
    s2_phone: "7012219825",
    staff: "Dr Sreekanth MP, Mithun Mukundhan",
    prize: true,
    dept: "me",
    reg: true,
    group: false,
    venue: "ME Block",
    time: "9:30",
    event_image: img7,
  },
  {
    event_id: 1209,
    name: "Medex",
    description: "Medical exhibition by MVR Dharmashala.",
    event_type: "Exhibit",
    fee: "0",
    student1: "Jyothish Bijith",
    s1_phone: "8921592602",
    student2: "Ashwin Raj",
    s2_phone: "7907005906",
    staff: "Shamin Muth KK, Aji Augustine",
    prize: false,
    dept: "me",
    reg: true,
    group: false,
    venue: "Tool Room",
    time: "9:30",
    event_image: img10,
  },
  {
    event_id: 1210,
    name: "Car Display (ATV, F1, Go-Cart, Electric Car)",
    description:
      "Display of different types of cars, including ATVs and electric vehicles.",
    event_type: "Exhibit",
    fee: "0",
    student1: "George Thomas",
    s1_phone: "9778214758",
    student2: "Ajay Daniel",
    s2_phone: "9400184913",
    staff: "Shamin Muth KK, Aji Augustine",
    prize: false,
    dept: "me",
    reg: false,
    group: false,
    venue: "ME Block",
    time: "9:30",
    event_image: img10,
  },
  {
    event_id: 1211,
    name: "S7 Projects and Technical Exhibit Stalls",
    description: "Display of B.Tech student projects and technical models.",
    event_type: "Exhibit",
    fee: "0",
    student1: "Anumol Binoy",
    s1_phone: "9778057049",
    student2: "Govind Manoj",
    s2_phone: "9656431626",
    student3: "Rich Abraham Thomas",
    s3_phone: "9633718938",
    staff: "Arunlal MP, Dr Sridharan",
    prize: false,
    dept: "me",
    reg: false,
    group: false,
    venue: "Exhibit Hall",
    time: "9:30",
    event_image: img3,
  },
  {
    event_id: 1212,
    name: "Restoration of Model Robots",
    description: "Event focused on restoring model robots.",
    event_type: "Competition",
    fee: "0",
    student1: "Sawad Rafi",
    s1_phone: "7293014636",
    student2: "Abhimanyu U",
    s2_phone: "7736177219",
    staff: "Ryne PM, Appu Kurian",
    prize: false,
    dept: "me",
    reg: false,
    group: true,
    venue: "ME Block",
    time: "9:30",
    event_image: img15,
  },
];

export default MecahnicalEventData;
