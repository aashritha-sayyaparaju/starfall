const SCRIPT = {
  start: {
    id: "start",
    speaker: null,
    text: "The rooftop is quiet at this hour. Most people have already gone to bed.",
    bg: "rooftop",
    charLeft: null,
    charRight: null,
    next: "s1"
  },
  s1: {
    id: "s1",
    speaker: null,
    text: "You find your usual spot near the old water tower and look up. The city light pollution is bad tonight, but you can still make out a few stars.",
    bg: "rooftop",
    charLeft: null,
    charRight: null,
    next: "s2"
  },
  s2: {
    id: "s2",
    speaker: null,
    text: "You hear the rooftop door open behind you.",
    bg: "rooftop",
    charLeft: null,
    charRight: null,
    next: "s3"
  },
  s3: {
    id: "s3",
    speaker: "Mira",
    text: "Oh. Sorry, I didn't think anyone would be up here.",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s4"
  },
  s4: {
    id: "s4",
    speaker: null,
    text: "She's carrying a blanket and a thermos. She looks like she wasn't expecting company either.",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s5"
  },
  s5: {
    id: "s5",
    speaker: null,
    text: "What do you say?",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    choices: [
      { text: "\"It's fine. There's room.\"", next: "s6a" },
      { text: "\"I was just leaving, actually.\"", next: "s6b" },
      { text: "Stay quiet and gesture to the space beside you.", next: "s6c", setFlag: "silent_start" }
    ]
  },
  s6a: {
    id: "s6a",
    speaker: "Mira",
    text: "She smiles a little. \"Thanks. I'll stay out of your way.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s7"
  },
  s6b: {
    id: "s6b",
    speaker: "Mira",
    text: "\"Oh — okay. Sorry again.\" She steps back toward the door, then hesitates.",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s6b2"
  },
  s6b2: {
    id: "s6b2",
    speaker: "Mira",
    text: "\"Actually, wait. You don't have to leave. I can go.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s7"
  },
  s6c: {
    id: "s6c",
    speaker: "Mira",
    text: "She looks at you for a moment, then nods and sits down without another word.",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s7"
  },
  s7: {
    id: "s7",
    speaker: null,
    text: "She sits a few feet away and pours something from the thermos into the cap. The smell of chamomile drifts over.",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s8"
  },
  s8: {
    id: "s8",
    speaker: "Mira",
    text: "\"Do you come up here a lot?\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s9"
  },
  s9: {
    id: "s9",
    speaker: null,
    text: "How do you answer?",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    choices: [
      { text: "\"Most nights, yeah.\"", next: "s10a" },
      { text: "\"Not really. I just couldn't sleep.\"", next: "s10b" },
      { text: "\"Sometimes. When I need to think.\"", next: "s10c", setFlag: "thoughtful" }
    ]
  },
  s10a: {
    id: "s10a",
    speaker: "Mira",
    text: "\"Huh. I've lived here for two years and I've never seen you.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s11"
  },
  s10b: {
    id: "s10b",
    speaker: "Mira",
    text: "\"Same.\" She wraps the blanket tighter. \"My brain won't shut up tonight.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s11"
  },
  s10c: {
    id: "s10c",
    speaker: "Mira",
    text: "She nods slowly. \"Yeah. I get that. There's something about being this high up.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s11"
  },
  s11: {
    id: "s11",
    speaker: "Mira",
    text: "\"I'm Mira, by the way.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s12"
  },
  s12: {
    id: "s12",
    speaker: null,
    text: "You tell her your name.",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s13"
  },
  s13: {
    id: "s13",
    speaker: "Mira",
    text: "\"Nice to meet you.\" She looks back up at the sky. \"Terrible night for stargazing, honestly.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s14"
  },
  s14: {
    id: "s14",
    speaker: null,
    text: "You can just barely make out Orion through the haze. She's right.",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s15"
  },
  s15: {
    id: "s15",
    speaker: "Mira",
    text: "\"Do you ever wonder if there's a version of this city where you can actually see the Milky Way?\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s16"
  },
  s16: {
    id: "s16",
    speaker: null,
    text: "What do you think?",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    choices: [
      { text: "\"I think I'd move there immediately.\"", next: "s17a", setFlag: "romantic" },
      { text: "\"The city has other things going for it.\"", next: "s17b" },
      { text: "\"I try not to think about what I can't have.\"", next: "s17c", setFlag: "guarded" }
    ]
  },
  s17a: {
    id: "s17a",
    speaker: "Mira",
    text: "She laughs — a real one. \"Right? I looked up dark sky preserves once and then spent an hour planning a trip I never took.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s18"
  },
  s17b: {
    id: "s17b",
    speaker: "Mira",
    text: "\"Fair point.\" She tilts her head. \"I still think about it though. The trade-off feels wrong sometimes.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s18"
  },
  s17c: {
    id: "s17c",
    speaker: "Mira",
    text: "She's quiet for a moment. \"That's... probably healthier than me, honestly.\"",
    bg: "rooftop",
    charLeft: null,
    charRight: "mira",
    next: "s18"
  },
  s18: {
    id: "s18",
    speaker: null,
    text: "The door opens again. A guy comes out, stopping when he sees the two of you.",
    bg: "rooftop",
    charLeft: "kai",
    charRight: "mira",
    next: "s19"
  },
  s19: {
    id: "s19",
    speaker: "Kai",
    text: "\"Oh good, you found someone sane to talk to.\" He says this to Mira.",
    bg: "rooftop",
    charLeft: "kai",
    charRight: "mira",
    dim: "right",
    next: "s20"
  },