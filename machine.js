const videoMachine = new Machine({
  id: 'videoMachine',
  initial: '',
  context: {
    video: null,
    duration: 0,
    elapsed: 0
  },
  states: {
    loading: {
      on: {
        LOADED: 'ready',
        FAIL: 'failure',
      }
    },
    ready: {
      initial: "paused",
      states: {
        paused: {
          on: {
            PLAY: 'playing',
          }
        },
        playing: {
          on: {
            PAUSE: 'paused',
            END: 'ended',
            TIMING: 'playing'
          }
        },
        ended: {
          on: {
            PLAY: 'play'
          }
        },
      }
    },
    failure: {type: 'final'},
  }
})