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
  },
  playerList: [
    {
      chancellor: false,
      executed: false,
      hitler: false,
      president: false,
      user: {
        avatar: undefined,
        id: undefined,
        name: undefined,
      },
    },
  ],
}

