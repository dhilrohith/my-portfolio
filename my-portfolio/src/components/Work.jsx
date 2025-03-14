import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'Exam Portal',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://exam-portal-mern-web.netlify.app/'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Password Reset Flow',
      tags: ['React', 'Node', 'Nodemailer'],
      projectLink: 'https://password-reset-flow-webapp.netlify.app/'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'Product Display with Cart Functionality',
      tags: ['React', 'API'],
      projectLink: 'https://create-cart-router-task.netlify.app/'
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'Movie Searching Web App',
      tags: ['OMDB API', 'React'],
      projectLink: 'https://movie-searching-webapp.netlify.app/'
    },
];
  
const Work = () => {
  return (
    <section
    id="work" 
    className="section"
    >
        <div className="container">

            <h2 
            className="headline-2 mb-8
            reveal-up"
            >
                My portfolio highlights
            </h2>


            <div 
            className="grid gap-x-4 gap-y-5
            grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
            >
                {works.map(
                    ({
                        imgSrc,
                        title,
                        tags,
                        projectLink
                    }, key)=>(<ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />)
                )}
            </div>
        </div>
    </section>
  )
}

export default Work