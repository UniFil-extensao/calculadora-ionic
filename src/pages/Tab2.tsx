import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { Storage } from "@ionic/storage";
import { createElement } from 'react';




const Tab2: React.FC<{banco: Storage}> = ({ banco }) => {

  /*  async function Lista(){
    let lista = "";
     await banco.forEach((key, value, index) => {
      //lista = lista + 
      lista += key + "\n";
      console.log(lista);
    });
    return <p>{lista}</p>;
  } */

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
        <IonHeader collapse="condense">
          
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
