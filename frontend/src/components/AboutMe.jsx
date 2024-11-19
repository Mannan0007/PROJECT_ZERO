import React from "react";
import {
  AboutContainer,
  ProfileSection,
  ProfileImage,
  Bio,
  Title,
  SectionTitle,
  List,
  ListItem,
} from "../styles/AboutMeStyles";

const AboutMe = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>

      {/* Profile section */}
      <ProfileSection>
        {/* <ProfileImage src={ProfilePic} alt="Profile" /> */}
        <Bio>
          Hi, I'm Manpreet Singh, a passionate developer and tech enthusiast.
          I'm currently studying at Chitkara University, working on various
          projects, and always excited to learn new technologies and enhance my
          skills.
        </Bio>
      </ProfileSection>

      {/* Skills Section */}
      <SectionTitle>Skills</SectionTitle>
      <List>
        <ListItem>JavaScript (React, Node.js, Express)</ListItem>
        <ListItem>HTML/CSS/SCSS</ListItem>
        <ListItem>MongoDB & MySQL</ListItem>
        <ListItem>Version Control (Git/GitHub)</ListItem>
      </List>

      {/* Hobbies Section */}
      <SectionTitle>Hobbies</SectionTitle>
      <List>
        <ListItem>Playing Volleyball and Chess</ListItem>
        <ListItem>Photography</ListItem>
        <ListItem>Traveling</ListItem>
      </List>

      
    </AboutContainer>
  );
};

export default AboutMe;