// import { isPlatform } from "@ionic/react";

export const domain = import.meta.env.VITE_AUTH0_DOMAIN || 'royerm.eu.auth0.com';
export const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || 'bVa2PDrmp8zmJ9tumzIrDa1lmgQ9IkxX';

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager

// const appId = "io.ionic.starter";
// const auth0Domain = domain;
// const iosOrAndroid = isPlatform('ios') || isPlatform('android');

// export const callbackUri = iosOrAndroid
//  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
//  : 'https://unicorn.royerm.fr/';

export const callbackUri = import.meta.env.VITE_AUTH0_CALLBACK_URI || 'https://unicorn.royerm.fr/';
