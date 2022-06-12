import "firebase/compat/storage"
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'

import { ref, onUnmounted } from 'vue'


// Import the functions you need from the SDKs you need

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const config = {
      apiKey: "nouseforaname",
      authDomain: "fazweb-fsdd34aae.firebaseapp.com",
      projectId: "fazweb-fdasde",
      storageBucket: "fazweb-fad34e.appspot.com",
      messagingSenderId: "75311160211912",
      appId: "1:75326967asd1192:web:20df07211a7705c0dsae59b8a6d",
      measurementId: "G-WV782352ZQVLRQ"
    };

    // Initialize Firebase
    const firebaseApp = firebase.initializeApp(config);

    const db = firebaseApp.firestore()
    

    const portfoliosCollection = db.collection('portfolios').orderBy('id')
    

    export const createPortfolio = portfolio => {
      return portfoliosCollection.add(portfolio)
    }

      export const getPortfolio = async id => {
        const portfolio = await portfoliosCollection.doc(id).get()
      return portfolio.exists ? portfolio.data() : null
    }
     export const updatePortfolio = portfolio => {
      return portfoliosCollection.doc(id).update(portfolio)
    }
     export const deletePortfolio = portfolio => {
      return portfoliosCollection.doc(id).delete()
    }
     export const useLoadPortfolios = () => {
      const portfolios = ref([])
      const close = portfoliosCollection.onSnapshot(snapshot => {
        portfolios.value = snapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }))
      })
      onUnmounted(close)
      return portfolios
    }
