import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
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
      <IonContent fullscreen>
      <IonCard id="visor">
        VISOR DA CALCULADORA
      </IonCard>
      <IonGrid fixed={true}>

        <IonRow>
          <IonCol >
            <IonButton  color="primary">C</IonButton>
          </IonCol>
          <IonCol>
          <IonButton  color="primary">(</IonButton>
          </IonCol>
          <IonCol>
            <IonButton  color="primary">)</IonButton>
          </IonCol>
          <IonCol>
            <IonButton  color="primary">+</IonButton>
          </IonCol>
        </IonRow>
        
        <IonRow>
          <IonCol>
            <IonButton  color="dark">7</IonButton>
          </IonCol>

          <IonCol>
            <IonButton  color="dark">8</IonButton>
          </IonCol>

          <IonCol>
            <IonButton  color="dark">9</IonButton>
          </IonCol>

          <IonCol>
            <IonButton  color="primary">-</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton  color="dark">4</IonButton>
          </IonCol>

          <IonCol>
            <IonButton  color="dark">5</IonButton>
          </IonCol>

          <IonCol>
            <IonButton  color="dark">6</IonButton>
          </IonCol>

          <IonCol>
            <IonButton  color="primary">x</IonButton>
          </IonCol>

    
        </IonRow>
        <IonRow>
        <IonCol>
            <IonButton  color="dark">1</IonButton>
          </IonCol>
          <IonCol>
            <IonButton  color="dark">2</IonButton>
          </IonCol>
          <IonCol>
            <IonButton  color="dark">3</IonButton>
          </IonCol>
          <IonCol>
            <IonButton  color="primary">/</IonButton>
          </IonCol> 
        </IonRow>
        <IonRow>
        <IonCol>
            <IonButton  color="primary" class='botoes-redondos'>D</IonButton>
          </IonCol>
          <IonCol>
            <IonButton  color="dark">0</IonButton>
          </IonCol>
          <IonCol>
            <IonButton  color="dark" class='botoes-redondos'>.</IonButton>
          </IonCol>
          <IonCol>
            <IonButton  color="primary">=</IonButton>
          </IonCol> 
        </IonRow>
      </IonGrid>        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
