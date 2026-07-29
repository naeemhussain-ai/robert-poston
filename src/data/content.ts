/**
 * All editable website content lives here.
 * Only the book title and author name are real — everything else is
 * structured placeholder copy ready to be replaced.
 */

export const site = {
  bookTitle: "The Spirit of Love",
  author: "Stella Denise Solano",
  monogram: "SDS",
  // EDIT: Replace with the real tagline
  tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
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

// EDIT: Replace with real hero copy
export const hero = {
  eyebrow: "A Story Beyond Time",
  title: site.bookTitle,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vitae aliquam ultricies, nisl nunc tincidunt urna, quis mollis erat velit id lacus. Aenean in luctus nulla.",
  primaryCta: "Discover the Story",
  secondaryCta: "Read Preview",
};

// EDIT: Replace story themes
export const themes = [
  {
    title: "Love",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tortor sed velit tempus laoreet.",
  },
  {
    title: "Destiny",
    body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec.",
  },
  {
    title: "Hope",
    body: "Integer sit amet lacus vel arcu tincidunt facilisis. Nulla facilisi. Sed vehicula magna quis nibh.",
  },
  {
    title: "Healing",
    body: "Praesent commodo cursus magna vel scelerisque nisl consectetur et vestibulum lacinia arcu.",
  },
];

// EDIT: Replace with real synopsis
export const synopsis = {
  eyebrow: "The Novel",
  heading: "A quiet story about everything that lasts",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dui vitae velit consequat imperdiet. Aenean euismod, augue vitae fermentum bibendum, arcu justo laoreet enim, sed pulvinar magna nulla eget dolor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    "Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum, nullam quis risus eget urna mollis ornare.",
    "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa justo sit amet risus.",
  ],
  cta: "Read Full Synopsis",
};

// EDIT: Replace featured quote
export const featuredQuote = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  attribution: site.author,
};

// EDIT: Replace author biography
export const authorBio = {
  eyebrow: "The Author",
  name: site.author,
  short: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    "Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
  ],
  long: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    "Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum, cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo.",
  ],
  cta: "Meet Stella Denise Solano",
};

// EDIT: Replace formats and prices
export const formats = [
  { name: "Hardcover", detail: "Lorem ipsum dolor sit amet, consectetur.", price: "£24.00" },
  { name: "Paperback", detail: "Sed do eiusmod tempor incididunt ut labore.", price: "£12.00" },
  { name: "eBook", detail: "Ut enim ad minim veniam quis nostrud.", price: "£6.99" },
  { name: "Audiobook", detail: "Duis aute irure dolor in reprehenderit.", price: "£16.00" },
];

// EDIT: Replace testimonials
export const testimonials = [
  {
    name: "Lorem Ipsum",
    role: "Literary Review",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.",
  },
  {
    name: "Dolor Sit",
    role: "Book Club Reader",
    quote:
      "Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus curabitur non nulla.",
  },
  {
    name: "Amet Consectetur",
    role: "Bestselling Novelist",
    quote:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.",
  },
];

// EDIT: Replace reader journey milestones
export const journey = [
  { step: "I", title: "The Invitation", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { step: "II", title: "The Unravelling", body: "Sed do eiusmod tempor incididunt ut labore et dolore." },
  { step: "III", title: "The Reckoning", body: "Ut enim ad minim veniam, quis nostrud exercitation." },
  { step: "IV", title: "The Return", body: "Duis aute irure dolor in reprehenderit in voluptate velit." },
];

// EDIT: Replace author timeline
export const authorTimeline = [
  { year: "2011", title: "First Pages", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { year: "2015", title: "A Quiet Debut", body: "Sed do eiusmod tempor incididunt ut labore et dolore magna." },
  { year: "2019", title: "The Long Winter", body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
  { year: "2024", title: "The Spirit of Love", body: "Duis aute irure dolor in reprehenderit in voluptate." },
];

// EDIT: Replace philosophy cards
export const philosophy = [
  { title: "Philosophy", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor." },
  { title: "Mission", body: "Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis." },
  { title: "Vision", body: "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
];

// EDIT: Replace awards
export const awards = [
  { title: "Lorem Prize", year: "2025", body: "Shortlisted — consectetur adipiscing elit." },
  { title: "Ipsum Medal", year: "2024", body: "Winner — sed do eiusmod tempor incididunt." },
  { title: "Dolor Award", year: "2023", body: "Finalist — ut labore et dolore magna aliqua." },
];

// EDIT: Replace chapter previews
export const chapters = [
  { number: "Chapter One", title: "Lumen", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt." },
  { number: "Chapter Two", title: "Vesper", body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." },
  { number: "Chapter Three", title: "Aurora", body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
  { number: "Chapter Four", title: "Solace", body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt." },
];

// EDIT: Replace FAQ
export const faq = [
  { q: "Lorem ipsum dolor sit amet consectetur?", a: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
  { q: "Quis nostrud exercitation ullamco laboris?", a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
  { q: "Excepteur sint occaecat cupidatat non proident?", a: "Sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde." },
  { q: "Nemo enim ipsam voluptatem quia voluptas?", a: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit." },
  { q: "Ut enim ad minima veniam quis nostrum?", a: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae." },
];

// EDIT: Replace contact details
export const contact = {
  email: "hello@placeholder.com",
  phone: "+44 (0) 000 000 0000",
  agent: "Lorem Literary Agency",
  responseTime: "Within 3–5 working days",
  location: "Lorem Ipsum, United Kingdom",
};

// EDIT: Replace mini FAQ on the contact page
export const contactFaq = [
  { q: "Do you accept speaking invitations?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." },
  { q: "Can you sign a copy by post?", a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
  { q: "Are book club visits possible?", a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
];

// EDIT: Replace reviews
export const reviews = [
  { name: "Lorem Ipsum", source: "The Evening Page", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quis lorem ut libero." },
  { name: "Sit Amet", source: "Quarterly Letters", quote: "Vivamus suscipit tortor eget felis porttitor volutpat proin eget tortor risus." },
  { name: "Consectetur A.", source: "Reader Circle", quote: "Mauris blandit aliquet elit eget tincidunt nibh pulvinar a donec sollicitudin." },
];

export const genres = ["Literary Fiction", "Spiritual", "Romance", "Contemporary"];

// EDIT: Replace with real collection titles
export const books = [
  {
    title: "The Spirit of Love",
    slug: "the-spirit-of-love",
    year: "2024",
    tag: "A Novel",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tortor sed velit tempus laoreet.",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tortor sed velit tempus laoreet. Sed non quam nec nunc gravida tincidunt. Nullam nec nunc nec nunc ultricies ultricies. Sed auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec velit justo, consectetur nec, ultricies nec, ultricies nec, nunc. Sed auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit justo, consectetur nec, ultricies nec, ultricies nec, nunc. Sed auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc. Nullam nec nunc nec nunc ultricies ultricies.",
    ],
    amazonLink: "https://www.amazon.com/dp/example1",
  },
  {
    title: "Whispers of the Heart",
    slug: "whispers-of-the-heart",
    year: "2021",
    tag: "A Novella",
    body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit.",
    description: [
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit justo, consectetur nec, ultricies nec, ultricies nec, nunc. Sed auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non quam nec nunc gravida tincidunt. Nullam nec nunc nec nunc ultricies ultricies. Sed auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tortor sed velit tempus laoreet. Donec velit justo, consectetur nec, ultricies nec, ultricies nec, nunc. Nullam nec nunc nec nunc ultricies ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    ],
    amazonLink: "https://www.amazon.com/dp/example2",
  },
  {
    title: "Letters to Tomorrow",
    slug: "letters-to-tomorrow",
    year: "2018",
    tag: "Short Stories",
    body: "Integer sit amet lacus vel arcu tincidunt facilisis. Nulla facilisi. Sed vehicula magna quis nibh.",
    description: [
      "Integer sit amet lacus vel arcu tincidunt facilisis. Nulla facilisi. Sed vehicula magna quis nibh. Sed auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec nunc nec nunc ultricies ultricies. Sed auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tortor sed velit tempus laoreet. Donec velit justo, consectetur nec, ultricies nec, ultricies nec, nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    ],
    amazonLink: "https://www.amazon.com/dp/example3",
  },
];
