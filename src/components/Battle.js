import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import "../index.css";

const Instructions = () => {
  return (
    <section className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="border border-1 border-blue-100 bg-white px-4 pr-4 pl-4 pt-2 pb-2 sm:px-6 rounded-lg">
        <div className="font-medium text-lg">Instructions</div>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Enter an address or ENS for each player and submit</li>
          <li>Battle</li>
          <li>Check the winner</li>
        </ol>
      </div>
    </section>
  );
};

class PlayerInput extends React.Component {
  state = { address: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.address);
  };

  handleChange = (event) => {
    this.setState({ address: event.target.value });
  };

  render() {
    return (
      <form
        className="border border-1 rounded-2xl bg-blue-100 text-base p-8"
        onSubmit={this.handleSubmit}
      >
        <label
          htmlFor="address"
          className="block text-base font-medium text-gray-700"
        >
          {this.props.label}
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <div className="h-10 relative flex flex-grow items-stretch focus-within:z-10">
            <input
              className="block w-full rounded-none rounded-l-md text-gray-400 border-gray-300 pl-10 sm:text-sm"
              type="text"
              name="address"
              id="address"
              placeholder="address or ENS"
              autoComplete="off"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              disabled={!this.state.address}
              className="relative -ml-px inline-flex items-center space-x-2 rounded-none rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            >
              <ArrowLongRightIcon
                className="h-5 w-5 text-gray-700"
                aria-hidden="true"
              />
              <span>Submit</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

function PlayerPreview({ address, onReset, label }) {
  return (
    <article className="border border-1 rounded-2xl bg-blue-100 text-base p-8">
      <label htmlFor="address" className="text-base font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            width={32}
            height={32}
            className="rounded-full inline-block"
            src={`https://cdn.stamp.fyi/avatar/${address}?s=100`}
            alt={`Avatar for ${address}`}
          />
          <a
            href={`https://etherscan.io/address/${address}`}
            className="text-blue-600 hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            {address}
          </a>
        </div>
        <button
          onClick={onReset}
          className="border border-1 bg-gray-50 border-gray-300 hover:bg-gray-100 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          <XMarkIcon className="h-5 w-5 text-gray-700" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

PlayerPreview.propTypes = {
  address: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default class Battle extends React.Component {
  state = { playerOne: null, playerTwo: null };

  handleSubmit = (id, player) => {
    this.setState({ [id]: player });
  };

  handleReset = (id) => {
    this.setState({ [id]: null });
  };
  render() {
    const { playerOne, playerTwo } = this.state;
    const disabled = !playerOne || !playerTwo;

    return (
      <div className="bg-white font-montserrat">
        <main className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <div className="font-montserrat text-2xl font-semibold mb-4">
            Battle Arena
          </div>
          <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4">
            {playerOne === null ? (
              <PlayerInput
                label="Player One"
                onSubmit={(player) => this.handleSubmit("playerOne", player)}
              />
            ) : (
              <PlayerPreview
                label="Player One"
                address={playerOne}
                onReset={() => this.handleReset("playerOne")}
              />
            )}
            {playerTwo === null ? (
              <PlayerInput
                label="Player Two"
                onSubmit={(player) => this.handleSubmit("playerTwo", player)}
              />
            ) : (
              <PlayerPreview
                label="Player Two"
                address={playerTwo}
                onReset={() => this.handleReset("playerTwo")}
              />
            )}
          </section>
          <div className="flex justify-center mt-10 -mb-2">
            <div className="rounded-md drop-shadow-md">
              <Link
                to={{
                  pathname: "/results",
                  search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
                }}
                className={`items-center justify-center rounded-md border border-1 bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg ${
                  disabled ? "disabled" : ""
                }`}
              >
                Battle now!
              </Link>
            </div>
          </div>
        </main>
        <Instructions />
      </div>
    );
  }
}
