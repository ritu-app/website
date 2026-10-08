export const links = {
  studio: "https://studio.ritu.care",
  github: "https://github.com/ritu-app/ritu",
  supportEmail: "support@ritu.care",
  /**
   * Store listings are not public yet. Header and hero CTAs scroll to the
   * download section; swap these when the App Store and Play Store URLs exist.
   */
  appStore: "#download",
  playStore: "#download",
} as const;

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/#open-source", label: "Open source" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const steps = [
  {
    step: "Step 01",
    title: "Log",
    body: "Notice what's happening today. Log your mood, energy, sleep, body signals, and cycle.",
    highlighted: true,
  },
  {
    step: "Step 02",
    title: "Reflect",
    body: "Give your experience some context. Write in your journal, or simply leave the day as it is.",
    highlighted: false,
  },
  {
    step: "Step 03",
    title: "Notice",
    body: "See what starts to repeat. As you continue logging, recurring experiences and connections become easier to notice.",
    highlighted: false,
  },
  {
    step: "Step 04",
    title: "Understand",
    body: "Build a clearer picture of yourself. Over time, your observations help you understand your own rhythms and experiences.",
    highlighted: false,
  },
] as const;

export const features = [
  {
    src: "/images/screen-log.png",
    alt: "Ritu daily log for flow, cramps, mood, energy, and sleep",
    rotate: "-rotate-[0.35deg]",
    kicker: "01 · Log",
    title: "Capture how you're feeling today",
    body: "Quickly log your mood, energy, sleep, body signals, and cycle",
  },
  {
    src: "/images/screen-insight.png",
    alt: "Ritu insights screen",
    rotate: "rotate-[0.22deg]",
    kicker: "02 · insights",
    title: "See what keeps coming back",
    body: "Bring your observations together to notice recurring patterns",
  },
  {
    src: "/images/screen-journal.png",
    alt: "Ritu journal screen",
    rotate: "-rotate-1",
    kicker: "03 · journal",
    title: "Give your thoughts a place to land",
    body: "Write about your day, your feelings, or anything worth remembering",
  },
  {
    src: "/images/screen-summary.png",
    alt: "Ritu summary screen",
    rotate: "rotate-[0.29deg]",
    kicker: "04 · summary",
    title: "See your journey over time",
    body: "Bring your experiences together in a clear, meaningful summary.",
  },
] as const;

export const nameParagraphs = [
  "A season has a rhythm of its own. We know what comes next, but we never know exactly how it will feel. Some winters arrive early. Some stay mild. Spring can come gradually, or all at once. The pattern remains, while the experience changes.",
  "That’s how we think about the cycle, too. There is a rhythm to it, but no two cycles have to feel the same. Ritu doesn’t assume what your next cycle will be. It simply reflects what you choose to notice and log.",
  "The word Ṛtu has deeper roots, too. It appears in Ṛtusaṃhāra, a classical Sanskrit work describing the changing seasons and their influence on life and the body. It is also part of Ṛtumatī, an older Sanskrit term associated with menstruation.",
] as const;

export const faqs = [
  {
    question: "How does Ritu read my cycle?",
    answer:
      "Ritu doesn't predict - it reflects. Using the period dates you've logged over time, it looks at how consistent your cycle lengths have been and describes that as Regular, Variable, or Unpredictable. It's a plain-language read of your own history, not a forecast of what's ahead.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. There is no account and no sign-in. Ritu is a journal on your phone, and the profile stays on that device.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "On your phone. Logs, journal entries, and cycle history stay in the app’s private storage. Nothing is uploaded unless you export a backup yourself.",
  },
  {
    question: "Can I see how the patterns are calculated?",
    answer:
      "Yes. The reading lives in the open-source code, so you can follow how the period dates you logged become Regular, Variable, or Unpredictable.",
  },
  {
    question: "What happens if I lose my phone?",
    answer:
      "What is on the phone stays on the phone. Export a backup from Settings before you switch devices, then import that file on the new one.",
  },
  {
    question: "Is Ritu a medical device?",
    answer:
      "No. Ritu is a personal journal. It does not diagnose, treat, or predict your health, and it is not a substitute for care from a clinician.",
  },
] as const;
