import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./utility/Modal";
import BookTicketForm from "./Form";

const ShowSummary = ({ shows }) => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const selectedShow = shows.find((show) => show.show.id.toString() === id);
  console.log("id:", id);
  console.log("selectedShow:", selectedShow);
  console.log("Shows are", shows);
  const handleBookTicket = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleFormSubmit = (e, formData) => {
    e.preventDefault();

    localStorage.setItem("movieDetails", JSON.stringify(formData));

    alert("Movie ticket booked successfully!");
    setShowModal(false);
  };
  if (!selectedShow) {
    return <div> Show not found</div>;
  }
  return (
    <div className="flex md:flex-row flex-col max-[768px]:items-center ">
      <div className="flex-shrink-0 ">
        <img
          src={`${
            !selectedShow?.show?.image?.medium
              ? "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
              : selectedShow?.show?.image?.medium
          }`}
          alt={selectedShow.show.name}
          className="rounded-md w-[280px] h-[320px] max-[768px]:w-96 relative lg:top-10"
        />
      </div>
      <div className="ml-4">
        <h1 className="text-3xl font-bold mb-4">{selectedShow.show.name}</h1>
        <div className="mb-4">
          <div className="flex justify-between  mb-3">
            <span className="text-md  font-semibold">
              Genre: {selectedShow.show?.genres[0]},
              {selectedShow.show?.genres[1]}
            </span>
            <h2 className="text-xl font-bold"></h2>
          </div>
          <div className="flex justify-between  mb-3">
            <span className="text-md  font-semibold">
              Language: {selectedShow.show?.language}
            </span>
            <h2 className="text-xl font-bold"></h2>
          </div>
          <div className="flex justify-between  mb-3">
            <span className="text-md  font-semibold">
              Rating:{" "}
              {!selectedShow.show?.rating.average
                ? "NA"
                : selectedShow.show?.rating.average}
              /10
            </span>
            <h2 className="text-xl font-bold"></h2>
          </div>
          <div className="flex justify-between  mb-3">
            <span className="text-md  font-semibold">
              Type: {selectedShow.show?.type}
            </span>
            <h2 className="text-xl font-bold"></h2>
          </div>
          <div className="flex justify-between  mb-3">
            <span className="text-md  font-semibold">
              Average Runtime: {selectedShow.show?.averageRuntime} min
            </span>
            <h2 className="text-xl font-bold"></h2>
          </div>
          <span className="text-xl  font-bold ">Summary </span>
          <div
            dangerouslySetInnerHTML={{ __html: selectedShow.show.summary }}
            className="text-left lg:mb-8 mt-2"
          ></div>
        </div>
        <button
          onClick={handleBookTicket}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600  transition duration-300 focus:outline-none focus:bg-white focus:bg-opacity-25"
        >
          Book Movie Ticket
        </button>
        <Modal showModal={showModal} onClose={handleCloseModal}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Book Movie Ticket</h2>
            <BookTicketForm
              onClose={handleCloseModal}
              onSubmit={handleFormSubmit}
              defaultMovieName={selectedShow?.show.name}
              showDetails={selectedShow.show}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ShowSummary;
