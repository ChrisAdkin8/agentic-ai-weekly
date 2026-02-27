export const SITE = {
  website: "https://agenticaiweekly.org/",
  author: "Chris Adkin",
  profile: "https://github.com/ChrisAdkin8",
  desc: "Weekly digest of agentic AI and LLM developments — curated by the newsletter-ai Claude Code skill.",
  title: "Agentic AI & LLM Weekly",
  ogImage: undefined,
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/ChrisAdkin8/agentic-ai-weekly/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Europe/London",
} as const;
