import { useAuth0 } from "@auth0/auth0-react";
import { IonButton } from "@ionic/react";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const doLogout = async () => {    
    logout();
  };

  return <IonButton onClick={doLogout}>Log out</IonButton>;
};

export default LogoutButton;