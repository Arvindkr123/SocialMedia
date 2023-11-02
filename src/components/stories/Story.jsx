import React, { useContext } from "react";
import "./story.scss";
import { AuthContext } from "../../context/authContext";
const Story = () => {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "Jhon Doe",
      image:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/perfect-winter-scenery-in-the-mountains-free-photo.jpg?w=600&quality=80",
    },
    {
      id: 2,
      name: "Jhon Doe",
      image:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/perfect-winter-scenery-in-the-mountains-free-photo.jpg?w=600&quality=80",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePicture} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories?.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.image} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Story;
