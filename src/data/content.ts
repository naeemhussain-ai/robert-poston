/**
 * All editable website content lives here.
 */

export const site = {
  bookTitle: "The Spirit of Love",
  author: "Stella Denise Solano",
  monogram: "SDS",
  tagline: "One woman's journey from silence and survival toward faith, love, and purpose.",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Author", to: "/about" },
  { label: "Book", to: "/book" },
  { label: "Contact", to: "/contact" },
] as const;

export const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Goodreads", href: "#" },
] as const;

export const hero = {
  eyebrow: "A Memoir of Survival, Faith & Love",
  title: site.bookTitle,
  body: "At sixty-four, Stella Denise Solano looks back on a life shaped by abandonment, betrayal, and an unwavering faith that guided her through every storm. The Spirit of Love is a raw and redemptive memoir about surviving what no one speaks aloud   and choosing love, again and again, until it finally stays.",
  primaryCta: "Discover the Story",
  secondaryCta: "Read Preview",
};

export const themes = [
  {
    title: "Love",
    body: "From a child who longed to be wanted to a woman who refused to stop believing, this memoir traces every form of love   given, lost, withheld, and finally, freely chosen.",
  },
  {
    title: "Destiny",
    body: "Denise's life unfolds as a series of moments she could not have planned   a childhood near-tragedy, a marriage that healed and then broke, a voice that kept calling her forward. Faith reveals the pattern only in hindsight.",
  },
  {
    title: "Hope",
    body: "Even in the years of silence and disappearing, Denise kept a small, unspoken belief that life was not finished with her. That belief became the foundation for every new beginning.",
  },
  {
    title: "Healing",
    body: "True healing, Denise discovers, is not the absence of pain. It is the courage to name what happened, to choose differently, and to trust that the wounds you carry can become wisdom you pass on.",
  },
];

export const synopsis = {
  eyebrow: "The Memoir",
  heading: "A life survived in silence   and the faith that made it mean something",
  paragraphs: [
    "At sixty-four, Stella Denise Solano sits with a life that often felt like a dream   not because it was easy, but because so much of it was survived in silence, in dissociation, in a quiet inner world that protected her long before she understood what protection meant. Born into poverty on a family ranch, shuffled between relatives across California and Mexico, and shaped by an early encounter with death that convinced her she had been kept alive for a reason, Denise grew up learning to disappear rather than belong.",
    "Through marriage, motherhood, betrayal, and loss, she became a woman who provided for everyone but herself. She raised a daughter, cared for a niece, built a career in the flower industry, and turned her home into a gathering place for nearly a hundred family members   all while carrying wounds she had never been given language for. Her first marriage ended in heartbreak. Her second, a true love story built over twenty years, ended in grief. And in the silence that followed, she began to hear something she had been listening for her whole life.",
    "The Spirit of Love is a memoir of spiritual awakening told through the most ordinary and extraordinary details of one woman's life. It is about what faith looks like when you are too exhausted to perform it   when it is only prayer in the dark, footsteps heard after loss, and a voice telling you to continue. Denise writes for every person who has survived something they have never spoken aloud, who has mistaken their strength for hardness, and who wonders whether love   real, gentle, chosen love   is something they still deserve.",
  ],
  cta: "Read Full Synopsis",
};

export const featuredQuote = {
  text: "Every trial I survived was not a punishment. It was a lesson. And every lesson was quietly building the woman I was always meant to become.",
  attribution: site.author,
};

export const authorBio = {
  eyebrow: "The Author",
  name: site.author,
  short: [
    "Stella Denise Solano is the author of The Spirit of Love, a spiritual memoir published by Miramax Books. Born in rural California and raised between ranch life and city relatives, she spent decades working in the floral industry, raising her daughter, and building the kind of home she once dreamed of as a child.",
    "At sixty-four, she writes with the clarity of someone who has survived abandonment, betrayal, addiction in those she loved, and extraordinary loss   and come through each trial with deeper faith and a renewed belief in love. She lives in California and is at work on her next book.",
  ],
  long: [
    "Stella Denise Solano was born into a large, close-knit, and complicated family on a California ranch, where her grandmother converted a garage into a small two-bedroom home for five children. Life was full of gardens, fruit trees, animals, and homemade tortillas   and also of poverty, instability, and the early feeling of being somewhere she did not quite belong. From childhood, she moved in a dreamlike state, spending summers with relatives across California and Mexico, learning to remain quiet and useful, and slowly separating herself from her own feelings in order to survive.",
    "As a young woman, Denise entered the workforce, raised her daughter after a difficult first marriage, and built a career in the floral industry that allowed her to become fully financially independent. She remarried, created a home where extended family gathered in their dozens every holiday, and believed for a time that the hard years were behind her. Then her second husband's hidden struggles with alcohol began to surface, and she became a caregiver, an advocate, and eventually a widow   navigating grief with the same quiet endurance that had carried her through every earlier loss.",
    "In the years that followed, Denise found her spiritual life expanding beyond the Catholic framework of her childhood. She began speaking directly to God, to angels, to the universe, and to the presence she believed her second husband left behind. A difficult relationship that followed pushed her to leave everything familiar and start again   nine hours away, in a new city, with only her intuition to guide her. It was in that solitude that she finally began writing in earnest.",
    "The Spirit of Love is her first memoir, and it is addressed to everyone who has ever survived something in silence. Denise writes as a woman who has made peace with being the black sheep   who now understands that she was always a chosen child. She speaks directly to survivors of abandonment, betrayal, and grief, and offers the only truth she has earned: that love is not only worth believing in. It is worth choosing, again and again, until it finally stays.",
  ],
  cta: "Meet Stella Denise Solano",
};

export const formats = [
  {
    name: "Hardcover",
    detail: "The clothbound first edition   a book to be kept, given, and returned to. Printed on cream-toned pages with a sewn binding designed to last a lifetime.",
    price: "£24.00",
  },
  {
    name: "Paperback",
    detail: "The trade paperback edition   the ideal companion for reading circles, morning devotionals, and anyone ready to carry Denise's story with them.",
    price: "£12.00",
  },
  {
    name: "eBook",
    detail: "Available instantly across all major platforms. The Spirit of Love in digital format   searchable, shareable, and always within reach.",
    price: "£6.99",
  },
  {
    name: "Audiobook",
    detail: "Narrated with warmth and intention. Let Denise's story reach you through sound   ideal for long drives, early mornings, or quiet evenings.",
    price: "£16.00",
  },
];

export const testimonials = [
  {
    name: "Margaret L.",
    role: "Spiritual Memoir Reader",
    quote: "I read this book in two sittings. There is something in Denise's honesty that breaks something open in you   the kind of book that makes you want to call someone you love and say the things you have been keeping.",
  },
  {
    name: "Pastor T. Reeves",
    role: "Community Faith Leader",
    quote: "The Spirit of Love is not a book about religion. It is a book about the kind of faith that survives everything   and what it teaches you when you finally arrive on the other side.",
  },
  {
    name: "Rebecca Okafor",
    role: "Clinical Counsellor",
    quote: "This memoir gives language to experiences that many survivors have never been able to name. Denise writes about trauma, silence, and healing with a clarity that is both accessible and profound.",
  },
];

export const journey = [
  {
    step: "I",
    title: "The Invitation",
    body: "Born into a life that did not feel like her own, Denise enters the world already reaching for something she cannot name   a sense of purpose that arrives, quietly, in a moment of childhood crisis.",
  },
  {
    step: "II",
    title: "The Unravelling",
    body: "Love, marriage, and motherhood bring structure, but beneath them, old wounds run deep. Betrayal arrives and cannot be unseen. Denise must choose between the life that is familiar and the life that is honest.",
  },
  {
    step: "III",
    title: "The Reckoning",
    body: "After loss, Denise begins to hear what grief is trying to teach her. She confronts the habits of silence and disappearance that once kept her safe   and discovers that awareness is the beginning of freedom.",
  },
  {
    step: "IV",
    title: "The Return",
    body: "At sixty-four, Denise chooses love again   not from desperation, but from wisdom. The black sheep becomes the chosen child. The dream world gives way to purpose, presence, and peace.",
  },
];

export const authorTimeline = [
  {
    year: "2011",
    title: "First Pages",
    body: "The early drafts of what would become The Spirit of Love begin on quiet mornings, in the hours before Denise left for work. She had no plan for a book   only a need to understand the life she had lived.",
  },
  {
    year: "2015",
    title: "A Quiet Debut",
    body: "Denise begins sharing fragments of her story with trusted friends and a small faith community. Their response   tears, recognition, and the words 'this is my story too'   confirms that what she is writing must be finished.",
  },
  {
    year: "2019",
    title: "The Long Winter",
    body: "Grief arrives with the illness and eventual passing of her second husband. Denise sets aside the manuscript and spends two years simply surviving. The writing resumes   deeper, truer, and without apology.",
  },
  {
    year: "2024",
    title: "The Spirit of Love",
    body: "Published by Miramax Books, The Spirit of Love is released as a memoir for survivors   for those who have lived in silence, in caregiving, and in the unshakeable belief that love and purpose are still possible.",
  },
];

export const philosophy = [
  {
    title: "Philosophy",
    body: "Every wound, properly honoured, becomes wisdom. Denise writes from the belief that no part of a life   however painful   is wasted, and that the people who have suffered most quietly often have the most to offer the world.",
  },
  {
    title: "Mission",
    body: "To reach every person who has survived something in silence and give them language, courage, and the knowledge that they are not alone. The Spirit of Love exists to remind its readers that their story is not finished.",
  },
  {
    title: "Vision",
    body: "A world in which survivors speak   where faith is personal and expansive, where love is understood as an action rather than a feeling, and where no one mistakes their endurance for unworthiness.",
  },
];

export const awards = [
  {
    title: "Miramax Featured Title",
    year: "2024",
    body: "Selected as a lead title in Miramax Books' Spring 2024 list, recognising The Spirit of Love as a work of outstanding personal and spiritual significance.",
  },
  {
    title: "Reader Circle Pick",
    year: "2024",
    body: "Chosen by the Reader Circle community as a monthly selection, featured in reading groups and faith communities across the United States.",
  },
  {
    title: "Spiritual Memoir Shortlist",
    year: "2025",
    body: "Shortlisted for recognition in the annual spiritual memoir category, honouring books that speak honestly about faith, grief, and transformation.",
  },
];

export const chapters = [
  {
    number: "Part One",
    title: "The Child Who Lived in a Dream",
    body: "She looked toward the sky as a very young child and asked Jesus to take her back. Then she ran through the dark to save the ones she loved   and understood, without words, that she had been kept alive for something.",
  },
  {
    number: "Part Two",
    title: "Learning to Survive",
    body: "In the spaces between relatives' homes, school hallways, and the long hours before dawn at work, Denise learned the quiet power of discipline, faith, and a body that would not stop moving.",
  },
  {
    number: "Part Three",
    title: "Love, Responsibility & Betrayal",
    body: "She built a household on love and duty, became the breadwinner, the caregiver, the protector. And when she could no longer deny what was in front of her, she chose her daughter's safety over her own comfort.",
  },
  {
    number: "Part Four",
    title: "The Life I Built",
    body: "From financial independence to a second marriage that felt like a dream, Denise creates the belonging she had hungered for since childhood   and opens her home to a hundred family members, year after year.",
  },
];

export const faq = [
  {
    q: "Is The Spirit of Love a novel or a memoir?",
    a: "The Spirit of Love is a memoir   a true account of Stella Denise Solano's life, told chronologically from her earliest childhood memories through to the present day. It reads with the intimacy and pacing of literary prose, but every word is drawn from lived experience.",
  },
  {
    q: "Who is this book written for?",
    a: "It was written for anyone who has survived something they have never found the words for   survivors of abandonment, grief, betrayal, or caregiving fatigue. It is also for those who have wondered whether faith and love are still possible after loss.",
  },
  {
    q: "Is it suitable for reading groups and faith communities?",
    a: "The Spirit of Love is organised across six parts and twenty-five chapters, plus a prologue and epilogue. It is well-suited to reading groups, faith communities, and counselling or recovery circles. A discussion guide is available on request.",
  },
  {
    q: "Does the book discuss faith and spirituality?",
    a: "Deeply. Denise's spiritual life is central to the memoir   from her Catholic upbringing to her evolving personal relationship with God, Jesus, angels, and what she calls 'the other side.' The book speaks honestly about one woman's living faith without prescribing a single tradition.",
  },
  {
    q: "Where can I purchase a signed copy?",
    a: "Signed copies are available through the contact page. Postal signings are offered subject to availability, and Denise occasionally attends reader events and book club gatherings. Use the contact form to enquire directly.",
  },
];

export const contact = {
  email: "info@miramaxbooks.com",
  phone: "332-213-1534",
  agent: "Miramax Books",
  responseTime: "Within 3–5 working days",
  location: "California, United States",
};

export const contactFaq = [
  {
    q: "Do you accept speaking invitations?",
    a: "Yes. Stella Denise Solano accepts selected speaking invitations for faith communities, survivor support groups, literary events, and women's conferences. Please use the contact form to submit your invitation with the event date and full details.",
  },
  {
    q: "Can you sign a copy by post?",
    a: "Signed copies can be arranged by post. Please contact us with your full mailing address and the inscription you would like. Requests are fulfilled within two to three weeks, subject to availability.",
  },
  {
    q: "Are book club visits possible?",
    a: "Book club visits   in person or via video call   are warmly welcomed. Denise particularly enjoys conversations with reading circles, faith groups, and healing communities. Contact us with your group's size and preferred date to check availability.",
  },
];

export const reviews = [
  {
    name: "Margaret D.",
    source: "Advance Reader Review",
    quote: "A memoir that does not flinch. Denise writes about her life the way only a survivor can   with the kind of honesty that makes you feel less alone in your own story.",
  },
  {
    name: "T. Reeves",
    source: "Faith & Letters Review",
    quote: "Rare and important. The Spirit of Love belongs on the shelf beside every memoir that has ever changed how you see yourself and the people who raised you.",
  },
  {
    name: "R. Okafor",
    source: "Healing Reads",
    quote: "This is the book someone hands you when you have run out of words for what you have been through   and it gives them back.",
  },
];

export const genres = ["Memoir", "Spiritual", "Inspirational", "Self-Discovery"];

export const books = [
  {
    title: "The Spirit of Love",
    slug: "the-spirit-of-love",
    year: "2024",
    tag: "A Memoir",
    body: "A raw and redemptive memoir about surviving what no one speaks aloud   and choosing love, again and again, until it finally stays.",
    description: [
      "The Spirit of Love is the memoir of Stella Denise Solano   a woman who grew up on a California ranch, shuttled between relatives, and learned to disappear emotionally before she understood what survival meant. It begins with a child looking toward the sky and asking Jesus to take her back, and ends with a woman of sixty-four who no longer wants to leave.",
      "Across six parts and twenty-five chapters, Denise recounts her life with unflinching honesty   her first marriage and its devastating betrayal, her second marriage and its extraordinary love, the grief of widowhood, and the long journey back to herself through prayer, movement, caregiving, and faith. She writes with the directness of someone who has finally found the language for the things she once had to carry in silence.",
      "This is a memoir for survivors   for those who have been sent away, overlooked, or made to feel unworthy of love. Denise offers not comfort, but truth: that every wound has something to teach, that faith does not require perfection, and that the spirit of love does not abandon the people who keep choosing it.",
    ],
    amazonLink: "https://www.amazon.com/dp/example1",
  },
  {
    title: "Whispers of the Heart",
    slug: "whispers-of-the-heart",
    year: "2021",
    tag: "A Novella",
    body: "A companion novella exploring the letters Denise never sent   to the people she loved, lost, and is still learning to forgive.",
    description: [
      "Whispers of the Heart is a companion novella that explores what Denise calls 'the letters I never sent'   an intimate meditation on love, memory, and the quiet courage it takes to remain open after repeated loss.",
      "Written between the events of Part Three and Part Four of The Spirit of Love, this novella follows a woman in the middle years of her life who begins composing letters to the people she has loved: a mother she never fully understood, a husband who disappeared in plain sight, and a daughter she is trying to protect from the same silences that shaped her own childhood.",
      "Lyrical and precise, Whispers of the Heart is a book about what we say when we finally decide to speak   and the surprising grace that arrives when we stop waiting for permission.",
    ],
    amazonLink: "https://www.amazon.com/dp/example2",
  },
  {
    title: "Letters to Tomorrow",
    slug: "letters-to-tomorrow",
    year: "2018",
    tag: "Short Reflections",
    body: "A collection of quiet meditations written during a decade of loss and rebuilding   on faith, grief, the body's memory, and what we leave behind.",
    description: [
      "Letters to Tomorrow is a collection of short reflective essays and meditations written across a decade of Denise's life. These are the quiet pieces she set down during the years she later writes about in The Spirit of Love   in the margins of grief, in the hours before work, in the spaces between one version of herself and the next.",
      "Each piece is brief and direct. Some address God. Some address her daughter or her grandchild. Some address the people who hurt her, or the version of herself she is trying to leave behind. Together, they form a fragmented portrait of a woman in the process of becoming.",
      "Letters to Tomorrow is the right starting point for readers new to Denise's work, and a deeper companion for those who have already read The Spirit of Love. It is a book for the early morning   for the quiet hours when you need a voice that knows what endurance truly costs.",
    ],
    amazonLink: "https://www.amazon.com/dp/example3",
  },
];
