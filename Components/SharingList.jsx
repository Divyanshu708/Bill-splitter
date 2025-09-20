export default function SharingList({ share, amountOfUsers }) {
  return (
    <div className="flex flex-row">
      <p className="text-amber-300 mr-2">A</p> has to give
      <p className="ml-2 mr-2 text-amber-300"> B</p> :
      <p className="text-white ml-2">{share}</p>
    </div>
  );
}
