function calculateScore(
  transactions,
  exchanges,
  collectibles,
  donations,
  social,
  governance
) {
  return (
    transactions + exchanges + collectibles + donations + social + governance
  );
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

function getAddress(address) {
  return address;
}

function getAvatar(address) {
  var avatar_url = `https://cdn.stamp.fyi/avatar/${address}?s=256`;
  return avatar_url;
}

function getTransactions(address) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://pregod.rss3.dev/v1/notes/${address}?limit=500&tag=transaction&include_poap=false&count_only=true&query_status=false`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var transactions = response.total;
      return transactions;
    })
    .catch((err) => console.error(err));
}

function getExchanges(address) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://pregod.rss3.dev/v1/notes/${address}?limit=500&tag=exchange&include_poap=false&count_only=true&query_status=false`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var exchanges = response.total;
      return exchanges;
    })
    .catch((err) => console.error(err));
}

function getCollectibles(address) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://pregod.rss3.dev/v1/notes/${address}?limit=500&tag=collectible&include_poap=false&count_only=true&query_status=false`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var collectibles = response.total;
      return collectibles;
    })
    .catch((err) => console.error(err));
}

function getDonations(address) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://pregod.rss3.dev/v1/notes/${address}?limit=500&tag=donation&include_poap=false&count_only=true&query_status=false`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var donation = response.total;
      return donation;
    })
    .catch((err) => console.error(err));
}

function getSocial(address) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://pregod.rss3.dev/v1/notes/${address}?limit=500&tag=social&include_poap=false&count_only=true&query_status=false`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var social = response.total;
      return social;
    })
    .catch((err) => console.error(err));
}

function getGovernance(address) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://pregod.rss3.dev/v1/notes/${address}?limit=500&tag=governance&include_poap=false&count_only=true&query_status=false`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var governance = response.total;
      return governance;
    })
    .catch((err) => console.error(err));
}

function getUserData(player) {
  return Promise.all([
    getAddress(player),
    getAvatar(player),
    getTransactions(player),
    getExchanges(player),
    getCollectibles(player),
    getDonations(player),
    getSocial(player),
    getGovernance(player),
  ]).then(
    ([
      address,
      avatar_url,
      transactions,
      exchanges,
      collectibles,
      donations,
      social,
      governance,
    ]) => ({
      instance: {
        address,
        avatar_url,
        transactions,
        exchanges,
        collectibles,
        donations,
        social,
        governance,
      },
      score: calculateScore(
        transactions,
        exchanges,
        collectibles,
        donations,
        social,
        governance
      ),
    })
  );
}

export function battle(players) {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
    sortPlayers
  );
}
