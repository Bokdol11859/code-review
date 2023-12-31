export default function replaceStrWithBlank([input, target]: [
  string,
  string | string[]
]) {
  if (target instanceof Array) {
    const result = target.map((eachTarget) => {
      return input.replaceAll(eachTarget, '');
    });
    return result[0].trim();
  }

  return target.replaceAll(input, '');
}
