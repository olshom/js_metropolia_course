function create_participants() {
  const number_of_partipants = parseInt(prompt('Enter the number of participants: '));
  const participants = [];
  while(participants.length<number_of_partipants) {
    const name = prompt('Add a participant:');
    participants.push(name);
  }
  return participants.sort()
}

let list = ''
for (let participant of create_participants()) {
  list += `<li>${participant}</li>`
}
document.querySelector('#participants').innerHTML = (`${list}`)
