import css from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  const {
    description,
    urls: { small },
  } = image;

  return (
    <div className={css.imageBox}>
      <img className={css.image} src={small} alt={description} />
    </div>
  );
};

export default ImageCard;
