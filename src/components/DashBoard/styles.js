const styles = (theme) => ({
  warapper : {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh'
  },
  warapperContent : {
    width: '100%',
    padding: 10,
    transition: theme.transitions.create('margin',
    {
      easing:theme.transitions.easing.easeIn,
      duration : theme.transitions.duration.leavingScreen,
    })
  },
  shiftLeft:{
    marginLeft: -240,transition: theme.transitions.create('margin',
    {
      easing:theme.transitions.easing.easeOut,
      duration : theme.transitions.duration.leavingScreen,
    })
  }
});
export default styles;
