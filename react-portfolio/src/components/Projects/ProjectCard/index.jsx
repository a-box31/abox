import "./index.scss"
import PropTypes from "prop-types"

const ProjectCard = ({href, title, imgSrc, description}) => {


  return (
    <div className="project-card">
      <a href={href}>
        <div>
          <h2>{title}</h2>
          <img className="project-icon" src={imgSrc} alt="logo" />
        </div>
        <div>
          <p>{description}</p>
        </div>
      </a>
    </div>
  )
}

ProjectCard.PropTypes = {
  href: "string",
  title: "string",
  imgSrc: "string",
  description: "string",
}

ProjectCard.defaultProps = {
  href: './resume',
  title: 'No Title',
  imgSrc:
    'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
  description: 'No Description Found',
}



export default ProjectCard
