export const Title = ({ text }: { text: string }) => {
  return <h1 className="title projects-portfolio-info">{text}</h1>;
};

export const Subtitle = ({ text }: { text: string }) => {
  return <h3 className="subtitle-3 projects-portfolio-info">{text}</h3>;
};

export const Description = ({ text }: { text: string }) => {
  return <p className="description projects-portfolio-info">{text}</p>;
};

export const OverlayDescription = ({ text }: { text: string }) => {
  return <p className="overlayedDescription projects-portfolio-info">{text}</p>;
};

export const technologies = ({ text }: { text: string }) => {
  return <p className="technologies projects-portfolio-info">{text}</p>;
};

export const ImageSrc = ({ imageSrc }: { imageSrc: string }) => {
  return <img className="image" src={imageSrc} alt={imageSrc} />;
};
export const Link = ({ link, linkURL }: { link: string; linkURL: string }) => {
  return (
    <a className="link" href={linkURL}>
      {link}
    </a>
  );
};
