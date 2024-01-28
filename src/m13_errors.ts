try {
  throw "";
  throw {};
  throw 123;
  throw null;
} catch (error: unknown) {
  getErrorMassage(error);
}

function getErrorMassage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
  // logic
}

window.playVideo();
