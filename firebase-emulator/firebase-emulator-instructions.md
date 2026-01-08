check if FB is installed: firebase --version
Install Firebase CLI (inside the container): npm install -g firebase-tools

npx firebase emulators:stop
npx firebase emulators:start

Nb. Go to Ports to open emulator link in Codespaces

use flashpost extension as a end-point api test client

get valid tokenid: http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=fake-key
body: {
    "token": "",
    "returnSecureToken": true
}
