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
      <IonContent>
      <IonCard id="visor">
        VISOR DA CALCULADORA
      </IonCard>
      <IonGrid>

        <IonRow>
          <IonCol >
            <IonButton expand='full' shape='round' color="primary">C</IonButton>
          </IonCol>
          <IonCol>
          <IonButton expand='full' shape='round' color="primary">(</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand='full' shape='round' color="primary">)</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand='full' shape='round' color="primary">+</IonButton>
          </IonCol>
        </IonRow>
        
        <IonRow>
          <IonCol>
            <IonButton expand='full' shape='round' color="warning">7</IonButton>
          </IonCol>

          <IonCol>
            <IonButton expand='full' shape='round' color="warning">8</IonButton>
          </IonCol>

          <IonCol>
            <IonButton expand='full' shape='round' color="warning">9</IonButton>
          </IonCol>

          <IonCol>
            <IonButton expand='full' shape='round' color="primary">-</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton expand='full' shape='round' color="warning">4</IonButton>
          </IonCol>

          <IonCol>
            <IonButton expand='full' shape='round' color="warning">5</IonButton>
          </IonCol>

          <IonCol>
            <IonButton expand='full' shape='round' color="warning">6</IonButton>
          </IonCol>

          <IonCol>
            <IonButton expand='full' shape='round' color="primary">x</IonButton>
          </IonCol>

    
        </IonRow>
        <IonRow>
        <IonCol>
            <IonButton expand='full' shape='round' color="warning">1</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand='full' shape='round' color="warning">2</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand='full' shape='round' color="warning">3</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand='full' shape='round' color="primary">/</IonButton>
          </IonCol> 
        </IonRow>
        <IonRow>
        <IonCol>
            <IonButton expand='full' shape='round' color="primary" id="del" class='botoes-redondos'>Del</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand='full' shape='round' color="warning">0</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand='full' shape='round' color="warning" class='botoes-redondos'>.</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand='full' shape='round' color="primary">=</IonButton>
          </IonCol> 
        </IonRow>
      </IonGrid>        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
