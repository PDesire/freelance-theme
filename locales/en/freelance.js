export default {
  title: 'Freelance',
  presentation:
    'I am available for new freelance software development contracts regarding full-stack development and/or digital audio applications.',
  profile: 'My freelancer profile can be found on {comet} and {malt}.',
  newProject: 'New project',
  services: [
    {
      title: 'Full-stack development',
      subtitle: 'Fancy a new online service?',
      content: `
        <p>
          I can help on choosing and orchestrating the proper technological stack, developing software for
          <strong>web-services</strong>
          (back-end, API),
          <strong>web-apps</strong>
          (front-end),
          <strong>mobile apps</strong>,
          and implementing a strategy for
          <strong>continuous integration and deployment</strong>.
        </p>
      `,
      tags: [
        'Python',
        'Flask',
        'Node.js',
        'Vue.js',
        'React-Native',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Stripe',
        'Mangopay',
        'Docker'
      ]
    },
    {
      title: 'Digital audio',
      subtitle: 'An audio and/or music related project in mind?',
      content: `
        <p>
          I can help making those waves happen by engineering
          <strong>multi-platform</strong>
          (MacOS, Windows, Linux) and
          <strong>performant</strong>
          software for
          <strong>desktop applications</strong>
          and
          <strong>audio plug-ins</strong>.
        </p>
      `,
      tags: [
        'C++',
        'CMake',
        'JUCE',
        'FRUT',
        'DSP',
        'OpenGL',
        'VST',
        'AU',
        'AAX'
      ]
    }
  ]
}
