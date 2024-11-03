import img1 from "../../assets/department_images/CSE/8.png";
import img2 from "../../assets/department_images/CSE/10.png";
import img3 from "../../assets/department_images/CSE/15.png";
import img4 from "../../assets/department_images/CSE/16.png";
import img5 from "../../assets/department_images/CSE/17.png";
import img6 from "../../assets/department_images/CSE/23.png";
import img7 from "../../assets/department_images/CSE/24.png";
import img8 from "../../assets/department_images/CSE/25.png";
import img9 from "../../assets/department_images/CSE/5.png";
import img14 from "../../assets/department_images/CSE/14.jpg";

const CseEventData = [
  {
    event_id: 901,
    name: "Capture The Flag - Terminal Treasures",
    description:
      "Explore Linux systems through terminals and capture flag clues to reach the final destination.",
    event_type: "Competition",
    fee: "50",
    student1: "Abhay KV",
    s1_phone: "9995008670",
    staff: "Divya K",
    prize: true,
    dept: "cse",
    reg: true,
    group: true,
    venue: "2ND floor Hardware Lab",
    time: "12:30PM - 1:30 PM",
    event_image: img1,
  },
  {
    event_id: 902,
    name: "TechWiz - Quiz Competition",
    description:
      "Test your knowledge of science, technology, engineering, and maths through various rounds.",
    event_type: "Competition",
    fee: "50",
    student1: "Ameesha P Joseph",
    s1_phone: "9745067525",
    staff: "Abhiram P",
    prize: true,
    dept: "cse",
    reg: true,
    group: true,
    venue: "1st floor Varikatt Hall",
    time: "10:00 AM - 11:30 AM",
    event_image: img2,
  },
  {
    event_id: 903,
    name: "Hackerrank Enigma",
    description:
      "Solve problems using any programming language in HackerRank. Participants need a valid account.",
    event_type: "Competition",
    fee: "20",
    student1: "Azzah Waheed",
    s1_phone: "9895718505",
    staff: "Dinsha PK",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "2ND NET LAB",
    time: "9:30 AM - 10:30 PM",
    event_image: img3,
  },
  {
    event_id: 904,
    name: "Mystery Digits - Random Number Guess",
    description:
      "Take 5 shots at guessing the random digit and climb the leaderboard.",
    event_type: "Game",
    fee: "20",
    student1: "Ashish Joseph",
    s1_phone: "8547413213",
    staff: "Aiswarya MR",
    prize: true,
    dept: "cse",
    reg: false,
    group: false,
    venue: "2ND S3 CSE B",
    time: "Full day",
    event_image: img8,
  },
  {
    event_id: 905,
    name: "Scavenger Hunt - Decode",
    description:
      "Decode a code, find objects or places, and click pictures to win!",
    event_type: "Competition",
    fee: "10",
    student1: "Keerthana K",
    s1_phone: "8590887095",
    staff: "Sreelakshmi M",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "2ND S3 CSE A",
    time: "9:30 AM - 12:00 PM",
    event_image: img5,
  },
  {
    event_id: 906,
    name: "Blockbuster Hunt",
    description:
      "Solve puzzles and challenges inspired by films to escape the room within the time limit.",
    event_type: "Competition",
    fee: "10",
    student1: "Amal Roy",
    s1_phone: "8301878607",
    staff: "Remya PV",
    prize: true,
    dept: "cse",
    reg: true,
    group: true,
    venue: "2ND S3 CSE A",
    time: "Full day",
    event_image: img14,
  },
  {
    event_id: 907,
    name: "Tech Doodle Art",
    description:
      "Create doodle-style artwork with tech-related elements like circuit boards or robots.",
    event_type: "Competition",
    fee: "10",
    student1: "Fahmi M",
    s1_phone: "8848448254",
    staff: "Manju M",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "2ND S5 CSE A",
    time: "Online",
    event_image: img7,
  },
  {
    event_id: 908,
    name: "Pixel Perfect - Prompt Engineering",
    description:
      "Create themed images using prompts, with the best one judged based on the scenario.",
    event_type: "Competition",
    fee: "20",
    student1: "Tina Thomas",
    s1_phone: "7592936529",
    staff: "Rijin IK",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "3RD LAB-9",
    time: "--",
    event_image: img8,
  },
  {
    event_id: 909,
    name: "fNf - Debugging",
    description: "Find and fix code errors to win the prize.",
    event_type: "Competition",
    fee: "20",
    student1: "Justin James Thomas",
    s1_phone: "7907338036",
    staff: "Ambili MA",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "2ND NET LAB",
    time: "10:30 AM - 11:30 AM",
    event_image: img9,
  },
  {
    event_id: 910,
    name: "Logo Identification Quiz",
    description: "Test your knowledge of popular tech company logos.",
    event_type: "Competition",
    fee: "20",
    student1: "Anagha Nagesh",
    s1_phone: "9495207775",
    staff: "Sreeraji N",
    prize: true,
    dept: "cse",
    reg: true,
    group: true,
    venue: "1ST Varikatt Hall",
    time: "11:30 AM - 1:00 PM",
    event_image: img1,
  },

  {
    event_id: 911,
    name: "1v1 Duel - Coding",
    description:
      "A 1v1 coding competition where participants guess code outputs within a time limit. The winner progresses to the next round.",
    event_type: "Competition",
    fee: "20",
    student1: "M V Navaneeth",
    s1_phone: "8078140429",
    staff: "Neethu Mathew",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "2ND Hardware Lab",
    time: "2:00 PM - 3:00 PM",
    event_image: img2,
  },
  {
    event_id: 912,
    name: "PC Guesser",
    description:
      "Identify PC components by touch only. Visual inspection is not allowed.",
    event_type: "Competition",
    fee: "10",
    student1: "Hrithika Pradeep",
    s1_phone: "8301859280",
    staff: "Agamya Pramod",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "2ND S5 CSE-C",
    time: "11:30 AM - 1:00 PM",
    event_image: img3,
  },
  {
    event_id: 914,
    name: "Ctrl+Create - Keyboard Assembling",
    description:
      "Assemble cutting-edge keyboards within a time limit to become the Ultimate KeyMaster.",
    event_type: "Competition",
    fee: "10",
    student1: "Gerald Siriac",
    s1_phone: "8547369701",
    staff: "Abdul Latheef",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "2ND S3 CSE B",
    time: "10:30 AM - 12:30 PM",
    event_image: img6,
  },
  {
    event_id: 915,
    name: "Magnum - Valorant Tournament",
    description:
      "Unrated Valorant tournament. Compete in teams to win the grand prize.",
    event_type: "Game",
    fee: "300",
    student1: "Sharon Dawson",
    s1_phone: "9074475521",
    staff: "Sisna P",
    prize: true,
    dept: "cse",
    reg: true,
    group: true,
    venue: "2ND Net Lab",
    time: "1:15 PM - 3:30 PM",
    event_image: img5,
  },
  {
    event_id: 916,
    name: "Trinity Showdown - BGMI",
    description:
      "Battle Royale game (BGMI) with up to 100 players. Enter as individuals or groups of up to four.",
    event_type: "Game",
    fee: "300",
    student1: "Abhinav PP",
    s1_phone: "8891405149",
    staff: "Vidhya S S",
    prize: true,
    dept: "cse",
    reg: true,
    group: true,
    venue: "3RD - LAB 9",
    time: "--",
    event_image: img6,
  },
  {
    event_id: 917,
    name: "eFútbol - Mobile Tournament",
    description:
      "Compete in the eFootball 2024 mobile tournament. Physical presence at the venue is mandatory.",
    event_type: "Game",
    fee: "30",
    student1: "Aswin Udayan",
    s1_phone: "9074301121",
    staff: "Aswathy VG",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "3RD - Lab 9",
    time: "--",
    event_image: img7,
  },
  {
    event_id: 918,
    name: "WebTag - Web Designing",
    description:
      "Show off your HTML and CSS skills by replicating a pre-designed web page with precise styling.",
    event_type: "Competition",
    fee: "20",
    student1: "Alan J Nobert",
    s1_phone: "9400566149",
    staff: "Rajitha KV",
    prize: true,
    dept: "cse",
    reg: true,
    group: false,
    venue: "2ND NET LAB",
    time: "12:00 PM - 1:00 PM",
    event_image: img4,
  },
  {
    event_id: 919,
    name: "Balanzo - Fun Games",
    description:
      "Participate in fun activities like Ball in the Hole, Tic-Tac-Toe, and more.",
    event_type: "Game",
    fee: "10",
    student1: "M Akash",
    s1_phone: "9188393436",
    staff: "--",
    prize: true,
    dept: "cse",
    reg: false,
    group: false,
    venue: "GROUND Basket ball court",
    time: "Full day",
    event_image: img9,
  },
  {
    event_id: 920,
    name: "Unheard Echoes - Mobile Game",
    description:
      "Solve a murder mystery with coding challenges. The first duo to crack the code wins.",
    event_type: "Game",
    fee: "10",
    student1: "Rajalakshmi S",
    s1_phone: "8590721637",
    staff: "--",
    prize: true,
    dept: "cse",
    reg: false,
    group: true,
    venue: "2ND S3 CSE C",
    time: "11:30 AM - 1:00 PM",
    event_image: img1,
  },
  {
    event_id: 921,
    name: "GeoGuessr - Finding Places",
    description:
      "Guess locations on a world map using Google Street View clues.",
    event_type: "Game",
    fee: "10",
    student1: "Tharun KC",
    s1_phone: "8890394351",
    staff: "Anju C",
    prize: true,
    dept: "cse",
    reg: true,
    group: true,
    venue: "2ND S3 CSE C",
    time: "Full day",
    event_image: img2,
  },
  {
    event_id: 922,
    name: "Eyecon - Hand Gesture Games",
    description: "Play games controlled by hand gestures.",
    event_type: "Entertainment",
    fee: "0",
    student1: "Akhil CJ",
    s1_phone: "9188698023",
    staff: "Not Provided",
    prize: false,
    dept: "cse",
    reg: true,
    group: false,
    venue: "2ND S3 CSE D",
    time: "Full day",
    event_image: img3,
  },
  {
    event_id: 923,
    name: "Crazy Mirrors",
    description:
      "Television screens with webcams that distort and apply filters to images.",
    event_type: "Entertainment",
    fee: "0",
    student1: "Amal Jerry",
    s1_phone: "8287089713",
    staff: "Not Provided",
    prize: false,
    dept: "cse",
    reg: false,
    group: false,
    venue: "2ND S5 CSE C",
    time: "Full day",
    event_image: img4,
  },
  {
    event_id: 924,
    name: "Byte the Basket",
    description: "Play basketball where techies compete on the court.",
    event_type: "Entertainment",
    fee: "0",
    student1: "Karthik",
    s1_phone: "9778257527",
    staff: "Sneha P",
    prize: false,
    dept: "cse",
    reg: false,
    group: false,
    venue: "GROUND Basket ball court",
    time: "Full day",
    event_image: img5,
  },
];

export default CseEventData;
