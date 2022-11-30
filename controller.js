const DISCOUNT_CODE = "DK64";

const db = new Set();

const numRegex = /^\d{10}$/;

const numIsValid = (num) => numRegex.test(num);

const numExists = (num) => {
  const getNum = db.has(num);

  return getNum;
};

const getController = (_req, res) => {
  res.send("Heere at the wall");
};

const postController = (req, res) => {
  const num = req.body.number;

  if (!num) {
    return res.status(400).send("Number not received.");
  }

  const isValid = numIsValid(num);

  if (!isValid) {
    return res.status(400).send("Invalid number.");
  }

  const alreadyExists = numExists(num);

  if (alreadyExists) {
    return res.status(409).send("Number already registered.");
  }

  return res.status(200).send({ code: DISCOUNT_CODE });
};

module.exports = {
  getController,
  postController,
};
