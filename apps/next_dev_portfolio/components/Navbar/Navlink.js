export default function Navlink({ name, url, home }) {
  return (
    <>
      {home && (
        <li className="text-lg font-bold text-blue-800 rounded-2xl hover:text-gray-300">
          <a
            href={url}
            className="border-blue-800 hover:py-2 hover:border-b-4 "
          >
            {name}
          </a>
        </li>
      )}
      {!home && (
        <li className="text-lg text-gray-100 hover:text-gray-300">
          <a
            href={url}
            className="border-blue-800 hover:py-2 hover:border-b-4 "
          >
            {name}
          </a>
        </li>
      )}
    </>
  );
}
