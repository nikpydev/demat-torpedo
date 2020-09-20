import { db } from "../firebase/firebase.utils";

export const loadData = ({ commit }) => {
  var docRef = db.collection("user").doc("data");

  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        const { stockPortfolio, funds, stocks } = doc.data();

        const portfolio = {
          stockPortfolio,
          funds,
        };

        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};
