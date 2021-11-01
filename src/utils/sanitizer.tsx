const Sanitizer = {
  sanitizeAbv(str: string): number {
    let result: string = str.replace("%", "");
    result.replace(">", "");
    let resultNum = Number(result);
    return resultNum;
  },

  sanitizeBeerType(str: string | null) {
    if (str === null) {
      return str;
    }

    let result = str.toLowerCase();
    result = result.replace(" ", "");
    return result;
  },
  removeDuplicates(data: string[]) {
    return data.filter(
      (value: string, index: number) => data.indexOf(value) === index
    );
  }
};

export default Sanitizer;
