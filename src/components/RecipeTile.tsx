type RecipeTileProps = {
  name: string;
  imageUrl: string;
};

export const RecipeTile = ({ name, imageUrl }: RecipeTileProps) => (
  <div className="border border-gray-100">
    <img
      src={imageUrl}
      alt={`${name} showcase image`}
      className="w-full h-2/3"
    />
    <p className="my-5 mx-2 font-semibold text-lg">{name}</p>
  </div>
);
