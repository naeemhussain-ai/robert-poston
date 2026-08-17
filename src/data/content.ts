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
    `"When One Door Opens" is a story about an ordinary guy (the main character) going through life with the struggles that anyone of us could face or has faced. He comes off as being ungrateful while struggling with a divorce and self-identity. This main character ends up on life support after being in a small plane crash. While being confronted with being in a coma for almost four months he leaves his body and enters the afterlife.`,
    "Along with this notion he comes to realize that there was a generational curse he had acquired in a past life in which he must work to break. He is guided by a positive spirit he had a close relationship with in a previous life named Orin who is also implicated in this curse. Along with this the main character enters a series of new experiences living vicariously as the person he could have been learning that the grass isn't always greener on the other side.",
    "The story provides a subtle ending in which the main character accepts gratitude and a more nurturing relationship prioritizing his children and the people he loves versus having the things in life he only wish he had.",
  ],
  cta: "Read About the Book",
};

export const featuredQuote = {
  text: "Destiny may reveal a pattern, but it never removes personal responsibility.",
  attribution: site.bookTitle,
};

export const bookQuote = {
  text: "The people you love become ghosts inside of you and like this you keep them alive.",
  attribution: "The Stanley Hotel, Estes Park, Colorado",
};

export const whyIWrote = {
  eyebrow: "A Message from the Author",
  heading: 'Why I Wrote "When One Door Opens"',
  paragraphs: [
    "Over the years, I have carried a deep curiosity about the possibility of a world beyond our own. The book explores that idea through an ordinary person who faces experiences I believe any of us could encounter, whether we recognize them or not.",
    "The story reflects the battle within us   not one of flesh and blood, but one between good and evil. I believe life continues beyond death, and that death is not truly the end. Through suspense and emotion, the book follows a man guided by a guardian angel while struggling against a generational curse placed on his family long before him.",
    "I feel as though the book hits several twists and turns of emotion but ultimately ends with a subtle resolution that will leave any reader satisfied. My goal was to design this story as an easy read that would also leave the reader thinking, as I have thought about for so many years. My hope is to make that connection.",
  ],
};

export const authorBio = {
  eyebrow: "The Author",
  name: site.author,
  short: [
    "My name is Robert Poston. Born in 1970, I grew up in a town twelve miles east of Los Angeles. We did not have much, but we made the most of what we had. I lived with my mother, father, and brother. Even then, I was empathetic and known more as a listener than a talker. I did not have many friends, and my parents and close relatives often saw me as more mature than other children my age.",
    "After the military, my career in healthcare began as a surgical technician before I earned my nursing degree. I have always felt a calling to help people, especially those in vulnerable moments. It is rewarding to watch patients recover from their illness and to be present as a source of support during their healing.",
  ],
  long: [
    "My name is Robert Poston. As a child, I sometimes experienced things I could not explain. Growing up with my brother, my parents, and even friends, I often felt like the odd one out. I might dream that someone would become ill, or sense how someone was feeling before they even spoke. To others, this sometimes made me seem overly critical, but I later understood it as empathy. Looking back, I believe healthcare was where I was meant to be. Understanding people came naturally to me, and I have learned that when something is meant for us, it often unfolds more easily when we trust our intuition.",
    "I did not have many friends growing up. Being told I was wise beyond my years often separated me from others my age instead of bringing us closer. I spent much of my time observing people and wondering why they acted or thought the way they did. I was always drawn to the idea of purpose and believed that things happened for a reason. I also believed that each of us faced challenges we were meant to overcome.",
    "In high school, my parents encouraged me to join the military after graduation or move out when I turned eighteen. Although I wanted to attend college right away, I chose the military and used the experience to learn more about how people interact and cope with uncertainty, including myself.",
    "Later, after building a family and facing life's challenges, I came to believe that each new day offers a lesson. Whether people cope through faith or struggle with harmful ways of escaping pain, I have learned that we have more in common than we often realize. Today, I live in Texas, work as a nurse helping others, and enjoy writing.",
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
