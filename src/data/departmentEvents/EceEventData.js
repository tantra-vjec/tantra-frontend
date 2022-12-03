const EceEventData = [
    {
        event_id:40,
        name: 'ROOM OF MYSTERY ',
        description: 'Spinning tunnel,LED cube ,Marx generator , Propellor display,Tesla coil',
        event_type:'Exhibition' ,
        fee:10,
        student1: 'Martin P Thomas',
        s1_phone: 9074076341,
        student2: 'Akshay Janardhanan',
        s2_phone: 9606808560,
        staff: 'Ms.Lekshmy ',
        prize: false,
        dept:'ece',
        reg: true,
        group: false,
        venue: 'F5, ECE Block, 1st Floor',
        time: ''
    },
    {
        event_id:54,
        name: 'VR & Gaming By PACELAB',
        description: 'Gaming and Entertainment',
        event_type:'Competition' ,
        fee:60,
        student1: 'Malavika Ajith',
        s1_phone: 9061948069,
        student2: 'Niswarth A V',
        s2_phone: 8921680623,
        staff: 'Mr. Binil Kumar',
        prize: false,
        dept:'ece',
        reg: true,
        group: false,
        venue: 'S7 ECE,2nd Floor, ECE Block',
        time: '9:30AM to 4:10PM'
    },
    {
        event_id:53,
        name: 'GOLAZO',
        description: 'E- football mobile event behalf of FIFA world cup ',
        event_type:'Games' ,
        fee:'10 (Closed)',
        student1: 'Sebastian George',
        s1_phone: 9539450318,
        student2: 'Nevin Saji',
        s2_phone: 7306389257,
        staff: 'Ms.Anusha Chacko',
        prize: true,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Tutorial Room(UG), 3rd Floor, ECE Block',
        time: '11AM to 4:10PM'
    },
    {
        event_id:55,
        name: 'Workshop',
        description: 'Hands on Training on Self Driving Car using AI with IIT Bombay Certificate',
        event_type:'Competition' ,
        fee:'450 (Closed)',
        student1: 'Sanath K',
        s1_phone: 8111938285,
        student2: 'Dhanush CH',
        s2_phone: 8547950254,
        staff: 'Mr.Adarsh K S',
        prize: false,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Advanced Communication Lab, 3rd Floor, ECE Block',
        time: '9:30AM to 4:10PM'
    },
    {
        event_id:41,
        name: 'Electro Comm Room',
        description: 'Evolution of electronics and communication ',
        event_type:'Exhibition' ,
        fee:'FREE',
        student1: 'Amruthendu',
        s1_phone: '9778121413',
        student2: 'Harsha ',
        s2_phone: 9995036742,
        staff: 'Ms.Shimna',
        prize: false,
        dept:'ece',
        reg: true,
        group: false,
        venue: 'S5 ECE,S3 ECE, 2nd Floor, ECE Block',
        time: '9:30AM to 4:10PM'
    },
    {
        event_id:42,
        name: 'Project Exhibition',
        description: 'Exihibition of projects related to Electronics and communication',
        event_type:'Exhibition' ,
        fee:'FREE',
        student1: 'Jacob James',
        s1_phone: 8078400672,
        student2: 'Aswin Surendran',
        s2_phone: 8714092169,
        staff: ' Mr.Jayesh ',
        prize: false,
        dept:'ece',
        reg: true,
        group: true,
        venue: 'Analog Electronics Lab, 2nd Floor, ECE Block',
        time: '9:30AM to 4:10PM'
    },
    {
        event_id:43,
        name: 'Interfuse',
        description: 'Skills in hand soldering complex printed board assemblies. Spot Admission Is Available',
        event_type:'Competition' ,
        fee:'FREE (Closed)',
        student1: 'Anusree KV',
        s1_phone: 9400547483,
        student2: 'Keerthi Pradeep',
        s2_phone: 9895280143,
        staff: 'Ann Mathews',
        prize: false,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Communicaion Engineering Lab,3rd Floor, ECE Block',
        time: '9:30AM to 11AM'
    },
    {
        event_id:44,
        name: 'Logic Circuit Design',
        description: 'Design a logic circuit for the required function. Spot Admission Is Available',
        event_type:'Competition' ,
        fee:'FREE (Closed)',
        student1: 'Vishnupriya',
        s1_phone: 8157817792,
        student2: 'Gayatri',
        s2_phone: 9847403211,
        staff: 'Ann Mathews',
        prize: true,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Logic Circuit Design Lab, 2nd Floor, ECE Block',
        time: '9:30AM to 11AM'
    },
    {
        event_id:45,
        name: 'Inventive Electronics',
        description: 'Introduce and perform presentations on new electronic products or components',
        event_type:'Competition' ,
        fee:'FREE (Closed)',
        student1: 'Ashik Benny',
        s1_phone: 8590549584,
        student2: 'Sidharth K',
        s2_phone: 9895278292,
        staff: 'Ann Mathews',
        prize: true,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Intel Galileo Lab, 3rd Floor, ECE Block',
        time: '9:30AM to 12PM'
    },
    {
        event_id:46,
        name: 'Error-zzz',
        description: 'Ability to find errors in circuits and correct  them',
        event_type:'Competition' ,
        fee:'FREE (Closed)',
        student1: 'Gopika Gopalakrishnan',
        s1_phone: 6238973615,
        student2: ' Shreya Deep Anand',
        s2_phone: 6238840255,
        staff: 'Ann Mathews',
        prize: true,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Communication Engineering Lab, 3rd Floor, ECE Block',
        time: '11:30AM to 12:30PM'
    },
    {
        event_id:47,
        name: 'Avant-Garde',
        description: 'Present their innovative idea and innovations ',
        event_type:'Competition' ,
        fee:'FREE (Closed)',
        student1: 'Dona Chacko',
        s1_phone: 7306012152,
        student2: 'Nayana Saji',
        s2_phone: 7306326501,
        staff: 'Ann Mathews',
        prize: false,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Intel Galileo Lab, 3rd Floor, ECE Block',
        time: '11AM to 2PM'
    },
    {
        event_id:48,
        name: 'Quiz\' O Maniac',
        description: 'Quiz based on elecronics and communication. Spot Admission Is Available',
        event_type:'Competition' ,
        fee:'FREE (Closed)',
        student1: 'Ruby Sharin',
        s1_phone: 8156992047,
        student2: 'Swathi Lekshmy',
        s2_phone: 9633739441,
        staff: 'Ms.Sudarshana ',
        prize: true,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'ECE Department Library, 2nd Floor, ECE Block',
        time: '10AM to 12PM'
    },
    {
        event_id:49,
        name: 'Treasure hunt ',
        description: 'Online treasure hunt based on logical reasoning and general aptitude',
        event_type:'Games' ,
        fee:'20 (Closed)',
        student1: 'Manas Tom',
        s1_phone: 8590842344,
        student2: 'Belfin',
        s2_phone: 9383417420,
        staff: 'Ms.Anusha Chacko',
        prize: true,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Research Lab, 3rd Floor, ECE Block',
        time: '10:30AM to 4:10PM'
    },
    {
        event_id:50,
        name: 'Junkyard Wars',
        description: 'Assembling the circuit in minimum time',
        event_type:'Games' ,
        fee:'FREE (Closed)',
        student1: 'Olivia Ann Mathew',
        s1_phone: 8848776133,
        student2: 'Anjana Mukundan K',
        s2_phone: 9633295163,
        staff: 'Ms.Anusha Chacko',
        prize: true,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Research Lab, 3rd Floor, ECE Block',
        time: '9:30AM to 10:30AM'
    },
    {
        event_id:51,
        name: 'Crossword ',
        description: 'Solving clues related to electronics and communication. Spot Admission Is Available',
        event_type:'Games' ,
        fee:'FREE (Closed)',
        student1: 'Saishna Shamej',
        s1_phone: 7012576223,
        student2: 'Geethika T',
        s2_phone: 9497053132,
        staff: 'Ms.Anusha Chacko',
        prize: true,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Tutorial Lab(UG), 3rd Floor, ECE Block',
        time: '9:30AM to 10:30AM'
    },
    {
        event_id:52,
        name: 'Blank coding',
        description: 'Typing the code by desktop screen by. Spot Admission Is Available',
        event_type:'Games' ,
        fee:'FREE (Closed)',
        student1: 'Sreerag ',
        s1_phone: 8330057694,
        student2: 'Ajay',
        s2_phone: '8330071700',
        staff: 'Ms.Anusha Chacko',
        prize: true,
        dept:'ece',
        reg: false,
        group: false,
        venue: 'Research Lab, 3rd Floor, ECE Block',
        time: '11AM to 1PM'
    },
];

export default EceEventData;