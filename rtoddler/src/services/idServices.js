const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}


export const loadId = async id => {
  return await onException(() => id);
}


export const filterListsId = async (boardId, data) => {
  return await onException(() => data.filter(element => element.boardId === boardId));
}


export const filterTasksId = async (boardId, data) => {
  return await onException(() => data.filter(element => element.listId === boardId));
}
