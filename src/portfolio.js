/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Edy Kurniawan",
  title: "Hi all, I'm Edy",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web with Laravel / Express Js / Wordpress and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1c3kWn3BeEY8kgOVRo4UjLJI1cOz93zmJ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/edy-kurniawan",
  linkedin: "https://www.linkedin.com/in/edy-kurniawan/",
  gmail: "edy.kurniawan280898@gmail.com",
  instagram: "https://instagram.com/edy_.kurniawan",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive full-stack web applications, including enterprise-level solutions such as ERP, with seamless front-end and back-end integration."
    ),
    emoji("⚡ Integrate and manage third-party services, such as payment gateways and cloud-based solutions, along with managing database operations and server-side logic."),
    emoji(
      "⚡  Set up, manage, and optimize Linux servers for deployment, including security configurations and performance tuning."
    ),
    emoji(
      "⚡ Implement server monitoring and performance analytics using tools like Grafana to ensure system reliability and scalability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Duta Bangsa Surakarta",
      logo: require("./assets/images/udb2.png"),
      subHeader: "S1 - Teknik Informatika",
      duration: "2016 - 2020"
    },
    {
      schoolName: "SMK Muhammadiyah 1 Sukoharjo",
      logo: require("./assets/images/smk.jpeg"),
      subHeader: "Teknik Komputer dan Jaringan",
      duration: "2013 - 2016"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Sekolah Desain",
      companylogo: require("./assets/images/sekolahdesain.jpeg"),
      date: "Nov 2020 – Jan 2021",
      desc: "Responsible for supporting the development team in designing, developing, and maintaining the backend components of web applications.",
      descBullets: []
    },
    {
      role: "Fasilitator Pelatihan",
      company: "LKP Gama 94",
      companylogo: require("./assets/images/gama94.png"),
      date: "Jul 2023 - Des 2023",
      desc: "Responsible for designing a comprehensive curriculum, delivering materials interactively, guiding participants in final projects, and conducting evaluations to ensure participants' understanding."
    },
    {
      role: "Programmer",
      company: "Solonet",
      companylogo: require("./assets/images/solonet.png"),
      date: "Feb 2021 - Now",
      desc: "Analyze, design, develop, and deploy web-based applications, while also expanding into the Internet of Things (IoT) and server development."
    },
    {
      role: "Fasilitator Pelatihan",
      company: "LKP Cakra",
      companylogo: require("./assets/images/cakra.jpeg"),
      date: "Agt 2024 - Now",
      desc: "Develop a comprehensive curriculum, deliver material in an engaging manner, guide participants in completing final projects, and conduct evaluations to ensure participants truly understand the material."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/project/1.png"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/project/2.png"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Last Projects 🏆 "),

  achievementsCards: [
    {
      title: "Integrated Business Management Solution",
      subtitle:
        "I developed an ERP (Enterprise Resource Planning) system that includes key modules such as purchasing, stock management, sales, and accounting.",
      image: require("./assets/images/project/1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Laravel",
          url: "#"
        },
        {
          name: "Bootstrap",
          url: "#"
        },
        {
          name: "AJAX",
          url: "#"
        }
      ]
    },
    {
      title: "Geospatial Analysis for Customer",
      subtitle:
        "A WebGIS was created to visualize and analyze spatial data, focusing on the distribution of customer locations and population density.",
      image: require("./assets/images/project/2.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Laravel",
          url: "#"
        },
        {
          name: "Leaflet JS",
          url: "#"
        },
        {
          name: "Bootstrap",
          url: "#"
        }
      ]
    },
    {
      title: "SNAP BI with BRI and BNI",
      subtitle: "This solution enables seamless, secure, and real-time online payment processing, providing users with multiple banking options and enhancing transaction efficiency.",
      image: require("./assets/images/project/3.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Laravel",
          url: "#"
        },
        {
          name: "Virtual Account",
          url: "#"
        },
        {
          name: "SNAP BI",
          url: "#"
        }
      ]
    },
    {
      title: "HRIS and Payroll System",
      subtitle: "Automate various HR processes, including attendance tracking, overtime calculation, leave management, and salary processing.",
      image: require("./assets/images/project/4.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Laravel",
          url: "#"
        },
        {
          name: "Arduino",
          url: "#"
        },
        {
          name: "Websockets",
          url: "#"
        },
        {
          name: "RFID",
          url: "#"
        },
        {
          name: "Express Js",
          url: "#"
        },
        {
          name: "Redis",
          url: "#"
        }
      ]
    },
    {
      title: "WhatsApp API Integration",
      subtitle: "A WhatsApp API integration was developed to automate the broadcasting of invoices, leveraging both official and unofficial API solutions.",
      image: require("./assets/images/project/5.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Express Js",
          url: "#"
        },
        {
          name: "Webhooks",
          url: "#"
        },
        {
          name: "Chromium",
          url: "#"
        }
      ]
    },
    {
      title: "Unified Access for Multiple Applications",
      subtitle: "Provide a seamless authentication process across multiple applications with a single set of credentials",
      image: require("./assets/images/project/6.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Laravel",
          url: "#"
        },
        {
          name: "JWT",
          url: "#"
        }
      ]
    },
    {
      title: "MikroTik API Integration",
      subtitle: "A custom API was developed using MikroTik to manage customers who subscribe to internet services and control bandwidth allocation.",
      image: require("./assets/images/project/7.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Laravel",
          url: "#"
        },
        {
          name: "Mikrotik",
          url: "#"
        },
        {
          name: "JWT",
          url: "#"
        }
      ]
    },
    {
      title: "Landing Pages and Company Profiles",
      subtitle: "Developed customized landing pages and company profiles for several organizations, aimed at enhancing their online presence and engaging potential clients.",
      image: require("./assets/images/project/8.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Wordpress",
          url: "#"
        },
        {
          name: "Elementor",
          url: "#"
        },
        {
          name: "Woocommerce",
          url: "#"
        }
      ]
    },
    {
      title: "Web Server Development",
      subtitle: "A fully integrated web server infrastructure was designed and deployed, encompassing DNS configuration, database management, and NAS server setup",
      image: require("./assets/images/project/9.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Linux",
          url: "#"
        },
        {
          name: "Nginx",
          url: "#"
        },
        {
          name: "Nextcloud",
          url: "#"
        },
        {
          name: "MySQL",
          url: "#"
        }
      ]
    },
    {
      title: "Virtual Server Infrastructure",
      subtitle: "A virtual server infrastructure was built using Proxmox, enabling the creation and management of multiple virtual machines (VMs) with centralized monitoring via Grafana",
      image: require("./assets/images/project/10.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Proxmox",
          url: "#"
        },
        {
          name: "Grafana",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6287812952426",
  email_address: "edy.kurniawan280898@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
