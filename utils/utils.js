export const pagination = (query, page = 1, perPage = 10) => {
  const skip = (page - 1) * perPage;
  return query.skip(skip).limit(perPage);
};
