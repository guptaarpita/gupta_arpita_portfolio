import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={`Project: ${props.title}`}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          aria-label="GitHub link"
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            aria-label="Demo link"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  isBlog: PropTypes.bool,
};

ProjectCards.defaultProps = {
  demoLink: null,
  isBlog: false,
};

export default ProjectCards;
