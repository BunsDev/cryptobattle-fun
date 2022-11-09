import { battle } from "../utils/api";
import PropTypes from "prop-types";
import Loading from "./Loading";
import withSearchParams from "./withSearchParams";
import { Link } from "react-router-dom";
import React from "react";

const Card = ({ instance }) => {
  const {
    address,
    avatar_url,
    transactions,
    exchanges,
    collectibles,
    donations,
    social,
    governance,
  } = instance;
  return (
    <div className="border border-1 rounded-2xl bg-blue-100 text-base p-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2 w-52">
          <div className="text-lg font-semibold truncate">{address}</div>
          <div className="font-semibold">Notes</div>
        </div>
        <img
          className="rounded h-14 w-14"
          width={56}
          height={56}
          src={avatar_url}
          alt={`Avatar for ${address}`}
        />
      </div>
      <div className="w-full border-t border-gray-300"></div>
      <ul>
        <li className="flex items-center justify-between">
          <span>Transactions:</span> <span>{transactions || "n/a"}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Exchanges:</span> <span>{exchanges || "n/a"}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Collectibles:</span> <span>{collectibles || "n/a"}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Donations:</span> <span>{donations || "n/a"}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Social:</span> <span>{social || "n/a"}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Governance:</span> <span>{governance || "n/a"}</span>
        </li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  instance: PropTypes.shape({
    address: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    transactions: PropTypes.number.isRequired,
    exchanges: PropTypes.number.isRequired,
    collectibles: PropTypes.number.isRequired,
    donations: PropTypes.number.isRequired,
    social: PropTypes.number.isRequired,
    governance: PropTypes.number.isRequired,
  }).isRequired,
};

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true,
  };
  componentDidMount() {
    const sp = this.props.router.searchParams;
    const playerOne = sp.get("playerOne");
    const playerTwo = sp.get("playerTwo");

    battle([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false,
        });
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false,
        });
      });
  }
  render() {
    const { winner, loser, error, loading } = this.state;
    if (loading === true) {
      return <Loading text="Battling" />;
    }

    if (error) {
      return <p className="text-center">{error}</p>;
    }
    return (
      <div className="bg-white font-montserrat">
        <main className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="font-montserrat text-2xl font-semibold mb-4">
              Results
            </div>
            <Link
              className="items-center justify-center rounded-md border border-1 bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 md:text-base mb-4"
              to="/battle"
            >
              Reset
            </Link>
          </div>
          <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Card instance={winner.instance} />
              <p className="flex text-center justify-center items-start gap-4">
                <span>
                  {winner.score === loser.score ? "Tie" : "Winner"}{" "}
                  {winner.score.toLocaleString()}
                </span>
                {winner.score !== loser.score && (
                  <img
                    width={80}
                    src="https://ivanmolto.mypinata.cloud/ipfs/QmdYjCbSoB2t1VtWqds6t47kJ8MLt5jBgXA73y5YHZq9Cg"
                    alt="Trophee"
                    className="-mt-10"
                  />
                )}
              </p>
            </div>
            <div>
              <Card instance={loser.instance} />
              <p className="flex text-center justify-center items-start gap-4">
                <span>
                  {winner.score === loser.score ? "Tie" : "Loser"}{" "}
                  {loser.score.toLocaleString()}
                </span>
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default withSearchParams(Results);
