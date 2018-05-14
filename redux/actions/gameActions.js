export const createGame = (game) => ({
  type: 'create_game',
  payload: game
})


export const joinGame = (message, game) => ({
  type: 'join_game',
  socket: {
    message,
    payload: game
  }
})

export const startGame = (message, game) => ({
  type: 'start_game',
  socket: {
    message,
    payload: game
  }
})

export const leaveGame = (message, game) => ({
  type: 'leave_game',
  socket: {
    message,
    payload: game
  }
})

export const suggestChancellor = (message, player) => ({
  type: 'suggest_chancellor',
  socket: {
    message,
    payload: player
  }
})

export const voteOnChancellor = (message, vote) => ({
  type: 'vote_on_chancellor',
  socket: {
      message,
      payload: vote
    }
})

export const pickPolicies = (message, policies) => ({
  type: 'pick_policies',
  socket: {
    message,
    payload: policies
  }
})

export const executePlayer = (message, player) => ({
  type: 'execute_player',
  socket: {
    message,
    payload: player
  }
})

export const vetoPolicy = (message, veto) => ({
  type: 'veto_policy',
  socket: {
    message,
    payload: veto
  }
})

<<<<<<< HEAD
=======
export const agreeToVetoPolicy = (message, veto) => ({
  type: 'veto_policy',
  socket: {
    message,
    payload: veto
  }
})
>>>>>>> chore: remove comments and logs
