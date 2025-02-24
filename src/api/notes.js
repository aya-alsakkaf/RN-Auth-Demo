import instance from ".";

const getAllNotes = async () => {
  //   const res = await instance.get("/notes");
  //   return res.data;
  const { data } = await instance.get("/notes");
  return data;
};

const getNote = async (id) => {
  const res = await instance.get(`/notes/${id}`);
  return res.data;
};

const createNote = async (noteInfo) => {
  const { data } = await instance.post("/notes", noteInfo);
  return data;
};

export { getAllNotes, getNote, createNote };
