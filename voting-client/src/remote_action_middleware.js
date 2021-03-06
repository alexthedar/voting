export default ssocket => tore => next => action => {
  if(action.meta && action.meta.remote){
    socket.emit('action', action)
  }
  return next(action)
}
