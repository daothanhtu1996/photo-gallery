import {
  IonActionSheet,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonicSwiper,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { camera, trash, close } from "ionicons/icons";
import { usePhotoGallery, UserPhoto } from "../hooks/usePhotoGallery";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Tab2.css";
import { useState } from "react";
import "swiper/swiper-bundle.min.css";
import "@ionic/react/css/ionic-swiper.css";

SwiperCore.use([IonicSwiper, Navigation, Pagination]);

const Tab2: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>

            <Swiper
              pagination={{
                clickable: true,
              }}
              navigation loop={true}
            >
              {/* {photos.map((photo, index) => (
        <IonCol size="12" key={index}>
          <IonImg onClick={() => setPhotoToDelete(photo)}
        src={photo.webviewPath} />
        </IonCol>
      ))} */}
            <IonRow className="ion-align-items-center">
              <SwiperSlide>
                {photos.map((photo, index) => (
                  <IonCol size="9" key={index}>
                    <IonImg
                      onClick={() => setPhotoToDelete(photo)}
                      src={photo.webviewPath}
                    />
                  </IonCol>
                ))}
              </SwiperSlide>
              </IonRow>
              <IonRow>
              <SwiperSlide>Slide 2</SwiperSlide>
              </IonRow>
            </Swiper>
        </IonGrid>
        <IonFab vertical="top" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: "Delete",
              role: "destructive",
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: "Cancel",
              icon: close,
              role: "cancel",
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
