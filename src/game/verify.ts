const verify = (board: string[], result?: string[]): boolean => {
  if (!result) {
    return false;
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== board[i]) {
      return false;
    }
  }

  return true;
};

export default verify;
