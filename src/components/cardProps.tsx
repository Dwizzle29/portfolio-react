export const Title = ({ text }: { text: string }) => {
  return <h1 className="title">{text}</h1>;
};

export const Subtitle = ({ text }: { text: string }) => {
  return <h3 className="subtitle-3">{text}</h3>;
};

export const Description = ({ text }: { text: string }) => {
  return <p className="description">{text}</p>;
};

export const OverlayDescription = ({ text }: { text: string }) => {
  return <p className="overlayedDescription">{text}</p>;
};

export const technologies = ({ text }: { text: string }) => {
  return <p className="technologies">{text}</p>;
};

export const ImageSrc = ({ imageSrc }: { imageSrc: string }) => {
  return <img className="image" src={imageSrc} />;
};
export const Link = ({ link, linkURL }: { link: string; linkURL: string }) => {
  return (
    <a className="link" href={linkURL}>
      {link}
    </a>
  );
};
