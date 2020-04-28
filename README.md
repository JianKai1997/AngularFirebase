# AngularFirebase
 -
1. environment.ts - input the firebase config info.
	(the whole config info can get in firebase project)
	
2. app.module.ts - import firebase module with first step environment 
	2.1 AngularFireModule.initializeApp(environment.firebaseConfig)
    2.2 AngularFirestoreModule
	
3. how to CRUD from firebase look at 'employee.component.ts' and 'employee-list.component.ts'
