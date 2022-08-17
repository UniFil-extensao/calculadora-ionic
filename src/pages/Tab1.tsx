import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      
      <IonGrid>
    
        <IonRow>
          <IonCol >
            <IonButton  color="danger">1</IonButton>
          </IonCol>
          <IonCol>
          <IonButton color="danger">2</IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="danger">3</IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="warning">/</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton color="danger">4</IonButton>
          </IonCol>

          <IonCol>
            <IonButton color="danger">5</IonButton>
          </IonCol>

          <IonCol>
            <IonButton color="danger">6</IonButton>
          </IonCol>

          <IonCol>
            <IonButton color="warning">x</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton color="danger">7</IonButton>
          </IonCol>

          <IonCol>
            <IonButton color="danger">8</IonButton>
          </IonCol>

          <IonCol>
            <IonButton color="danger">9</IonButton>
          </IonCol>

          <IonCol>
            <IonButton color="warning">-</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol>
            <IonButton color="warning">C</IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="danger">0</IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="warning">+</IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="warning">=</IonButton>
          </IonCol> 
        </IonRow>
      </IonGrid>        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
