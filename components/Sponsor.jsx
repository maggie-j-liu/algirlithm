const Sponsor = ({ image, title }) => {
  return (
    <div className={"bg-white py-8 px-4 rounded-md shadow-lg"}>
      <p className={"text-center text-base"}>{image}</p>
      <h3 className={"text-lg font-medium text-center"}>{title}</h3>
    </div>
  );
};
export default Sponsor;
