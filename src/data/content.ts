/**
 * All editable website content lives here.
 */

export const site = {
  bookTitle: "When One Door Opens",
  author: "Robert Poston",
  monogram: "RP",
  tagline: "A spiritual drama about second chances, consequence, and the courage to choose a better door.",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About the Author", to: "/about" },
  { label: "About the Book", to: "/book" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Email", href: "mailto:contact@example.com" },
] as const;

export const hero = {
  eyebrow: "A Spiritual Drama of Second Chances",
  title: site.bookTitle,
  body: "Life has a way of closing things off without warning. But when one door opens, it does not just lead to a new place. It leads to a new you.",
  primaryCta: "Discover the Journey",
  secondaryCta: "About the Book",
};

export const themes = [
  {
    title: "Renewal",
    body: "The story returns again and again to the possibility of beginning again, even after loss, guilt, or devastating failure.",
  },
  {
    title: "Choice",
    body: "Destiny may reveal patterns, but every life in the novel insists that people remain responsible for the doors they open for themselves.",
  },
  {
    title: "Faith",
    body: "Prayer, spiritual warning, unseen guidance, and moral reckoning shape the emotional heart of the book without reducing it to easy answers.",
  },
  {
    title: "Consequence",
    body: "Each decision echoes forward, touching relationships, identity, grief, and even the next chapter of the soul's journey.",
  },
];

export const synopsis = {
  eyebrow: "Book Summary",
  heading: "A crash, a coma, and the lives waiting behind the next door",
  paragraphs: [
    "When One Door Opens centers on Robert, an operating-room nurse in Denver who is still trying to rebuild his life after divorce, distance from his children, and years of quiet emotional strain. Just as companionship and fragile hope begin to return, a small-plane crash leaves him gravely injured and suspended between life and death.",
    "Inside that threshold, Robert experiences a chain of connected lives stretching across decades and spiritual debts. He is drawn through earlier identities, father-son bonds, moral failures, and warnings ignored, slowly realizing that pain may repeat across lifetimes when truth, gratitude, and responsibility are refused.",
    "As Robert awakens, the novel shifts from mystery to reckoning. Recovery becomes more than survival: it becomes a test of humility, repair, and free will. The question at the center of the story is not whether fate exists, but whether a person will finally choose the better door once it opens.",
  ],
  cta: "Read About the Book",
};

export const featuredQuote = {
  text: "Destiny may reveal a pattern, but it never removes personal responsibility.",
  attribution: site.bookTitle,
};

export const authorBio = {
  eyebrow: "The Author",
  name: site.author,
  short: [
    "Robert Poston writes fiction rooted in spiritual tension, emotional consequence, and the life-changing weight of ordinary human choices. His storytelling blends intimate personal struggle with expansive questions about faith, destiny, and moral accountability.",
    "In When One Door Opens, Robert builds a dramatic world that moves across time, memory, and the unseen realm while keeping its emotional center grounded in family, grief, love, and redemption.",
  ],
  long: [
    "Robert Poston is the author of When One Door Opens, a spiritual drama shaped by questions of free will, unseen guidance, and the emotional cost of the choices people live with long after the moment has passed. His work is drawn toward characters standing at thresholds: between hope and despair, certainty and warning, life and whatever waits beyond it.",
    "His storytelling voice favors emotionally direct scenes, moral tension, and layered timelines that gradually reveal how the past keeps pressing on the present. Rather than treating the spiritual world as abstraction, Robert uses it as a dramatic force that illuminates human weakness, longing, courage, and responsibility.",
    "When One Door Opens reflects his interest in stories where renewal is possible but never automatic. Redemption in his work is not handed out lightly; it has to be chosen, often after grief, consequence, and painful self-recognition. That perspective gives the novel its darker atmosphere as well as its sense of earned hope.",
  ],
  cta: "Read the Author Story",
};

export const homeHighlights = [
  {
    title: "A Journey of Self-Discovery",
    body: "Find meaning in the moments that change everything.",
  },
  {
    title: "Courage to Move Forward",
    body: "Every ending is a chance for a new beginning.",
  },
  {
    title: "New Beginnings, New You",
    body: "Step into a future filled with purpose and possibility.",
  },
  {
    title: "A Story That Stays With You",
    body: "More than a book. It is an experience shaped by mystery, renewal, and hope.",
  },
];

export const journey = [
  {
    step: "I",
    title: "The Warning",
    body: "Subtle signs gather around Robert before the crash, asking whether intuition and grace will be recognized in time.",
  },
  {
    step: "II",
    title: "The Fall",
    body: "A devastating accident shatters the visible world and opens a passage into memory, spirit, and unfinished debt.",
  },
  {
    step: "III",
    title: "The Reckoning",
    body: "Through connected lifetimes, Robert confronts the cost of ignored warnings, hidden temptation, and choices that echo forward.",
  },
  {
    step: "IV",
    title: "The New Door",
    body: "Recovery becomes a final test of humility, repair, and the willingness to choose renewal over repetition.",
  },
];

export const authorTimeline = [
  {
    year: "Concept",
    title: "A Story of Spiritual Thresholds",
    body: "The book takes shape around a central question: what if survival was not the ending of a story, but the beginning of accountability?",
  },
  {
    year: "Structure",
    title: "Layered Across Lifetimes",
    body: "The manuscript evolves into a dramatic structure moving between present-day crisis, past-life narratives, and spiritual consequence.",
  },
  {
    year: "Tone",
    title: "Darkness with Hope",
    body: "The visual and emotional atmosphere is shaped around grief, warning, and renewal, with hope emerging as something earned.",
  },
  {
    year: "Book",
    title: "When One Door Opens",
    body: "The finished work stands as a spiritual drama about choice, second chances, and the doors people open through love, fear, and faith.",
  },
];

export const philosophy = [
  {
    title: "Writing Lens",
    body: "Stories matter most when they reveal how human choices shape both visible consequences and inner transformation.",
  },
  {
    title: "Mission",
    body: "To tell emotionally resonant fiction that explores grief, morality, faith, and the possibility of renewal without losing dramatic intensity.",
  },
  {
    title: "Vision",
    body: "To create stories that leave readers reflecting on responsibility, unseen grace, and the courage required to choose a better future.",
  },
];

export const formats = [
  {
    name: "Hardcover",
    detail: "A collector-style physical edition suited to the book's darker, atmospheric tone and dramatic pacing.",
    price: "TBD",
  },
  {
    name: "Paperback",
    detail: "A flexible print format for general readers, book clubs, and wider distribution.",
    price: "TBD",
  },
  {
    name: "eBook",
    detail: "A digital edition for readers who want immediate access across phones, tablets, and e-readers.",
    price: "TBD",
  },
  {
    name: "Audiobook",
    detail: "A future listening format well-suited to the emotional and spiritual intensity of the story.",
    price: "TBD",
  },
] as const;

export const galleryImages = [
  {
    src: "/sky.png",
    alt: "Stormy sky suggesting spiritual transition and open horizons",
    title: "Open Sky",
  },
  {
    src: "/when-one-door-opens-cover.png",
    alt: "Current placeholder book cover for When One Door Opens",
    title: "Current Book Image",
  },
  {
    src: "asset:mist",
    alt: "Misty landscape representing uncertainty and renewal",
    title: "Misted Threshold",
  },
  {
    src: "asset:library",
    alt: "Dim library shelves evoking memory and hidden history",
    title: "Memory Archive",
  },
  {
    src: "asset:desk",
    alt: "Writing desk with letters and candlelight",
    title: "The Writing Table",
  },
  {
    src: "asset:reading-room",
    alt: "Quiet reading room with moody light",
    title: "Stillness",
  },
];

export const contact = {
  email: "contact@example.com",
  phone: "(000) 000-0000",
  agent: "Author Representative",
  responseTime: "Within 2-4 business days",
  location: "United States",
};

export const contactFaq = [
  {
    q: "Are speaking or interview requests welcome?",
    a: "Yes. Use the contact form to share the event, audience, and preferred dates, and we can respond with availability.",
  },
  {
    q: "Can this website be updated with a final book cover later?",
    a: "Yes. The current home page uses a placeholder image, and the final artwork can be swapped in easily once provided.",
  },
  {
    q: "Is When One Door Opens part of a series?",
    a: "At present it is presented as a standalone spiritual drama centered on Robert's journey through consequence, renewal, and choice.",
  },
];

export const reviews = [
  {
    name: "Editorial Impression",
    source: "Story Positioning",
    quote: "A layered spiritual drama where second chances feel costly, meaningful, and emotionally earned.",
  },
  {
    name: "Theme Focus",
    source: "Book Direction",
    quote: "The novel stands out by treating destiny as atmosphere, not excuse, and responsibility as the deepest emotional test.",
  },
  {
    name: "Reader Promise",
    source: "Audience Appeal",
    quote: "Ideal for readers drawn to faith-tinged suspense, personal reckoning, and stories of renewal after devastation.",
  },
];

export const genres = ["Spiritual Drama", "Contemporary Fiction", "Mystery", "Redemption"];

export const chapters = [
  {
    number: "Part One",
    title: "The Door Before the Fall",
    body: "Robert's life in Denver is marked by separation, prayer, warnings, and small mercies before a flight changes everything.",
  },
  {
    number: "Part Two",
    title: "Between Life and Death",
    body: "A crash leaves Robert suspended in a coma while the physical world fights to save him and the spiritual world demands an answer.",
  },
  {
    number: "Part Three",
    title: "The First Debt",
    body: "An earlier lifetime reveals the origin of a spiritual debt and the bond that has crossed death more than once.",
  },
  {
    number: "Part Four",
    title: "Lives of Choice and Consequence",
    body: "Past identities expose temptation, moral decline, love, secrecy, and the repeated cost of ignored guidance.",
  },
];

export const faq = [
  {
    q: "What kind of story is When One Door Opens?",
    a: "It is a spiritual drama that combines contemporary emotional conflict with supernatural mystery, past-life revelation, and moral reckoning.",
  },
  {
    q: "Is the novel faith-based?",
    a: "Faith and spiritual guidance are central to the story, but the novel is written as dramatic fiction rather than devotional instruction.",
  },
  {
    q: "What is the emotional core of the book?",
    a: "At its center, the novel is about consequence, second chances, family pain, and whether a person can choose renewal after deep loss.",
  },
  {
    q: "Who is the main character?",
    a: "Robert is the central figure, but the novel expands his story through connected lives and spiritual relationships that deepen the stakes.",
  },
  {
    q: "Will the website include final cover art later?",
    a: "Yes. The current site keeps a placeholder image in place so the final cover can be added smoothly once it is available.",
  },
];

export const books = [
  {
    title: site.bookTitle,
    slug: "when-one-door-opens",
    year: "Upcoming",
    tag: "Spiritual Drama",
    body: "A story of grief, warning, destiny, and free will set against a devastating crash and the unseen lives beyond it.",
    description: [
      "When One Door Opens follows Robert, an operating-room nurse whose life is already under pressure when a plane crash places him in a prolonged coma and opens the way to a deeper spiritual reckoning.",
      "As Robert moves through the threshold between life and death, he experiences connected lives that uncover a long-running debt, repeated temptation, and the cost of choices that were never fully faced.",
      "The novel returns to the present with a powerful question: if a person is given another chance, will he repeat the old pattern, or finally walk through the better door?",
    ],
    amazonLink: "#",
  },
];
