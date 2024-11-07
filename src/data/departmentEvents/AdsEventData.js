import img1 from "../../assets/department_images/ADS/1.png";
import img3 from "../../assets/department_images/ADS/3.png";
import img6 from "../../assets/department_images/ADS/6.png";
import img7 from "../../assets/department_images/ADS/7.png";
import img9 from "../../assets/department_images/ADS/9.png";
import img11 from "../../assets/department_images/ADS/11.png";
import img12 from "../../assets/department_images/ADS/12.png";
import img13 from "../../assets/department_images/ADS/13.png";
import img15 from "../../assets/department_images/ADS/15.png";

const AdsEventData = [
  {
    event_id: 101,
    name: "PIXEL PERFECT [CSE Colab]",
    description:
      "Teams of two compete to create images similar to the provided text description.",
    event_type: "Group",
    fee: "20",
    student1: "Rithin Dev",
    s1_phone: 9400227434,
    student2: "Aaron Mathew",
    s2_phone: "97787 09770",
    staff: "Ms Anit Thomas M",
    prize: true,
    dept: "cse",
    reg: false,
    group: true,
    venue: "Project Lab, Admin Block, 3rd floor",
    time: "09:15 AM - 10:15 AM",
    event_image: img1,
  },

  {
    event_id: 102,
    name: "BLINK BRIEF",
    description: "Spot presentation with a topic given 15-20 mins prior.",
    event_type: "Individual",
    fee: "30",
    student1: "Godly Sabu",
    s1_phone: 8848201795,
    student2: "Nandan Krishna",
    s2_phone: 9778147552,
    staff: "Ms Soumya Thomas",
    prize: true,
    dept: "ads",
    reg: false,
    group: false,
    venue: "Admin Block",
    time: "11:30AM-12:30PM",
    event_image: img9,
  },
  {
    event_id: 103,
    name: "QUICK HILL",
    description: "Words Per Minute typing test.",
    event_type: "Individual",
    fee: "20",
    student1: "Anmary Sabumon",
    s1_phone: 8921104212,
    student2: "Anusree",
    s2_phone: 9567800448,
    staff: "Ms Aswathy TS",
    prize: true,
    dept: "ads",
    reg: false,
    group: false,
    venue: "Software Lab, Admin Block, 1st floor",
    time: "9:30 AM - 10:00 AM",
    event_image: img3,
  },
  {
    event_id: 104,
    name: "COGNITIVE",
    description:
      "Identify the correct logo among options (Team event for 2-4 people).",
    event_type: "Group",
    fee: "30",
    student1: "Fathima Ebrahimkutty",
    s1_phone: 9895289897,
    student2: "Alan Antony",
    s2_phone: 9562183174,
    staff: "Ms Swathi Chandra M T",
    prize: true,
    dept: "ads",
    reg: false,
    group: true,
    venue: "Admin Block",
    time: "12:30PM - 01:15PM",
    event_image: img11,
  },
  {
    event_id: 105,
    name: "BOT HUB",
    description: "Workshop on chatbot demonstration.",
    event_type: "Individual",
    fee: "100",
    student1: "Harsh Suresh",
    s1_phone: 8281335521,
    student2: "Madhav Murali",
    s2_phone: 9447968793,
    staff: "Mr Vyshak K V",
    prize: true,
    dept: "ads",
    reg: false,
    group: false,
    venue: "Admin Block",
    time: "9:15 AM - 11:15 AM",
    event_image: img12,
  },
  {
    event_id: 106,
    name: "RIGGING",
    description: "PC assembling from A to Z.",
    event_type: "Group",
    fee: "40",
    student1: "Sankeerth O T",
    s1_phone: 9497564218,
    student2: "Prithviraj K",
    s2_phone: 7592972291,
    staff: "Ms Sarannya M",
    prize: true,
    dept: "ads",
    reg: false,
    group: true,
    venue: "Software Lab, Admin Block, 1st floor",
    time: "01:00PM - 02:30PM",
    event_image: img6,
  },
  {
    event_id: 107,
    name: "MYSTIC",
    description: "Blind coding competition for teams of 2.",
    event_type: "Group",
    fee: "30",
    student1: "Jyothish M",
    s1_phone: 9207343728,
    student2: "Adwaith Rajesh",
    s2_phone: 7736575578,
    staff: "Ms Priya J",
    prize: true,
    dept: "ads",
    reg: true,
    group: true,
    venue: "Software Lab, Admin Block, 1st floor",
    time: "11:30 AM -12:30 PM",
    event_image: img7,
  },
  {
    event_id: 108,
    name: "EDAC",
    description: "Error detection and compilation test.",
    event_type: "Individual",
    fee: "10",
    student1: "Mukalel Amal",
    s1_phone: 6300217195,
    student2: "Akhil Shaju",
    s2_phone: 8590266047,
    staff: "Ms Anju AJ",
    prize: true,
    dept: "ads",
    reg: false,
    group: false,
    venue: "Software Lab, Admin Block, 1st floor",
    time: "10:15 AM - 11:15 AM",
    event_image: img9,
  },
  {
    event_id: 109,
    name: "FIFA 24",
    description: "FIFA tournament with teams of 2.",
    event_type: "Group",
    fee: "100",
    student1: "Amal Shibu",
    s1_phone: 9606804400,
    student2: "Amegh Anil",
    s2_phone: 9188555905,
    staff: "Ms Shilpa K S",
    prize: true,
    dept: "ads",
    reg: false,
    group: true,
    venue: "Project Lab, Admin Block ,3rd Floor",
    time: "12:15 PM",
    event_image: img3,
  },
  {
    event_id: 110,
    name: "E-Football [CSE Colab]",
    description:
      "E-Football tournament (team play) in collaboration with CSE and ADS.",
    event_type: "Individual",
    fee: "30",
    student1: "Sidharth Vattoli",
    s1_phone: 7356302456,
    student2: "Sourag",
    s2_phone: 7994848962,
    staff: "Ms Sreesha M",
    prize: true,
    dept: "cse",
    reg: false,
    group: false,
    venue: "Project Lab, Admin Block ,3rd Floor",
    time: "11:15 AM",
    event_image: img15,
  },
  {
    event_id: 111,
    name: "BGMI Trinity Showdown - [CSE Colab]",
    description:
      "Battle Ground Mobile India tournament (team of 4) in collaboration with CSE and ADS.",
    event_type: "Group",
    fee: "200",
    student1: "Abhiram Indrajith",
    s1_phone: 9037110521,
    student2: "Gokul M",
    s2_phone: 7594918259,
    staff: "Ms Cincy Baby",
    prize: true,
    dept: "cse",
    reg: false,
    group: true,
    venue: "Project Lab, Admin Block ,3rd Floor",
    time: "10:15 AM",
    event_image: img11,
  },
  {
    event_id: 112,
    name: "SCREAM & WIN",
    description:
      "Use your voice to control jumps between platforms. The louder the shout, the higher the jump.",
    event_type: "Individual",
    fee: "10",
    student1: "Abhinav Dileep",
    s1_phone: 7356952306,
    student2: "Nivitha Vijesh",
    s2_phone: 9447001300,
    staff: "Ms Vannimol Sajan",
    prize: true,
    dept: "ads",
    reg: false,
    group: false,
    venue: "Admin Block",
    time: "9:15 AM",
    event_image: img12,
  },
  {
    event_id: 113,
    name: "BOTTLE FLIP",
    description: "Flip the bottle and win.",
    event_type: "Individual",
    fee: "10",
    student1: "Rithara James",
    s1_phone: 7902404268,
    student2: "Annmaria E C",
    s2_phone: 7025734409,
    staff: "Ms Vijina Vijayan",
    prize: true,
    dept: "ads",
    reg: false,
    group: false,
    venue: "Admin Block",
    time: "9:15 AM",
    event_image: img13,
  },
  {
    event_id: 114,
    name: "CUP STACKING",
    description: "Stack cups in the fastest time.",
    event_type: "Individual",
    fee: "10",
    student1: "Derlin Shaju",
    s1_phone: 7561874672,
    student2: "Ashima O T",
    s2_phone: 7902668981,
    staff: "Ms Shilpa K S",
    prize: true,
    dept: "ads",
    reg: false,
    group: false,
    venue: "Admin Block",
    time: "9:15 AM",
    event_image: img12,
  },
  {
    event_id: 115,
    name: "MINI BASKETBALL",
    description: "Simple basketball game in virtual environment.",
    event_type: "Individual",
    fee: "10",

    student1: "Vinay Krishna",
    s1_phone: 7306962609,
    student2: "Vishnu Sathyakumar",
    s2_phone: 7907811706,
    staff: "Ms Vijina Vijayan",
    prize: true,
    dept: "ads",
    reg: false,
    group: false,
    venue: "Admin Block",
    time: "9:15 AM",
    event_image: img15,
  },
];

export default AdsEventData;
