import React, { useEffect, useState } from "react";
import { ProjectCardWrapper } from "../styles/components/projectCardStyles";
import { BiComment } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("/images/scholarship.jpg");

  useEffect(() => {
    if (project?.image?.url) {
      setImage(project?.image?.url);
    }
  }, [project?.image?.url]);

  function handleImageLoad() {
    setLoading(false);
  }
  return (
    <ProjectCardWrapper image={image} loading={loading}>
      <div
        className="image-section"
        onClick={() => navigate(`/scholarships/${project?._id}`)}
      >
        <img
          src={image}
          onLoad={handleImageLoad}
          style={{ display: "none" }}
          alt={"skeleton"}
        />
        {!loading && (
          <div className="image-overlay">
            <div className="title">{project?.title}</div>
          </div>
        )}
      </div>
      <div className="data-section">
        <div className="likes-comments">
          <div className="likes-left">
            <Link to={`/users/${project?.owner?._id}`}>
              <Avatar
                sx={{ width: 35, height: 35 }}
                src={project?.owner?.avatar?.url}
              ></Avatar>
            </Link>
            <div className="username">{project?.owner?.username}</div>
          </div>
          <div className="likes-right">
            <div className="like-indv">
              {project?.total_upvotes} <AiFillLike />
            </div>

            <div className="like-indv">
              {project?.total_comments} <BiComment />
            </div>
          </div>
        </div>
      </div>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
