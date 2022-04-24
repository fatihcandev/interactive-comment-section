import dayjs from 'dayjs'

import { Comment, User } from 'types'

type Data = {
  currentUser: User
  comments: Comment[]
}

export const mockData: Data = {
  currentUser: {
    image: '/images/image-juliusomo.png',
    username: 'juliusomo',
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: dayjs().subtract(1, 'month').toDate(),
      score: 12,
      user: {
        image: '/images/image-amyrobson.png',
        username: 'amyrobson',
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: dayjs().subtract(2, 'weeks').toDate(),
      score: 5,
      user: {
        image: '/images/image-maxblagun.png',
        username: 'maxblagun',
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: dayjs().subtract(1, 'week').toDate(),
          score: 4,
          replyingTo: 'maxblagun',
          user: {
            image: '/images/image-ramsesmiron.png',
            username: 'ramsesmiron',
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: dayjs().subtract(2, 'days').toDate(),
          score: 2,
          replyingTo: 'ramsesmiron',
          user: {
            image: '/images/image-juliusomo.png',
            username: 'juliusomo',
          },
        },
      ],
    },
  ],
}
