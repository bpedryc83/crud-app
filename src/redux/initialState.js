const initialState = {
  posts: [
    {
      id: '1',
      title: 'Yellow Card',
      shortDescription: 'How liquid biopsies have made it easier to treat cancer...',
      content: 'A traditional tissue biopsy comes with risks and challenges—the target area can be hard to reach and bleeding and pain can last up to a month afterward. Patients can expect steep medical bills and up to a four-week wait to get results. That’s a problem when a patient is dealing with an aggressive cancer.',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Environment',
      shortDescription: 'The scientific case against gas stoves...',
      content: 'Health experts have known for decades that indoor air pollution hurts childrens lungs. Now, there are good alternatives to gas stoves.',
      publishedDate: new Date('02-03-2022'),
      author: 'Alex Malone'
    },
    {
      id: '3',
      title: 'History Magazine',
      shortDescription: 'Ramses II ruled for 70 years and had 100 children...',
      content: 'The pharaoh left behind a monumental list of accomplishments. But his reluctance to pass the baton ultimately led to his dynasty’s collapse.',
      publishedDate: new Date('02-10-2022'),
      author: 'Vincent Max'
    },
    {
      id: '4',
      title: 'Natural landscapes',
      shortDescription: 'The varied natural landscapes of Abu Dhabi...',
      content: 'Beyond the emirates urban skyline lies diverse natural beauty, from mangroves to mountains, wadis, deserts, and nature reserves.',
      publishedDate: new Date('03-04-2022'),
      author: 'Christian Snowden'
    }
  ],
}

export default initialState;