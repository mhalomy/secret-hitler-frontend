const game =  {
  gameOver: false,
  id: undefined,
  gameState: {
    electionFailCount: 0,
    numberOfFascistPolicies: 0,
    numberOfFascists: 0,
    numberOfLiberalPolicies: 0,
    numberOfLiberals: 0,
    turnCount: 0,
    vetoPowerUnlocked: false,
    suggestedChancellor: undefined,
  },
  playerList: [
    {
      id: undefined,
      chancellor: false,
      executed: false,
      hitler: false,
      president: false,
      user: {
        avatar: undefined,
        id: undefined,
        name: undefined,
      }
    },
  ],
}

export const game = (state = initialAppState.game, action) => {
 // if (action.type === 'new_game_state' && action.game) return action.game;
  switch (action.type) {
    case 'create_game':
      return {
        ...state,
        game: action.payload,
      }

      case 'join_game':
      return {
        ...state,
        game: {
          ...state.game,
          playerList: [
            ...state.game.playerList,
            {
              // chancellor: false,
              // executed: false,
              // hitler: false,
              // president: false,
              user: {
                avatar: action.user.avatar,
                id: action.user.id,
                name: action.user.name,
              }
            }
          ]
        }
      }

      case 'start_game':
      return {
        ...state,
        game: action.payload.game
      }

      case 'leave_game':
      return {
        state: initialAppState.game,
      }

      case 'suggest_chancellor':
      return {
        ...state,
        game: {
          ...state.game,
          gameState: {
            ...state.game.gameState,
            suggestedChancellor: action.payload,
          }
        }
      }

      case 'vote_on_chancellor':
      return {
        ...state,
        game: {
          ...state.game,
          playerList: state.game.playerList.map (el => {
            if (el.id === action.payload.id) {
              return Object.assign({}, playerList, {chancellor: true})
            } else {
              return Object.assign({}, playerList, {chancellor: false})
            }
          })
        }
      }

      case 'pick_policies':
      return {
        ...state,
        game: {
          ...state.game,
          gameState : {
            ...state.game.gameState,
            numberOfFascistPolicies: action.payload.numberOfFascistPolicies,
            numberOfLiberalPolicies: action.payload.numberOfLiberalPolicies
          }
        }
      }

      case 'execute_player':
      return {
        ...state,
        game: {
          ...state.game,
          playerList: state.game.playerList.map (el => {
            if (el.id === action.payload.id) {
              return Object.assign({}, playerList, {executed: true})
            } else {
              return Object.assign({}, playerList, {executed: false})
            }
          })
        }
      }

      case 'veto_policy':
      return {
        ...state,
        game: {
          ...state.game,
          playerList: state.game.playerList.map (el => {
            if (el.id === action.payload.id) {
              return Object.assign({}, playerList, {vetoPowerUnlocked: true})
            } else {
              return Object.assign({}, playerList, {vetoPowerUnlocked: false})
            }
          })
        }
      }

  }
  return state;
};



