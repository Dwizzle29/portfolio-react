import React from "react";
import {
  Title,
  Subtitle,
  Description,
  OverlayDescription,
  technologies as Technologies,
  ImageSrc,
  Link,
} from "./cardProps.tsx";

interface CardProps {
  title: string;
  image: string;
  description: string;
  link: string;
  subtitle?: string;
  overlayDescription?: string;
  technologies?: string;
}

//Using Dependancy Injection to inject in the image, title, ect.
export const Card = ({
  title,
  image,
  description,
  link,
  subtitle,
  overlayDescription,
  technologies,
}: CardProps) => {
  return (
    <div className="projects-portfolio-card">
      <ImageSrc imageSrc={image} />
      <div className="projects-portfolio-info">
        <Title text={title} />
        {(overlayDescription || description) && (
          <OverlayDescription text={overlayDescription || description} />
        )}
        <Link link={title} linkURL={link} />
        {technologies && <Technologies text={technologies} />}
        {subtitle && <Subtitle text={subtitle} />}
      </div>
    </div>
  );
};
