import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  const [calculo, setCalculo] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard id="visor">
            <span id="visor-content">
              {calculo}
            </span>
      </IonCard>
      <IonGrid fixed={true}>

        <IonRow>
          <IonCol >
            <IonButton onClick={()=>{setCalculo("");}}   color="primary">C</IonButton>
          </IonCol>
          <IonCol>
          <IonButton onClick={()=>{setCalculo(calculo + "(");}}   color="primary">(</IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + ")");}}   color="primary">)</IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "+");}}  color="primary">+</IonButton>
          </IonCol>
        </IonRow>
        
        <IonRow>
          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "7");}}   color="dark">7</IonButton>
          </IonCol>

          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "8");}}   color="dark">8</IonButton>
          </IonCol>

          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "9");}}   color="dark">9</IonButton>
          </IonCol>

          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "-");}}   color="primary">-</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "4");}}   color="dark">4</IonButton>
          </IonCol>

          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "5");}}   color="dark">5</IonButton>
          </IonCol>

          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "6");}}   color="dark">6</IonButton>
          </IonCol>

          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "*");}}   color="primary">x</IonButton>
          </IonCol>

    
        </IonRow>
        <IonRow>
        <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "1");}}  color="dark">1</IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "2");}}   color="dark">2</IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "3");}}   color="dark">3</IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "/");}}   color="primary">/</IonButton>
          </IonCol> 
        </IonRow>
        <IonRow>
        <IonCol>
            <IonButton onClick={
              ()=>{ 
                var valor = calculo;
                valor = valor.substring(0,valor.length-1);               
                setCalculo(valor);
              }
              
              }   color="primary" class='botoes-redondos'>D</IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + "0");}}   color="dark">0</IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={()=>{setCalculo(calculo + ".");}}   color="dark" class='botoes-redondos'>.</IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={
              ()=>{
                
                try{

                  var result = eval(calculo);
                  setCalculo(result);

                }catch(erro){

                  setCalculo("Erro: " + erro);

                }
              }
            }  color="primary"> =</IonButton>
          </IonCol> 
        </IonRow>
      </IonGrid>        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
