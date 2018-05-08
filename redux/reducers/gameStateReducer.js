import initialAppState from "./initialAppState";

const gameState = {
  electionFailCount: 0,
    numberOfFascistPolicies: 0,
    numberOfFascists: 0,
    numberOfLiberalPolicies: 0,
    numberOfLiberals: 0,
    turnCount: 0,
    vetoPowerUnlocked: false,
    suggestedChancellor: undefined,
    playerList: [
      {
        id: undefined,
        chancellor: false,
        executed: false,
        hitler: false,
        president: false,
      },
    ],
}

export const gameState = (State = initialAppState.gameState, action) => {
  switch (action.type) {
    case 'suggest_chancellor':
    return {
      ...state,
      gameState: {
        ...state.gameState,
        suggestedChancellor: action.payload,
      }
    }
    case 'vote_on_chancellor':
    return {
      ...state,
      gameState: {
        ...state.gameState,
      }
    }

    case 'pick_policies':
    return {
      ...state,
      gameState : {
        ...state.gameState,

      }
    }
  }
}