import PortfolioSection from "@/components/portfolioSection";
import connectDB from "@/database/db";
import style from './page.module.css'
import Project from "@/database/projectSchema";



async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await Project.find();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}


export default async function Portfolio() {
  const projects = await getProjects()
  if (projects === null) {
    return <div className = {style.portfolio_container}><p>No Projects Yet</p></div>
  }
  return (
    <div className={style.portfolio_container}>
      {projects.map((project) => (
        <PortfolioSection
          key={project._id}
          title={project.title}
          description={project.description}
          image={project.image}
          imageAlt={project.imageAlt}
          slug={project.slug}
        />
      ))}
    </div>
  );
}
