import React from "react";
import { Link } from "react-router-dom";
const ShowList = ({ shows }) => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">TV Shows</h1>

      <div className=" bg-white grid lg:grid-cols-4 justify-items-center space-x-6  md:grid-cols-2  grid-cols-1 cursor-pointer  hover:animate-pulse-4 ">
        {shows.map((show, index) => (
          <div
            key={show.show.id}
            className=" mb-10  border border-gray-200 rounded-lg shadow-md shadow-gray-300  "
          >
            <img
              src={`${
                !show?.show?.image?.medium
                  ? "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
                  : show?.show?.image?.medium
              }`}
              alt={show.show.name}
              className="rounded-md w-[275px] h-[295px]"
            />
            <h2 className="text-xl font-semibold mb-3">{show.show.name}</h2>
            <p>{show.show.genres.join(", ")}</p>
            <div className="mb-4 flex justify-center mt-2 ">
              <Link
                to={`/summary/${show.show.id}`}
                className="mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-3  rounded-md hover:text-white shadow-md shadow-gray-400 hover:tracking-wide transition-all duration-0 ease-in-out  "
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
