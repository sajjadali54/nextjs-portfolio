export const education = [
  {
    degree: "Funded Research Exchange: AI and Machine Learning",
    institution: "Norwegian University of Science and Technology (NTNU)",
    institutionUrl: "https://www.ntnu.edu/",
    startDate: "Aug 2023",
    endDate: "Feb 2024",
    // A six-month learning exchange; no publications. Describe hands-on work only.
    description:
      "A NORPART CONNECT-funded exchange where I gained hands-on experience applying deep learning to facial emotion recognition.",
    achievements: [
      "Trained and compared deep learning models on facial emotion recognition datasets, including FER and AffectNet.",
      "Experimented with transfer learning (VGG, Inception), self-supervised models, and CARD, a diffusion-based classifier.",
      "Evaluated models with confusion matrices, training and validation curves, and ROC-AUC scores.",
      "Worked alongside an international research group.",
    ],
    tags: ["Funded exchange", "Deep learning", "Computer vision", "PyTorch"],
    image:
      "https://www.ntnu.edu/documents/1265708073/1266886158/bygg-5.jpg/0acaaba8-2ac1-4231-af69-85c32e726b3a?t=1501754425569",
  },
  {
    degree: "BS Computer Science",
    institution: "Sukkur IBA University",
    institutionUrl: "https://www.iba-suk.edu.pk/",
    startDate: "Aug 2019",
    endDate: "Jul 2023",
    description:
      "Achieved academic excellence with a focus on data science, software engineering, and AI, supported by multiple scholarships.",
    achievements: [
      "Silver Medalist with a CGPA of 3.62, ranking 2nd in the graduating batch.",
      "Awarded prestigious fully funded scholarships, including the NORPART CONNECT Scholarship for an exchange semester at NTNU.",
    ],
    tags: ["CGPA: 3.62", "Silver Medalist", "Data Science", "AI"],
    finalProject: {
      name: "Brain TAMP",
      tagline:
        "a Flutter app that teaches medical students brain anatomy with 3D models and quizzes.",
      summary:
        "A Flutter app that helps medical students learn the human brain's taxonomy, morphology, anatomy, and physiology (TAMP) through interactive 3D models and quizzes, with Firebase for model storage, app data, and sign-in.",
      role: "Built in a team of three: I developed the frontend and backend, while teammates handled the 3D modelling and the testing and documentation.",
      tech: ["Flutter", "Dart", "Firebase", "3D models"],
      url: "https://github.com/sajjadali54/android-human-brain",
    },
    image:
      "https://i0.wp.com/jaamiah.com/wp-content/uploads/2019/05/IBA-Sukhur-Free-Admissions-600x300.jpg",
  },
];
