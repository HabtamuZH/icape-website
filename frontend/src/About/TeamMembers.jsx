import {FaLinkedin, FaTwitter} from "react-icons/fa"

const TeamMembers = () => {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Martiana Dialan",
      title: "Product Designer",
      desc: "Passionate about creating intuitive and beautiful designs.",
      linkedin: "https://www.linkedin.com/in/martiana-dialan",
      twitter: "https://twitter.com/martiana_dialan"
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Micheal Colorand",
      title: "Software Engineer",
      desc: "Loves coding and building scalable applications.",
      linkedin: "https://www.linkedin.com/in/micheal-colorand",
      twitter: "https://twitter.com/micheal_colorand"
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Brown Luis",
      title: "Full Stack Engineer",
      desc: "Bridging front-end and back-end for seamless experiences.",
      linkedin: "https://www.linkedin.com/in/brown-luis",
      twitter: "https://twitter.com/brown_luis"
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      name: "Lysa Sandiago",
      title: "Head of Design",
      desc: "Leading creative teams to deliver stunning visuals.",
      linkedin: "https://www.linkedin.com/in/lysa-sandiago",
      twitter: "https://twitter.com/lysa_sandiago"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Daniel Martin",
      title: "Product Designer",
      desc: "Transforming ideas into visually appealing products.",
      linkedin: "https://www.linkedin.com/in/daniel-martin",
      twitter: "https://twitter.com/daniel_martin"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Vicky Tanson",
      title: "Product Manager",
      desc: "Aligning teams to build impactful products.",
      linkedin: "https://www.linkedin.com/in/vicky-tanson",
      twitter: "https://twitter.com/vicky_tanson"
    }
  ]

  return (
    <section className='py-14 bg-gray-50'>
      <div className='max-w-screen-xl mx-auto px-6 text-center'>
        <div className='max-w-2xl mx-auto mb-12'>
          <h3 className='text-gray-800 text-3xl font-bold sm:text-4xl'>
            Meet Our Team
          </h3>
          <p className='text-gray-600 mt-3'>
            A passionate team committed to innovation and excellence.
          </p>
        </div>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {team.map((member, idx) => (
            <div
              key={idx}
              className='bg-white shadow-md hover:shadow-lg transition-shadow p-6 rounded-xl text-center'
            >
              <div className='w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-indigo-200'>
                <img
                  src={member.avatar}
                  className='w-full h-full object-cover'
                  alt={member.name}
                />
              </div>
              <h4 className='text-gray-700 text-lg font-semibold'>
                {member.name}
              </h4>
              <p className='text-indigo-600 text-sm font-medium'>
                {member.title}
              </p>
              <p className='text-gray-600 mt-3 text-sm'>{member.desc}</p>
              <div className='mt-4 flex justify-center gap-4 text-gray-400'>
                <a
                  href={member.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-blue-500 transition'
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={member.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-blue-700 transition'
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
