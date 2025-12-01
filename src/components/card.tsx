import React from "react";

interface CardProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  imageSrc: React.ReactNode;
  link: React.ReactNode;
  description: React.ReactNode;
  overlayDescription: React.ReactNode;
  technologies: React.ReactNode;
}
//Using Dependancy Injection to inject in the image, title, ect.
export const Card = ({
  title,
  subtitle,
  imageSrc,
  link,
  description,
  overlayDescription,
  technologies,
}: CardProps) => {
  return (
    <div className="projects-portfolio-card">
      {imageSrc}
      {subtitle}
      {link}
      {description}
      {technologies}
    </div>
  );
};
