const questions = [
  {
    question: "Who discovered the hidden path leading to the Secret Garden?",
    answers: [
      {
        text: "Lily",
        correct: true,
      },
      {
        text: "Rose",
        correct: false,
      },
      {
        text: "Daisy",
        correct: false,
      },
      {
        text: "Violet",
        correct: false,
      },
    ],
  },
  {
    question: "What did Lily find in the middle of the Secret Garden?",
    answers: [
      {
        text: "A fountain",
        correct: true,
      },
      {
        text: "A statue",
        correct: false,
      },
      {
        text: "A tree house",
        correct: false,
      },
      {
        text: "A cave",
        correct: false,
      },
    ],
  },
  {
    question: "Who greeted Lily as the guardian of the Secret Garden?",
    answers: [
      {
        text: "The spirit of nature",
        correct: true,
      },
      {
        text: "A fairy",
        correct: false,
      },
      {
        text: "A gnome",
        correct: false,
      },
      {
        text: "A wizard",
        correct: false,
      },
    ],
  },
  {
    question:
      "What did the spirit of nature reveal about the plants in the Secret Garden?",
    answers: [
      {
        text: "They could talk",
        correct: false,
      },
      {
        text: "They could cure sickness",
        correct: true,
      },
      {
        text: "They could fly",
        correct: false,
      },
      {
        text: "They could grant wishes",
        correct: false,
      },
    ],
  },
  {
    question:
      "How did Lily share the magic of the Secret Garden with her friends?",
    answers: [
      {
        text: "By telling them stories",
        correct: false,
      },
      {
        text: "By bringing them to visit",
        correct: true,
      },
      {
        text: "By sending them photographs",
        correct: false,
      },
      {
        text: "By teaching them spells",
        correct: false,
      },
    ],
  },
  {
    question:
      "What happened as Lily grew older and shared the secret of the garden with everyone in the village?",
    answers: [
      {
        text: "The garden disappeared",
        correct: false,
      },
      {
        text: "The garden became a public park",
        correct: true,
      },
      {
        text: "The garden lost its magic",
        correct: false,
      },
      {
        text: "The garden grew bigger",
        correct: false,
      },
    ],
  },
  {
    question:
      "What was one special feature of the animals in the Secret Garden?",
    answers: [
      {
        text: "They could grant wishes",
        correct: false,
      },
      {
        text: "They could talk",
        correct: true,
      },
      {
        text: "They could change colors",
        correct: false,
      },
      {
        text: "They could fly",
        correct: false,
      },
    ],
  },
  {
    question:
      "How did the Secret Garden become a favorite place for people to visit in the village?",
    answers: [
      {
        text: "Through Lily's storytelling",
        correct: true,
      },
      {
        text: "Through advertisements",
        correct: false,
      },
      {
        text: "Through word of mouth",
        correct: false,
      },
      {
        text: "Through social media",
        correct: false,
      },
    ],
  },
  {
    question:
      "What was one thing Lily found every time she visited the Secret Garden?",
    answers: [
      {
        text: "A treasure chest",
        correct: false,
      },
      {
        text: "A new friend",
        correct: false,
      },
      {
        text: "Something new and exciting",
        correct: true,
      },
      {
        text: "A magic wand",
        correct: false,
      },
    ],
  },
  {
    question:
      "What made the Secret Garden special for those who believed in magic and kindness?",
    answers: [
      {
        text: "Its hidden location",
        correct: false,
      },
      {
        text: "Its colorful flowers",
        correct: false,
      },
      {
        text: "Its talking animals",
        correct: false,
      },
      {
        text: "Its magical atmosphere",
        correct: true,
      },
    ],
  },
  {
    question:
      "Who did Lily bring to the Secret Garden to share the magic with?",
    answers: [
      {
        text: "Her family",
        correct: false,
      },
      {
        text: "Her classmates",
        correct: false,
      },
      {
        text: "Her neighbors",
        correct: false,
      },
      {
        text: "Her friends",
        correct: true,
      },
    ],
  },
  {
    question: "What role did the spirit of nature play in the Secret Garden?",
    answers: [
      {
        text: "Protector",
        correct: true,
      },
      {
        text: "Gardener",
        correct: false,
      },
      {
        text: "Storyteller",
        correct: false,
      },
      {
        text: "Magician",
        correct: false,
      },
    ],
  },
  {
    question:
      "What was the first thing Lily noticed when she entered the Secret Garden?",
    answers: [
      {
        text: "The fountain",
        correct: false,
      },
      {
        text: "The colorful flowers",
        correct: true,
      },
      {
        text: "The singing birds",
        correct: false,
      },
      {
        text: "The talking animals",
        correct: false,
      },
    ],
  },
  {
    question:
      "What did Lily do as she grew older and visited the Secret Garden?",
    answers: [
      {
        text: "Became its guardian",
        correct: false,
      },
      {
        text: "Wrote a book about it",
        correct: false,
      },
      {
        text: "Shared its secret with everyone",
        correct: true,
      },
      {
        text: "Learned magic spells",
        correct: false,
      },
    ],
  },
  {
    question: "What did the plants in the Secret Garden have the power to do?",
    answers: [
      {
        text: "Fly",
        correct: false,
      },
      {
        text: "Talk",
        correct: false,
      },
      {
        text: "Cure sickness",
        correct: true,
      },
      {
        text: "Grant wishes",
        correct: false,
      },
    ],
  },
  {
    question:
      "How did people in the village initially react to Lily sharing the secret of the garden?",
    answers: [
      {
        text: "They didn't believe her",
        correct: true,
      },
      {
        text: "They thought she was crazy",
        correct: false,
      },
      {
        text: "They were amazed",
        correct: false,
      },
      {
        text: "They were scared",
        correct: false,
      },
    ],
  },
  {
    question: "What aspect of the Secret Garden made it a popular destination?",
    answers: [
      {
        text: "Its hidden entrance",
        correct: false,
      },
      {
        text: "Its magical aura",
        correct: true,
      },
      {
        text: "Its size",
        correct: false,
      },
      {
        text: "Its rare flowers",
        correct: false,
      },
    ],
  },
  {
    question:
      "What did Lily hear when she approached the fountain in the Secret Garden?",
    answers: [
      {
        text: "Music",
        correct: false,
      },
      {
        text: "Laughter",
        correct: false,
      },
      {
        text: "A soft voice",
        correct: true,
      },
      {
        text: "Whispering winds",
        correct: false,
      },
    ],
  },
  {
    question: "What did the spirit of nature claim to be in the Secret Garden?",
    answers: [
      {
        text: "A fairy",
        correct: false,
      },
      {
        text: "A guardian",
        correct: true,
      },
      {
        text: "A wizard",
        correct: false,
      },
      {
        text: "A gnome",
        correct: false,
      },
    ],
  },
  {
    question:
      "What was the essence of the Secret Garden for those who believed in magic and kindness?",
    answers: [
      {
        text: "Its hidden treasures",
        correct: false,
      },
      {
        text: "Its shared secrets",
        correct: false,
      },
      {
        text: "Its magical charm",
        correct: true,
      },
      {
        text: "Its colorful blossoms",
        correct: false,
      },
    ],
  },
];

export default questions;
