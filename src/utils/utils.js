export function removeItemArrayByID(array, itemToBeRemovedID) {
  array.splice(
    array.findIndex(function (i) {
      return i.id === itemToBeRemovedID;
    }),
    1
  );
}
