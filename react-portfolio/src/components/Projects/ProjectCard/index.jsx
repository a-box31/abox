import "./index.scss"
import PropTypes from "prop-types"

const ProjectCard = ({href, title, imgSrc, description}) => {


  return (
    <div className="project-card">
      <a href={href}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          {imgSrc ? (
            <img className="project-icon" src={imgSrc} alt="logo" />
          ) : (
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="6"
                width="26"
                height="20"
                rx="3"
                className="fill-blue-500"
              />
              <rect
                x="3"
                y="20"
                width="26"
                height="6"
                rx="1.5"
                className="fill-blue-600"
              />
              <circle cx="24" cy="23" r="1.5" className="fill-blue-300" />
              <path
                d="M16 11.5c-.8-1.8-3-2.5-4.5-1.2s-1.7 3.5 0 5.2l4.5 4 4.5-4c1.7-1.7 1.5-3.9 0-5.2s-3.7-.6-4.5 1.2z"
                className="fill-white/90"
              />
            </svg>
          )}
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
