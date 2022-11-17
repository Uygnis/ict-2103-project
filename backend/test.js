
// //display all documents
// app.get("/records", (req, res) => {
//   let records = [];
//   db.collection("amazonData")
//     .find()
//     .forEach((event) => records.push(event))
//     .then(() => {
//       res.status(200).json(records);
//     })
//     .catch(() => {
//       res.status(500).json({ error: "Could not fetch data" });
//     });
// });

// //get a single document
// app.get("/records/:id", (req, res) => {
//   if (ObjectId.isValid(req.params.id)) {
//     db.collection("amazonData")
//       .findOne({ _id: ObjectId(req.params.id) })
//       .then((doc) => {
//         res.status(200).json(doc);
//       })
//       .catch(() => {
//         res.status(500).json({ error: "Could not fetch data" });
//       });
//   } else {
//     res.status(500).json({ error: "Not a valid doc id" });
//   }
// });

// //add a document
// app.post("/records", (req, res) => {
//   const record = req.body;
//   db.collection("amazonData")
//     .insertOne(record)
//     .then((result) => {
//       res.status(201).json(result);
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "Could not create new doc" });
//       alert(res.status(500));
//     });
// });

// //delete a document
// app.delete("/records/:id", (req, res) => {
//   if (ObjectId.isValid(req.params.id)) {
//     db.collection("amazonData")
//       .deleteOne({ _id: ObjectId(req.params.id) })
//       .then((doc) => {
//         res.status(200).json(doc);
//       })
//       .catch(() => {
//         res.status(500).json({ error: "Could not delete data" });
//       });
//   } else {
//     res.status(500).json({ error: "Not a valid doc id" });
//   }
// });

// //update document
// app.patch("/records/:id", (req, res) => {
//   const updates = req.body; //new fields to add into existing field
//   if (ObjectId.isValid(req.params.id)) {
//     db.collection("amazonData")
//       .updateOne({ _id: ObjectId(req.params.id) }, { $set: updates })
//       .then((doc) => {
//         res.status(200).json(doc);
//       })
//       .catch(() => {
//         res.status(500).json({ error: "Could not update data" });
//       });
//   } else {
//     res.status(500).json({ error: "Not a valid doc id" });
//   }
// });