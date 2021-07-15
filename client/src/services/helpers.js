export const handleError = (error, type = 'negative', position = "top") => {
  console.error('onRejected function called: ' + error.message);
  Notify.create({ message: error.message, type, position })
}
