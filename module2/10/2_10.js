function start_election() {
  const number_of_candidates = parseInt(
      prompt('Enter the number of candidates: '));
  const candidates = [];
  while (candidates.length < number_of_candidates) {
    const name = prompt(
        `Enter the name for candidate ${candidates.length + 1}:`);
    candidates.push({name: name, votes: 0});
  }
  const voters = parseInt(prompt('Enter the number of voters: '));

  for (i = 1; i <= voters; i++) {
    let vote = prompt(' Who will you vote for? Enter the name:');
    if (vote.length > 0) {
      while (true) {
        if (to_vote(vote, candidates)) break;
        vote = prompt('The candidate does not exist. Enter the name again:');
      }
    }
  }
  print_result(candidates);
}

function to_vote(name, candidates) {
  for (let candidate of candidates) {
    if (candidate.name === name) {
      candidate.votes++;
      return true;
    }
  }
  return false;
}

function print_result(candidates) {
  candidates.sort((a, b) => {
        return b.votes - a.votes;
      },
  );
  let winners = candidates[0].name
  console.log(
      `The winner is ${winners} with ${candidates[0].votes} votes.`);
  for (let candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
  }
}

start_election();