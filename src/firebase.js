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
      apiKey: "AIzaSyCuVNZo9j6IK_azbbaGrHxWCq1SQIUOVKQ",
      authDomain: "fazweb-fd34e.firebaseapp.com",
      projectId: "fazweb-fd34e",
      storageBucket: "fazweb-fd34e.appspot.com",
      messagingSenderId: "753269671192",
      appId: "1:753269671192:web:20df071a7705c0e59b8a6d",
      measurementId: "G-WV78ZQVTRQ"
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
