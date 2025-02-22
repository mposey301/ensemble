
class DataController {

    static checkData(firebase, user, path) {  
        const dataRef = firebase.database().ref(`users/${user.uid}/${path}`);
        dataRef.on('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (data == null) {
                return false;
            } else {
                return true;
            }
        }); 
    }

    static pushData(firebase, user, value, path) {
        firebase.database().ref(`users/${user.uid}/${path}`).push({
            track: value,
        })
    }

    static getData(firebase, user, path, callback) {
        let arr = [];
        const dataRef = firebase.database().ref(`users/${user.uid}/${path}`);
        dataRef.on('value', (snapshot) => {
            const data = snapshot.val();
            for (const key in data) {
                arr.push(data[key].track);
            }
        });  
        return arr; 
    }

}

export { DataController }