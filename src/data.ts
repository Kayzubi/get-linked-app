export const timeline: Timeline[] = [
  {
    index: 1,
    title: 'Hackathon Announcement',
    sub: `The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`,
    date: 'November 18, 2023',
  },
  {
    index: 2,
    title: 'Teams Registration begins',
    sub: `Interested teams can now show their interest in the
getlinked tech hackathon 1.0 2023 by proceeding to register`,
    date: 'November 18, 2023',
  },
  {
    index: 3,
    title: 'Teams Registration ends',
    sub: `Interested Participants are no longer Allowed to
register`,
    date: 'November 18, 2023',
  },
  {
    index: 4,
    title: `Announcement of the accepted teams
and ideas`,
    sub: `All teams whom idea has been accepted into getlinked tech
hackathon 1.0 2023 are formally announced`,
    date: 'November 18, 2023',
  },
  {
    index: 5,
    title: 'Getlinked Hackathon 1.0 Offically Begins',
    sub: `Accepted teams can now proceed to build their
ground breaking skill driven solutions`,
    date: 'November 18, 2023',
  },
  {
    index: 6,
    title: 'Demo Day',
    sub: `Teams get the opportunity to pitch their projects to judges.
The winner of the hackathon will also be announced on
this day`,
    date: 'November 18, 2023',
  },
]

export const questions: { question: string; answer: string }[] = [
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi!',
  },
  {
    question: 'What happens if I need help during the hackathon?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi!',
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi!',
  },
  {
    question: 'Can I join a team or do I have to come with one?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi!',
  },
  {
    question: 'What happens after the hackathon ends?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi!',
  },
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi!',
  },
]

export interface Timeline {
  index: number
  title: string
  sub: string
  date: string
}
