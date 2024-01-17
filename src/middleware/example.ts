export default (req: any, res: any, next: () => void) => {
  console.log("A request was made");
  next();
};
