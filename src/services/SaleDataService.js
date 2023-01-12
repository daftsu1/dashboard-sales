import firebase from "../firebase";

const db = firebase.ref("store").limitToLast(400);

class SaleDataService {
    getAll() {
        return db;
    }
    
    create(sale) {
        return db.push(sale);
    }
    
    update(key, value) {
        return db.child(key).update(value);
    }
    
    delete(key) {
        return db.child(key).remove();
    }
    
    deleteAll() {
        return db.remove();
    }
}

export default new SaleDataService();